// FRENZ - Complete E-commerce Application

// Product Database with Fixed Images & Proper Categories
const products = [
  {
    id: 1,
    name: "Oversized Drop Shoulder Tee",
    price: 799,
    original: 1599,
    discount: "50%",
    category: "street",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Cargo Joggers - Olive Green",
    price: 1299,
    original: 2499,
    discount: "48%",
    category: "street",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Varsity Bomber Jacket",
    price: 2499,
    original: 4999,
    discount: "50%",
    category: "new",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=600&fit=crop",
    type: "new",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Graphic Hoodie - FRENZ Edition",
    price: 1499,
    original: 2999,
    discount: "50%",
    category: "street",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Chunky White Sneakers",
    price: 1999,
    original: 3999,
    discount: "50%",
    category: "sneakers",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Denim Jeans - Relaxed Fit",
    price: 1799,
    original: 3499,
    discount: "48%",
    category: "street",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.2,
  },
  {
    id: 7,
    name: "Corduroy Shirt - Rust Brown",
    price: 1299,
    original: 2599,
    discount: "50%",
    category: "new",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop",
    type: "new",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Layered Chain Necklace",
    price: 499,
    original: 999,
    discount: "50%",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Bucket Hat - Digital Camo",
    price: 599,
    original: 1199,
    discount: "50%",
    category: "street",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=600&fit=crop",
    type: "new",
    rating: 4.3,
  },
  {
    id: 10,
    name: "Puffer Vest - Unisex",
    price: 2299,
    original: 4599,
    discount: "50%",
    category: "new",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.6,
  },
  {
    id: 11,
    name: "Relaxed Sweatpants",
    price: 1199,
    original: 2399,
    discount: "50%",
    category: "street",
    image:
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=500&h=600&fit=crop",
    type: "sale",
    rating: 4.4,
  },
  {
    id: 12,
    name: "Vintage Washed Tee",
    price: 599,
    original: 1299,
    discount: "54%",
    category: "sale",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=600&fit=crop",
    type: "sale",
    rating: 4.5,
  },
  {
    id: 13,
    name: "Air Max Style Sneakers",
    price: 2999,
    original: 5999,
    discount: "50%",
    category: "sneakers",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=600&fit=crop",
    type: "shop",
    rating: 4.9,
  },
  {
    id: 14,
    name: "High Top Canvas Sneakers",
    price: 1499,
    original: 2999,
    discount: "50%",
    category: "sneakers",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=600&fit=crop",
    type: "new",
    rating: 4.5,
  },
  {
    id: 15,
    name: "Running Shoes - Neon",
    price: 2499,
    original: 4999,
    discount: "50%",
    category: "sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=600&fit=crop",
    type: "sale",
    rating: 4.6,
  },
];

// State Management
let cart = JSON.parse(localStorage.getItem("frenzCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("frenzWishlist")) || [];
let orders = JSON.parse(localStorage.getItem("frenzOrders")) || [];

// DOM Elements
const appContainer = document.getElementById("app");
const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");
const cartBadge = document.getElementById("cartBadge");
const wishlistBadge = document.getElementById("wishlistBadge");
const toastEl = document.getElementById("toast");

// Helper Functions
function saveData() {
  localStorage.setItem("frenzCart", JSON.stringify(cart));
  localStorage.setItem("frenzWishlist", JSON.stringify(wishlist));
  localStorage.setItem("frenzOrders", JSON.stringify(orders));
  updateBadges();
}

function updateBadges() {
  const cartTotal = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.textContent = cartTotal;
  if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
}

function showToast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2000);
}

function renderRating(rating) {
  const fullStars = Math.floor(rating);
  let stars = "";
  for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
  for (let i = fullStars; i < 5; i++) stars += '<i class="far fa-star"></i>';
  return stars;
}

// Wishlist Functions
function toggleWishlist(product) {
  const exists = wishlist.find((p) => p.id === product.id);
  if (exists) {
    wishlist = wishlist.filter((p) => p.id !== product.id);
    showToast(`Removed from wishlist ❤️`);
  } else {
    wishlist.push({ ...product });
    showToast(`Added to wishlist ❤️`);
  }
  saveData();
  updateWishlistButtons();
}

function isInWishlist(productId) {
  return wishlist.some((p) => p.id === productId);
}

function updateWishlistButtons() {
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    const id = parseInt(btn.dataset.id);
    const icon = btn.querySelector("i");
    if (isInWishlist(id)) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      btn.classList.add("active");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      btn.classList.remove("active");
    }
  });
}

// Cart Functions
function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveData();
  showToast(`${product.name} added to bag 🛍️`);
  renderCartSidebar();
}

function renderCartSidebar() {
  const container = document.getElementById("cartItems");
  const totalSpan = document.getElementById("cartTotal");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML =
      '<div class="empty-state">Your bag is empty 🛍️<br>Add some FRENZ style!</div>';
    if (totalSpan) totalSpan.innerText = "₹0";
    return;
  }

  let total = 0;
  container.innerHTML = cart
    .map((item) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      return `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" data-id="${item.id}" data-delta="-1">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                        <span class="remove-item" data-id="${item.id}">Remove</span>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");

  if (totalSpan) totalSpan.innerText = `₹${total}`;

  document.querySelectorAll(".qty-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const delta = parseInt(btn.dataset.delta);
      const existing = cart.find((i) => i.id === id);
      if (existing) {
        const newQty = existing.qty + delta;
        if (newQty <= 0) {
          cart = cart.filter((i) => i.id !== id);
        } else {
          existing.qty = newQty;
        }
        saveData();
        renderCartSidebar();
        showToast(delta > 0 ? "Added one more" : "Updated bag");
      }
    });
  });

  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.dataset.id);
      cart = cart.filter((i) => i.id !== id);
      saveData();
      renderCartSidebar();
      showToast("Removed from bag");
    });
  });
}

// Profile Page
function renderProfilePage() {
  const totalOrders = orders.length;
  const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
  const wishlistCount = wishlist.length;

  return `
        <div class="profile-page">
            <div class="profile-header">
                <div class="profile-avatar-large">
                    <i class="fas fa-user-circle"></i>
                </div>
                <h2>FRENZ User</h2>
                <p>frenz@streetwear.com • Member since 2025</p>
            </div>
            
            <div class="profile-stats-grid">
                <div class="stat-card">
                    <i class="fas fa-shopping-bag"></i>
                    <div class="stat-number">${totalOrders}</div>
                    <div class="stat-label">Total Orders</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-heart"></i>
                    <div class="stat-number">${wishlistCount}</div>
                    <div class="stat-label">Wishlist Items</div>
                </div>
                <div class="stat-card">
                    <i class="fas fa-rupee-sign"></i>
                    <div class="stat-number">₹${totalSpent.toLocaleString()}</div>
                    <div class="stat-label">Total Spent</div>
                </div>
            </div>
            
            <div class="recent-orders">
                <h3><i class="fas fa-clock"></i> Recent Orders</h3>
                ${
                  orders.length === 0
                    ? '<div class="empty-state">No orders yet. Start shopping! 🛍️</div>'
                    : orders
                        .slice()
                        .reverse()
                        .slice(0, 5)
                        .map(
                          (order) => `
                        <div class="order-item">
                            <div>
                                <div class="order-date">${new Date(order.date).toLocaleDateString("en-IN")}</div>
                                <div style="font-size: 13px; color: #9b8a7a;">${order.items.length} items</div>
                            </div>
                            <div class="order-amount">₹${order.total.toLocaleString()}</div>
                        </div>
                    `,
                        )
                        .join("")
                }
            </div>
        </div>
    `;
}

// Wishlist Page
function renderWishlistPage() {
  if (wishlist.length === 0) {
    return `
            <div class="wishlist-page">
                <div class="section-title">❤️ My Wishlist</div>
                <div class="empty-state">Your wishlist is empty 💔<br>Save items you love by clicking the heart button!</div>
            </div>
        `;
  }

  return `
        <div class="wishlist-page">
            <div class="section-title">❤️ My Wishlist (${wishlist.length} items)</div>
            <div class="wishlist-grid">
                ${wishlist
                  .map(
                    (item) => `
                    <div class="wishlist-card">
                        <img class="wishlist-img" src="${item.image}" alt="${item.name}" loading="lazy">
                        <div class="wishlist-info">
                            <div class="wishlist-title">${item.name}</div>
                            <div class="wishlist-price">₹${item.price} <span class="original-price">₹${item.original}</span></div>
                            <div class="wishlist-actions">
                                <button class="move-to-cart-btn" data-id="${item.id}"><i class="fas fa-bag-shopping"></i> Move to Bag</button>
                                <button class="remove-wishlist-btn" data-id="${item.id}"><i class="fas fa-trash"></i> Remove</button>
                            </div>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;
}

// Render Products
function renderProducts(filterType = "home", searchQuery = "") {
  let filtered = [...products];

  if (filterType === "shop")
    filtered = products.filter(
      (p) =>
        p.type === "shop" ||
        p.category === "shop" ||
        p.category === "sneakers" ||
        p.category === "accessories",
    );
  else if (filterType === "new")
    filtered = products.filter((p) => p.type === "new");
  else if (filterType === "street")
    filtered = products.filter((p) => p.category === "street");
  else if (filterType === "sale")
    filtered = products.filter(
      (p) => p.type === "sale" || p.category === "sale",
    );

  if (searchQuery) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // Special handling for profile and wishlist pages
  if (filterType === "profile") {
    appContainer.innerHTML = renderProfilePage();
    return;
  }

  if (filterType === "wishlist-page") {
    appContainer.innerHTML = renderWishlistPage();
    // Attach event listeners for wishlist page
    setTimeout(() => {
      document.querySelectorAll(".move-to-cart-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(btn.dataset.id);
          const product = wishlist.find((p) => p.id === id);
          if (product) {
            addToCart(product);
            wishlist = wishlist.filter((p) => p.id !== id);
            saveData();
            renderWishlistPage();
            renderProducts("wishlist-page", "");
            showToast(`Moved to bag 🛍️`);
          }
        });
      });
      document.querySelectorAll(".remove-wishlist-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(btn.dataset.id);
          wishlist = wishlist.filter((p) => p.id !== id);
          saveData();
          renderProducts("wishlist-page", "");
          showToast(`Removed from wishlist`);
        });
      });
    }, 100);
    return;
  }

  const heroHTML =
    filterType === "home"
      ? `
        <div class="hero">
            <div class="hero-badge">🔥 Limited Time Offers</div>
            <h2>FRENZ <span>for the squad</span></h2>
            <p>Streetwear culture, desi prices. Grab the drip before it's gone.</p>
        </div>
        <div class="categories-banner">
            <div class="cat-card" data-cat="shop">
                <i class="fas fa-tshirt"></i>
                <h4>Trending</h4>
                <p>Shop bestsellers</p>
            </div>
            <div class="cat-card" data-cat="street">
                <i class="fas fa-shoe-prints"></i>
                <h4>Streetwear</h4>
                <p>Hoodies & cargos</p>
            </div>
            <div class="cat-card" data-cat="new">
                <i class="fas fa-star"></i>
                <h4>New Arrivals</h4>
                <p>Fresh drops</p>
            </div>
            <div class="cat-card" data-cat="sale">
                <i class="fas fa-fire"></i>
                <h4>Sale</h4>
                <p>Up to 60% off</p>
            </div>
        </div>
        <div class="section-title">🔥 Most Loved by FRENZ <span>View All →</span></div>
    `
      : `<div class="section-title">${filterType === "shop" ? "🛍️ Trending Now" : filterType === "new" ? "✨ Fresh Drops" : filterType === "street" ? "🛹 Street Culture" : "🔥 Mega Sale"} (${filtered.length} items) <span>Shop All →</span></div>`;

  const gridHTML = `
        <div class="product-grid">
            ${filtered
              .map(
                (p) => `
                <div class="product-card">
                    <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy">
                    <div class="product-info">
                        <div class="product-title">${p.name}</div>
                        <div class="rating">${renderRating(p.rating)} <span style="color:#9b8a7a;">(${p.rating})</span></div>
                        <div class="product-price">
                            ₹${p.price}
                            <span class="original-price">₹${p.original}</span>
                            <span class="discount">${p.discount} OFF</span>
                        </div>
                        <div class="button-group">
                            <button class="wishlist-btn" data-id="${p.id}"><i class="far fa-heart"></i></button>
                            <button class="add-btn" data-id="${p.id}"><i class="fas fa-bag-shopping"></i> Add to Bag</button>
                        </div>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    `;

  const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-col">
                    <h4>FRENZ</h4>
                    <p>Streetwear for the squad. India's fastest growing youth fashion brand.</p>
                    <div class="social-icons">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Shop</h4>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Accessories</a>
                    <a href="#">Sale</a>
                </div>
                <div class="footer-col">
                    <h4>Support</h4>
                    <a href="#">Contact Us</a>
                    <a href="#">Returns</a>
                    <a href="#">Size Guide</a>
                    <a href="#">Track Order</a>
                </div>
                <div class="footer-col">
                    <h4>Download App</h4>
                    <p>Get 15% off on first order</p>
                    <i class="fab fa-google-play" style="font-size: 28px; margin-top: 10px;"></i>
                </div>
            </div>
            <div class="copyright">© 2025 FRENZ — For the squad. All rights reserved. Made in India 🇮🇳</div>
        </footer>
    `;

  appContainer.innerHTML = heroHTML + gridHTML + footerHTML;

  // Add to Cart buttons
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const product = products.find((p) => p.id === id);
      if (product) addToCart(product);
    });
  });

  // Wishlist buttons
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const product = products.find((p) => p.id === id);
      if (product) toggleWishlist(product);
    });
  });

  updateWishlistButtons();

  // Category cards
  document.querySelectorAll(".cat-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.dataset.cat;
      if (cat) navigateTo(cat);
    });
  });

  const viewAllSpan = document.querySelector(".section-title span");
  if (viewAllSpan && filterType === "home") {
    viewAllSpan.addEventListener("click", () => navigateTo("shop"));
  }
}

// Navigation
let currentPage = "home";
let currentSearch = "";

function navigateTo(page) {
  currentPage = page;
  currentSearch = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const searchBar = document.getElementById("searchBar");
  if (searchBar) searchBar.classList.remove("active");
  renderProducts(page, "");
  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.dataset.page === page) link.classList.add("active-nav");
    else link.classList.remove("active-nav");
  });
  if (window.innerWidth <= 768) closeMobileNav();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeCart() {
  if (cartSidebar) cartSidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
}

// Event Listeners
document.getElementById("cartIcon")?.addEventListener("click", () => {
  if (cartSidebar) cartSidebar.classList.add("open");
  if (overlay) overlay.classList.add("active");
  renderCartSidebar();
});

document.getElementById("wishlistIcon")?.addEventListener("click", () => {
  navigateTo("wishlist-page");
});

document.getElementById("userIcon")?.addEventListener("click", () => {
  navigateTo("profile");
});

document.getElementById("closeCart")?.addEventListener("click", closeCart);
overlay?.addEventListener("click", closeCart);

document.getElementById("searchIcon")?.addEventListener("click", () => {
  const bar = document.getElementById("searchBar");
  if (bar) bar.classList.toggle("active");
});

document.getElementById("searchBtn")?.addEventListener("click", () => {
  const query = document.getElementById("searchInput")?.value.trim() || "";
  currentSearch = query;
  renderProducts(currentPage, query);
});

document.getElementById("searchInput")?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.getElementById("searchBtn")?.click();
  }
});

document.getElementById("checkoutBtn")?.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Bag is empty! Add some drip ✨");
    return;
  }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  orders.push({
    date: new Date().toISOString(),
    total: total,
    items: [...cart],
  });
  saveData();
  alert(
    `🧾 Order placed successfully! \nTotal: ₹${total} \n\nThank you for shopping with FRENZ. Your squad is waiting! 🎉`,
  );
  cart = [];
  saveData();
  closeCart();
  renderCartSidebar();
  showToast("Order confirmed! 🎉");
});

// Mobile Navigation
let mobileNavDiv = null;
function createMobileNav() {
  if (document.querySelector(".mobile-nav")) return;
  const navDiv = document.createElement("div");
  navDiv.className = "mobile-nav";
  navDiv.innerHTML = `
        <ul>
            <li><a href="#" data-page="home">🏠 Home</a></li>
            <li><a href="#" data-page="shop">🛍️ Shop</a></li>
            <li><a href="#" data-page="new">✨ New Arrivals</a></li>
            <li><a href="#" data-page="street">🛹 Street Culture</a></li>
            <li><a href="#" data-page="sale">🔥 Sale</a></li>
            <li><a href="#" data-page="profile">👤 Profile</a></li>
            <li><a href="#" data-page="wishlist-page">❤️ Wishlist</a></li>
        </ul>
    `;
  document.body.appendChild(navDiv);
  navDiv.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(a.dataset.page);
      closeMobileNav();
    });
  });
  mobileNavDiv = navDiv;
}

function openMobileNav() {
  if (!mobileNavDiv) createMobileNav();
  if (mobileNavDiv) mobileNavDiv.classList.add("open");
  if (overlay) overlay.classList.add("active");
  if (overlay) overlay.onclick = closeMobileNav;
}

function closeMobileNav() {
  if (mobileNavDiv) mobileNavDiv.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  if (overlay) overlay.onclick = closeCart;
}

document.getElementById("menuBtn")?.addEventListener("click", openMobileNav);

// Set up main nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// Initialize App
function init() {
  createMobileNav();
  navigateTo("home");
  updateBadges();
  renderCartSidebar();
}
init();
