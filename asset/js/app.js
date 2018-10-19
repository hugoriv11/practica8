
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

/** PREGUNTAS
 1. Qué contiene la variable formulario?
<form id="bitacora" action="#"> 
Contiene el formulario con sus hijos

2.¿Qué hace el método evt.preventDefault()?
Que el formulario no se mande vacío 

3.¿Qué es lo que contiene formulario[x]? 
Los hijos del formulario, como inputs, textareas.. etc.

4.¿Qué contienen las variables tr y td ?

5.¿Qué contienen la variable content ?

6.¿Qué valor tendra tbody al finalizar la iteración?

7.Describa en pocas palabras lo que realizara esta función 

8.¿Qué es lo que hace .firstChild?

9.Después de realizar el while ¿Comó quedara el elemento tbody ? 

10. ¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; 


11.¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody") ?

12.¿Qué hace el método childElementCount?

13.¿Qué se mostrara en pantalla cuando se ejecute la función agregar()?

14.¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? 

*/

var cont = 1;
var bitacoras = [];
var formulario = document.querySelector('#bitacora');
//var formulario = document.getElementById('bitacora');
/**Evento submit */
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    validarForm();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

/**creando nodo */
const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

/**eliminandoi nodo */
const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

/**agregando nodo */
const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[1].textContent;
            document.querySelector("#cant").value = item.childNodes[1].textContent;
        });
    });
}

const mostrar = ()=>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
} 


const validarForm = () => {

    if (formulario[1].value === "" || formulario[2].value === "" || formulario[3].value === ""){
        formulario[1].style.backgroundColor = "red";
        formulario[2].style.backgroundColor = "red";
        formulario[3].style.backgroundColor = "red";
    } else {
        formulario[1].style.backgroundColor = "green";
        formulario[2].style.backgroundColor = "green";
        formulario[3].style.backgroundColor = "green";
    }


}

