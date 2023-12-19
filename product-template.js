document.addEventListener('DOMContentLoaded', function () {
  const addToCartButton = document.querySelector('.add-to-cart-button');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function () {
      addToCart();
    });
  }

  function addToCart() {
    const productId = '{{ product.id }}';
    const quantity = 1;

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            id: productId,
            quantity: quantity,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateCartCount(data.item_count);
      })
      .catch((error) => {
        console.error('Error adding to cart:', error);
      });
  }

  function updateCartCount(count) {
    const cartCountElement = document.querySelector('.cart-count');

    if (cartCountElement) {
      cartCountElement.innerText = count;
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const addToCartButton = document.querySelector('.add-to-cart-button');
  const quantityInput = document.querySelector('.quantity-input');
  const removeItemButtons = document.querySelectorAll('.remove-item');

  if (addToCartButton) {
    addToCartButton.addEventListener('click', function () {
      addToCart();
    });
  }

  if (quantityInput) {
    quantityInput.addEventListener('change', function () {
      updateCartItemQuantity();
    });
  }

  if (removeItemButtons) {
    removeItemButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        removeCartItem(button.dataset.productId);
      });
    });
  }

  function addToCart() {
    // Implement the addToCart function as described in the previous answer.
    // ...

    // After successfully adding to the cart, you can update the cart count.
    // Example: updateCartCount(data.item_count);
  }

  function updateCartItemQuantity() {
    const productId = '{{ product.id }}';
    const quantity = quantityInput.valueAsNumber;

    updateCart(productId, quantity);
  }

  function removeCartItem(productId) {
    updateCart(productId, 0); // Setting quantity to 0 removes the item from the cart.
  }

  function updateCart(productId, quantity) {
    // Implement the updateCart function to interact with the Shopify Storefront API.
    // ...

    // After successfully updating the cart, you can update the cart count.
    // Example: updateCartCount(data.item_count);
  }

  function updateCartCount(count) {
    const cartCountElement = document.querySelector('.cart-count');

    if (cartCountElement) {
      cartCountElement.innerText = count;
    }
  }
});

//handle quantity input and remove button

document.addEventListener('DOMContentLoaded', function () {
  // ... (previous code)

  function updateCartItemQuantity() {
    const productId = '{{ product.id }}';
    const quantity = quantityInput.valueAsNumber;

    updateCart(productId, quantity);
  }

  function removeCartItem(productId) {
    // Prevent multiple submissions by disabling the button during the operation.
    const removeButton = document.querySelector(`.remove-item[data-product-id="${productId}"]`);
    if (removeButton) {
      removeButton.disabled = true;
    }

    updateCart(productId, 0); // Setting quantity to 0 removes the item from the cart.
  }

  // ... (remaining code)
});

