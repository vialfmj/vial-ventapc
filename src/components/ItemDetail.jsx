import React from 'react'
import Logo from '../images/logo.png'
function ItemDetail({item}) {

    if(item==null)
    return <h1>Loading...</h1>
    else
    return(
        <div >
            <br />
            <div className='imagenDetalle'><img src={Logo} alt="imagen ilustrativa del producto" /></div>
            <div>{item.producto}</div>
            <div>{item.marca}</div>
            <div>{item.descripcion}</div>
            <div>{item.precio}</div>
        </div>
    )
}

export default ItemDetail
