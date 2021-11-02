import Item from './Item'


function ItemList({products}) {
return(
    <>
        <div className='contenedorLista'>
            {products.map(prod=><Item key={prod.id} prod={prod}/>)}
        </div>
    </>
)
}

export default ItemList