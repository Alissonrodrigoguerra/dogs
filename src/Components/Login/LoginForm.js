(import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [username, setUsername] = React.useState ('');  
    const [passoword, setPassoword] = React.useState ('');
    return (
        <section>
            <h1>Login </h1>
            <form action="">
                <input type="text" onChange={({target})=> setUsername(target.value)}/>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm
)