import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams();
    return <div>This is checkout page And your id is:{checkoutId}</div>;
};

export default Checkout;