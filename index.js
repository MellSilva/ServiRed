const obj1 = false
console.log(obj1)
const obj = {
    nombre: 'Jose',
    status: true,
    edad: 20
};

const fecha = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;


console.log(obj, fecha)

const prueba = {}

if(!prueba) console.log(prueba.nombre)
    else console.log("No existe")