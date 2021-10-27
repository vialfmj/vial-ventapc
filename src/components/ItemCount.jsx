import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert } from 'react-bootstrap'



function ItemCount(props) {
    const [count, setCount]=useState(props.initial);//al reemplazar '1' por la variable 'initial' la funcion agregar() suma +10 en vez de +1.Consultar
    const agregar = () =>{
        if(count < props.stock)
        setCount(count+1);
    }
    const quitar=() =>{
        if(count > 0)
        setCount(count-1)
    }
    const agregarAlCarrito=()=>{
        if(count > 0)
        {
            alert('ud agrego '+count+' productos')
        }
        else{
            alert('debe agregar productos')
        }
    }
    return (
        <>
        <div className='container'>
            <div className="row">
                <div><h1>mother intel</h1></div>
            </div>
        <div className="row">
            <div className='col-sm-4'><button onClick={quitar} className='btn btn-primary'>decrementar</button></div>
            <div className='col-sm-4'><Alert variant='danger'><p>cantidad:{count}</p></Alert></div>
            <div  className ='col-sm-4'><button onClick={agregar} className='btn btn-primary'>incrementar</button></div>
        </div>
        <div className="row"><button onClick={agregarAlCarrito} className='btn btn-primary'>agregar al carrito</button></div>
        </div>
        </>

    )
}

export default ItemCount
