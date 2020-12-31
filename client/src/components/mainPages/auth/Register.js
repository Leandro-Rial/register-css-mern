import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Register() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>

                <h2>Register</h2>

                <input type="text" name="name" placeholder="Name" onChange={onInputChange} value={user.name} required />
                
                <input type="email" name="email" placeholder="Email" onChange={onInputChange} value={user.email} required />
                
                <input type="password" name="password" placeholder="Password" onChange={onInputChange} value={user.password} required />
            
                <div className="row">
                    <button type="submit">Register</button>
                    <Link to="/login" >Login</Link>
                </div>

            </form>
        </div>
    )
}

export default Register