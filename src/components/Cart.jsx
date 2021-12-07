import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useCartContext } from './context/CartContext'
import ItemCart from './ItemCart'
import {Link} from 'react-router-dom'
import { getFirestore } from './context/service/getFirestore'
import firebase from 'firebase'
import ReciboCompra from './ReciboCompra'

const Cart = () => {
    const [estadoCompra, setEstadoCompra]=useState(false)
    const [recibo, setRecibo]=useState({})
    const {cartList, removeAll, removeFromCart}=useCartContext()
    const [formData, setFormData]=useState({
        nombre:'',
        email:'',
        telefono:'',
        repetirEmail:''
    })
    const validar=(e)=>{
        e.preventDefault()
        formData.email === formData.repetirEmail ?
        generarOrden()
        :alert('el email no coincide')
    }
    const generarOrden=()=>{
        let orden= {}
        let idCompra
        orden.comprador= formData
        orden.total= calcularTotal(cartList)
        orden.fecha=firebase.firestore.Timestamp.fromDate(new Date())
        
        const dbQuery= getFirestore()
        dbQuery.collection('orders').add(orden)
        .then(resp=> idCompra=resp.id)
        .catch(err=> console.log(err))
        .finally(()=>{setFormData({
            nombre:'',
            email:'',
            telefono:''
        })
        setRecibo({
            "comprador": orden.comprador,
            "productos": cartList,
            "total": orden.total,
            "id": idCompra
        })
        setEstadoCompra(true)

        alert('compra realizada. Su id de compra es:'+ idCompra)
        })
    }
    const handlerChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const calcularTotal=(cartList)=>{
        let precio
        let subTotal=0
        if(cartList!=null) {
            cartList.forEach(prod=> {
                precio= prod.cantidad*prod.precio
                subTotal= subTotal+precio
            })
            return subTotal
        }
    }
    if(cartList.length===0)
            return(
                <>
                    <h2>El carrito esta vacio</h2>
                    <Link to='/'>
                        <Button>Volver al inicio para agregar productos</Button>
                    </Link>
                </>
            )
    else{
        if(estadoCompra=== true)
        return <ReciboCompra recibo={recibo} removeAll={removeAll}/>
        else
    return (
        <>
                <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Producto</td>
                        <td>Marca</td>
                        <td>Modelo</td>
                        <td>Precio</td>
                        <td>Cantidad</td>
                        <td>Precio por X cantidad</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map(prod=><ItemCart removeFromCart={removeFromCart} key={prod.id} prod={prod}/>)
                    }
                <tr>
                    <td >
                        <h2>Total: {calcularTotal(cartList)}</h2>
                    </td>
                </tr>

                
                </tbody>

            </Table>
            
        </div>
        <div className='botones'>
        <Button onClick={removeAll}>Vaciar carrito</Button>
        <Link to='/'>
                <Button>Volver para seguir comprando</Button>
        </Link>
        </div>
        
        
        <form onSubmit={validar} onChange={handlerChange}>
            <input type="text" name= 'nombre' placeholder='nombre' value={formData.nombre} />
            <input type="text" name= 'telefono' placeholder='telefono' value={formData.telefono} />
            <input type="email" name= 'email' placeholder='email' value={formData.email} />
            <input type="email" name='repetirEmail' placeholder='repita su email' value={formData.repetirEmail} />
            <button>Enviar</button>
        </form>
        </>
    )
}
}

export default Cart