import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const navigate = useNavigate();

    const paypalOptions = {
        clientId: 'Abb-c65UBd0RQCXwfvL_r8azvP7-gjIupCT5p6_v-RdTxgcU8yRxUEOp5ed2q6i94FhiWCaO4KoJzpZ4',
        intent: 'capture',
        currency: 'USD'
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    const handlePaymentSuccess = (data) => {
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                products: cart,
                payment: data
            }
            addNewOrder(newOrder);
            navigate('/checkout/success');
        }
    };

    const fakeCC = '4485144794687964';

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.id}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Payment started')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            {cart.length > 0 && (
                <div className="Payment-sidebar">
                    <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
                </div>
            )}
        </div>
    );
}

export default Payment;