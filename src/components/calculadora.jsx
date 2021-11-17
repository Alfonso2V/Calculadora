import { useState, useReducer } from 'react'
import Number from './number'
import Operator from './operator'

const Calculadora = () => {
    let n2
    const [showNumero, setshowNumero] = useState("")
    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [opera, setopera] = useState("")
    const [flag, setflag] = useState(true)

    const buttonClick = (number) => setshowNumero(showNumero + number)

    function operatorClick(op) {
        // Diferente de igual en la calculadora y AC para borrar todo
        if (op !== "=" && op !== "AC") {
            setflag(true)
            setopera(op) /* Guardando el operador pulsado para usarlo luego */
            if (num1 === "") {
                setnum1(showNumero) /* Asignando el numero en pantalla a la primer variable */
                setshowNumero("") /* Borrando valor en pantalla al pulsar un operador */
            } else {
                setshowNumero("")
            }
        } else {
            op === "AC" ? reset() : operation()
        }
    }
    const reset = () => {
        setshowNumero("")
        setnum2("")
        setnum1("")
        setopera("")
        setflag(true)
    }
    const operation = () => {
        setnum2(showNumero)
        n2 = showNumero
        let show = 0
        switch (opera.charCodeAt(0)) {
            case 43: show = parseFloat(num1) + parseFloat(n2); break;
            case 45: show = parseFloat(num1) - parseFloat(n2); break;
            case 47: show = parseFloat(num1) / parseFloat(n2); break;
            case 42: show = parseFloat(num1) * parseFloat(n2); break;
            default: console.log("No deberias estar aqui D:")
        }
        setshowNumero(show)
        setnum1(show)
        setnum2("")
        setflag(false)
    }

    return (
        <>
            <h1>=</h1>
            <h1 className={flag ? "pintar" : "noPintar"}>{num1}</h1>
            <h1 className={flag ? "pintar" : "noPintar"}> {opera}</h1>
            <h1>{num2}</h1>
            <h1>{showNumero}</h1>
            <div className="botones">
                <Operator operator="AC" operatorClicked={(operator) => operatorClick(operator)} />
                <Operator operator="/" operatorClicked={(operator) => operatorClick(operator)} />

                <Number number="7" childClicked={(number) => buttonClick(number)} />
                <Number number="8" childClicked={(number) => buttonClick(number)} />
                <Number number="9" childClicked={(number) => buttonClick(number)} />
                <Operator operator="*" operatorClicked={(operator) => operatorClick(operator)} />

                <Number number="4" childClicked={(number) => buttonClick(number)} />
                <Number number="5" childClicked={(number) => buttonClick(number)} />
                <Number number="6" childClicked={(number) => buttonClick(number)} />
                <Operator operator="-" operatorClicked={(operator) => operatorClick(operator)} />

                <Number number="1" childClicked={(number) => buttonClick(number)} />
                <Number number="2" childClicked={(number) => buttonClick(number)} />
                <Number number="3" childClicked={(number) => buttonClick(number)} />
                <Operator operator="+" operatorClicked={(operator) => operatorClick(operator)} />

                <Number number="0" childClicked={(number) => buttonClick(number)} />
                <Number number="." childClicked={(number) => buttonClick(number)} />
                <Operator operator="=" operatorClicked={(operator) => operatorClick(operator)} />
            </div>
        </>
    )
}

export default Calculadora