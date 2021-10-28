import React from 'react'
import ItemList from './ItemList'
function ItemListContainer() {
    return (
        <div className='contenedorLista'>
        <ItemList buscar='ASUS' />
        </div>
    )
}

export default ItemListContainer