// SuccessView.js
import React from 'react';

const SuccessView = () => {

    const externalReference = window.location.pathname.split('/').pop();
    
  return (
    <div>
      <h1>Pago Exitoso</h1>
      <p>¡Gracias por tu compra!</p>
      <p>Referencia Externa: {externalReference}</p>
    </div>
  );
};

export default SuccessView;
