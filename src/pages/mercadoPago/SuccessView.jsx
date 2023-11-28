// SuccessView.js
import React from 'react';
import { useParams } from 'react-router-dom';

const SuccessView = () => {

   /*  const externalReference = window.location.pathname.split('/').pop(); */
    const { externalReference } = useParams();
    console.log('este es el external Reference: ', externalReference );
    
  return (
    <div>
      <h1>Pago Exitoso</h1>
      <p>¡Gracias por tu compra!</p>
      <p>Referencia Externa: {externalReference}</p>
    </div>
  );
};

export default SuccessView;
