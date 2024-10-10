import { p1 } from "./Componente/componente-1/componente-1.js";
import { p2 } from "./Componente/componente-2/componente-2.js";
import { mostrarTexto } from "./Componente/componente-3/componente-3.js";

let DOM = document.querySelector("#root");

let componente1 = document.createElement('section');
componente1.className = "component1";
componente1.appendChild(p1());
DOM.appendChild(componente1);

let componente2 = document.createElement('section');
componente2.className = "component2";
componente2.appendChild(p2());
DOM.appendChild(componente2);

let componente3 = document.createElement('section');
componente3.className = "component3";
componente3.appendChild(mostrarTexto())
DOM.appendChild(componente3);