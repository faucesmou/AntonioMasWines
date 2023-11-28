// SuccessView.js
import React from 'react';

const SuccessView = () => {

    const externalReference = window.location.pathname.split('/').pop();
    console.log('este es el external Reference: ', externalReference )
    
  return (
    <div>
      <h1>Pago Exitoso</h1>
      <p>¡Gracias por tu compra!</p>
      <p>Referencia Externa: {externalReference}</p>
      <h2>Referencia Externa: {externalReference}</h2>
      <h2> ´Referencia Externa: ${externalReference}´</h2>
    </div>
  );
};

export default SuccessView;
