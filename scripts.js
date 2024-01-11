const list = document.querySelector('ul');
const showall = document.querySelector('.showEntireMenu')
let = myLi = ''

function showAll() {
    options.forEach(products => {
        myLi += `
        <<li>
                <img src= ${products.src}>
                <p>${products.name}</p>
                <p class="price">R$ ${products.price}</p>
        </li>
    
        `
    });

    list.innerHTML = myLi
}

showall.addEventListener('click', showAll)

