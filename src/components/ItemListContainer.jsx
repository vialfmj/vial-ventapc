import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { getProducts } from './GetProducts'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
function ItemListContainer() {
    const [productos,setProductos]= useState([])
    const {categoriaId}=useParams()
    useEffect(() => {
        if (categoriaId) {
            getProducts
            .then((res)=>{
                setProductos(res.filter(prod=>prod.categoria===categoriaId))
            })
        }
        else{
            getProducts
            .then((res)=>{
                setProductos(res)
            })
        }
    }, [categoriaId])
    if(productos==null)
        return <h1>Loading</h1>
    else
        return (
            <>
                <Link to={`/motherboard`}>
                    <Button variant='primary'>Ver motherboards</Button>
                </Link>
                <Link to={`/procesador`}>
                    <Button variant='primary'>Ver procesadores</Button>
                </Link>
                <ItemList products={productos}/>
            </>
    )
}

export default ItemListContainer