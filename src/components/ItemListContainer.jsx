import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import ItemCount from './ItemCount'
import { getProducts } from './GetProducts'
function ItemListContainer() {
    const agregarAlCarrito=(count)=>{
        if(count > 0)
        alert('se agregaron: ' + count + ' productos')
        else
        alert('no hay nada que agregar')
    }
    const [productos,setProductos]= useState([])
    useEffect(() => {
        getProducts
        .then((products)=>{
            setProductos(products)
        })
    }, [])
    return (
        <>
        <ItemList products={productos}/>
        <ItemCount initial={1} stock='5' onAdd={agregarAlCarrito} />


        </>
    )
}

export default ItemListContainer