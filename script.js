//localizar produtos
const products = [
    {
        name: "Ovo de páscoa Chokito - Brasil Cacau",
        price: 69.99,
        image: "./img/chokito.png",

    },
    {
        name: "Ovo de páscoa Kit Kat - Brasil Cacau",
        price: 69.99,
        image: "./img/kitkat.png",       
    },
    {
        name: "Ovo de páscoa Ovomaltine - Brasil Cacau",
        price: 69.99,
        image: "./img/ovomaltine.png",
    },
    {
        name: "Ovo de páscoa Prestígio - Brasil Cacau",
        price: 69.99,
        image: "./img/prestigio.png",
    }
]

//localizar o container
products.forEach((produtos)=> {
    const box = document.createElement("li");
    box.classList.add("box");
    box.innerHTML = `
        <img class="ovo" src="${produtos.image}" alt="Produto">
        <h2 class="eggtitle"> ${produtos.name}</h2>
        <div class="container"> 
        <p class="preco" >R$ ${produtos.price.toFixed(2)}</p>
        <button class="btn">Comprar</button>
        </div>
    `;

    const lista = document.getElementById("lista");
    lista.appendChild(box)
}) 

//carrinho  
const btnAbrirCarrinho = document.getElementById("btnAbrirCarrinho")
const btnFecharCarrinho = document.getElementById("btnFecharCarrinho")
const carrinho = document.getElementById("carrinho")

function AbrirCarrinho(){
    carrinho.style.right = "0px"
    btnAbrirCarrinho.style.right = "290px"
}
function FecharCarrinho(){
    carrinho.style.right = "-300px"
    btnAbrirCarrinho.style.right = "0px"
}

btnAbrirCarrinho.addEventListener("click", AbrirCarrinho)
btnFecharCarrinho.addEventListener("click", FecharCarrinho)