import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import Logo from '../images/logo.png'
function Item({prod}) {
    return (
            <div className='cartaProducto'>  
                <Row>
                    <img className='imagenProducto' src={Logo} alt="Imagen del producto" />
                </Row>
                <Row>
                    <Col xs={6}>Producto: </Col>
                    <Col xs={6}>{prod.producto} </Col>
                </Row>
                <Row>
                    <Col xs={6}>Marca: </Col>
                    <Col xs={6}>{prod.marca}  </Col>
                </Row>
                <Row>
                    <Col xs={6}>Modelo: </Col>
                    <Col xs={6}>{prod.modelo}</Col>
                </Row>
                <Row>
                    <Col xs={6}>Precio: </Col>
                    <Col xs={6}>{prod.precio} </Col>
                </Row>
                <Row>
                    <Button variant='primary'>Comprar</Button>
                </Row>
            </div>
    )
}

export default Item