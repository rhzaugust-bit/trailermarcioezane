/**
 * TRAILER MÁRCIO & ZANE - SISTEMA DE PEDIDOS
 * JavaScript completo com validações e tema
 */

// ============================================
// DADOS DO CARDÁPIO
// ============================================
const produtos = {
    xis: [
        { id: 'xis-salada', nome: 'Xis Salada', descricao: 'Hambúrguer, queijo, alface, tomate, maionese', preco: 18.00, emoji: '🍔' },
        { id: 'xis-bacon', nome: 'Xis Bacon', descricao: 'Hambúrguer, queijo, bacon, alface, tomate', preco: 22.00, emoji: '🥓' },
        { id: 'xis-egg', nome: 'Xis Egg', descricao: 'Hambúrguer, queijo, ovo, alface, tomate', preco: 20.00, emoji: '🍳' },
        { id: 'xis-calabresa', nome: 'Xis Calabresa', descricao: 'Calabresa, queijo, alface, tomate, maionese', preco: 21.00, emoji: '🌭' },
        { id: 'xis-frango', nome: 'Xis Frango', descricao: 'Filé de frango, queijo, alface, tomate', preco: 19.00, emoji: '🍗' },
        { id: 'xis-tudo', nome: 'Xis Tudo', descricao: 'Hambúrguer, frango, calabresa, bacon, ovo', preco: 32.00, emoji: '🍔' },
        { id: 'xis-coracao', nome: 'Xis Coração', descricao: 'Coração de frango, queijo, alface, tomate', preco: 23.00, emoji: '❤️' },
        { id: 'xis-milanesa', nome: 'Xis Milanesa', descricao: 'Filé à milanesa, queijo, alface, tomate', preco: 26.00, emoji: '🥩' }
    ],
    bebidas: [
        { id: 'coca-350', nome: 'Coca-Cola 350ml', descricao: 'Lata gelada', preco: 6.00, emoji: '🥤' },
        { id: 'coca-1l', nome: 'Coca-Cola 1L', descricao: 'Garrafa', preco: 10.00, emoji: '🥤' },
        { id: 'coca-2l', nome: 'Coca-Cola 2L', descricao: 'Garrafa família', preco: 14.00, emoji: '🥤' },
        { id: 'guarana-350', nome: 'Guaraná 350ml', descricao: 'Lata gelada', preco: 5.00, emoji: '🍹' },
        { id: 'guarana-1l', nome: 'Guaraná 1L', descricao: 'Garrafa', preco: 8.00, emoji: '🍹' },
        { id: 'guarana-2l', nome: 'Guaraná 2L', descricao: 'Garrafa família', preco: 12.00, emoji: '🍹' },
        { id: 'suco-laranja', nome: 'Suco de Laranja', descricao: 'Copo 300ml natural', preco: 7.00, emoji: '🍊' },
        { id: 'agua', nome: 'Água Mineral', descricao: '500ml sem gás', preco: 3.00, emoji: '💧' }
    ],
    adicionais: [
        { id: 'adicional-bacon', nome: 'Bacon Extra', descricao: 'Porção de bacon crocante', preco: 5.00, emoji: '🥓' },
        { id: 'adicional-queijo', nome: 'Queijo Extra', descricao: 'Fatia de queijo cheddar', preco: 4.00, emoji: '🧀' },
        { id: 'adicional-ovo', nome: 'Ovo Extra', descricao: 'Ovo frito', preco: 3.00, emoji: '🍳' },
        { id: 'adicional-calabresa', nome: 'Calabresa Extra', descricao: 'Porção de calabresa', preco: 5.00, emoji: '🌭' },
        { id: 'adicional-maionese', nome: 'Maionese Extra', descricao: 'Porção de maionese caseira', preco: 2.00, emoji: '🥄' },
        { id: 'adicional-cheddar', nome: 'Cheddar Cremoso', descricao: 'Porção de cheddar', preco: 5.00, emoji: '🧀' },
        { id: 'adicional-catupiry', nome: 'Catupiry', descricao: 'Porção de catupiry', preco: 5.00, emoji: '🧀' },
        { id: 'adicional-batata', nome: 'Batata Frita', descricao: 'Porção individual', preco: 12.00, emoji: '🍟' }
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
        renderProducts('bebidas', 'bebidas-grid');
    } else if (page === 'adicionais') {
        renderProducts('adicionais', 'adicionais-grid');
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
                    <span class="product-price">R$ ${produto.preco.toFixed(2)}</span>
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
// ADD TO CART
// ============================================
function addToCart(produtoId) {
    const allProducts = [...produtos.xis, ...produtos.bebidas, ...produtos.adicionais];
    const produto = allProducts.find(p => p.id === produtoId);
    
    if (produto) {
        Carrinho.add(produto);
        
        if (currentPage === 'xis') {
            renderProducts('xis', 'xis-grid');
        } else if (currentPage === 'bebidas') {
            renderProducts('bebidas', 'bebidas-grid');
        } else if (currentPage === 'adicionais') {
            renderProducts('adicionais', 'adicionais-grid');
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
            renderProducts('bebidas', 'bebidas-grid');
        } else if (currentPage === 'adicionais') {
            renderProducts('adicionais', 'adicionais-grid');
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
                <div class="cart-item-price">R$ ${item.preco.toFixed(2)} un</div>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                <span class="qty-display">${item.quantidade}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-total">R$ ${(item.preco * item.quantidade).toFixed(2)}</div>
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
                <span class="summary-value">R$ ${total.toFixed(2)}</span>
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
                <div class="cart-item-price">R$ ${item.preco.toFixed(2)} un</div>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                <span class="qty-display">${item.quantidade}</span>
                <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-total">R$ ${(item.preco * item.quantidade).toFixed(2)}</div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="cart-items" style="margin-bottom: 24px;">
            ${itemsHtml}
        </div>
        
        <div class="cart-summary" style="margin-bottom: 24px;">
            <div class="summary-row summary-total">
                <span class="summary-label">Total do Pedido</span>
                <span class="summary-value">R$ ${Carrinho.getTotal().toFixed(2)}</span>
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
    const telefone = '5554999999999';
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
        mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });
    
    mensagem += `\n*💰 TOTAL: R$ ${Carrinho.getTotal().toFixed(2)}*\n\n`;
    
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
