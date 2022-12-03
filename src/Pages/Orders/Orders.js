import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderROw from './OrderROw';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.email)
    const [orders, setOrder] = useState([])


    useEffect(() => {
        fetch(`https://genius-car-server-psi-three.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("genius-token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrder(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const process = window.confirm("Are you sure you want to cancle this order??")
        if (process) {
            fetch(`https://genius-car-server-psi-three.vercel.app/orders/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("genius-token")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrder(remaining);
                    }
                })
        }
    }
    const handleUpdate = id => {
        fetch(`https://genius-car-server-psi-three.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json", authorization: `Bearer ${localStorage.getItem("genius-token")}`
            },
            body: JSON.stringify({ status: "Approved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = "Approved";
                    const newOrders = [approving, ...remaining,];
                    setOrder(newOrders);
                }
            })

    }
    return (
        <div>
            <h2>you have {orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderROw
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            >
                            </OrderROw>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;