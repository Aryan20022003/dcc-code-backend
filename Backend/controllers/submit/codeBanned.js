const code ='#include <bits/stdc++.h>\n' +

'using namespace std;\n' +

'int main(){\n' +

'    int t, n, i, j, k;\n' +

'    cin >> t;\n' +

'    for(j=0; j<t; ++j){\n' +

'        cin >> n;\n' +

'        int a[n];\n' +

'        int arr1[n];\n' +

'        for(i=0; i<n; ++i){\n' +

'            cin >> a[i];\n' +

'        }\n' +

'        for(i=0; i<n-1; ++i){\n' +

'            if(a[i] != a[i+1]){\n' +

'                sort(a , a+n);\n' +

'                int p;\n' +

'                for(i=0; i<n; ++i){\n' +

'                    arr1[i] = a[n-1] & a[i];\n' +

'                }\n' +

'                sort (arr1 ,  arr1+n);\n' +

'                a[n-1] = arr1[0];\n' +

'            }\n' +

'        }\n' +

'        cout << a[n-1] << endl;\n' +

'        \n' +

'    }\n' +

'    return 0;\n' +

'}';

module.exports = code;