import React, { useState } from 'react';
import { login, register } from '../service/authService';

function LoginForm() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
            <button onClick={() => register(username, password)}>Register</button>
            <button onClick={() => login(username, password)}>Login</button>
        </div>
    );
}

export default LoginForm;