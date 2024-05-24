import React from 'react';
import Layout from '../Components/Layout/Layout';
import { useCart } from '../Context/cart';
import { useAuth } from '../Context/auth';
import { useNavigate } from 'react-router-dom';
import 'daisyui/dist/full.css';

const CartPage = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (auth.user) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item._id !== productId));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <Layout>
            <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-4">
                <div className="lg:w-2/3">
                   <h1 className="text-5xl font-bold mb-4"> {`Hellow ${auth?.token && auth?.user?.name}`},</h1>
                    <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                    {cart?.length === 0 ? (
                        <div className="text-center py-10">
                        
                            <p className="text-xl">Your cart is empty</p>
                            <button 
                                className="btn btn-primary mt-4"
                                onClick={() => navigate('/')}
                            >
                                Shop Now
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                
                                <div key={item._id} className="flex items-center border rounded-lg p-4 bg-purple-100 shadow">
                                    <img 
                                        src={`/products/product-photo/${item._id}`} 
                                        alt={item.name} 
                                        className="w-44 h-44 object-cover rounded-lg"
                                    />
                                    <div className="ml-4 flex-grow ">
                                        <h2 className="text-2xl font-bold">{item.name}</h2>
                                        <p className="text-gray-600">{item.description}</p>
                                        <p className="text-gray-800">Price: {item.price} LKR</p>
                                        <button
                                            className="btn btn-error mt-2"
                                            onClick={() => removeFromCart(item._id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="lg:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
                    <div className="p-4 border rounded-lg bg-purple-50 shadow">
                        <h4 className='text-xl font-bold'>{`You have ${cart?.length} orders in Your cart`}</h4>
                        <p className="text-lg font-semibold">Total: {calculateTotal().toFixed(2)} LKR</p>
                        <p className="text-lg">Current Address : {`${auth?.token && auth?.user?.address}`}</p>
                        
                        
                        {auth.user ? (
                            <button 
                                className="btn btn-success mt-2 text-white"
                                onClick={handleCheckout}
                            >
                                Make Payment
                            </button>
                        ) : (
                            <button 
                                className="btn btn-primary mt-2"
                                onClick={() => navigate('/login')}
                            >
                                Please log in to make payment
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CartPage;
