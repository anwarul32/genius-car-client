import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, price, title } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        // console.log(name, phone, email, message);

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Order Placed successfully')
                form.reset();
            }
        })
        .catch(error => console.error(error));

    }


    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">Your are about to order: {title}</h2>
                <h4 className="text-4xl">{price}</h4>
                <div className='my-3 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full input-ghost" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full input-ghost" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full input-ghost" required />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full input-ghost" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required ></textarea>

                <input type="submit" value="Place Your Order" className='btn bg-orange-600 my-2' />
            </form>
        </div>
    );
};

export default Checkout;