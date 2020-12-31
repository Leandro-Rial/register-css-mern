import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>

                <h2>Login</h2>

                <input type="email" name="email" placeholder="Email" onChange={onInputChange} value={user.email} required />
                
                <input type="password" name="password" placeholder="Password" onChange={onInputChange} value={user.password} required />
            
                <div className="row">
                    <button type="submit">Login</button>
                    <Link to="/register" >Register</Link>
                </div>

            </form>
        </div>
    )
}

export default Login
