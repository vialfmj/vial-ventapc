import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { getProducts } from './GetProducts'
import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { getFirestore } from './context/service/getFirestore'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses'

function ItemListContainer() {
    const [productos,setProductos]= useState([])
    const [producto,setProducto]= useState({})
    const {categoriaId}=useParams()
    useEffect(() => {
        const db= getFirestore()
        if(categoriaId){

        const dbQuery= db.collection('items').where('categoria', '==', categoriaId ).get()
        dbQuery.then(res => setProductos(res.docs.map(prod=>({id: prod.id, ...prod.data() } )) ))        
    }
        else{
            const dbQuery= db.collection('items').get()
            dbQuery.then(res => setProductos(res.docs.map(prod=>({id: prod.id, ...prod.data() } )) ))
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