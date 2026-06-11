$(document).ready(function() {
    // 1. Dynamic HTML Fragments Loading
    $(".header").load("header.html", function() {
        updateHeaderCartCount();
        highlightActiveLink();
    });
    $(".footer").load("footer.html");

    // 2. Shared Cart State Management
    function getCart() {
        try {
            return JSON.parse(localStorage.getItem('foodie_cart')) || [];
        } catch (e) {
            return [];
        }
    }

    function saveCart(cart) {
        localStorage.setItem('foodie_cart', JSON.stringify(cart));
        updateHeaderCartCount();
    }

    function addToCart(name, price, img, qty = 1) {
        let cart = getCart();
        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.qty += qty;
        } else {
            cart.push({ name, price: parseFloat(price), img, qty });
        }
        saveCart(cart);
        showToast(`${name} added to cart!`);
    }

    function removeFromCart(name) {
        let cart = getCart();
        cart = cart.filter(item => item.name !== name);
        saveCart(cart);
    }

    function updateQty(name, delta) {
        let cart = getCart();
        let item = cart.find(item => item.name === name);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                cart = cart.filter(i => i.name !== name);
            }
            saveCart(cart);
        }
    }

    function clearCart() {
        localStorage.removeItem('foodie_cart');
        updateHeaderCartCount();
    }

    function updateHeaderCartCount() {
        let cart = getCart();
        let totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
        
        // Update header link
        let cartLink = $('#header-cart-link');
        if (cartLink.length) {
            cartLink.html(`🛒 Cart (${totalCount})`);
        }
        
        // Update floating cart if present on Menu page
        let floatingCart = $('#floating-cart');
        if (floatingCart.length) {
            let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            $('#cart-count').text(totalCount);
            $('#cart-total-btn').text(totalPrice.toFixed(2));
            $('#modal-total-price').text(totalPrice.toFixed(2));
            
            if (totalCount > 0) {
                floatingCart.fadeIn();
            } else {
                floatingCart.fadeOut();
            }
        }
    }

    function highlightActiveLink() {
        let currentPath = window.location.pathname.split("/").pop();
        if (!currentPath || currentPath === "index.html") {
            currentPath = "index.html";
        }
        $('header nav ul li a').each(function() {
            let linkPath = $(this).attr('href');
            if (linkPath === currentPath) {
                $(this).css({
                    'color': 'var(--primary)',
                    'background': 'rgba(255, 71, 87, 0.05)',
                    'font-weight': '700'
                });
            }
        });
    }

    function showToast(message) {
        let toastEl = $('#cartToast');
        if (!toastEl.length) {
            // Create toast container dynamically if not present
            $('body').append(`
                <div class="toast-container position-fixed bottom-0 start-0 p-3" style="z-index: 1100;">
                    <div id="cartToast" class="toast align-items-center text-bg-success border-0 shadow" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="d-flex">
                            <div class="toast-body fw-bold" id="toast-message"></div>
                            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            `);
            toastEl = $('#cartToast');
        }
        $('#toast-message').text(message);
        let bsToast = new bootstrap.Toast(toastEl[0], { delay: 2000 });
        bsToast.show();
    }

    // 3. Event Listeners for Adding to Cart
    
    // Products Page (Menu) Add to Cart
    $(document).on('click', '.add-to-cart-btn', function() {
        let name = $(this).data('name');
        let price = $(this).data('price');
        let card = $(this).closest('.product-card');
        let img = card.find('img').attr('src') || 'images/pizza.jpg';
        addToCart(name, price, img, 1);
    });

    // Categories Page Add to Cart
    $(document).on('click', '.category .item .btn', function(e) {
        e.preventDefault();
        let item = $(this).closest('.item');
        let name = item.find('h2').text();
        let bgImg = item.css('background-image');
        let img = 'images/pizza.jpg';
        if (bgImg && bgImg !== 'none') {
            img = bgImg.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
        }
        // Categories page item standard price: ₹150
        addToCart(name, 150, img, 1);
        
        // Show checkout overlay button in Categories
        let cart = getCart();
        let totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
        let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        $('#simple-checkout-btn').text(`Checkout ${totalCount} items (₹${totalPrice})`).fadeIn();
    });

    // Product Detail Page Add to Cart
    $(document).on('click', '.detail-add-btn', function(e) {
        e.preventDefault();
        let name = $(this).data('name');
        let price = $(this).data('price');
        let img = $(this).data('img');
        let qty = parseInt($('#detail-qty').val()) || 1;
        addToCart(name, price, img, qty);
    });

    // 4. Cart Page Rendering and Actions
    if ($('#cart-body-items').length) {
        renderCartPage();
    }

    function renderCartPage() {
        let cart = getCart();
        let cartBody = $('#cart-body-items');
        cartBody.empty();

        if (cart.length === 0) {
            cartBody.append(`
                <tr>
                    <td colspan="6" class="text-center py-5">
                        <h4 class="text-muted mb-4">Your Shopping Cart is Empty</h4>
                        <a href="products.html" class="btn">Order Tasty Food Now</a>
                    </td>
                </tr>
            `);
            $('#subtotal-amount').text('0');
            $('#delivery-amount').text('0');
            $('#final-total').text('0');
            return;
        }

        let subtotal = 0;
        cart.forEach((item, index) => {
            let rowTotal = item.price * item.qty;
            subtotal += rowTotal;
            cartBody.append(`
                <tr class="cart-row" data-name="${item.name}">
                    <td>
                        <img src="${item.img}" alt="${item.name}" class="cart-img">
                    </td>
                    <td class="item-name fs-5"><b>${item.name}</b></td>
                    <td class="fs-5">₹${item.price}</td>
                    <td>
                        <div class="d-flex align-items-center justify-content-center">
                            <button class="qty-btn btn-qty-minus" data-name="${item.name}">-</button>
                            <span class="qty-text mx-3 fs-5">${item.qty}</span>
                            <button class="qty-btn btn-qty-plus" data-name="${item.name}">+</button>
                        </div>
                    </td>
                    <td class="text-danger fw-bold fs-5">₹<span class="row-total">${rowTotal}</span></td>
                    <td>
                        <button type="button" class="btn btn-danger px-4 btn-remove-item" data-name="${item.name}">Remove</button>
                    </td>
                </tr>
            `);
        });

        $('#subtotal-amount').text(subtotal);
        let deliveryFee = 10;
        $('#delivery-amount').text(deliveryFee);
        $('#final-total').text(subtotal + deliveryFee);
    }

    // Cart Page Event Handlers
    $(document).on('click', '.btn-qty-plus', function() {
        let name = $(this).data('name');
        updateQty(name, 1);
        renderCartPage();
    });

    $(document).on('click', '.btn-qty-minus', function() {
        let name = $(this).data('name');
        updateQty(name, -1);
        renderCartPage();
    });

    let itemToRemove = null;
    $(document).on('click', '.btn-remove-item', function() {
        itemToRemove = $(this).data('name');
        let removeModal = new bootstrap.Modal(document.getElementById('removeConfirmModal'));
        removeModal.show();
    });

    $(document).on('click', '#confirm-remove-btn', function() {
        if (itemToRemove) {
            let row = $(`.cart-row[data-name="${itemToRemove}"]`);
            row.addClass('fade-out');
            setTimeout(() => {
                removeFromCart(itemToRemove);
                renderCartPage();
                itemToRemove = null;
            }, 300);
        }
    });

    // 5. Checkout & Payment Handling
    if ($('#checkout-total').length) {
        let cart = getCart();
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        let total = subtotal > 0 ? subtotal + 10 : 0;
        $('#checkout-total').text(`Total: ₹${total}`);
        localStorage.setItem('cartTotal', total);
    }

    $(document).on('submit', '#paymentForm', function(e) {
        e.preventDefault();
        let btn = $('#pay-btn');
        btn.html('🔄 Authenticating Payment...');
        btn.prop('disabled', true);
        
        setTimeout(() => {
            btn.html('✅ Payment Successful!');
            btn.css({
                'background-color': '#28a745',
                'color': 'white'
            });
            setTimeout(() => {
                alert("Order Placed Successfully! Your food is on the way.");
                clearCart();
                window.location.href = "index.html";
            }, 1000);
        }, 2500);
    });

    // Categories Checkout Button Load check
    if ($('#simple-checkout-btn').length) {
        let cart = getCart();
        if (cart.length > 0) {
            let totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
            let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            $('#simple-checkout-btn').text(`Checkout ${totalCount} items (₹${totalPrice})`).show();
        }
        
        $('#simple-checkout-btn').on('click', function() {
            window.location.href = 'cart.html';
        });
    }
});