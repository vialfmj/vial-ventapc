import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'



function ItemCount(props) {
    const [count, setCount]=useState(props.initial);
    const agregar = () =>{
        if(count < props.stock)
        setCount(count+1);
    }
    const quitar=() =>{
        if(count > 0)
        setCount(count-1)
    }
     return (
        <>
        <div className='container'>
        <div className="row">
            <div className='col-sm-4'><button onClick={quitar} className='btn btn-primary'>decrementar</button></div>
            <div className='col-sm-4'><Alert variant='danger'><p>cantidad:{count}</p></Alert></div>
            <div  className ='col-sm-4'><button onClick={agregar} className='btn btn-primary'>incrementar</button></div>
        </div>
        <div className="row">
            <button onClick={()=>{props.onAdd(count)}} className='btn btn-primary'> Agregar al carrito</button>
        </div>
        </div>
        </>

    )
}

export default ItemCount
