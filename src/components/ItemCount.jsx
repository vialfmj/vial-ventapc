import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Button } from 'react-bootstrap'
import{Link} from 'react-router-dom'



function ItemCount(props) {
    const [count, setCount]=useState(props.initial);
    let state=props.state
    const agregar = () =>{
        if(count < props.stock)
        setCount(count+1);
    }
    const quitar=() =>{
        if(count > 0)
        setCount(count-1)
    }
    if(state==true)
        return (
            <>
            <h2>Se agregaron {count} productos al carrito</h2>
            <Link to='/Cart'>
            <Button variant='success'>Terminar comprar e ir a ver el carrito</Button>
            </Link>            
            </>
        )
        
    else
        return (
        <>
        <div className='container'>
        <div className="row">
            <div className='col-sm-4'><button onClick={quitar} className='btn btn-primary'>decrementar</button></div>
            <div className='col-sm-4'><Alert variant='primary'><p>cantidad:{count}</p></Alert></div>
            <div  className ='col-sm-4'><button onClick={agregar} className='btn btn-primary'>incrementar</button></div>
        </div>
        <div className="row">
            <button onClick={()=>{
                state= true
                props.onAdd(count,state)
            }
        
        } className='btn btn-primary'> Agregar al carrito</button>
        </div>
        </div>
        </>

    )
}

export default ItemCount
