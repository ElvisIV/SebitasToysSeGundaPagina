/* ==========================================================================
   Sebitas Toys - CARRITO DE COMPRAS ENGINE
   Anime · Coleccionables · Juegos
   ========================================================================== */

const CartManager = (function() {
  const STORAGE_KEY = 'akiba_house_cart_v1';
  let cart = [];
  let deliveryMethod = 'domicilio'; // 'domicilio' | 'tienda'

  function init() {
    load();
    updateBadges();
  }

  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      cart = data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Error al cargar carrito de localStorage:', e);
      cart = [];
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Error al guardar carrito:', e);
    }
    updateBadges();
    window.dispatchEvent(new CustomEvent('akiba:cart-updated', { 
      detail: { 
        count: getTotalCount(), 
        subtotal: getSubtotal(), 
        total: getTotal(),
        cart 
      } 
    }));
  }

  function addItem(productId, qty = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return false;

    const existingIndex = cart.findIndex(item => item.id === productId);
    let addedQty = qty;

    if (existingIndex > -1) {
      const currentQty = cart[existingIndex].qty;
      const newQty = currentQty + qty;
      
      if (newQty > product.stock) {
        cart[existingIndex].qty = product.stock;
        if (window.AkibaApp && window.AkibaApp.showToast) {
          window.AkibaApp.showToast(`Stock máximo alcanzado: ${product.stock} unidades de "${product.name}"`, 'warning');
        }
      } else {
        cart[existingIndex].qty = newQty;
        if (window.AkibaApp && window.AkibaApp.showToast) {
          window.AkibaApp.showToast(`¡Se aumentó la cantidad de "${product.name}" en el carrito!`, 'success');
        }
      }
    } else {
      const initialQty = Math.min(qty, product.stock);
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        categoryName: product.categoryName,
        franchise: product.franchise,
        stock: product.stock,
        qty: initialQty
      });
      if (window.AkibaApp && window.AkibaApp.showToast) {
        window.AkibaApp.showToast(`¡"${product.name}" agregado al carrito!`, 'success');
      }
    }

    save();
    return true;
  }

  function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    const targetQty = item.qty + delta;
    if (targetQty <= 0) {
      removeItem(productId);
      return;
    }

    if (targetQty > item.stock) {
      if (window.AkibaApp && window.AkibaApp.showToast) {
        window.AkibaApp.showToast(`Stock máximo alcanzado (${item.stock} unidades)`, 'info');
      }
      return;
    }

    item.qty = targetQty;
    save();
  }

  function setQty(productId, qty) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    if (qty <= 0) {
      removeItem(productId);
      return;
    }

    item.qty = Math.min(qty, item.stock);
    save();
  }

  function removeItem(productId) {
    const item = cart.find(i => i.id === productId);
    cart = cart.filter(i => i.id !== productId);
    save();
    if (item && window.AkibaApp && window.AkibaApp.showToast) {
      window.AkibaApp.showToast(`Se eliminó "${item.name}" del carrito`, 'info');
    }
  }

  function clear() {
    cart = [];
    save();
  }

  function getItems() {
    return [...cart];
  }

  function getTotalCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function getSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  function setDeliveryMethod(method) {
    deliveryMethod = method; // 'domicilio' | 'tienda'
    window.dispatchEvent(new CustomEvent('akiba:cart-updated', { 
      detail: { 
        count: getTotalCount(), 
        subtotal: getSubtotal(), 
        total: getTotal(),
        cart 
      } 
    }));
  }

  function getDeliveryMethod() {
    return deliveryMethod;
  }

  function getShippingCost() {
    if (cart.length === 0) return 0;
    if (deliveryMethod === 'tienda') return 0;
    const subtotal = getSubtotal();
    if (subtotal >= STORE_CONFIG.freeShippingThreshold) return 0;
    return STORE_CONFIG.shippingStandardCost; // Bs. 15
  }

  function getTotal() {
    if (cart.length === 0) return 0;
    return getSubtotal() + getShippingCost();
  }

  function updateBadges() {
    const badges = document.querySelectorAll('.cart-count-badge');
    const count = getTotalCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  return {
    init,
    addItem,
    updateQty,
    setQty,
    removeItem,
    clear,
    getItems,
    getTotalCount,
    getSubtotal,
    getShippingCost,
    getTotal,
    setDeliveryMethod,
    getDeliveryMethod,
    updateBadges
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  CartManager.init();
});
