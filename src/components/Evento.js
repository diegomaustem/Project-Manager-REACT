import Condicional from './Condicional'
import Button from './evento/Button'

function Evento() {

    function meuEvento() {
        console.log(`Ativado primeiro evento`)
    }

    function meuOutroEvento() {
        console.log(`Ativando meu outro evento`)
    }

    return (

        <div>
            <p>Clique para ativar o evento!</p>
            <Button event={meuEvento} text="PrimeiroEvento" />
            <Button event={meuOutroEvento} text="OutroEvento" />
            <Condicional />
        </div>
    )
}

export default Evento 