import Link from "next/link";
import Image from "next/image";
import {
    SUPER_ADMIN,
    ADMIN,
    SETTINGS_PAGE,
    HOME_PAGE,
    ADMIN_DASHBOARD,
    ASSIGN_REVOKE_ROLES_PAGE,
    VIEW_PROBLEMS_CREATED_PAGE,
    CREATE_PROBLEM_PAGE,
    VIEW_CONTESTS_CREATED_PAGE,
    CREATE_CONTEST_PAGE,
    LAUNCH_CONTEST_PAGE,
    REPORT_VIOLATIONS,
    BAN_USERS,
    UPDATE_RATINGS_PAGE,
    VIEW_CONTEST_REGISTRATIONS,
    CONTEST_STATS_PAGE,
} from "../utils/constants";

import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import BackdropLoader from "./BackdropLoader";
import store from "../store/baseStore";
import { logoutUser } from "../store/loginStore";
import { useSelector } from "react-redux";

function UserMenu(props) {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={props.profile_pic} />
                </div>
            </label>
            <ul
                tabIndex={0}
                className="custom-navbar-avtar-pop menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <Link href={SETTINGS_PAGE}>Settings</Link>
                </li>
                <li>
                    <Link
                        href={HOME_PAGE}
                        onClick={() => {
                            store.dispatch(logoutUser());
                        }}
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default function SideNav(props) {

    const { profile_pic } = useSelector((state) => state.login);
    const { asPath } = useRouter();
    return (
        <>
            <BackdropLoader />
            <div className="navbar-top-side">
                <div className="navbar-logo-side">
                    <Link
                        href={HOME_PAGE}
                    >
                        <Image
                            src="/DCC_LOGO01.png"
                            alt="Picture of the author"
                            width={100}
                            height={0}
                        />
                    </Link>
                </div>
                <div className="custom-navbar-items">
                    <UserMenu asPath={asPath} profile_pic={profile_pic} />
                </div>
                <div
                    className="side-navbar-hamburger"
                    onClick={() => {
                        document
                            .querySelector(".side-navbar-items-offscreen")
                            .classList.toggle("active");
                        document
                            .querySelector(".custom-backdrop")
                            .classList.toggle("active");
                    }}
                >
                    <GiHamburgerMenu size={35} />
                </div>
            </div>
            <nav>
                <ul className="SideNav-container side-navbar-items-offscreen">
                    <li id="nav-li">
                        <div id="nav-heading">CORE</div>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={HOME_PAGE}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 1
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-house-door-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 1
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Go Home
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={ADMIN_DASHBOARD}>
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 2
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-speedometer"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 2
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Dashboard
                                </span>
                            </span>
                        </Link>
                    </li>

                    <li className="nav-divider">
                        <hr></hr>
                    </li>

                    {props.role === SUPER_ADMIN ? (
                        <>
                            <li id="nav-li">
                                <div id="nav-heading">ROLE MANAGEMENT</div>
                            </li>
                            <li id="nav-li">
                                <Link
                                    href={ASSIGN_REVOKE_ROLES_PAGE}
                                >
                                    <span id="nav-items">
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill={
                                                    props.highlight === 3
                                                        ? "white"
                                                        : "gray"
                                                }
                                                className="bi bi-clipboard-check"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                                                />
                                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                            </svg>
                                        </span>
                                        <span
                                            className={
                                                props.highlight === 3
                                                    ? "active"
                                                    : "none"
                                            }
                                        >
                                            Assign/Revoke Roles
                                        </span>
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-divider">
                                <hr></hr>
                            </li>
                        </>
                    ) : (
                        <></>
                    )}

                    <li id="nav-li">
                        <div id="nav-heading">PROBLEM MANAGEMENT</div>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={VIEW_PROBLEMS_CREATED_PAGE}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 5
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-eye"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 5
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Search Problems
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={CREATE_PROBLEM_PAGE}>
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 6
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-lightbulb"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 6
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Create/Edit Problem
                                </span>
                            </span>
                        </Link>
                    </li>

                    <li className="nav-divider">
                        <hr></hr>
                    </li>

                    <li id="nav-li">
                        <div id="nav-heading">CONTEST MANAGEMENT</div>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={CONTEST_STATS_PAGE}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={
                                        props.highlight === 15
                                            ? "white"
                                            : "gray"
                                    } class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                                        <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 15
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Statistics
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={VIEW_CONTESTS_CREATED_PAGE}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 9
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-eye"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 9
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Search Contests
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={CREATE_CONTEST_PAGE}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 10
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-lightbulb"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 10
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Create/Edit Contest
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={LAUNCH_CONTEST_PAGE}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 13
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-rocket-takeoff"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z" />
                                        <path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z" />
                                        <path d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 13
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Launch Contest
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={VIEW_CONTEST_REGISTRATIONS}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={
                                        props.highlight === 14
                                            ? "white"
                                            : "gray"
                                    } className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 14
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Registrations
                                </span>
                            </span>
                        </Link>
                    </li>
                    <li id="nav-li">
                        <Link
                            href={UPDATE_RATINGS_PAGE}
                        >
                            <span id="nav-items">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill={
                                            props.highlight === 16
                                                ? "white"
                                                : "gray"
                                        }
                                        className="bi bi-bar-chart"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
                                    </svg>
                                </span>
                                <span
                                    className={
                                        props.highlight === 16
                                            ? "active"
                                            : "none"
                                    }
                                >
                                    Update Ratings
                                </span>
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="custom-backdrop"></div>
            </nav>
        </>
    );
}
