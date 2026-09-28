

/* ==========================================================================
   Sebitas Toys - APPLICATION CONTROLLER & UI ENGINE
   Anime · Coleccionables · Juegos
   ========================================================================== */

(function () {
  'use strict';

  // Global State
  const state = {
    currentView: 'home',      // 'home', 'catalog', 'checkout', 'account'
    category: 'all',          // 'all', 'anime', 'figuras', 'juegos-mesa', 'juegos-cartas', 'coleccionables', 'accesorios', 'ofertas'
    homeCategory: 'all',      // For instant home page product filtering
    franchise: 'all',
    searchQuery: '',
    priceMin: 0,
    priceMax: 1500,
    availability: 'all',      // 'all', 'stock', 'oferta'
    sortBy: 'relevance',      // 'relevance', 'price-asc', 'price-desc', 'name-asc', 'rating-desc', 'newest'
    currentModalProduct: null,
    modalQty: 1,
    carouselIndex: 0,
    carouselInterval: null
  };

  // DOM Cache
  const DOM = {};

  function cacheDOM() {
    // Navigation
    DOM.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    DOM.mobileMenuToggle = document.getElementById('mobileMenuToggle');
    DOM.mobileNavDrawer = document.getElementById('mobileNavDrawer');
    DOM.mobileNavClose = document.getElementById('mobileNavClose');
    DOM.mobileNavOverlay = document.getElementById('mobileNavOverlay');

    // Top utility buttons
    DOM.searchToggleBtns = document.querySelectorAll('.search-toggle-btn');
    DOM.favoritesToggleBtns = document.querySelectorAll('.favorites-toggle-btn');
    DOM.cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
    DOM.accountToggleBtns = document.querySelectorAll('.account-toggle-btn');

    // Views / Sections
    DOM.homeView = document.getElementById('homeView');
    DOM.catalogView = document.getElementById('catalogView');
    DOM.checkoutView = document.getElementById('checkoutView');

    // Hero Carousel Elements
    DOM.heroCarousel = document.getElementById('heroCarousel');
    DOM.heroCarouselTrack = document.getElementById('heroCarouselTrack');
    DOM.heroCarouselSlides = document.querySelectorAll('.hero-carousel-slide');
    DOM.heroPrevBtn = document.getElementById('heroPrevBtn');
    DOM.heroNextBtn = document.getElementById('heroNextBtn');
    DOM.heroCarouselDots = document.getElementById('heroCarouselDots');

    // Home Products Section & Filter Tabs
    DOM.homeCategoryTabs = document.getElementById('homeCategoryTabs');
    DOM.homeMainProductsGrid = document.getElementById('homeMainProductsGrid');
    DOM.categoriesGrid = document.getElementById('categoriesGrid');
    DOM.featuredProductsGrid = document.getElementById('featuredProductsGrid');
    DOM.newArrivalsGrid = document.getElementById('newArrivalsGrid');
    DOM.dealsGrid = document.getElementById('dealsGrid');

    // Catalog Elements
    DOM.catalogProductsGrid = document.getElementById('catalogProductsGrid');
    DOM.catalogResultsCount = document.getElementById('catalogResultsCount');
    DOM.catalogNoResults = document.getElementById('catalogNoResults');
    DOM.catalogCategoryPills = document.getElementById('catalogCategoryPills');
    DOM.franchiseSelect = document.getElementById('franchiseFilter');
    DOM.sortSelect = document.getElementById('catalogSortSelect');
    DOM.priceRangeSlider = document.getElementById('priceRangeSlider');
    DOM.priceRangeValue = document.getElementById('priceRangeValue');
    DOM.availabilityRadios = document.querySelectorAll('input[name="availability"]');
    DOM.searchInput = document.getElementById('catalogSearchInput');
    DOM.clearSearchBtn = document.getElementById('clearSearchBtn');
    DOM.clearAllFiltersBtn = document.getElementById('clearAllFiltersBtn');
    DOM.activeFilterTags = document.getElementById('activeFilterTags');

    // Search Drawer / Modal
    DOM.searchModal = document.getElementById('searchModal');
    DOM.searchModalClose = document.getElementById('searchModalClose');
    DOM.searchModalInput = document.getElementById('searchModalInput');
    DOM.searchModalResults = document.getElementById('searchModalResults');

    // Cart Drawer
    DOM.cartDrawer = document.getElementById('cartDrawer');
    DOM.cartOverlay = document.getElementById('cartOverlay');
    DOM.cartCloseBtn = document.getElementById('cartCloseBtn');
    DOM.cartItemsList = document.getElementById('cartItemsList');
    DOM.cartEmptyState = document.getElementById('cartEmptyState');
    DOM.cartFooter = document.getElementById('cartFooter');
    DOM.cartSubtotal = document.getElementById('cartSubtotal');
    DOM.cartShipping = document.getElementById('cartShipping');
    DOM.cartTotal = document.getElementById('cartTotal');
    DOM.cartShippingNotice = document.getElementById('cartShippingNotice');
    DOM.goToCheckoutBtn = document.getElementById('goToCheckoutBtn');

    // Favorites Drawer / Modal
    DOM.favoritesModal = document.getElementById('favoritesModal');
    DOM.favoritesModalClose = document.getElementById('favoritesModalClose');
    DOM.favoritesItemsList = document.getElementById('favoritesItemsList');
    DOM.favoritesEmptyState = document.getElementById('favoritesEmptyState');

    // Product Detail Modal
    DOM.productModal = document.getElementById('productModal');
    DOM.productModalClose = document.getElementById('productModalClose');
    DOM.modalMainImage = document.getElementById('modalMainImage');
    DOM.modalThumbnails = document.getElementById('modalThumbnails');
    DOM.modalCategoryBadge = document.getElementById('modalCategoryBadge');
    DOM.modalFranchiseBadge = document.getElementById('modalFranchiseBadge');
    DOM.modalProductTitle = document.getElementById('modalProductTitle');
    DOM.modalRatingStars = document.getElementById('modalRatingStars');
    DOM.modalRatingScore = document.getElementById('modalRatingScore');
    DOM.modalReviewsCount = document.getElementById('modalReviewsCount');
    DOM.modalCurrentPrice = document.getElementById('modalCurrentPrice');
    DOM.modalOldPrice = document.getElementById('modalOldPrice');
    DOM.modalDiscountBadge = document.getElementById('modalDiscountBadge');
    DOM.modalStockBadge = document.getElementById('modalStockBadge');
    DOM.modalDescription = document.getElementById('modalDescription');
    DOM.modalSpecsContainer = document.getElementById('modalSpecsContainer');
    DOM.modalQtyInput = document.getElementById('modalQtyInput');
    DOM.modalQtyMinus = document.getElementById('modalQtyMinus');
    DOM.modalQtyPlus = document.getElementById('modalQtyPlus');
    DOM.modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    DOM.modalBuyNowBtn = document.getElementById('modalBuyNowBtn');
    DOM.modalFavBtn = document.getElementById('modalFavBtn');
    DOM.modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
    DOM.modalRelatedGrid = document.getElementById('modalRelatedGrid');

    // Checkout Elements
    DOM.checkoutForm = document.getElementById('checkoutForm');
    DOM.checkoutItemsSummary = document.getElementById('checkoutItemsSummary');
    DOM.checkoutSubtotal = document.getElementById('checkoutSubtotal');
    DOM.checkoutShipping = document.getElementById('checkoutShipping');
    DOM.checkoutTotal = document.getElementById('checkoutTotal');
    DOM.clientFullName = document.getElementById('clientFullName');
    DOM.clientPhone = document.getElementById('clientPhone');
    DOM.clientCity = document.getElementById('clientCity');
    DOM.clientAddress = document.getElementById('clientAddress');
    DOM.clientReference = document.getElementById('clientReference');
    DOM.deliveryRadios = document.querySelectorAll('input[name="deliveryMethod"]');
    DOM.paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    DOM.confirmOrderBtn = document.getElementById('confirmOrderBtn');
    DOM.orderSuccessModal = document.getElementById('orderSuccessModal');
    DOM.orderSuccessClose = document.getElementById('orderSuccessClose');
    DOM.successOrderNumber = document.getElementById('successOrderNumber');
    DOM.successOrderTotal = document.getElementById('successOrderTotal');
    DOM.successWhatsAppDirectBtn = document.getElementById('successWhatsAppDirectBtn');
    DOM.viewMyOrdersFromSuccess = document.getElementById('viewMyOrdersFromSuccess');

    // Account Modal / Orders
    DOM.accountModal = document.getElementById('accountModal');
    DOM.accountModalClose = document.getElementById('accountModalClose');
    DOM.accountTabs = document.querySelectorAll('.account-tab-btn');
    DOM.accountTabPanes = document.querySelectorAll('.account-tab-pane');
    DOM.ordersListContainer = document.getElementById('ordersListContainer');
    DOM.ordersEmptyState = document.getElementById('ordersEmptyState');
    DOM.profileForm = document.getElementById('profileForm');
    DOM.profileName = document.getElementById('profileName');
    DOM.profilePhone = document.getElementById('profilePhone');
    DOM.profileCity = document.getElementById('profileCity');
    DOM.profileAddress = document.getElementById('profileAddress');
    DOM.profileReference = document.getElementById('profileReference');
    DOM.savedAddressesList = document.getElementById('savedAddressesList');

    // Scroll to Top
    DOM.scrollTopBtn = document.getElementById('scrollTopBtn');
  }

  /* ================= INITIALIZATION ================= */
  function init() {
    cacheDOM();
    setupUrlRouting();
    initHeroCarousel();
    renderHomeMainProducts('all');
    renderCategoriesGrid();
    renderHomeSections();
    populateFranchiseFilter();
    renderCatalogCategoryPills();
    renderCatalog();
    populateProfileForm();
    bindEvents();
    updateCartUI();
    updateFavoritesUI();
    renderOrdersList();
  }

  /* ================= HERO CAROUSEL ENGINE ================= */
  function initHeroCarousel() {
    if (!DOM.heroCarouselTrack || !DOM.heroCarouselSlides || DOM.heroCarouselSlides.length === 0) return;

    const totalSlides = DOM.heroCarouselSlides.length;

    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      state.carouselIndex = index;

      DOM.heroCarouselTrack.style.transform = `translateX(-${index * 100}%)`;

      // Update active class on slides
      DOM.heroCarouselSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });

      // Update active dot
      if (DOM.heroCarouselDots) {
        const dots = DOM.heroCarouselDots.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
    }

    function nextSlide() {
      goToSlide(state.carouselIndex + 1);
    }

    function prevSlide() {
      goToSlide(state.carouselIndex - 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      state.carouselInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
      if (state.carouselInterval) {
        clearInterval(state.carouselInterval);
        state.carouselInterval = null;
      }
    }

    // Attach button listeners
    if (DOM.heroPrevBtn) {
      DOM.heroPrevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        startAutoPlay();
      });
    }

    if (DOM.heroNextBtn) {
      DOM.heroNextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        startAutoPlay();
      });
    }

    // Attach dot click listeners
    if (DOM.heroCarouselDots) {
      const dots = DOM.heroCarouselDots.querySelectorAll('.carousel-dot');
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          goToSlide(i);
          startAutoPlay();
        });
      });
    }

    // Pause on hover
    if (DOM.heroCarousel) {
      DOM.heroCarousel.addEventListener('mouseenter', stopAutoPlay);
      DOM.heroCarousel.addEventListener('mouseleave', startAutoPlay);

      // Touch / Swipe Support
      let touchStartX = 0;
      let touchEndX = 0;

      DOM.heroCarousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
      }, { passive: true });

      DOM.heroCarousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
      }, { passive: true });

      function handleSwipe() {
        const threshold = 40;
        if (touchStartX - touchEndX > threshold) {
          nextSlide();
        } else if (touchEndX - touchStartX > threshold) {
          prevSlide();
        }
      }
    }

    // Initialize first slide and start autoplay
    goToSlide(0);
    startAutoPlay();
  }

  /* ================= URL ROUTING ================= */
  function setupUrlRouting() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    const search = params.get('q');
    const view = params.get('view');

    if (cat) {
      state.category = cat.toLowerCase();
      showView('catalog');
    } else if (search) {
      state.searchQuery = search.toLowerCase();
      if (DOM.searchInput) DOM.searchInput.value = search;
      showView('catalog');
    } else if (view === 'checkout') {
      showView('checkout');
    } else if (view === 'catalog') {
      showView('catalog');
    } else {
      showView('home');
    }
  }

  /* View Switcher */
  function showView(viewName) {
    state.currentView = viewName;

    if (DOM.homeView) DOM.homeView.style.display = viewName === 'home' ? 'block' : 'none';
    if (DOM.catalogView) DOM.catalogView.style.display = viewName === 'catalog' ? 'block' : 'none';
    if (DOM.checkoutView) DOM.checkoutView.style.display = viewName === 'checkout' ? 'block' : 'none';

    // Update active state in nav links
    DOM.navLinks.forEach(link => {
      const linkView = link.dataset.view;
      const linkCat = link.dataset.category;

      if (viewName === 'home' && linkView === 'home') {
        link.classList.add('active');
      } else if (viewName === 'catalog' && linkCat === state.category) {
        link.classList.add('active');
      } else if (viewName === 'catalog' && !linkCat && linkView === 'catalog' && state.category === 'all') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (viewName === 'checkout') {
      renderCheckoutSummary();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ================= HOME PAGE: DIRECT PRODUCTS SHOWCASE ================= */
  function renderHomeMainProducts(category = 'all') {
    state.homeCategory = category;
    if (!DOM.homeMainProductsGrid) return;

    let filtered = PRODUCTS_DATA;
    if (category === 'ofertas') {
      filtered = PRODUCTS_DATA.filter(p => p.oldPrice && p.oldPrice > p.price);
    } else if (category !== 'all') {
      filtered = PRODUCTS_DATA.filter(p => p.category === category);
    }

    DOM.homeMainProductsGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents(DOM.homeMainProductsGrid);

    // Update tab pills active state
    if (DOM.homeCategoryTabs) {
      const tabs = DOM.homeCategoryTabs.querySelectorAll('.home-tab-pill');
      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
      });
    }
  }

  function setHomeCategoryFilter(category) {
    showView('home');
    renderHomeMainProducts(category);
    const targetSection = document.getElementById('productosInicioSection');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function renderCategoriesGrid() {
    if (!DOM.categoriesGrid) return;
    DOM.categoriesGrid.innerHTML = CATEGORIES_DATA.map(cat => `
      <article class="category-card" data-category="${cat.id}">
        <div class="category-card-img-wrap">
          <img src="${cat.image}" alt="${cat.name}" loading="lazy" onerror="this.src='img/hero-banner.jpg'">
          <div class="category-card-overlay"></div>
        </div>
        <div class="category-card-content">
          <div class="category-card-icon">
            <i class="fas ${cat.icon}"></i>
          </div>
          <h3 class="category-card-title">${cat.name}</h3>
          <p class="category-card-desc">${cat.description}</p>
          <span class="category-card-link">
            Explorar categoría <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </article>
    `).join('');

    DOM.categoriesGrid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.dataset.category;
        setHomeCategoryFilter(cat);
      });
    });
  }

  function renderHomeSections() {
    // 1. Featured Products (Destacados)
    if (DOM.featuredProductsGrid) {
      const featured = PRODUCTS_DATA.filter(p => p.isFeatured);
      DOM.featuredProductsGrid.innerHTML = featured.map(p => createProductCardHTML(p)).join('');
      attachProductCardEvents(DOM.featuredProductsGrid);
    }

    // 2. New Arrivals (Nuevos Productos)
    if (DOM.newArrivalsGrid) {
      const newItems = PRODUCTS_DATA.filter(p => p.isNew).slice(0, 4);
      DOM.newArrivalsGrid.innerHTML = newItems.map(p => createProductCardHTML(p)).join('');
      attachProductCardEvents(DOM.newArrivalsGrid);
    }

    // 3. Deals (Ofertas)
    if (DOM.dealsGrid) {
      const deals = PRODUCTS_DATA.filter(p => p.oldPrice && p.oldPrice > p.price);
      DOM.dealsGrid.innerHTML = deals.map(p => createProductCardHTML(p)).join('');
      attachProductCardEvents(DOM.dealsGrid);
    }
  }

  /* ================= PRODUCT CARD COMPONENT ================= */
  function createProductCardHTML(p) {
    const isFav = FavoritesManager.isFavorite(p.id);
    const hasDiscount = p.oldPrice && p.oldPrice > p.price;
    const discountPercent = hasDiscount ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;

    // Rating stars generator
    const fullStars = Math.floor(p.rating);
    const hasHalfStar = p.rating % 1 >= 0.5;
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += '<i class="fas fa-star"></i>';
      } else if (i === fullStars && hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
      } else {
        starsHtml += '<i class="far fa-star"></i>';
      }
    }

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-card-media">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='img/hero-banner.jpg'">
          
          <div class="product-card-badges">
            ${p.badge ? `<span class="badge badge-accent">${p.badge}</span>` : ''}
            ${hasDiscount ? `<span class="badge badge-deal">-${discountPercent}%</span>` : ''}
            ${p.stock <= 3 && p.stock > 0 ? `<span class="badge badge-warning">¡Solo quedan ${p.stock}!</span>` : ''}
          </div>

          <button class="product-fav-btn ${isFav ? 'active' : ''}" data-id="${p.id}" aria-label="Guardar en favoritos">
            <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
          </button>

          <button class="product-quick-view-btn" data-id="${p.id}" aria-label="Vista rápida de ${p.name}">
            <i class="fas fa-eye"></i> Vista Rápida
          </button>
        </div>

        <div class="product-card-body">
          <div class="product-card-meta">
            <span class="product-category-tag">${p.categoryName || p.category}</span>
            ${p.franchise ? `<span class="product-franchise-tag">${p.franchise}</span>` : ''}
          </div>

          <h3 class="product-card-title" title="${p.name}">
            <a href="javascript:void(0)" class="product-title-link" data-id="${p.id}">${p.name}</a>
          </h3>

          <div class="product-card-rating">
            <span class="stars-wrap">${starsHtml}</span>
            <span class="rating-value">${p.rating.toFixed(1)}</span>
            <span class="rating-count">(${p.reviewsCount || 12})</span>
          </div>

          <div class="product-card-bottom">
            <div class="product-price-box">
              <span class="current-price">
                <span class="currency">${STORE_CONFIG.currency}</span> ${p.price.toFixed(2)}
              </span>
              ${hasDiscount ? `
                <span class="old-price">${STORE_CONFIG.currency} ${p.oldPrice.toFixed(2)}</span>
              ` : ''}
            </div>

            <button class="btn-add-to-cart" data-id="${p.id}" aria-label="Agregar ${p.name} al carrito">
              <i class="fas fa-shopping-bag"></i> Agregar
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function attachProductCardEvents(container) {
    if (!container) return;

    // Open detail modal on click of image, title, or quick view
    container.querySelectorAll('.product-card').forEach(card => {
      const id = card.dataset.id;
      const product = PRODUCTS_DATA.find(x => x.id === id);

      const media = card.querySelector('.product-card-media img');
      const titleLink = card.querySelector('.product-title-link');
      const quickViewBtn = card.querySelector('.product-quick-view-btn');
      const favBtn = card.querySelector('.product-fav-btn');
      const addCartBtn = card.querySelector('.btn-add-to-cart');

      [media, titleLink, quickViewBtn].forEach(el => {
        if (el) {
          el.addEventListener('click', (e) => {
            e.stopPropagation();
            openProductDetailModal(product);
          });
        }
      });

      if (favBtn) {
        favBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isNowFav = FavoritesManager.toggle(id);
          favBtn.classList.toggle('active', isNowFav);
          const icon = favBtn.querySelector('i');
          if (icon) {
            icon.className = isNowFav ? 'fas fa-heart' : 'far fa-heart';
          }
        });
      }

      if (addCartBtn) {
        addCartBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          CartManager.addItem(id, 1);
          openCartDrawer();
        });
      }
    });
  }

  /* ================= CATALOG LOGIC & FILTERS ================= */
  function renderCatalogCategoryPills() {
    if (!DOM.catalogCategoryPills) return;

    const pills = [
      { id: 'all', name: 'Todos los productos', icon: 'fa-border-all' },
      ...CATEGORIES_DATA.map(c => ({ id: c.id, name: c.name, icon: c.icon })),
      { id: 'ofertas', name: 'Ofertas y Descuentos', icon: 'fa-tags' }
    ];

    DOM.catalogCategoryPills.innerHTML = pills.map(p => `
      <button class="cat-pill ${state.category === p.id ? 'active' : ''}" data-category="${p.id}">
        <i class="fas ${p.icon}"></i> ${p.name}
      </button>
    `).join('');

    DOM.catalogCategoryPills.querySelectorAll('.cat-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        setCatalogCategory(btn.dataset.category);
      });
    });
  }

  function populateFranchiseFilter() {
    if (!DOM.franchiseSelect) return;
    const franchises = getUniqueFranchises();
    DOM.franchiseSelect.innerHTML = `
      <option value="all">Todas las Franquicias</option>
      ${franchises.map(f => `<option value="${f}">${f}</option>`).join('')}
    `;
  }

  function setCatalogCategory(catId) {
    state.category = catId;
    renderCatalogCategoryPills();
    showView('catalog');
    renderCatalog();
  }

  function getFilteredCatalogProducts() {
    return PRODUCTS_DATA.filter(p => {
      // 1. Category Filter
      if (state.category === 'ofertas') {
        if (!p.oldPrice || p.oldPrice <= p.price) return false;
      } else if (state.category !== 'all' && p.category !== state.category) {
        return false;
      }

      // 2. Franchise Filter
      if (state.franchise !== 'all' && p.franchise !== state.franchise) {
        return false;
      }

      // 3. Search Query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        const searchable = `${p.name} ${p.categoryName || ''} ${p.franchise || ''} ${p.manufacturer || ''} ${p.description || ''}`.toLowerCase();
        if (!searchable.includes(query)) return false;
      }

      // 4. Price Max Filter
      if (p.price > state.priceMax) {
        return false;
      }

      // 5. Availability Filter
      if (state.availability === 'stock' && p.stock <= 0) return false;
      if (state.availability === 'oferta' && (!p.oldPrice || p.oldPrice <= p.price)) return false;

      return true;
    }).sort((a, b) => {
      switch (state.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'rating-desc':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'relevance':
        default:
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });
  }

  function renderCatalog() {
    if (!DOM.catalogProductsGrid) return;
    const filtered = getFilteredCatalogProducts();

    // Results count
    if (DOM.catalogResultsCount) {
      DOM.catalogResultsCount.innerHTML = `Mostrando <strong>${filtered.length}</strong> producto${filtered.length === 1 ? '' : 's'}`;
    }

    // Active filter tags (pills)
    renderActiveFilterTags();

    // Empty state
    if (filtered.length === 0) {
      DOM.catalogProductsGrid.innerHTML = '';
      if (DOM.catalogNoResults) DOM.catalogNoResults.style.display = 'block';
      return;
    }

    if (DOM.catalogNoResults) DOM.catalogNoResults.style.display = 'none';
    DOM.catalogProductsGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents(DOM.catalogProductsGrid);
  }

  function renderActiveFilterTags() {
    if (!DOM.activeFilterTags) return;
    const tags = [];

    if (state.category !== 'all') {
      const catObj = CATEGORIES_DATA.find(c => c.id === state.category);
      const label = state.category === 'ofertas' ? 'Ofertas' : (catObj ? catObj.name : state.category);
      tags.push({ key: 'category', label: `Categoría: ${label}` });
    }

    if (state.franchise !== 'all') {
      tags.push({ key: 'franchise', label: `Franquicia: ${state.franchise}` });
    }

    if (state.searchQuery) {
      tags.push({ key: 'search', label: `Búsqueda: "${state.searchQuery}"` });
    }

    if (state.priceMax < 1500) {
      tags.push({ key: 'price', label: `Hasta Bs. ${state.priceMax}` });
    }

    if (state.availability !== 'all') {
      const availLabel = state.availability === 'stock' ? 'En stock' : 'Solo Ofertas';
      tags.push({ key: 'availability', label: availLabel });
    }

    if (tags.length === 0) {
      DOM.activeFilterTags.innerHTML = '';
      return;
    }

    DOM.activeFilterTags.innerHTML = `
      <div class="filter-pills-list">
        ${tags.map(t => `
          <span class="active-filter-pill">
            ${t.label}
            <button class="remove-filter-btn" data-filter-key="${t.key}" aria-label="Quitar filtro">&times;</button>
          </span>
        `).join('')}
        <button class="btn-clear-all-filters" id="inlineClearFiltersBtn">Limpiar todos los filtros</button>
      </div>
    `;

    DOM.activeFilterTags.querySelectorAll('.remove-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.filterKey;
        if (key === 'category') state.category = 'all';
        if (key === 'franchise') {
          state.franchise = 'all';
          if (DOM.franchiseSelect) DOM.franchiseSelect.value = 'all';
        }
        if (key === 'search') {
          state.searchQuery = '';
          if (DOM.searchInput) DOM.searchInput.value = '';
        }
        if (key === 'price') {
          state.priceMax = 1500;
          if (DOM.priceRangeSlider) DOM.priceRangeSlider.value = 1500;
          if (DOM.priceRangeValue) DOM.priceRangeValue.textContent = `Bs. 1500`;
        }
        if (key === 'availability') {
          state.availability = 'all';
          const defaultRadio = document.querySelector('input[name="availability"][value="all"]');
          if (defaultRadio) defaultRadio.checked = true;
        }
        renderCatalogCategoryPills();
        renderCatalog();
      });
    });

    const inlineClear = document.getElementById('inlineClearFiltersBtn');
    if (inlineClear) {
      inlineClear.addEventListener('click', clearAllFilters);
    }
  }

  function clearAllFilters() {
    state.category = 'all';
    state.franchise = 'all';
    state.searchQuery = '';
    state.priceMax = 1500;
    state.availability = 'all';
    state.sortBy = 'relevance';

    if (DOM.searchInput) DOM.searchInput.value = '';
    if (DOM.clearSearchBtn) DOM.clearSearchBtn.style.display = 'none';
    if (DOM.franchiseSelect) DOM.franchiseSelect.value = 'all';
    if (DOM.sortSelect) DOM.sortSelect.value = 'relevance';
    if (DOM.priceRangeSlider) DOM.priceRangeSlider.value = 1500;
    if (DOM.priceRangeValue) DOM.priceRangeValue.textContent = 'Bs. 1500';

    const defaultRadio = document.querySelector('input[name="availability"][value="all"]');
    if (defaultRadio) defaultRadio.checked = true;

    renderCatalogCategoryPills();
    renderCatalog();
  }

  /* ================= PRODUCT DETAIL MODAL ================= */
  function openProductDetailModal(product) {
    if (!product) return;
    state.currentModalProduct = product;
    state.modalQty = 1;

    // Media & Gallery
    DOM.modalMainImage.src = product.image;
    DOM.modalMainImage.alt = product.name;

    const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    DOM.modalThumbnails.innerHTML = gallery.map((imgSrc, idx) => `
      <div class="thumb-item ${idx === 0 ? 'active' : ''}" data-src="${imgSrc}">
        <img src="${imgSrc}" alt="${product.name} miniatura ${idx + 1}" onerror="this.src='img/hero-banner.jpg'">
      </div>
    `).join('');

    DOM.modalThumbnails.querySelectorAll('.thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        DOM.modalThumbnails.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        DOM.modalMainImage.src = thumb.dataset.src;
      });
    });

    // Badges & Meta
    DOM.modalCategoryBadge.textContent = product.categoryName || product.category;
    DOM.modalFranchiseBadge.textContent = product.franchise || 'Colección';
    DOM.modalProductTitle.textContent = product.name;

    // Rating
    const fullStars = Math.floor(product.rating);
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      starsHtml += i < fullStars ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    DOM.modalRatingStars.innerHTML = starsHtml;
    DOM.modalRatingScore.textContent = product.rating.toFixed(1);
    DOM.modalReviewsCount.textContent = `(${product.reviewsCount || 15} valoraciones de clientes)`;

    // Price
    DOM.modalCurrentPrice.innerHTML = `<span class="currency">${STORE_CONFIG.currency}</span> ${product.price.toFixed(2)}`;
    if (product.oldPrice && product.oldPrice > product.price) {
      DOM.modalOldPrice.textContent = `${STORE_CONFIG.currency} ${product.oldPrice.toFixed(2)}`;
      DOM.modalOldPrice.style.display = 'inline';
      const pct = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
      DOM.modalDiscountBadge.textContent = `-${pct}% AHORRO`;
      DOM.modalDiscountBadge.style.display = 'inline-block';
    } else {
      DOM.modalOldPrice.style.display = 'none';
      DOM.modalDiscountBadge.style.display = 'none';
    }

    // Stock
    if (product.stock > 0) {
      DOM.modalStockBadge.innerHTML = `<i class="fas fa-check-circle"></i> En stock: ${product.stock} unidades disponibles`;
      DOM.modalStockBadge.className = 'stock-badge in-stock';
    } else {
      DOM.modalStockBadge.innerHTML = `<i class="fas fa-clock"></i> Preventa / Agotado Temporalmente`;
      DOM.modalStockBadge.className = 'stock-badge out-stock';
    }

    // Description
    DOM.modalDescription.textContent = product.description;

    // Technical Specs Grid
    let specsHtml = '';
    if (product.specs) {
      specsHtml = Object.entries(product.specs).map(([key, val]) => `
        <div class="spec-row">
          <span class="spec-label">${key}:</span>
          <span class="spec-value">${val}</span>
        </div>
      `).join('');
    }
    DOM.modalSpecsContainer.innerHTML = specsHtml;

    // Quantity Input
    DOM.modalQtyInput.value = 1;

    // Favorite button state
    const isFav = FavoritesManager.isFavorite(product.id);
    DOM.modalFavBtn.classList.toggle('active', isFav);
    DOM.modalFavBtn.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i> ${isFav ? 'En tus Favoritos' : 'Agregar a Favoritos'}`;

    // WhatsApp Direct Product Inquiry Link
    const waMsg = encodeURIComponent(
      `Hola Sebitas Toys 👋 Quisiera consultar sobre el producto: *${product.name}* (${STORE_CONFIG.currency} ${product.price.toFixed(2)}). ¿Tienen disponibilidad? ¡Muchas gracias!`
    );
    DOM.modalWhatsAppBtn.href = `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${waMsg}`;

    // "También te puede interesar" Related Products
    renderRelatedProducts(product);

    // Show Modal
    DOM.productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function renderRelatedProducts(currentProduct) {
    if (!DOM.modalRelatedGrid) return;
    const related = PRODUCTS_DATA
      .filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || p.franchise === currentProduct.franchise))
      .slice(0, 3);

    if (related.length === 0) {
      // Fallback to top featured
      const fallback = PRODUCTS_DATA.filter(p => p.id !== currentProduct.id).slice(0, 3);
      DOM.modalRelatedGrid.innerHTML = fallback.map(p => createProductCardHTML(p)).join('');
    } else {
      DOM.modalRelatedGrid.innerHTML = related.map(p => createProductCardHTML(p)).join('');
    }

    attachProductCardEvents(DOM.modalRelatedGrid);
  }

  function closeProductDetailModal() {
    if (!DOM.productModal) return;
    DOM.productModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ================= SHOPPING CART UI ================= */
  function openCartDrawer() {
    if (DOM.cartDrawer) DOM.cartDrawer.classList.add('open');
    if (DOM.cartOverlay) DOM.cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCartUI();
  }

  function closeCartDrawer() {
    if (DOM.cartDrawer) DOM.cartDrawer.classList.remove('open');
    if (DOM.cartOverlay) DOM.cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateCartUI() {
    CartManager.updateBadges();
    const items = CartManager.getItems();
    const subtotal = CartManager.getSubtotal();
    const shipping = CartManager.getShippingCost();
    const total = CartManager.getTotal();

    if (DOM.cartSubtotal) DOM.cartSubtotal.textContent = `${STORE_CONFIG.currency} ${subtotal.toFixed(2)}`;
    if (DOM.cartShipping) DOM.cartShipping.textContent = shipping === 0 ? 'Gratis' : `${STORE_CONFIG.currency} ${shipping.toFixed(2)}`;
    if (DOM.cartTotal) DOM.cartTotal.textContent = `${STORE_CONFIG.currency} ${total.toFixed(2)}`;

    // Free shipping progress indicator
    if (DOM.cartShippingNotice) {
      if (subtotal >= STORE_CONFIG.freeShippingThreshold) {
        DOM.cartShippingNotice.innerHTML = `
          <div class="shipping-bar-wrap success">
            <i class="fas fa-truck"></i> ¡Felicidades! Tienes <strong>Envío Gratis</strong> en tu pedido.
          </div>
        `;
      } else {
        const remaining = STORE_CONFIG.freeShippingThreshold - subtotal;
        const progress = Math.min(100, Math.round((subtotal / STORE_CONFIG.freeShippingThreshold) * 100));
        DOM.cartShippingNotice.innerHTML = `
          <div class="shipping-progress-container">
            <div class="shipping-progress-text">
              Agrega <strong>${STORE_CONFIG.currency} ${remaining.toFixed(2)}</strong> más para obtener <strong>Envío Gratis</strong>
            </div>
            <div class="shipping-progress-bar">
              <div class="shipping-progress-fill" style="width: ${progress}%"></div>
            </div>
          </div>
        `;
      }
    }

    if (!DOM.cartItemsList) return;

    if (items.length === 0) {
      if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'block';
      if (DOM.cartFooter) DOM.cartFooter.style.display = 'none';
      DOM.cartItemsList.innerHTML = '';
      return;
    }

    if (DOM.cartEmptyState) DOM.cartEmptyState.style.display = 'none';
    if (DOM.cartFooter) DOM.cartFooter.style.display = 'block';

    DOM.cartItemsList.innerHTML = items.map(item => `
      <div class="cart-item-row" data-id="${item.id}">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='img/hero-banner.jpg'">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-meta">${item.franchise || item.categoryName}</span>
          <div class="cart-item-unit-price">${STORE_CONFIG.currency} ${item.price.toFixed(2)} c/u</div>
          
          <div class="cart-item-stepper-wrap">
            <div class="stepper">
              <button class="stepper-btn btn-cart-minus" aria-label="Disminuir"><i class="fas fa-minus"></i></button>
              <span class="stepper-count">${item.qty}</span>
              <button class="stepper-btn btn-cart-plus" aria-label="Aumentar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="cart-item-subtotal">
              <strong>${STORE_CONFIG.currency} ${(item.price * item.qty).toFixed(2)}</strong>
            </div>
          </div>
        </div>
        <button class="cart-item-remove-btn" aria-label="Eliminar producto del carrito">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    `).join('');

    // Attach stepper & remove events
    DOM.cartItemsList.querySelectorAll('.cart-item-row').forEach(row => {
      const id = row.dataset.id;
      const minus = row.querySelector('.btn-cart-minus');
      const plus = row.querySelector('.btn-cart-plus');
      const remove = row.querySelector('.cart-item-remove-btn');

      if (minus) minus.addEventListener('click', () => CartManager.updateQty(id, -1));
      if (plus) plus.addEventListener('click', () => CartManager.updateQty(id, 1));
      if (remove) remove.addEventListener('click', () => CartManager.removeItem(id));
    });
  }

  /* ================= CHECKOUT & WHATSAPP CONFIRMATION ================= */
  function renderCheckoutSummary() {
    const items = CartManager.getItems();
    const subtotal = CartManager.getSubtotal();
    const shipping = CartManager.getShippingCost();
    const total = CartManager.getTotal();

    if (DOM.checkoutSubtotal) DOM.checkoutSubtotal.textContent = `${STORE_CONFIG.currency} ${subtotal.toFixed(2)}`;
    if (DOM.checkoutShipping) DOM.checkoutShipping.textContent = shipping === 0 ? 'Gratis' : `${STORE_CONFIG.currency} ${shipping.toFixed(2)}`;
    if (DOM.checkoutTotal) DOM.checkoutTotal.textContent = `${STORE_CONFIG.currency} ${total.toFixed(2)}`;

    if (DOM.checkoutItemsSummary) {
      if (items.length === 0) {
        DOM.checkoutItemsSummary.innerHTML = `
          <div class="empty-checkout-msg">
            <i class="fas fa-shopping-basket"></i>
            <p>Tu carrito está vacío. Agrega productos para continuar con tu pedido.</p>
            <button class="btn-primary" onclick="window.AkibaApp.showView('catalog')">Explorar Catálogo</button>
          </div>
        `;
        if (DOM.confirmOrderBtn) DOM.confirmOrderBtn.disabled = true;
      } else {
        if (DOM.confirmOrderBtn) DOM.confirmOrderBtn.disabled = false;
        DOM.checkoutItemsSummary.innerHTML = items.map(item => `
          <div class="checkout-summary-item">
            <div class="summary-item-img">
              <img src="${item.image}" alt="${item.name}" onerror="this.src='img/hero-banner.jpg'">
              <span class="summary-item-badge">${item.qty}</span>
            </div>
            <div class="summary-item-details">
              <h4>${item.name}</h4>
              <span class="summary-item-price">${STORE_CONFIG.currency} ${(item.price * item.qty).toFixed(2)}</span>
            </div>
          </div>
        `).join('');
      }
    }
  }

  function handleOrderConfirmation(e) {
    if (e) e.preventDefault();

    const items = CartManager.getItems();
    if (items.length === 0) {
      showToast('Tu carrito está vacío. Por favor agrega productos.', 'warning');
      showView('catalog');
      return;
    }

    // Collect and validate Form Inputs
    const fullName = DOM.clientFullName ? DOM.clientFullName.value.trim() : '';
    const phone = DOM.clientPhone ? DOM.clientPhone.value.trim() : '';
    const city = DOM.clientCity ? DOM.clientCity.value.trim() : 'La Paz';
    const address = DOM.clientAddress ? DOM.clientAddress.value.trim() : '';
    const reference = DOM.clientReference ? DOM.clientReference.value.trim() : '';

    if (!fullName) {
      showToast('Por favor ingresa tu Nombre Completo.', 'warning');
      if (DOM.clientFullName) DOM.clientFullName.focus();
      return;
    }

    if (!phone) {
      showToast('Por favor ingresa tu Número de Teléfono.', 'warning');
      if (DOM.clientPhone) DOM.clientPhone.focus();
      return;
    }

    if (!address) {
      showToast('Por favor ingresa tu Dirección.', 'warning');
      if (DOM.clientAddress) DOM.clientAddress.focus();
      return;
    }

    // Delivery & Payment
    let deliveryMethod = 'Envío a domicilio';
    const checkedDelivery = document.querySelector('input[name="deliveryMethod"]:checked');
    if (checkedDelivery && checkedDelivery.value === 'tienda') {
      deliveryMethod = 'Recoger en tienda';
    }

    let paymentMethod = 'QR';
    const checkedPayment = document.querySelector('input[name="paymentMethod"]:checked');
    if (checkedPayment) {
      if (checkedPayment.value === 'transferencia') paymentMethod = 'Transferencia bancaria';
      else if (checkedPayment.value === 'efectivo') paymentMethod = 'Efectivo';
      else paymentMethod = 'QR';
    }

    const subtotal = CartManager.getSubtotal();
    const shipping = CartManager.getShippingCost();
    const total = CartManager.getTotal();

    // 1. Create order record locally in OrdersManager
    const newOrder = OrdersManager.createOrder({
      items: items,
      subtotal: subtotal,
      shipping: shipping,
      total: total,
      customer: {
        name: fullName,
        phone: phone,
        city: city,
        address: address,
        reference: reference || 'Sin referencia adicional'
      },
      paymentMethod: paymentMethod,
      deliveryMethod: deliveryMethod
    });

    // 2. Build WhatsApp message with EXACT format
    let productsLines = '';
    items.forEach(item => {
      productsLines += `- ${item.name} x${item.qty} — ${STORE_CONFIG.currency} ${(item.price * item.qty).toFixed(2)}\n`;
    });

    const whatsAppMessage =
      `Hola, quiero realizar el siguiente pedido:

Pedido #${newOrder.id}

Productos:
${productsLines}
Subtotal: ${STORE_CONFIG.currency} ${subtotal.toFixed(2)}
Envío: ${shipping === 0 ? 'Gratis' : `${STORE_CONFIG.currency} ${shipping.toFixed(2)}`}
TOTAL: ${STORE_CONFIG.currency} ${total.toFixed(2)}

Datos del cliente:
Nombre: ${fullName}
Teléfono: ${phone}
Dirección: ${address}${city ? ` (${city})` : ''}
Referencia: ${reference || 'Ninguna'}

Método de pago: ${paymentMethod}
Método de entrega: ${deliveryMethod}

Gracias.`;

    const encodedMsg = encodeURIComponent(whatsAppMessage);
    const waUrl = `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodedMsg}`;

    // 3. Clear cart
    CartManager.clear();

    // 4. Open WhatsApp
    window.open(waUrl, '_blank');

    // 5. Show Success Modal with order tracking
    showOrderSuccessModal(newOrder, waUrl);
    renderOrdersList();
  }

  function showOrderSuccessModal(order, waUrl) {
    if (DOM.successOrderNumber) DOM.successOrderNumber.textContent = `#${order.id}`;
    if (DOM.successOrderTotal) DOM.successOrderTotal.textContent = `${STORE_CONFIG.currency} ${order.total.toFixed(2)}`;
    if (DOM.successWhatsAppDirectBtn) {
      DOM.successWhatsAppDirectBtn.href = waUrl;
    }

    if (DOM.orderSuccessModal) {
      DOM.orderSuccessModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  /* ================= FAVORITES (WISHLIST) UI ================= */
  function openFavoritesModal() {
    updateFavoritesUI();
    if (DOM.favoritesModal) DOM.favoritesModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeFavoritesModal() {
    if (DOM.favoritesModal) DOM.favoritesModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateFavoritesUI() {
    FavoritesManager.updateBadges();
    const favProducts = FavoritesManager.getFavorites();

    if (!DOM.favoritesItemsList) return;

    if (favProducts.length === 0) {
      if (DOM.favoritesEmptyState) DOM.favoritesEmptyState.style.display = 'block';
      DOM.favoritesItemsList.innerHTML = '';
      return;
    }

    if (DOM.favoritesEmptyState) DOM.favoritesEmptyState.style.display = 'none';

    DOM.favoritesItemsList.innerHTML = favProducts.map(p => `
      <div class="fav-item-card" data-id="${p.id}">
        <div class="fav-item-thumb">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='img/hero-banner.jpg'">
        </div>
        <div class="fav-item-info">
          <span class="fav-item-cat">${p.categoryName || p.category}</span>
          <h4 class="fav-item-title">${p.name}</h4>
          <div class="fav-item-price">${STORE_CONFIG.currency} ${p.price.toFixed(2)}</div>
        </div>
        <div class="fav-item-actions">
          <button class="btn-fav-add-cart" data-id="${p.id}">
            <i class="fas fa-shopping-bag"></i> Agregar
          </button>
          <button class="btn-fav-remove" data-id="${p.id}" aria-label="Quitar de favoritos">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `).join('');

    DOM.favoritesItemsList.querySelectorAll('.fav-item-card').forEach(card => {
      const id = card.dataset.id;
      const addBtn = card.querySelector('.btn-fav-add-cart');
      const remBtn = card.querySelector('.btn-fav-remove');
      const title = card.querySelector('.fav-item-title');
      const thumb = card.querySelector('.fav-item-thumb');

      if (addBtn) {
        addBtn.addEventListener('click', () => {
          CartManager.addItem(id, 1);
          closeFavoritesModal();
          openCartDrawer();
        });
      }

      if (remBtn) {
        remBtn.addEventListener('click', () => {
          FavoritesManager.remove(id);
          updateFavoritesUI();
          renderCatalog();
        });
      }

      [title, thumb].forEach(el => {
        if (el) {
          el.addEventListener('click', () => {
            const product = PRODUCTS_DATA.find(x => x.id === id);
            closeFavoritesModal();
            openProductDetailModal(product);
          });
        }
      });
    });
  }

  /* ================= MY ACCOUNT & ORDERS UI ================= */
  function openAccountModal(tab = 'pedidos') {
    if (DOM.accountModal) DOM.accountModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    switchAccountTab(tab);
    renderOrdersList();
  }

  function closeAccountModal() {
    if (DOM.accountModal) DOM.accountModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function switchAccountTab(tabId) {
    DOM.accountTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabId);
    });
    DOM.accountTabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `tabPane-${tabId}`);
    });
  }

  function renderOrdersList() {
    const orders = OrdersManager.getOrders();
    if (!DOM.ordersListContainer) return;

    if (orders.length === 0) {
      if (DOM.ordersEmptyState) DOM.ordersEmptyState.style.display = 'block';
      DOM.ordersListContainer.innerHTML = '';
      return;
    }

    if (DOM.ordersEmptyState) DOM.ordersEmptyState.style.display = 'none';

    DOM.ordersListContainer.innerHTML = orders.map(order => {
      const inquiryUrl = OrdersManager.getWhatsAppInquiryUrl(order.id);

      let statusClass = 'status-placed';
      if (order.status === 'Confirmado') statusClass = 'status-confirmed';
      if (order.status === 'En preparación') statusClass = 'status-preparing';
      if (order.status === 'Enviado') statusClass = 'status-shipped';
      if (order.status === 'Entregado') statusClass = 'status-delivered';

      return `
        <div class="order-card" data-order-id="${order.id}">
          <div class="order-card-header">
            <div>
              <span class="order-number">Pedido #${order.id}</span>
              <span class="order-date"><i class="far fa-calendar-alt"></i> ${order.date}</span>
            </div>
            <span class="order-status-badge ${statusClass}">
              <i class="fas fa-circle"></i> ${order.status}
            </span>
          </div>

          <div class="order-card-items">
            ${order.items.map(item => `
              <div class="order-item-snippet">
                <span class="order-item-name">• ${item.name}</span>
                <span class="order-item-qty">x${item.qty}</span>
                <span class="order-item-price">${STORE_CONFIG.currency} ${(item.price * item.qty).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>

          <div class="order-card-footer">
            <div class="order-total-info">
              <span>Total:</span>
              <strong>${STORE_CONFIG.currency} ${order.total.toFixed(2)}</strong>
            </div>
            <a href="${inquiryUrl}" target="_blank" rel="noopener" class="btn-order-wa" aria-label="Consultar pedido por WhatsApp">
              <i class="fab fa-whatsapp"></i> Consultar Estado
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  function populateProfileForm() {
    const profile = OrdersManager.getProfile();
    if (DOM.profileName) DOM.profileName.value = profile.name || '';
    if (DOM.profilePhone) DOM.profilePhone.value = profile.phone || '';
    if (DOM.profileCity) DOM.profileCity.value = profile.city || 'La Paz';
    if (DOM.profileAddress) DOM.profileAddress.value = profile.address || '';
    if (DOM.profileReference) DOM.profileReference.value = profile.reference || '';

    // Also populate checkout form inputs if profile exists
    if (DOM.clientFullName && profile.name) DOM.clientFullName.value = profile.name;
    if (DOM.clientPhone && profile.phone) DOM.clientPhone.value = profile.phone;
    if (DOM.clientCity && profile.city) DOM.clientCity.value = profile.city;
    if (DOM.clientAddress && profile.address) DOM.clientAddress.value = profile.address;
    if (DOM.clientReference && profile.reference) DOM.clientReference.value = profile.reference;
  }

  /* ================= LIVE SEARCH DRAWER ================= */
  function openSearchModal() {
    if (DOM.searchModal) {
      DOM.searchModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (DOM.searchModalInput) {
        DOM.searchModalInput.value = '';
        DOM.searchModalInput.focus();
        renderSearchModalResults('');
      }
    }
  }

  function closeSearchModal() {
    if (DOM.searchModal) {
      DOM.searchModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function renderSearchModalResults(query) {
    if (!DOM.searchModalResults) return;
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      // Suggest top featured items
      const topItems = PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 4);
      DOM.searchModalResults.innerHTML = `
        <div class="search-suggestions-title">Productos populares sugeridos:</div>
        <div class="search-results-list">
          ${topItems.map(p => createSearchResultItemHTML(p)).join('')}
        </div>
      `;
    } else {
      const results = PRODUCTS_DATA.filter(p => {
        const text = `${p.name} ${p.categoryName || ''} ${p.franchise || ''} ${p.manufacturer || ''}`.toLowerCase();
        return text.includes(cleanQuery);
      });

      if (results.length === 0) {
        DOM.searchModalResults.innerHTML = `
          <div class="search-no-results">
            <i class="fas fa-search"></i>
            <p>No se encontraron productos para "<strong>${query}</strong>"</p>
            <span>Intenta con otra palabra clave como Luffy, Catan, Goku, Pokémon o Jujutsu Kaisen.</span>
          </div>
        `;
        return;
      }

      DOM.searchModalResults.innerHTML = `
        <div class="search-suggestions-title">Resultados encontrados (${results.length}):</div>
        <div class="search-results-list">
          ${results.map(p => createSearchResultItemHTML(p)).join('')}
        </div>
      `;
    }

    // Attach click events on search results
    DOM.searchModalResults.querySelectorAll('.search-result-row').forEach(row => {
      row.addEventListener('click', () => {
        const id = row.dataset.id;
        const product = PRODUCTS_DATA.find(x => x.id === id);
        closeSearchModal();
        openProductDetailModal(product);
      });
    });
  }

  function createSearchResultItemHTML(p) {
    return `
      <div class="search-result-row" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" class="search-result-img" onerror="this.src='img/hero-banner.jpg'">
        <div class="search-result-info">
          <span class="search-result-cat">${p.franchise || p.categoryName}</span>
          <h4 class="search-result-title">${p.name}</h4>
          <span class="search-result-price">${STORE_CONFIG.currency} ${p.price.toFixed(2)}</span>
        </div>
        <i class="fas fa-chevron-right search-result-arrow"></i>
      </div>
    `;
  }

  /* ================= EVENT BINDINGS ================= */
  function bindEvents() {
    // Navigation Link clicks
    DOM.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.dataset.view;
        const cat = link.dataset.category;

        closeMobileNav();

        if (cat) {
          setHomeCategoryFilter(cat);
        } else if (view) {
          if (view === 'catalog') {
            state.category = 'all';
            renderCatalogCategoryPills();
            renderCatalog();
          }
          showView(view);
        }
      });
    });

    // Home Category Quick Tabs Filter
    if (DOM.homeCategoryTabs) {
      const tabs = DOM.homeCategoryTabs.querySelectorAll('.home-tab-pill');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const category = tab.dataset.category;
          renderHomeMainProducts(category);
        });
      });
    }

    // Mobile Navigation Drawer Toggle
    if (DOM.mobileMenuToggle) {
      DOM.mobileMenuToggle.addEventListener('click', () => {
        if (DOM.mobileNavDrawer) DOM.mobileNavDrawer.classList.add('open');
        if (DOM.mobileNavOverlay) DOM.mobileNavOverlay.classList.add('active');
      });
    }

    if (DOM.mobileNavClose) DOM.mobileNavClose.addEventListener('click', closeMobileNav);
    if (DOM.mobileNavOverlay) DOM.mobileNavOverlay.addEventListener('click', closeMobileNav);

    // Search Toggle Buttons
    DOM.searchToggleBtns.forEach(btn => btn.addEventListener('click', openSearchModal));
    if (DOM.searchModalClose) DOM.searchModalClose.addEventListener('click', closeSearchModal);
    if (DOM.searchModal) {
      DOM.searchModal.addEventListener('click', (e) => {
        if (e.target === DOM.searchModal) closeSearchModal();
      });
    }

    if (DOM.searchModalInput) {
      DOM.searchModalInput.addEventListener('input', (e) => {
        renderSearchModalResults(e.target.value);
      });
    }

    // Favorites Toggle Buttons
    DOM.favoritesToggleBtns.forEach(btn => btn.addEventListener('click', openFavoritesModal));
    if (DOM.favoritesModalClose) DOM.favoritesModalClose.addEventListener('click', closeFavoritesModal);
    if (DOM.favoritesModal) {
      DOM.favoritesModal.addEventListener('click', (e) => {
        if (e.target === DOM.favoritesModal) closeFavoritesModal();
      });
    }

    // Cart Toggle Buttons
    DOM.cartToggleBtns.forEach(btn => btn.addEventListener('click', openCartDrawer));
    if (DOM.cartCloseBtn) DOM.cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (DOM.cartOverlay) DOM.cartOverlay.addEventListener('click', closeCartDrawer);

    // Account Toggle Buttons
    DOM.accountToggleBtns.forEach(btn => btn.addEventListener('click', () => openAccountModal('pedidos')));
    if (DOM.accountModalClose) DOM.accountModalClose.addEventListener('click', closeAccountModal);
    if (DOM.accountModal) {
      DOM.accountModal.addEventListener('click', (e) => {
        if (e.target === DOM.accountModal) closeAccountModal();
      });
    }

    // Account Tab Switcher
    DOM.accountTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        switchAccountTab(tab.dataset.tab);
      });
    });

    // Profile Form Save
    if (DOM.profileForm) {
      DOM.profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        OrdersManager.saveProfile({
          name: DOM.profileName ? DOM.profileName.value.trim() : '',
          phone: DOM.profilePhone ? DOM.profilePhone.value.trim() : '',
          city: DOM.profileCity ? DOM.profileCity.value.trim() : 'La Paz',
          address: DOM.profileAddress ? DOM.profileAddress.value.trim() : '',
          reference: DOM.profileReference ? DOM.profileReference.value.trim() : ''
        });
        showToast('Tus datos han sido guardados con éxito', 'success');
      });
    }

    // Product Modal Controls
    if (DOM.productModalClose) DOM.productModalClose.addEventListener('click', closeProductDetailModal);
    if (DOM.productModal) {
      DOM.productModal.addEventListener('click', (e) => {
        if (e.target === DOM.productModal) closeProductDetailModal();
      });
    }

    if (DOM.modalQtyMinus) {
      DOM.modalQtyMinus.addEventListener('click', () => {
        if (state.modalQty > 1) {
          state.modalQty--;
          DOM.modalQtyInput.value = state.modalQty;
        }
      });
    }

    if (DOM.modalQtyPlus) {
      DOM.modalQtyPlus.addEventListener('click', () => {
        const maxStock = state.currentModalProduct ? state.currentModalProduct.stock : 10;
        if (state.modalQty < maxStock) {
          state.modalQty++;
          DOM.modalQtyInput.value = state.modalQty;
        } else {
          showToast(`Stock máximo disponible: ${maxStock} unidades`, 'info');
        }
      });
    }

    if (DOM.modalAddToCartBtn) {
      DOM.modalAddToCartBtn.addEventListener('click', () => {
        if (state.currentModalProduct) {
          CartManager.addItem(state.currentModalProduct.id, state.modalQty);
          closeProductDetailModal();
          openCartDrawer();
        }
      });
    }

    if (DOM.modalBuyNowBtn) {
      DOM.modalBuyNowBtn.addEventListener('click', () => {
        if (state.currentModalProduct) {
          CartManager.addItem(state.currentModalProduct.id, state.modalQty);
          closeProductDetailModal();
          showView('checkout');
        }
      });
    }

    if (DOM.modalFavBtn) {
      DOM.modalFavBtn.addEventListener('click', () => {
        if (!state.currentModalProduct) return;
        const isNowFav = FavoritesManager.toggle(state.currentModalProduct.id);
        DOM.modalFavBtn.classList.toggle('active', isNowFav);
        DOM.modalFavBtn.innerHTML = `<i class="${isNowFav ? 'fas' : 'far'} fa-heart"></i> ${isNowFav ? 'En tus Favoritos' : 'Agregar a Favoritos'}`;
        renderCatalog();
        renderHomeMainProducts(state.homeCategory);
      });
    }

    // Cart Drawer -> Checkout
    if (DOM.goToCheckoutBtn) {
      DOM.goToCheckoutBtn.addEventListener('click', () => {
        closeCartDrawer();
        showView('checkout');
      });
    }

    // Catalog Search Input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        if (DOM.clearSearchBtn) {
          DOM.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
        }
        renderCatalog();
      });
    }

    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        DOM.searchInput.value = '';
        state.searchQuery = '';
        DOM.clearSearchBtn.style.display = 'none';
        renderCatalog();
        DOM.searchInput.focus();
      });
    }

    // Franchise Filter
    if (DOM.franchiseSelect) {
      DOM.franchiseSelect.addEventListener('change', (e) => {
        state.franchise = e.target.value;
        renderCatalog();
      });
    }

    // Sort Filter
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderCatalog();
      });
    }

    // Price Range Slider
    if (DOM.priceRangeSlider) {
      DOM.priceRangeSlider.addEventListener('input', (e) => {
        state.priceMax = Number(e.target.value);
        if (DOM.priceRangeValue) DOM.priceRangeValue.textContent = `Bs. ${state.priceMax}`;
        renderCatalog();
      });
    }

    // Availability Filter Radios
    DOM.availabilityRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.availability = e.target.value;
          renderCatalog();
        }
      });
    });

    if (DOM.clearAllFiltersBtn) {
      DOM.clearAllFiltersBtn.addEventListener('click', clearAllFilters);
    }

    // Checkout Delivery Method toggle
    DOM.deliveryRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.checked) {
          CartManager.setDeliveryMethod(e.target.value);
          renderCheckoutSummary();
          updateCartUI();
        }
      });
    });

    // Checkout Form Submit & Confirmation
    if (DOM.checkoutForm) {
      DOM.checkoutForm.addEventListener('submit', handleOrderConfirmation);
    }
    if (DOM.confirmOrderBtn) {
      DOM.confirmOrderBtn.addEventListener('click', handleOrderConfirmation);
    }

    // Success Modal Close
    if (DOM.orderSuccessClose) {
      DOM.orderSuccessClose.addEventListener('click', () => {
        if (DOM.orderSuccessModal) DOM.orderSuccessModal.classList.remove('open');
        document.body.style.overflow = '';
        showView('home');
      });
    }

    if (DOM.viewMyOrdersFromSuccess) {
      DOM.viewMyOrdersFromSuccess.addEventListener('click', () => {
        if (DOM.orderSuccessModal) DOM.orderSuccessModal.classList.remove('open');
        document.body.style.overflow = '';
        openAccountModal('pedidos');
      });
    }

    // Custom App Events
    window.addEventListener('akiba:cart-updated', () => {
      updateCartUI();
      if (state.currentView === 'checkout') {
        renderCheckoutSummary();
      }
    });

    window.addEventListener('akiba:favorites-updated', () => {
      updateFavoritesUI();
    });

    window.addEventListener('akiba:orders-updated', () => {
      renderOrdersList();
    });

    // Scroll to top
    if (DOM.scrollTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          DOM.scrollTopBtn.classList.add('visible');
        } else {
          DOM.scrollTopBtn.classList.remove('visible');
        }
      });

      DOM.scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Escape key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductDetailModal();
        closeCartDrawer();
        closeFavoritesModal();
        closeSearchModal();
        closeAccountModal();
        closeMobileNav();
        if (DOM.orderSuccessModal) DOM.orderSuccessModal.classList.remove('open');
      }
    });
  }

  function closeMobileNav() {
    if (DOM.mobileNavDrawer) DOM.mobileNavDrawer.classList.remove('open');
    if (DOM.mobileNavOverlay) DOM.mobileNavOverlay.classList.remove('active');
  }

  /* ================= TOAST NOTIFICATIONS ================= */
  function showToast(message, type = 'info') {
    let container = document.getElementById('akibaToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'akibaToastContainer';
      container.className = 'akiba-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `akiba-toast toast-${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';
    if (type === 'error') icon = 'fa-times-circle';

    toast.innerHTML = `
      <i class="fas ${icon}"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // Expose global methods
  window.AkibaApp = {
    showView,
    setCatalogCategory,
    setHomeCategoryFilter,
    openProductDetailModal,
    openCartDrawer,
    openFavoritesModal,
    openAccountModal,
    openSearchModal,
    showToast
  };

  // Start on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
