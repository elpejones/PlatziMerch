import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = '27f89cdff17a454825352bf90ca9f83f';


const useAddress = address => {
    const [map, setMap] = useState({});
    const API = `http://api.positionstack.com/v1/forward?access_key=${KEY}&query=${address}`;

    useEffect(() => {
                async function handler() {
                    const response = await axios.get(API);
                    setMap(response.data.data[0]);
                };
                handler();
    }, []);
    return map;
}

export default useAddress;