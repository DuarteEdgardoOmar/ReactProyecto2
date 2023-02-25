import React from 'react';

const Producto = ({ data, addToCart }) => {
    let { id, nombre, img, precio } = data;

return (
    <div className='container-fluid border border-success w-100 h-100'>

        <div className='row text-center'>
            <h3 className='h3'>{nombre}</h3>
        </div>

        <div className="row h-50">
            <img
            src={ `assets/${img}`} 
            alt="IMAGEN-PRODUCTO"
            style={{width:"100%",height:"250px", objectFit:"cover"}}/>
        </div>

        <div className='row text-center mt-4'>
            <h3 className="h3">$ {precio}.00</h3>
        </div>

        <div className='row m-1'>
            <button className="btn bg-dark text-white rounded-pill m-1" onClick={() => addToCart(id)}>
            Agregar
            </button>
            <button className='btn bg-dark text-white rounded-pill m-1' onClick={() =>addToCart(id)}>Comprar</button>
        </div>
    </div>
    );
};

export default Producto;
