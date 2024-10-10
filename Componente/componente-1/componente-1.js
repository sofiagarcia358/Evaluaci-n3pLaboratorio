function p1(){
let div = document.createElement('div');
div.className = "div-comp1";

let img = document.createElement('img');
img.src = "https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg";
div.appendChild(img);

let h2 = document.createElement('h2');
h2.innerText = "Componente 1";
div.appendChild(h2);

let h3 = document.createElement('h3');
h3.innerText = "Descripción del componente";
div.appendChild(h3)

return div;
}
export{p1}
