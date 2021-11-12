import React from 'react'
import { Table } from 'react-bootstrap'

const ItemCart = ({prod}) => {
    return (
        <>
            <tr>
                <td>
                    {prod.categoria}
                </td>
                <td>
                    {prod.marca}
                </td>
                <td>
                    {prod.modelo}
                </td>
                <td>
                    {prod.precio}
                </td>
                <td>
                    {prod.cantidad}
                </td>
            </tr>

        </>
    )
}

export default ItemCart
