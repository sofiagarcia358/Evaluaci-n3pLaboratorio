function mostrarTexto() {

    
    const texto = document.getElementById('cuadroTexto').value;
    
    
    document.getElementById('mostrar').textContent = "Has escrito: " + texto;
    
    }
    

    
    document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('cuadroTexto').addEventListener('input', mostrarTexto);
    
    });
    export {mostrarTexto}
    
    
