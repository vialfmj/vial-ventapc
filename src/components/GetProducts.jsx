const productos= [
    {
        "id": "1",
        "categoria":"motherboard",
        "marca": "ASUS",
        "modelo": "X570",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"
    },
    {
        "id": "2",
        "categoria":"motherboard",
        "marca": "ASUS",
        "modelo": "B450",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    },
    {
        "id": "3",
        "categoria":"motherboard",
        "marca": "ASUS",
        "modelo": "A520",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"
    },
    {
        "id": "4",
        "categoria":"motherboard",
        "marca": "Gigabtyte",
        "modelo": "X570",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    },
    {
        "id": "5",
        "categoria":"motherboard",
        "marca": "Gigabyte",
        "modelo": "B450",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    },
    {
        "id": "6",
        "categoria":"motherboard",
        "marca": "Gigabyte",
        "modelo": "A520",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    },
    {
        "id": "7",
        "categoria":"procesador",
        "marca": "AMD",
        "modelo": "Ryzen 3",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    },
    {
        "id": "8",
        "categoria":"prcesador",
        "marca": "AMD",
        "modelo": "Ryzen 5",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    },
    {
        "id": "9",
        "categoria":"procesador",
        "marca": "Intel",
        "modelo": "I3",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    },
    {
        "id": "10",
        "categoria":"procesador",
        "marca": "Intel",
        "modelo": "I5",
        "precio": "$1000",
        "imagenUrl": "",
        "descripcion":"insert descrption"

    }
]

export const getProducts= new Promise((resolve, reject)=>{
   setTimeout(()=>{
    resolve(productos)
   },2000)
})