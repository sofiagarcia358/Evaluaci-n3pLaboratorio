function p2(){
    let div = document.createElement('div');
    div.className = "div-comp2";

    let h2 = document.createElement('h2');
    h2.innerText = "Caracteristicas";
    div.appendChild(h2);

    let lista = document.createElement('ul');
    lista.innerHTML = '<li>Item 1</li> <li>Item 2</li> <li>Item 3</li>';
    div.appendChild(lista)

    return div;
}
export {p2}