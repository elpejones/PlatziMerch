import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useAddress from '../hooks/useAddress';

import '../styles/components/Success.css';

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useAddress(buyer[0].address);
    return (        
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[0] ? buyer[0].name : 'Persona desconocida'}, gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Success-map">
                    <Map data={location}></Map>
                </div>
            </div>
        </div>
    );
}

export default Success;