import Item from './Item'
import { useState, useEffect } from 'react'
import { getProducts } from './GetProducts'


function ItemList(props) {

    const [products,setProducts]= useState([])

    useEffect(() => {
        getProducts
        .then(res=>{
            const buscar= props.buscar
            const resultadoBusqueda= res.filter((producto)=>{
                return producto.marca===buscar
            })
            return resultadoBusqueda
        })
        .then(resp=> {
            setProducts(resp)
        })
    },[])
    return (
        <div className='contenedorLista'>
            <Item arreglo={[products]}/>
        </div>
    )
}

export default ItemList