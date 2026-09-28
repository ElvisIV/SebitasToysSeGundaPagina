/* ==========================================================================
   Sebitas Toys - FAVORITOS (WISHLIST) MANAGER
   Anime · Coleccionables · Juegos
   ========================================================================== */

const FavoritesManager = (function() {
  const STORAGE_KEY = 'akiba_house_favorites_v1';
  let favorites = [];

  function init() {
    load();
    updateBadges();
  }

  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      favorites = data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Error al cargar favoritos de localStorage:', e);
      favorites = [];
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.warn('Error al guardar favoritos:', e);
    }
    updateBadges();
    window.dispatchEvent(new CustomEvent('akiba:favorites-updated', { detail: { count: favorites.length, favorites } }));
  }

  function isFavorite(productId) {
    return favorites.includes(productId);
  }

  function toggle(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const index = favorites.indexOf(productId);
    let isAdded = false;

    if (index > -1) {
      favorites.splice(index, 1);
      isAdded = false;
      if (window.AkibaApp && window.AkibaApp.showToast) {
        window.AkibaApp.showToast(`Se eliminó "${product ? product.name : 'Producto'}" de tus favoritos`, 'info');
      }
    } else {
      favorites.push(productId);
      isAdded = true;
      if (window.AkibaApp && window.AkibaApp.showToast) {
        window.AkibaApp.showToast(`¡"${product ? product.name : 'Producto'}" agregado a favoritos!`, 'success');
      }
    }

    save();
    return isAdded;
  }

  function remove(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
      favorites.splice(index, 1);
      save();
      const product = PRODUCTS_DATA.find(p => p.id === productId);
      if (window.AkibaApp && window.AkibaApp.showToast) {
        window.AkibaApp.showToast(`Se quitó "${product ? product.name : 'Producto'}" de favoritos`, 'info');
      }
    }
  }

  function clear() {
    favorites = [];
    save();
  }

  function getFavorites() {
    return favorites.map(id => PRODUCTS_DATA.find(p => p.id === id)).filter(Boolean);
  }

  function getCount() {
    return favorites.length;
  }

  function updateBadges() {
    const badges = document.querySelectorAll('.favorites-count-badge');
    const count = favorites.length;
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  return {
    init,
    isFavorite,
    toggle,
    remove,
    clear,
    getFavorites,
    getCount,
    updateBadges
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  FavoritesManager.init();
});
