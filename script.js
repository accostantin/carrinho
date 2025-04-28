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
products.forEach((produtos, index)=> {
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


    //add produto no carrinho
    const lista = document.getElementById("lista");
    lista.appendChild(box);

    
    const btnComprar = box.querySelector(".btn")
    btnComprar.addEventListener("click", () => {
        const menuItems = document.getElementById("menuItems")
        const itemCarrinho = document.createElement("div")
        itemCarrinho.classList.add("itemCarrinho")
        itemCarrinho.innerHTML = `
        <img class="ovoCart" src="${produtos.image}" alt="Produto">
        <div class="divPreco">
        <h2 class="eggtitle-cart">${produtos.name}</h2>
        <p class="precoCart">R$ ${produtos.price.toFixed(2)}</p>
        </div>
        <div id="counter">
        <button id="plus" class="count-btn">+</button>
        <span id="value">0</span>
        <button id="minus" class="count-btn">-</button>
        </div>
        <button class="btnRemover">Remover</button>
        `
        menuItems.appendChild(itemCarrinho)
        
        const btnRemover = itemCarrinho.querySelector(".btnRemover")
        btnRemover.addEventListener("click", () => {
            itemCarrinho.remove()
        });
        
        const plusBtn = itemCarrinho.querySelector("#plus")
        const minusBtn = itemCarrinho.querySelector("#minus")
        const valueSpan = itemCarrinho.querySelector("#value")
        let count = 0
        plusBtn.addEventListener("click", () => {
            count++
            valueSpan.innerText = count
            updateTotal()
        })
        minusBtn.addEventListener("click", () => {
            if (count > 0) {
                count--
                valueSpan.innerText = count
                updateTotal()
            }
        })

        updateTotal();
    })
}) 

//carrinho  
const btnAbrirCarrinho = document.getElementById("btnAbrirCarrinho")
const btnFecharCarrinho = document.getElementById("btnFecharCarrinho")
const carrinho = document.getElementById("carrinho")

function AbrirCarrinho(){
    carrinho.style.right = "0px"
    carrinho.style.transition = "0.3s ease-in-out"
    carrinho.style.animation = "1s abrirCarrinho forwards"
    btnAbrirCarrinho.style.transition = "0.3s ease-in-out"
    btnAbrirCarrinho.style.animation = "1s abrirBtnCarrinho forwards"
    btnAbrirCarrinho.style.right = "490px"

}
function FecharCarrinho(){
    carrinho.style.right = "-500px"
    carrinho.style.transition = "0.3s ease-in-out"
    carrinho.style.animation = "1s fecharCarrinho forwards"
    btnAbrirCarrinho.style.transition = "0.3s ease-in-out"
    btnAbrirCarrinho.style.animation = "1s fecharBtnCarrinho forwards"
    btnAbrirCarrinho.style.right = "0px"

}

btnAbrirCarrinho.addEventListener("click", AbrirCarrinho)
btnFecharCarrinho.addEventListener("click", FecharCarrinho)

function updateTotal() {
    const items = document.querySelectorAll(".itemCarrinho")
    let total = 0
    items.forEach(item => {
        const price = parseFloat(item.querySelector(".precoCart").innerText.replace("R$ ", "").replace(",", "."))
        const quantity = parseInt(item.querySelector("#value").innerText)
        total += price * quantity
    })
    const totaldiv = document.getElementById("total")
    totaldiv.innerText = `R$ ${total.toFixed(2)}`
}