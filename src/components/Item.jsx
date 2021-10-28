import React,{useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../images/logo.jpg'

function Item(props) {
    const [productos, setProductos]= useState([])
    useEffect(() => {
        setProductos(props.arreglo)
    },[])

    return (
        <>
        
        {
             productos[0].map((productos , index) => <div key={index} className='cartaProducto'>                
            <Container >
                <Row>
                    <img className='imagenProducto' src={Logo} alt="Imagen del producto" />
                </Row>
                <Row>
                    <Col xs={6}>Producto: </Col>
                    <Col xs={6}>{productos.producto} </Col>
                </Row>
                <Row>
                    <Col xs={6}>Marca: </Col>
                    <Col xs={6}>{productos.marca}  </Col>
                </Row>
                <Row>
                    <Col xs={6}>Modelo: </Col>
                    <Col xs={6}>{productos.modelo}</Col>
                </Row>
                <Row>
                    <Col xs={6}>Precio: </Col>
                    <Col xs={6}>{productos.precio} </Col>
                </Row>
                
            </Container>
            </div>) }
        </>
    )
}

export default Item