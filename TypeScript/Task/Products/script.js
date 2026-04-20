let productsData = [];
let lastScrollPosition = 0;
async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    productsData = await response.json();
    renderCard(productsData);
    return productsData;
}
fetchProducts();
function renderCard(data) {
    let container = document.querySelector(".container");
    if (!container) {
        console.log("Container not found");
        return;
    }
    const content = data.map((product) => `<div class = "card" data-id=${product.id}>
            <div class = "card-image">
            <img src = "${product.image}" alt = "product image">
            </div>
            <div class = "card-details">
            <p>${product.title}</p>
            <p>${product.category}</p>
            <p>₹${product.price}</p>
            </div>
        </div>`).join("");
    container.innerHTML = content;
}
const container = document.querySelector(".container");
container.addEventListener("click", (event) => {
    const target = event.target;
    const card = target.closest(".card");
    console.log(card);
    if (card) {
        const productId = card.getAttribute("data-id");
        const selectedProduct = productsData.find((p) => p.id === Number(productId));
        if (selectedProduct) {
            lastScrollPosition = window.scrollY;
            window.history.pushState({ productId: selectedProduct.id }, "", `?id=${selectedProduct.id}`);
            renderExpandedView(selectedProduct);
        }
        else {
            console.log("Product not found");
        }
    }
    else {
        console.log("product id not found");
    }
});
function renderExpandedView(product) {
    console.log(product);
    let container = document.querySelector(".container");
    if (!container) {
        console.log("Container not found");
        return;
    }
    container.innerHTML = "";
    const content = `<div class = "wrapper">
    <button id="btn">Back</button>
    <div class = "single-product">
        <div class = "image-container">
        <img src ="${product.image}" alt = "${product.title}">
        </div>
        <div class = "prod-details">
        <p id="product-title">${product.title}</p>
        <p id="product-desc">${product.description}</p>
        <p id="product-price">₹${product.price}</p>
        <p id="product-category">${product.category}</p>
        <p id="product-rating">${product.rating.rate}</p>
        </div>
        </div>
    </div>`;
    container.innerHTML = content;
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        window.history.back();
    });
}
window.addEventListener("popstate", (event) => {
    if (event.state && event.state.productId) {
        console.log("event state ", event.state);
        const product = productsData.find((p) => p.id === event.state.productId);
        if (product) {
            renderExpandedView(product);
        }
    }
    else {
        renderCard(productsData);
        window.scrollTo({
            top: lastScrollPosition,
            behavior: "instant"
        });
    }
});
export {};
