
const productos= [
    {
        "id": "1",
        "producto":"motherboard",
        "marca": "ASUS",
        "modelo": "X570",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "2",
        "producto":"motherboard",
        "marca": "ASUS",
        "modelo": "B450",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "3",
        "producto":"motherboard",
        "marca": "ASUS",
        "modelo": "A520",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "4",
        "producto":"motherboard",
        "marca": "Gigabtyte",
        "modelo": "X570",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "5",
        "producto":"motherboard",
        "marca": "Gigabyte",
        "modelo": "B450",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "6",
        "producto":"motherboard",
        "marca": "Gigabyte",
        "modelo": "A520",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "7",
        "producto":"procesador",
        "marca": "AMD",
        "modelo": "Ryzen 3",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "8",
        "producto":"prcesador",
        "marca": "AMD",
        "modelo": "Ryzen 5",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "9",
        "producto":"procesador",
        "marca": "Intel",
        "modelo": "I3",
        "precio": "$1000",
        "imagenUrl": ""
    },
    {
        "id": "10",
        "producto":"procesador",
        "marca": "Intel",
        "modelo": "I5",
        "precio": "$1000",
        "imagenUrl": ""
    }
]

export const getProducts= new Promise((resolve, reject)=>{
   setTimeout(()=>{
    resolve(productos)
   },2000)
})

