import React from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'


function ItemListContainer() {
    const agregarAlCarrito=(count)=>{
        if(count > 0)
        alert('se agregaron: ' + count + ' productos')
        else
        alert('no hay nada que agregar')
    }


    return (
        <div className='contenedorLista'>
        <ItemCount initial={1} stock='5' onAdd={agregarAlCarrito} />
        </div>
    )
}

export default ItemListContainer