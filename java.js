// JavaScript para la página del carrito

// Obtiene los productos del carrito desde el almacenamiento local (localStorage)
function getCartItems() {
    var items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  }
  
  // Agrega un producto al carrito
  function addToCart(product) {
    var cartItems = getCartItems();
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Redirecciona a la página del carrito
    window.location.href = 'carrito.html';
  }
  
  // Elimina un producto del carrito
  function deleteCartItem(index) {
    var cartItems = getCartItems();
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Recarga la página del carrito
    location.reload();
  }
  
  // Muestra los productos del carrito en la página
  function displayCartItems() {
    var cartItems = getCartItems();
    var cartItemsElement = document.getElementById('cart-items');
    
    if (cartItems.length === 0) {
      cartItemsElement.innerHTML = '<p>No hay productos en el carrito.</p>';
      return;
    }
    
    cartItemsElement.innerHTML = '';
    
    for (var i = 0; i < cartItems.length; i++) {
      var cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      
      var productElement = document.createElement('span');
      productElement.textContent = cartItems[i];
      
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.className = 'delete-button';
      deleteButton.setAttribute('data-index', i);
      deleteButton.addEventListener('click', function() {
        var index = this.getAttribute('data-index');
        deleteCartItem(index);
      });
      
      cartItemElement.appendChild(productElement);
      cartItemElement.appendChild(deleteButton);
      
      cartItemsElement.appendChild(cartItemElement);
    }
  }
  
  // Calcula y muestra el total de la compra
  function displayTotalPrice() {
    var cartItems = getCartItems();
    var totalPriceElement = document.getElementById('total-price');
    var totalPrice = 0;
    
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i] === 'paquete') {
        totalPrice += 550;
      } else if (cartItems[i] === 'combo5') {
        totalPrice += 2500;
      } else if (cartItems[i] === 'combo10') {
        totalPrice += 5000;
      }
    }
    
    totalPriceElement.innerHTML = '<h3>Total: $' + totalPrice + '</h3>';
  }
  
  // Función principal para cargar los productos del carrito y mostrar el total
  function main() {
    displayCartItems();
    displayTotalPrice();
  }
  
  main();


// Función para generar un número de compra aleatorio
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Función para mostrar la advertencia de compra finalizada
  function showPurchaseConfirmation() {
    var randomNum = generateRandomNumber(1, 1000);
    alert("¡Compra finalizada! Tu número de compra es: " + randomNum);
  }
  
  // Función principal para cargar los productos del carrito y mostrar el total
  function main() {
    displayCartItems();
    displayTotalPrice();
  
    var finalizeButton = document.getElementById('finalize-button');
    finalizeButton.addEventListener('click', showPurchaseConfirmation);
  }
  
  main();
  