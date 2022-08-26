import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '../styles/components/Information.css';

const Information = () => {
    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const { cart } = state;

    const navigate = useNavigate();


    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = Object.fromEntries(formData);
        addToBuyer(buyer);
        navigate('/checkout/payment');
    };

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <label htmlFor="name">
                            Nombre completo
                            <input type="text" placeholder="Nombre completo" name="name" id="name" />
                        </label>
                        <label htmlFor="email">
                            Correo electronico
                            <input type="text" placeholder="Correo electronico" name="email" id="email" />
                        </label>
                        <label htmlFor="address">
                            Direccion
                            <input type="text" placeholder="Direccion" name="address" id="address" />
                        </label>
                        <label htmlFor="apto">
                            Apto
                            <input type="text" placeholder="Apto" name="apto" id="apto" />
                        </label>
                        <label htmlFor="city">
                            Ciudad
                            <input type="text" placeholder="Ciudad" name="city" id="city" />
                        </label>
                        <label htmlFor="country">
                            Pais
                            <input type="text" placeholder="Pais" name="country" id="country" />
                        </label>
                        <label htmlFor="state">
                            Estado
                            <input type="text" placeholder="Estado" name="state" id="state" />
                        </label>
                        <label htmlFor="cp">
                            Codigo postal
                            <input type="text" placeholder="Codigo postal" name="cp" id="cp" />
                        </label>
                        <label htmlFor="phone">
                            Telefono
                            <input type="text" placeholder="Telefono" name="phone" id="phone" />
                        </label>
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type='button' onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map((item) => (
                    <div className="Information-item" key={item.title}>
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Information;