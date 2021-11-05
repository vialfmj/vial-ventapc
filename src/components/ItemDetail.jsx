import React from 'react'
import Logo from '../images/logo.png'
import ItemCount from './ItemCount'
function ItemDetail({item}) {
    const agregarAlCarrito=(count)=>{
        if(count > 0)
        alert('se agregaron: ' + count + ' productos')
        else
        alert('no hay nada que agregar')
    }
    if(item==null)
    return <h1>Loading...</h1>
    else
    return(
        <div >
            <br />
            <div className='imagenDetalle'><img src={Logo} alt="imagen ilustrativa del producto" /></div>
            <div>{item.marca}</div>
            <div>{item.modelo}</div>
            <div>{item.descripcion}</div>
            <div>{item.precio}</div>
            <div>
            <ItemCount initial={1} stock='5' onAdd={agregarAlCarrito} />
            </div>
        </div>
    )
}

export default ItemDetail
