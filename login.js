// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obter as credenciais do localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Verificar credenciais
    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'estoque.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});

// Verificar se o usuário está logado
window.addEventListener('load', function() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }
});
