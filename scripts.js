const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.showEntireMenu')
const buttonDiscoutsAll = document.querySelector('.showDiscounts')
const buttonTotals = document.querySelector('.showTotal')
const showVegan = document.querySelector('.showVeganSnacks')


function showAll(productArray) {
    let = myLi = ''
    productArray.forEach((products) => {
        myLi += `
        <li>
                <img src= ${products.src}>
                <p>${products.name}</p>
                <p> ${products.ingredient}</p>
                <p class "price">R$ ${products.price}</p>
        </li>
        `
    });

    list.innerHTML = myLi
}

function discountAll() {
    const newPrice = options.map((product) => ({
        ...product,
        price: (product.price * 0.9).toFixed(2),
    }))
    showAll(newPrice)
}


function totalItens() {
    const sum = options.reduce((acumulator, valueProduct) => {
        return acumulator + valueProduct.price
    }, 0)
    list.innerHTML = `
    <li>
        <p> O valor total de todos os itens é R$  ${sum.toFixed(2)}</p>
    </li>
    `
}


function veganonly() {
    const vegan = options.filter((product) => {
        return product.vegan === true;
    })
    showAll(vegan)
}



buttonShowAll.addEventListener('click', () => showAll(options))
buttonDiscoutsAll.addEventListener('click', discountAll)
buttonTotals.addEventListener('click', totalItens)
showVegan.addEventListener('click', veganonly)

