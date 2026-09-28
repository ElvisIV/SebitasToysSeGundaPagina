/* ==========================================================================
   SEBITAS TOYS - GESTIÓN DE PEDIDOS & CLIENTE
   Anime · Coleccionables · Juegos
   ========================================================================== */

const OrdersManager = (function() {
  const STORAGE_KEY_ORDERS = 'sebitas_toys_orders_v1';
  const STORAGE_KEY_PROFILE = 'sebitas_toys_profile_v1';
  let orders = [];
  let profile = {
    name: '',
    phone: '',
    city: 'La Paz',
    address: '',
    reference: ''
  };

  const ORDER_STATUSES = [
    { key: 'realizado', label: 'Pedido realizado', icon: 'fa-clipboard-check', color: '#B83A24' },
    { key: 'confirmado', label: 'Confirmado', icon: 'fa-check-double', color: '#2563EB' },
    { key: 'preparacion', label: 'En preparación', icon: 'fa-box-open', color: '#D97706' },
    { key: 'enviado', label: 'Enviado', icon: 'fa-shipping-fast', color: '#059669' },
    { key: 'entregado', label: 'Entregado', icon: 'fa-home', color: '#10B981' }
  ];

  function init() {
    loadOrders();
    loadProfile();
  }

  function loadOrders() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_ORDERS);
      orders = data ? JSON.parse(data) : [];
      // If empty on first load, seed with a sample past order for demonstration
      if (orders.length === 0) {
        orders = [
          {
            id: "ST-4819",
            date: "24/09/2026",
            timestamp: Date.now() - 345600000,
            status: "Entregado",
            items: [
              { name: "Figura Monkey D. Luffy", qty: 1, price: 350, image: "img/products/figure-luffy-gear5.jpg" },
              { name: "Juego UNO Pokémon", qty: 1, price: 120, image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=600&auto=format&fit=crop&q=80" }
            ],
            subtotal: 470,
            shipping: 15,
            total: 485,
            customer: {
              name: "Cliente Sebitas Toys",
              phone: "77227645",
              city: "La Paz",
              address: "Av. 6 de Agosto #2450",
              reference: "Sopocachi"
            },
            paymentMethod: "QR Simple",
            deliveryMethod: "Envío a domicilio"
          }
        ];
        saveOrders();
      }
    } catch (e) {
      console.warn('Error al cargar pedidos:', e);
      orders = [];
    }
  }

  function saveOrders() {
    try {
      localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(orders));
    } catch (e) {
      console.warn('Error al guardar pedidos:', e);
    }
    window.dispatchEvent(new CustomEvent('sebitas:orders-updated', { detail: { orders } }));
  }

  function loadProfile() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (data) {
        profile = JSON.parse(data);
      }
    } catch (e) {
      console.warn('Error al cargar perfil:', e);
    }
  }

  function saveProfile(newProfile) {
    profile = { ...profile, ...newProfile };
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    } catch (e) {
      console.warn('Error al guardar perfil:', e);
    }
  }

  function getProfile() {
    return { ...profile };
  }

  function generateOrderId() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `ST-${randomNum}`;
  }

  function createOrder(orderData) {
    const id = generateOrderId();
    const now = new Date();
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    const newOrder = {
      id: id,
      date: dateFormatted,
      timestamp: Date.now(),
      status: "Pedido realizado",
      items: orderData.items || [],
      subtotal: orderData.subtotal || 0,
      shipping: orderData.shipping || 0,
      total: orderData.total || 0,
      customer: orderData.customer || {},
      paymentMethod: orderData.paymentMethod || "QR",
      deliveryMethod: orderData.deliveryMethod || "Envío a domicilio"
    };

    orders.unshift(newOrder);
    saveOrders();

    // Also update saved profile details
    if (orderData.customer) {
      saveProfile(orderData.customer);
    }

    return newOrder;
  }

  function getOrders() {
    return [...orders];
  }

  function getOrderById(id) {
    return orders.find(o => o.id === id);
  }

  function getWhatsAppInquiryUrl(orderId) {
    const order = getOrderById(orderId);
    let msg = `Hola Sebitas Toys, quisiera consultar el estado de mi Pedido *#${orderId}*. ¡Muchas gracias!`;
    if (order) {
      msg = `Hola Sebitas Toys, quisiera consultar el estado de mi Pedido *#${order.id}* por un total de Bs. ${order.total.toFixed(2)} (${order.status}). ¡Muchas gracias!`;
    }
    return `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`;
  }

  return {
    init,
    getOrders,
    getOrderById,
    createOrder,
    getProfile,
    saveProfile,
    ORDER_STATUSES,
    getWhatsAppInquiryUrl
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  OrdersManager.init();
});
