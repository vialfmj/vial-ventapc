

const ItemRecibo=({producto})=>{
    console.log(producto)
    return(
        <tr>
            <td>{producto.categoria}</td>
            <td>{producto.modelo}</td>
            <td>{producto.precio}</td>
            <td>{producto.cantidad}</td>
        </tr>

        )

}

export default ItemRecibo