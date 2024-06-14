// register.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Salvar as credenciais no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registro bem-sucedido! Você pode fazer login agora.');
    window.location.href = 'index.html';
});
