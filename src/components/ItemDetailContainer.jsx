import {useState, useEffect} from 'react' 
import ItemDetail from './ItemDetail'
 function ItemDetailContainer() {
    const [item,setItem]=useState()
    const itemDetail ={
            "id": "1",
            "producto":"motherboard",
            "marca": "ASUS",
            "modelo": "X570",
            "precio": "$1000",
            "descripcion": "Motherboard de la marca ASUS. Este modelo cuenta con caracteristicas optimas para un alto rendimiento",
            "imagenUrl": ""
    }
    const getItem= new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve(itemDetail)
        },2000)
     })
     useEffect(() => {
        getItem.then((itemDetail)=> setItem(itemDetail))
         }, [])
     return (
         <div>
            <ItemDetail item={item} />             
         </div>
     ) 
     }
     export default ItemDetailContainer
