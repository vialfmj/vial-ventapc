import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import ItemRecibo from './ItemRecibo'
import { Link } from 'react-router-dom'

const ReciboCompra = ({recibo, removeAll}) => {
    const productos=recibo.productos
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Recibo de compra</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p> Su compra ha sido procesada correctamente  </p>
                    <p>El codigo de su compra es {recibo.id} a nombre de {recibo.comprador.nombre} </p>
                    <tr>
                        <th>Categoria</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                    {
                        productos.map(prod=><ItemRecibo producto={prod} key={prod.id}  />)
                    }
                    <p>con un total de ${recibo.total}</p>

                </Modal.Body>

                <Modal.Footer>
                    <Link to='/'><Button variant="secondary" onClick={removeAll}>FInalizar</Button></Link>

                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default ReciboCompra
