/**
 * TRAILER MÁRCIO & ZANE - SISTEMA DE PEDIDOS
 * JavaScript completo com cardápio real
 */

// ============================================
// DADOS DO CARDÁPIO - TRAILER MÁRCIO E ZANE
// ============================================
const produtos = {
    // LANCHES (XIS) - Cardápio Oficial
    xis: [
        { 
            id: 'xis-burger', 
            nome: 'Burger', 
            descricao: 'Pão prensado, hambúrguer artesanal, maionese caseira e queijo', 
            preco: 20.00, 
            emoji: '🍔' 
        },
        { 
            id: 'xis-salada', 
            nome: 'Salada', 
            descricao: 'Pão prensado, hambúrguer artesanal, alface, milho, tomate, queijo e maionese caseira', 
            preco: 23.00, 
            emoji: '🥗' 
        },
        { 
            id: 'xis-sala-bacon', 
            nome: 'Sala Bacon', 
            descricao: 'Pão prensado, hambúrguer artesanal, bacon, alface, queijo, milho, tomate e maionese caseira', 
            preco: 24.00, 
            emoji: '🥓' 
        },
        { 
            id: 'xis-calabresa', 
            nome: 'Calabresa', 
            descricao: 'Pão prensado, calabresa picadinha, hambúrguer artesanal, queijo, milho, tomate, maionese caseira', 
            preco: 25.00, 
            emoji: '🌭' 
        },
        { 
            id: 'xis-frango', 
            nome: 'Frango', 
            descricao: 'Pão prensado, frango desfiado, hambúrguer artesanal, queijo, milho, tomate e maionese caseira', 
            preco: 26.00, 
            emoji: '🍗' 
        },
        { 
            id: 'xis-fran-bacon', 
            nome: 'Fran Bacon', 
            descricao: 'Pão prensado, hambúrguer artesanal, frango desfiado, bacon, milho, queijo, tomate e maionese caseira', 
            preco: 27.00, 
            emoji: '🍖' 
        },
        { 
            id: 'xis-cala-frango', 
            nome: 'Cala Frango', 
            descricao: 'Pão prensado, hambúrguer artesanal, frango desfiado, calabresa, milho, queijo, tomate e maionese caseira', 
            preco: 28.00, 
            emoji: '🍕' 
        },
        { 
            id: 'xis-bacon', 
            nome: 'Bacon', 
            descricao: 'Pão prensado, hambúrguer artesanal, bacon, queijo, tomate, milho e maionese caseira', 
            preco: 28.00, 
            emoji: '🥓' 
        },
        { 
            id: 'xis-egg', 
            nome: 'Egg', 
            descricao: 'Pão prensado, hambúrguer artesanal, bacon, queijo, milho, ovo, tomate e maionese caseira', 
            preco: 30.00, 
            emoji: '🍳' 
        },
        { 
            id: 'xis-cala-bacon', 
            nome: 'Cala Bacon', 
            descricao: 'Pão prensado, hambúrguer artesanal, bacon, calabresa, queijo, tomate, milho e maionese caseira', 
            preco: 30.00, 
            emoji: '🌶️' 
        },
        { 
            id: 'xis-catarinense', 
            nome: 'Catarinense', 
            descricao: 'Pão prensado, hambúrguer artesanal, alcatra acebolada com pimentão, tomate, milho, queijo, ovo, alface e maionese caseira', 
            preco: 45.00, 
            emoji: '🏆' 
        },
        { 
            id: 'xis-tudao', 
            nome: 'Tudão', 
            descricao: 'Pão prensado, hambúrguer artesanal duplo, calabresa, bacon, filé de frango desfiado, queijo, milho, tomate e maionese caseira', 
            preco: 50.00, 
            emoji: '👑' 
        }
    ],
    
    // BEBIDAS - Cardápio Oficial
    bebidas: [
        { id: 'beb-achocolatado', nome: 'Achocolatado', descricao: 'Bebida achocolatada gelada', preco: 5.00, emoji: '🍫' },
        { id: 'beb-suquinho-kapo', nome: 'Suquinho Kapo', descricao: 'Suco em pó Kapo', preco: 5.00, emoji: '🧃' },
        { id: 'beb-agua', nome: 'Água com/sem gás', descricao: 'Água mineral 500ml', preco: 5.00, emoji: '💧' },
        { id: 'beb-suco-450', nome: 'Suco 450ml', descricao: 'Suco natural 450ml', preco: 10.00, emoji: '🥤' },
        { id: 'beb-energetico', nome: 'Energético lata', descricao: 'Bebida energética em lata', preco: 12.00, emoji: '⚡' }
    ],
    
    // REFRIGERANTES - Cardápio Oficial
    refris: [
        { id: 'ref-coca-lata', nome: 'Coca-cola lata', descricao: 'Coca-cola 350ml', preco: 6.00, emoji: '🥤' },
        { id: 'ref-sprite-lata', nome: 'Sprite lata', descricao: 'Sprite 350ml', preco: 6.00, emoji: '🍋' },
        { id: 'ref-fanta-uva-lata', nome: 'Fanta uva lata', descricao: 'Fanta uva 350ml', preco: 6.00, emoji: '🍇' },
        { id: 'ref-sprite-600', nome: 'Sprite 600ml', descricao: 'Sprite garrafa 600ml', preco: 10.00, emoji: '🍋' },
        { id: 'ref-fanta-uva-600', nome: 'Fanta uva 600ml', descricao: 'Fanta uva garrafa 600ml', preco: 10.00, emoji: '🍇' },
        { id: 'ref-coca-600', nome: 'Coca-cola 600ml', descricao: 'Coca-cola garrafa 600ml', preco: 10.00, emoji: '🥤' },
        { id: 'ref-coca-1l', nome: 'Coca-cola 1 litro', descricao: 'Coca-cola garrafa 1L', preco: 12.00, emoji: '🥤' },
        { id: 'ref-coca-2l', nome: 'Coca-cola 2 litros', descricao: 'Coca-cola garrafa 2L', preco: 15.00, emoji: '🥤' }
    ],
    
    // CERVEJAS - Cardápio Oficial
    cervejas: [
        { id: 'cer-heineken', nome: 'Heineken long neck', descricao: 'Cerveja Heineken 330ml', preco: 12.00, emoji: '🍺' },
        { id: 'cer-budweiser', nome: 'Budweiser long neck', descricao: 'Cerveja Budweiser 330ml', preco: 10.00, emoji: '🍻' },
        { id: 'cer-sol', nome: 'Sol long neck', descricao: 'Cerveja Sol 330ml', preco: 10.00, emoji: '🌞' },
        { id: 'cer-moinho', nome: 'Moinho Real lata', descricao: 'Cerveja Moinho Real 350ml', preco: 6.00, emoji: '🍺' },
        { id: 'cer-original', nome: 'Original lata', descricao: 'Cerveja Original 350ml', preco: 6.00, emoji: '🍺' },
        { id: 'cer-brahma', nome: 'Brahma lata', descricao: 'Cerveja Brahma 350ml', preco: 6.00, emoji: '🍺' },
        { id: 'cer-skol', nome: 'Skol lata', descricao: 'Cerveja Skol 350ml', preco: 6.00, emoji: '🍺' },
        { id: 'cer-colonia', nome: 'Colônia lata', descricao: 'Cerveja Colônia 350ml', preco: 6.00, emoji: '🍺' }
    ],
    
    // ADICIONAIS - Cardápio Oficial
    adicionais: [
        { id: 'adicional-hamburguer', nome: 'Hambúrguer', descricao: 'Hambúrguer artesanal extra', preco: 5.00, emoji: '🥩' },
        { id: 'adicional-bacon', nome: 'Bacon', descricao: 'Bacon crocante extra', preco: 3.00, emoji: '🥓' },
        { id: 'adicional-calabresa', nome: 'Calabresa', descricao: 'Calabresa picadinha extra', preco: 3.00, emoji: '🌭' },
        { id: 'adicional-frango', nome: 'Frango', descricao: 'Frango desfiado extra', preco: 3.00, emoji: '🍗' },
        { id: 'adicional-queijo', nome: 'Queijo', descricao: 'Fatia de queijo extra', preco: 3.00, emoji: '🧀' },
        { id: 'adicional-ovo', nome: 'Ovo', descricao: 'Ovo frito extra', preco: 3.00, emoji: '🍳' },
        { id: 'adicional-maionese', nome: 'Maionese extra', descricao: 'Porção de maionese caseira', preco: 2.00, emoji: '🥄' }
    ],
    
    // OUTROS - Cardápio Oficial
    outros: [
        { id: 'out-limao-gelo', nome: 'Limão + gelo', descricao: 'Limão e gelo para cerveja', preco: 2.00, emoji: '🍋' }
    ]
};

// ============================================
// CARRINHO GLOBAL
// ============================================
const Carrinho = {
    items: [],

    init() {
        const saved = localStorage.getItem('trailer_cart');
        if (saved) {
            this.items = JSON.parse(saved);
        }
        this.updateUI();
    },

    save() {
        localStorage.setItem('trailer_cart', JSON.stringify(this.items));
        this.updateUI();
    },

    add(produto, quantidade = 1) {
        const existing = this.items.find(item => item.id === produto.id);
        
        if (existing) {
            existing.quantidade += quantidade;
        } else {
            this.items.push({
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                emoji: produto.emoji,
                quantidade: quantidade
            });
        }
        
        this.save();
        this.animateBadge();
        showToast(`${produto.nome} adicionado!`);
    },

    update(id, quantidade) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            if (quantidade <= 0) {
                this.remove(id);
            } else {
                item.quantidade = quantidade;
                this.save();
            }
        }
    },

    remove(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
    },

    clear() {
        this.items = [];
        this.save();
    },

    getTotal() {
        return this.items.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    },

    getCount() {
        return this.items.reduce((count, item) => count + item.quantidade, 0);
    },

    updateUI() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.getCount();
        
        badges.forEach(badge => {
            badge.textContent = count > 0 ? count : '';
            badge.setAttribute('data-count', count);
        });

        const floatingCart = document.querySelector('.floating-cart');
        if (floatingCart) {
            if (count > 0) {
                floatingCart.classList.remove('hidden');
            } else {
                floatingCart.classList.add('hidden');
            }
        }
    },

    animateBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        badges.forEach(badge => {
            badge.classList.add('badge-bounce');
            setTimeout(() => badge.classList.remove('badge-bounce'), 400);
        });
    }
};

// ============================================
// TEMA CLARO/ESCURO
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('trailer_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('trailer_theme', isLight ? 'light' : 'dark');
}

// ============================================
// NAVEGAÇÃO SPA
// ============================================
let currentPage = 'home';

function navigate(page) {
    const pages = document.querySelectorAll('.page');
    const targetPage = document.getElementById(`page-${page}`);
    
    if (!targetPage) return;
    
    pages.forEach(p => p.classList.remove('active'));
    targetPage.classList.add('active');
    currentPage = page;
    
    if (page === 'xis') {
        renderProducts('xis', 'xis-grid');
    } else if (page === 'bebidas') {
        renderBebidas();
    } else if (page === 'adicionais') {
        renderProducts('adicionais', 'adicionais-grid');
    } else if (page === 'outros') {
        renderProducts('outros', 'outros-grid');
    } else if (page === 'carrinho') {
        renderCart();
    } else if (page === 'checkout') {
        renderCheckout();
    }
    
    window.scrollTo(0, 0);
}

// ============================================
// TOAST NOTIFICATION
// ============================================
function showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : '⚠'}</span>
        <span class="toast-text">${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

// ============================================
// RENDER PRODUCT CARD
// ============================================
function renderProductCard(produto, index = 0) {
    const quantidadeNoCarrinho = Carrinho.items.find(item => item.id === produto.id)?.quantidade || 0;
    
    return `
        <div class="product-card" style="animation-delay: ${index * 0.05}s">
            <div class="product-image">${produto.emoji}</div>
            <div class="product-info">
                <div class="product-name">${produto.nome}</div>
                <div class="product-description">${produto.descricao}</div>
                <div class="product-footer">
                    <span class="product-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                    ${quantidadeNoCarrinho > 0 ? `
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateQuantity('${produto.id}', -1)">−</button>
                            <span class="qty-display">${quantidadeNoCarrinho}</span>
                            <button class="qty-btn" onclick="updateQuantity('${produto.id}', 1)">+</button>
                        </div>
                    ` : `
                        <button class="add-btn" onclick="addToCart('${produto.id}')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// RENDER BEBIDAS (COM SEÇÕES)
// ============================================
function renderBebidas() {
    const grid = document.getElementById('bebidas-grid');
    if (!grid) return;
    
    let html = '';
    
    // Seção Bebidas
    html += `
        <div class="section-title fade-in-up">
            <span class="section-icon">🥤</span>
            <span>Bebidas</span>
        </div>
        <div class="products-section">
            ${produtos.bebidas.map((produto, index) => renderProductCard(produto, index)).join('')}
        </div>
    `;
    
    // Seção Refrigerantes
    html += `
        <div class="section-title fade-in-up" style="margin-top: 32px;">
            <span class="section-icon">🧃</span>
            <span>Refrigerantes</span>
        </div>
        <div class="products-section">
            ${produtos.refris.map((produto, index) => renderProductCard(produto, index)).join('')}
        </div>
    `;
    
    // Seção Cervejas
    html += `
        <div class="section-title fade-in-up" style="margin-top: 32px;">
            <span class="section-icon">🍺</span>
            <span>Cervejas</span>
        </div>
        <div class="products-section">
            ${produtos.cervejas.map((produto, index) => renderProductCard(produto, index)).join('')}
        </div>
    `;
    
    grid.innerHTML = html;
}

// ============================================
// ADD TO CART
// ============================================
function addToCart(produtoId) {
    const allProducts = [
        ...produtos.xis, 
        ...produtos.bebidas, 
        ...produtos.refris,
        ...produtos.cervejas,
        ...produtos.adicionais,
        ...produtos.outros
    ];
    const produto = allProducts.find(p => p.id === produtoId);
    
    if (produto) {
        Carrinho.add(produto);
        
        if (currentPage === 'xis') {
            renderProducts('xis', 'xis-grid');
        } else if (currentPage === 'bebidas') {
            renderBebidas();
        } else if (currentPage === 'adicionais') {
            renderProducts('adicionais', 'adicionais-grid');
        } else if (currentPage === 'outros') {
            renderProducts('outros', 'outros-grid');
        } else if (currentPage === 'carrinho') {
            renderCart();
        }
    }
}

// ============================================
// UPDATE QUANTITY
// ============================================
function updateQuantity(produtoId, change) {
    const item = Carrinho.items.find(item => item.id === produtoId);
    if (item) {
        const newQuantity = item.quantidade + change;
        Carrinho.update(produtoId, newQuantity);
        
        if (currentPage === 'xis') {
            renderProducts('xis', 'xis-grid');
        } else if (currentPage === 'bebidas') {
            renderBebidas();
        } else if (currentPage === 'adicionais') {
            renderProducts('adicionais', 'adicionais-grid');
        } else if (currentPage === 'outros') {
            renderProducts('outros', 'outros-grid');
        } else if (currentPage === 'carrinho') {
            renderCart();
        } else if (currentPage === 'checkout') {
            renderCheckout();
        }
    }
}

// ============================================
// REMOVE FROM CART
// ============================================
function removeFromCart(produtoId) {
    Carrinho.remove(produtoId);
    renderCart();
}

// ============================================
// RENDER PRODUCTS
// ============================================
function renderProducts(type, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid || !produtos[type]) return;
    
    grid.innerHTML = produtos[type].map((produto, index) => 
        renderProductCard(produto, index)
    ).join('');
}

// ============================================
// RENDER CART
// ============================================
function renderCart() {
    const container = document.getElementById('cart-content');
    if (!container) return;

    if (Carrinho.items.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <div class="cart-empty-title">Carrinho vazio</div>
                <div class="cart-empty-text">Adicione itens do cardápio</div>
                <button class="cart-empty-btn" onclick="navigate('home')">
                    <span>Ver cardápio</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        `;
        return;
    }

    const itemsHtml = Carrinho.items.map((item, index) => `
        <div class="cart-item" style="animation-delay: ${index * 0.05}s">
            <div class="cart-item-image">${item.emoji}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2).replace('.', ',')} un</div>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                <span class="qty-display">${item.quantidade}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-total">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `).join('');

    const total = Carrinho.getTotal();

    container.innerHTML = `
        <div class="cart-items">
            ${itemsHtml}
        </div>
        <div class="cart-summary">
            <div class="summary-row">
                <span class="summary-label">Itens</span>
                <span class="summary-value">${Carrinho.getCount()}</span>
            </div>
            <div class="summary-row summary-total">
                <span class="summary-label">Total</span>
                <span class="summary-value">R$ ${total.toFixed(2).replace('.', ',')}</span>
            </div>
        </div>
        <button class="checkout-btn" onclick="goToCheckout()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            <span>Continuar para Finalização</span>
        </button>
        <button class="continue-btn" onclick="navigate('home')">
            <span>Adicionar mais itens</span>
        </button>
    `;
}

// ============================================
// CHECKOUT / FINALIZAÇÃO
// ============================================
let checkoutData = {
    tipoEntrega: null,
    endereco: '',
    numero: '',
    bairro: '',
    cidade: '',
    complemento: '',
    pagamento: null,
    precisaTroco: null,
    valorTroco: ''
};

function goToCheckout() {
    if (Carrinho.items.length === 0) {
        showToast('Adicione itens ao carrinho!', 'warning');
        return;
    }
    navigate('checkout');
}

function renderCheckout() {
    const container = document.getElementById('checkout-content');
    if (!container) return;

    const itemsHtml = Carrinho.items.map((item, index) => `
        <div class="cart-item" style="animation-delay: ${index * 0.05}s">
            <div class="cart-item-image">${item.emoji}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2).replace('.', ',')} un</div>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                <span class="qty-display">${item.quantidade}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-total">R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="cart-items" style="margin-bottom: 24px;">
            ${itemsHtml}
        </div>
        
        <div class="cart-summary" style="margin-bottom: 24px;">
            <div class="summary-row summary-total">
                <span class="summary-label">Total do Pedido</span>
                <span class="summary-value">R$ ${Carrinho.getTotal().toFixed(2).replace('.', ',')}</span>
            </div>
        </div>

        <form class="checkout-form" id="checkout-form" onsubmit="return false;">
            <!-- Tipo de Entrega -->
            <div class="form-section">
                <div class="form-section-title">
                    🚚 Tipo de Entrega <span class="required">*</span>
                </div>
                <div class="radio-options">
                    <label class="radio-option ${checkoutData.tipoEntrega === 'entrega' ? 'selected' : ''}" onclick="selectTipoEntrega('entrega')">
                        <input type="radio" name="tipo-entrega" value="entrega" ${checkoutData.tipoEntrega === 'entrega' ? 'checked' : ''}>
                        <span class="radio-custom"></span>
                        <span class="radio-text">🛵 Entrega</span>
                    </label>
                    <label class="radio-option ${checkoutData.tipoEntrega === 'retirada' ? 'selected' : ''}" onclick="selectTipoEntrega('retirada')">
                        <input type="radio" name="tipo-entrega" value="retirada" ${checkoutData.tipoEntrega === 'retirada' ? 'checked' : ''}>
                        <span class="radio-custom"></span>
                        <span class="radio-text">🏃 Vou buscar no local</span>
                    </label>
                </div>
                <div class="error-message" id="error-tipo-entrega">Selecione o tipo de entrega</div>
            </div>

            <!-- Endereço (só aparece se entrega) -->
            <div class="form-section hidden-section ${checkoutData.tipoEntrega === 'entrega' ? 'visible' : ''}" id="endereco-section">
                <div class="form-section-title">
                    📍 Endereço de Entrega <span class="required">*</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Cidade/Região</label>
                    <select class="form-select" id="cidade" onchange="updateCheckoutData('cidade', this.value)">
                        <option value="">Selecione sua cidade</option>
                        <option value="Realeza" ${checkoutData.cidade === 'Realeza' ? 'selected' : ''}>Realeza</option>
                        <option value="Santa Isabel" ${checkoutData.cidade === 'Santa Isabel' ? 'selected' : ''}>Santa Isabel</option>
                        <option value="Interior" ${checkoutData.cidade === 'Interior' ? 'selected' : ''}>Interior</option>
                    </select>
                    <div class="error-message" id="error-cidade">Selecione a cidade</div>
                </div>
                <div class="form-group">
                    <label class="form-label">Rua/Avenida</label>
                    <input type="text" class="form-input" id="endereco" placeholder="Nome da rua" 
                        value="${checkoutData.endereco}" onchange="updateCheckoutData('endereco', this.value)">
                    <div class="error-message" id="error-endereco">Digite o endereço</div>
                </div>
                <div class="form-group">
                    <label class="form-label">Número</label>
                    <input type="text" class="form-input" id="numero" placeholder="123" 
                        value="${checkoutData.numero}" onchange="updateCheckoutData('numero', this.value)">
                    <div class="error-message" id="error-numero">Digite o número</div>
                </div>
                <div class="form-group">
                    <label class="form-label">Bairro</label>
                    <input type="text" class="form-input" id="bairro" placeholder="Seu bairro" 
                        value="${checkoutData.bairro}" onchange="updateCheckoutData('bairro', this.value)">
                    <div class="error-message" id="error-bairro">Digite o bairro</div>
                </div>
                <div class="form-group">
                    <label class="form-label">Complemento (opcional)</label>
                    <input type="text" class="form-input" id="complemento" placeholder="Apto, casa, ponto de referência..." 
                        value="${checkoutData.complemento}" onchange="updateCheckoutData('complemento', this.value)">
                </div>
            </div>

            <!-- Forma de Pagamento -->
            <div class="form-section">
                <div class="form-section-title">
                    💳 Forma de Pagamento <span class="required">*</span>
                </div>
                <div class="radio-options">
                    <label class="radio-option ${checkoutData.pagamento === 'pix' ? 'selected' : ''}" onclick="selectPagamento('pix')">
                        <input type="radio" name="pagamento" value="pix" ${checkoutData.pagamento === 'pix' ? 'checked' : ''}>
                        <span class="radio-custom"></span>
                        <span class="radio-text">📱 Pix</span>
                    </label>
                    <label class="radio-option ${checkoutData.pagamento === 'cartao' ? 'selected' : ''}" onclick="selectPagamento('cartao')">
                        <input type="radio" name="pagamento" value="cartao" ${checkoutData.pagamento === 'cartao' ? 'checked' : ''}>
                        <span class="radio-custom"></span>
                        <span class="radio-text">💳 Cartão</span>
                    </label>
                    <label class="radio-option ${checkoutData.pagamento === 'dinheiro' ? 'selected' : ''}" onclick="selectPagamento('dinheiro')">
                        <input type="radio" name="pagamento" value="dinheiro" ${checkoutData.pagamento === 'dinheiro' ? 'checked' : ''}>
                        <span class="radio-custom"></span>
                        <span class="radio-text">💵 Dinheiro</span>
                    </label>
                </div>
                <div class="error-message" id="error-pagamento">Selecione a forma de pagamento</div>
            </div>

            <!-- Troco (só aparece se dinheiro) -->
            <div class="form-section hidden-section ${checkoutData.pagamento === 'dinheiro' ? 'visible' : ''}" id="troco-section">
                <div class="form-section-title">
                    🔄 Precisa de troco? <span class="required">*</span>
                </div>
                <div class="radio-options">
                    <label class="radio-option ${checkoutData.precisaTroco === 'sim' ? 'selected' : ''}" onclick="selectTroco('sim')">
                        <input type="radio" name="troco" value="sim" ${checkoutData.precisaTroco === 'sim' ? 'checked' : ''}>
                        <span class="radio-custom"></span>
                        <span class="radio-text">Sim</span>
                    </label>
                    <label class="radio-option ${checkoutData.precisaTroco === 'nao' ? 'selected' : ''}" onclick="selectTroco('nao')">
                        <input type="radio" name="troco" value="nao" ${checkoutData.precisaTroco === 'nao' ? 'checked' : ''}>
                        <span class="radio-custom"></span>
                        <span class="radio-text">Não preciso</span>
                    </label>
                </div>
                <div class="error-message" id="error-troco">Informe se precisa de troco</div>
                
                <div class="form-group hidden-section ${checkoutData.precisaTroco === 'sim' ? 'visible' : ''}" id="valor-troco-section" style="margin-top: 16px;">
                    <label class="form-label">Troco para quanto?</label>
                    <input type="text" class="form-input" id="valor-troco" placeholder="R$ 0,00" 
                        value="${checkoutData.valorTroco}" oninput="formatCurrency(this)" onchange="updateCheckoutData('valorTroco', this.value)">
                    <div class="error-message" id="error-valor-troco">Informe o valor para troco</div>
                </div>
            </div>

            <!-- Observações -->
            <div class="form-section">
                <div class="form-section-title">
                    📝 Observações (opcional)
                </div>
                <div class="form-group">
                    <textarea class="form-textarea" id="observacoes" placeholder="Alguma observação sobre seu pedido?"></textarea>
                </div>
            </div>

            <button type="button" class="finalize-btn" onclick="finalizeOrder()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                <span>Finalizar Pedido no WhatsApp</span>
            </button>
        </form>
    `;
}

function selectTipoEntrega(tipo) {
    checkoutData.tipoEntrega = tipo;
    renderCheckout();
}

function selectPagamento(pagamento) {
    checkoutData.pagamento = pagamento;
    renderCheckout();
}

function selectTroco(troco) {
    checkoutData.precisaTroco = troco;
    renderCheckout();
}

function updateCheckoutData(field, value) {
    checkoutData[field] = value;
}

function formatCurrency(input) {
    let value = input.value.replace(/\D/g, '');
    if (value) {
        value = (parseInt(value) / 100).toFixed(2);
        input.value = 'R$ ' + value.replace('.', ',');
    } else {
        input.value = '';
    }
}

// ============================================
// VALIDAÇÃO E FINALIZAÇÃO
// ============================================
function validateCheckout() {
    let isValid = true;
    
    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => el.classList.remove('visible'));
    document.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));

    // Validar tipo de entrega
    if (!checkoutData.tipoEntrega) {
        document.getElementById('error-tipo-entrega').classList.add('visible');
        isValid = false;
    }

    // Validar endereço se for entrega
    if (checkoutData.tipoEntrega === 'entrega') {
        if (!checkoutData.cidade) {
            document.getElementById('error-cidade').classList.add('visible');
            document.getElementById('cidade').classList.add('error');
            isValid = false;
        }
        if (!checkoutData.endereco.trim()) {
            document.getElementById('error-endereco').classList.add('visible');
            document.getElementById('endereco').classList.add('error');
            isValid = false;
        }
        if (!checkoutData.numero.trim()) {
            document.getElementById('error-numero').classList.add('visible');
            document.getElementById('numero').classList.add('error');
            isValid = false;
        }
        if (!checkoutData.bairro.trim()) {
            document.getElementById('error-bairro').classList.add('visible');
            document.getElementById('bairro').classList.add('error');
            isValid = false;
        }
    }

    // Validar pagamento
    if (!checkoutData.pagamento) {
        document.getElementById('error-pagamento').classList.add('visible');
        isValid = false;
    }

    // Validar troco se for dinheiro
    if (checkoutData.pagamento === 'dinheiro') {
        if (!checkoutData.precisaTroco) {
            document.getElementById('error-troco').classList.add('visible');
            isValid = false;
        }
        if (checkoutData.precisaTroco === 'sim' && !checkoutData.valorTroco.trim()) {
            document.getElementById('error-valor-troco').classList.add('visible');
            document.getElementById('valor-troco').classList.add('error');
            isValid = false;
        }
    }

    return isValid;
}

function finalizeOrder() {
    if (!validateCheckout()) {
        showToast('Preencha todos os campos obrigatórios!', 'warning');
        return;
    }

    const observacoes = document.getElementById('observacoes')?.value || '';
    const mensagem = gerarMensagemPedido(observacoes);
    const telefone = '5546999118676';
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}

// ============================================
// GERAR MENSAGEM DO PEDIDO
// ============================================
function gerarMensagemPedido(observacoes = '') {
    let mensagem = `*🍔 NOVO PEDIDO - TRAILER MÁRCIO & ZANE*\n\n`;
    
    mensagem += `*📦 ITENS:*\n`;
    Carrinho.items.forEach(item => {
        mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}\n`;
    });
    
    mensagem += `\n*💰 TOTAL: R$ ${Carrinho.getTotal().toFixed(2).replace('.', ',')}*\n\n`;
    
    // Tipo de entrega
    mensagem += `*🚚 ENTREGA:*\n`;
    if (checkoutData.tipoEntrega === 'entrega') {
        mensagem += `Tipo: ENTREGA\n`;
        mensagem += `Cidade: ${checkoutData.cidade}\n`;
        mensagem += `Endereço: ${checkoutData.endereco}, ${checkoutData.numero}\n`;
        mensagem += `Bairro: ${checkoutData.bairro}\n`;
        if (checkoutData.complemento) {
            mensagem += `Complemento: ${checkoutData.complemento}\n`;
        }
    } else {
        mensagem += `Tipo: RETIRADA NO LOCAL\n`;
    }
    
    // Pagamento
    mensagem += `\n*💳 PAGAMENTO:*\n`;
    const pagamentoFormatado = {
        'pix': 'PIX',
        'cartao': 'CARTÃO',
        'dinheiro': 'DINHEIRO'
    };
    mensagem += `Forma: ${pagamentoFormatado[checkoutData.pagamento]}\n`;
    
    if (checkoutData.pagamento === 'dinheiro') {
        if (checkoutData.precisaTroco === 'sim') {
            mensagem += `Troco para: ${checkoutData.valorTroco}\n`;
        } else {
            mensagem += `Troco: NÃO PRECISO\n`;
        }
    }
    
    // Observações
    if (observacoes.trim()) {
        mensagem += `\n*📝 OBSERVAÇÕES:*\n${observacoes}\n`;
    }
    
    mensagem += `\n*Aguardo confirmação!* ✅`;
    
    return mensagem;
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    Carrinho.init();
    
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => navigate('home'));
    }
});

// Expose functions globally
window.navigate = navigate;
window.toggleTheme = toggleTheme;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.goToCheckout = goToCheckout;
window.selectTipoEntrega = selectTipoEntrega;
window.selectPagamento = selectPagamento;
window.selectTroco = selectTroco;
window.updateCheckoutData = updateCheckoutData;
window.formatCurrency = formatCurrency;
window.finalizeOrder = finalizeOrder;
window.Carrinho = Carrinho;
