document.addEventListener("DOMContentLoaded", () => {
    // Load watches from JSON file
    fetch("watch.json")
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById("product-list");
            data.forEach(watch => {
                const product = document.createElement("div");
                product.classList.add("product");
                product.innerHTML = `
                    <img src="${watch.image}" alt="${watch.name}">
                    <h3>${watch.name}</h3>
                    <p>${watch.description}</p>
                    <span class="price">$${watch.price}</span>
                    <button class="buy-btn">Buy Now</button>
                `;
                productList.appendChild(product);
            });
        })
        .catch(error => console.error("Error loading watches:", error));
    
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});