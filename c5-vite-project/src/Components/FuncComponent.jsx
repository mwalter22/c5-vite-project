
// --------- EL ATAJO PARA CREAR COMPONENTE DE CLASE ES: rafce ----------------

// eslint-disable-next-line react/prop-types
const FuncComponent = ({texto, amount}) => { //se ponen entre llaves las prop que forman el componente de funcion
    console.log(texto, amount);
    return(
        <>
            <h1>Este es el componente de {texto}</h1>
            {amount*6}
        </>
    )
}

export default FuncComponent