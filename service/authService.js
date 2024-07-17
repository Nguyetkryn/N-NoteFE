export async function register(username, password) {
    const response = await fetch('http://localhost:8238/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        console.log('Registration successful');
    } else {
        console.log('Registration failed');
    }
}

export async function login(username, password) {
    const response = await fetch('http://localhost:8238/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        console.log('Login successful');
    } else {
        console.log('Login failed');
    }
}

export function logout() {
    localStorage.removeItem('token');
    console.log('Logout successful');
}