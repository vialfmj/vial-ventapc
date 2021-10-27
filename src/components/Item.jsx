import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../images/logo.jpg'

function Item() {
    return (
            <div className='cartaProducto'>                
            <Container >
                <Row>
                    <img className='imagenProducto' src={Logo} alt="Imagen del producto" />
                </Row>
                <Row>
                    <Col xs={6}>Producto: </Col>
                    <Col xs={6}>Mother </Col>
                </Row>
                <Row>
                    <Col xs={6}>Marca: </Col>
                    <Col xs={6}> ASUS </Col>
                </Row>
                <Row>
                    <Col xs={6}>Modelo: </Col>
                    <Col xs={6}>X570</Col>
                </Row>
                <Row>
                    <Col xs={6}>Precio: </Col>
                    <Col xs={6}>$1000 </Col>
                </Row>
                
            </Container>
            </div>
    )
}

export default Item