import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    // const navigate = 
    const placeOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        fetch('https://genius-car-server-psi-three.vercel.app/orders', {
            method: "POST",
            headers: {

                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("genius-token")}`,

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("order place successfully")
                    form.reset();
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <form onSubmit={placeOrder} className='' action="">
                <h2 className="text-4xl font-bold">You have selected : {title}</h2>
                <h2 className="text-2xl">Price :$ {price}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" placeholder="Type Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your message..."></textarea>
                <input className='btn' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;