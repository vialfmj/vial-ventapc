import React, { useEffect, useState } from 'react'
import { useCartContext } from './context/CartContext'
import ItemCount from './ItemCount'
function ItemDetail({item}) {
    const [quantityToAdd, setQuantityToAdd]=useState()
    const [state, setState]=useState(false)
    const { addToCart, isInCart}=useCartContext()
    useEffect(() => {
        return
    }, [quantityToAdd])
    const agregarAlCarrito=(count, estado)=>{
        if(count > 0){
            setQuantityToAdd(count)
            setState(estado)
            const prodToAdd={
                "id": item.id,
                "categoria": item.categoria,
                "marca": item.marca,
                "modelo": item.modelo,
                "precio": item.precio,
                "cantidad":count
            }
            if(isInCart(prodToAdd.id)===false){
            addToCart(prodToAdd)
            }
        }
        else
        alert('no hay nada que agregar')
    }
    if(item==null)
    return <h1>Loading...</h1>
    else
    return(
        <div className='contedorDetalle' >
            <br />
            <div className='imagenDetalle'><img src={item.imagenUrl} alt="imagen ilustrativa del producto" /></div>
            <div>{item.marca}</div>
            <div>{item.modelo}</div>
            <div>{item.descripcion}</div>
            <div>{item.precio}</div>
            <div>
            <ItemCount initial={1} stock='5' onAdd={agregarAlCarrito} state={state} />
            </div>
        </div>
    )
}

export default ItemDetail
