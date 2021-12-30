
import { useState } from 'react'

function Form( {formulario} ) {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`O usuario ${name}, cadastrou a senha: ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPass] = useState()
 
    return (
        <div>
            <h1>Meu formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="text" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form