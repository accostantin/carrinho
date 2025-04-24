//localizar produtos
const products = [
    {
        name: "Ovo de Brigadeiro - Cacau Show",
        price: 69.99,
        Image: "./img/brigadeiro.webp"

    },
    {
        name: "Ovo de Brownie - Cacau Show",
        price: 69.99,
        Image: "./img/brownie.webp"       
    },
    {
        name: "Ovo de Mil folhas Avelã - Cacau Show",
        price: 69.99,
        Image: "./img/milfolhasavela.webp"
    },
    {
        name: "Ovo de Mil folhas Tradicional - Cacau Show",
        price: 69.99,
        Image: "./img/milfolhastrad.webp"
    }
]

//localizar o container

products.forEach((products)) => {
    const box = document.createElement("li");
    box.classList.add("box");
    box.innerHTML = `
        <img class="ovo" src="${products.Image}" alt="">
        <h2 class="eggtitle"> ${products.name}</h2>
        <div class="container">
        <p class="preco">R$ ${products.price.toFixed(2).replace(".", ",")}</p>
        <button class="btn">Comprar</button>
    </div>

const lista = document.querySelector(".lista-produtos");
Lista.appendChild(box);
})