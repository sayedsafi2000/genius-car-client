import React, { useEffect, useState } from 'react';

const OrderROw = ({ order,handleDelete,handleUpdate }) => {
    const { _id, serviceName, customer, phone, price, service ,status} = order;
    const [orderService, setOrderService] = useState([]);
    
    useEffect(() => {
        fetch(`https://genius-car-server-psi-three.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : "Panding"}</button>
            </th>
        </tr>
    );
};

export default OrderROw;