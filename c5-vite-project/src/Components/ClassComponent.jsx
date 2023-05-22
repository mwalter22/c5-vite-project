
// --------- EL ATAJO PARA CREAR COMPONENTE DE CLASE ES: rcc ----------------

import { Component } from "react";

const funcion = () => {
    let a = '1'
    a = 'Practicando componentes de clase'
    return a;
    }

export default class ClassComponent extends Component {
    render(){
        let texto = funcion()
        return(
            <>
                <h1>Este es un componente de clase</h1>
                <p>{texto}</p>
            </>
        )
    }
}

export class OtroComponente extends Component {
    render(){
        return(
            <>
                <h1>Este es el otro componente</h1>
            </>
        )
    }
}

