import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SideNav from "../../components/SideNavAdmin";
import checkToken from "../../utils/checkToken";
import {
    ADMIN,
    END_USER,
    LOGIN_PAGE,
    SUPER_ADMIN,
    ADMIN_DASHBOARD,
    AdminSideNavMap,
} from "../../utils/constants";
import Head from "next/head";

const AdminDashboad = () => {
    const { role, isLoading, loggedIn , username} = useSelector((state) => state.login);

    const { asPath } = useRouter();
    useEffect(() => {
        if (loggedIn && (role === ADMIN || role === SUPER_ADMIN)){

        }
        else if (loggedIn && role === END_USER) Router.push(`/${username}`);
        else {
            checkToken().then((status) => {
                if (status.verified) {
                    if (status.role === ADMIN || status.role === SUPER_ADMIN) {
                        // FETCH data here

                    } else Router.push(`/${username}`);
                } else Router.push(LOGIN_PAGE + "?next=admin/dashboard");
            });
        }
    }, []);

    return (
        <>
            <Head><title>DCC : Admin Dashboard</title></Head>
            <SideNav role={role} highlight={AdminSideNavMap["dashboard"]} />
            <div className="data-area">Admin Dashboard</div>
        </>
    );
};

export default AdminDashboad;
