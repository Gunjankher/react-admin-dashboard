import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { RiDashboardFill } from 'react-icons/ri';

function AdminSideBar() {
    const location = useLocation();

    const dashItems = [
        {
            icon: <RiDashboardFill />,
            name: "Dashboard",
            path: "/admin/dashboard",
        },
        {
            icon: <RiDashboardFill />,
            name: "Products",
            path: "/admin/products",
        },
        {
            icon: <RiDashboardFill />,
            name: "Customer",
            path: "/admin/customers",
        },
        {
            icon: <RiDashboardFill />,
            name: "Transaction",
            path: "/admin/transaction",
        },
    ];

    return (
        <aside>
            <h2>Logo</h2>
            <div>
                <h5>Dashboard</h5>
                <ul>
                    {dashItems.map((item, index) => (
                        <li
                            key={index}
                            className={location.pathname === item.path ? 'active' : ''}
                        >
                            <Link to={item.path}>
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default AdminSideBar;
