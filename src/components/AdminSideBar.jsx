import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { RiDashboardFill,RiShoppingBag3Fill,} from 'react-icons/ri';
import {AiFillFileText} from 'react-icons/ai'
import {IoIosPeople} from 'react-icons/io'

function AdminSideBar() {
    const location = useLocation();

    const dashItems = [
        {
            icon: <RiDashboardFill />,
            name: "Dashboard",
            path: "/admin/dashboard",
        },
        {
            icon: <RiShoppingBag3Fill />,
            name: "Products",
            path: "/admin/products",
        },
        {
            icon: <AiFillFileText />,
            name: "Customer",
            path: "/admin/customer",
        },
        {
            icon: <IoIosPeople />,
            name: "Transaction",
            path: "/admin/transaction",
        },
    ];
    const chartItems = [
        {
            icon: <RiDashboardFill />,
            name: "Dashboard",
            path: "/admin/dashboard",
        },
        {
            icon: <RiShoppingBag3Fill />,
            name: "Products",
            path: "/admin/products",
        },
        {
            icon: <AiFillFileText />,
            name: "Customer",
            path: "/admin/customer",
        },
        {
            icon: <IoIosPeople />,
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
                        style={{
                            backgroundColor : location.pathname.includes(item.path)
                            ? "rgba(0,115,255,0.1)"
                            : "white"
                        }}
                        >
                            <Link to={item.path}>
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>


                <h5>Chart</h5>
                <ul>
                    {chartItems.map((item, index) => (
                        <li
                            key={index}
                        style={{
                            backgroundColor : location.pathname.includes(item.path)
                            ? "rgba(0,115,255,0.1)"
                            : "white"
                        }}
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
