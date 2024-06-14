// app.js
document.getElementById('productForm').addEventListener('submit', addProduct);

let products = JSON.parse(localStorage.getItem('products')) || [];

function addProduct(event) {
    event.preventDefault();
    
    const code = document.getElementById('productCode').value;
    const name = document.getElementById('productName').value;
    const quantity = document.getElementById('productQuantity').value;
    const price = document.getElementById('productPrice').value;
    
    const product = { code, name, quantity, price };
    products.push(product);
    
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
    
    document.getElementById('productForm').reset();
}

function displayProducts() {
    const productTableBody = document.querySelector('#productTable tbody');
    productTableBody.innerHTML = '';
    
    products.forEach((product, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${product.code}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="editProduct(${index})">Editar</button>
                <button onclick="deleteProduct(${index})">Deletar</button>
            </td>
        `;
        
        productTableBody.appendChild(row);
    });
}

function editProduct(index) {
    const product = products[index];
    
    document.getElementById('productCode').value = product.code;
    document.getElementById('productName').value = product.name;
    document.getElementById('productQuantity').value = product.quantity;
    document.getElementById('productPrice').value = product.price;
    
    document.getElementById('productForm').onsubmit = function(event) {
        event.preventDefault();
        
        products[index] = {
            code: document.getElementById('productCode').value,
            name: document.getElementById('productName').value,
            quantity: document.getElementById('productQuantity').value,
            price: document.getElementById('productPrice').value
        };
        
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        
        document.getElementById('productForm').reset();
        document.getElementById('productForm').onsubmit = addProduct;
    };
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
}

// Exibir produtos ao carregar a página
displayProducts();
function addSupplier() {
    var supplierName = document.getElementById("supplier-name").value;
    var supplierPhone = document.getElementById("supplier-phone").value;
    var supplierEmail = document.getElementById("supplier-email").value;

    if (supplierName.trim() === "" || supplierPhone.trim() === "" || supplierEmail.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Adicionar o código para adicionar o fornecedor à lista (por exemplo, atualizar um banco de dados)

    var supplierListItem = document.createElement("li");
    supplierListItem.textContent = supplierName + " - Telefone: " + supplierPhone + ", E-mail: " + supplierEmail;
    document.getElementById("supplier-list").appendChild(supplierListItem);

    alert("Fornecedor adicionado com sucesso: " + supplierName);
}
