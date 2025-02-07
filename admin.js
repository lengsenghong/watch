document.addEventListener("DOMContentLoaded", () => {
    const watchForm = document.getElementById("watch-form");
    const watchList = document.getElementById("watch-list");

    // Load watches from localStorage
    function loadWatches() {
        watchList.innerHTML = "";
        const watches = JSON.parse(localStorage.getItem("watches")) || [];
        watches.forEach((watch, index) => {
            const watchItem = document.createElement("div");
            watchItem.classList.add("watch-item");
            watchItem.innerHTML = `
                <img src="${watch.image}" alt="${watch.name}" width="100">
                <h3>${watch.name}</h3>
                <p>${watch.description}</p>
                <span class="price">$${watch.price}</span>
                <button onclick="deleteWatch(${index})">Delete</button>
            `;
            watchList.appendChild(watchItem);
        });
    }

    // Add new watch
    watchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("watch-name").value;
        const description = document.getElementById("watch-description").value;
        const price = document.getElementById("watch-price").value;
        const image = document.getElementById("watch-image").value;

        const newWatch = { name, description, price, image };
        const watches = JSON.parse(localStorage.getItem("watches")) || [];
        watches.push(newWatch);
        localStorage.setItem("watches", JSON.stringify(watches));
        watchForm.reset();
        loadWatches();
    });

    // Delete watch
    window.deleteWatch = (index) => {
        const watches = JSON.parse(localStorage.getItem("watches")) || [];
        watches.splice(index, 1);
        localStorage.setItem("watches", JSON.stringify(watches));
        loadWatches();
    };

    loadWatches();
});
