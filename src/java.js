const tema2 = document.getElementById("tema2")
const tema1 = document.getElementById("tema1")
const tema3 = document.getElementById("tema3")
const tema4 = document.getElementById("tema4")
const tema5 = document.getElementById("tema5")
const btn = document.getElementById("btn")

function alterarClass(){

    if (btn.classList.contains("claro-btn")) {

        btn.textContent = "Tema escuro";

        tema2.classList.remove("body-claro");
        tema2.classList.add("body-escuro");

        tema1.classList.remove("claro");
        tema1.classList.add("escuro");

        tema3.classList.remove("claro-div");
        tema3.classList.add("escuro-div");

        tema4.classList.remove("claro-lista");
        tema4.classList.add("escuro-lista");

        tema5.classList.remove("claro-footer");
        tema5.classList.add("escuro-footer");

        btn.classList.remove("claro-btn");
        btn.classList.add("escuro-btn");
    }else{
        btn.textContent = "Tema claro";

        tema2.classList.remove("body-escuro");
        tema2.classList.add("body-claro");

        tema1.classList.remove("escuro");
        tema1.classList.add("claro");

        tema3.classList.remove("escuro-div");
        tema3.classList.add("claro-div");

        tema4.classList.remove("escuro-lista");
        tema4.classList.add("claro-lista");

        tema5.classList.remove("escuro-footer");
        tema5.classList.add("claro-footer");

        btn.classList.remove("escuro-btn");
        btn.classList.add("claro-btn");
    }
}