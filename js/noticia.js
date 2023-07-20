const novidade = document.querySelectorAll("[data-divContent]")
const classe = document.querySelector(".reading")
const headerAltura = document.getElementById("header").offsetHeight
let heightsArray = []

/*
  offsetHeight pega a altura do elemento (c/ padding e border)
  clientHeight pega a altura do elemento (só c/ padding)
  offsetTop pega a altura do elemento com relação ao pai.
*/

function getElemHeights(){
    for (let i = 0; i < novidade.length; i++){
        heightsArray.push({
            element: novidade[i],
            // Seleciona o 1º filho (index 0) do atual elemento iterado
            child_element: novidade[i].children[0],
            // 1º pega a altura com relação do topo e desconta a altura do header, depois subtrai com a altura do elemento dividida
            // pela metade. Isso para garantir que o usuário vai ter passado pelo menos já a metade da novidade, com isso, o nome do
            // personagem já terá saído da tela.
            start_height: (novidade[i].offsetTop - headerAltura) - (novidade[i].clientHeight / 2),
            // Pega a altura do elemento para depois ser somada com a altura inicial para começar a animação. Utilizei esse método porque
            // ao escrever: max_height: novidade[i].clientHeight + novidade[i].start_height retornava NaN. (não sei o porquê)
            max_height: novidade[i].clientHeight
        })
    }
}
getElemHeights()

function applyClass(){
    heightsArray.forEach(element => {
        if(window.scrollY >= element.start_height && window.screenY < (element.start_height + element.max_height)){
            element.child_element.classList.add("reading")
        // else if(window.screenY >= (element.start_height + element.max_height) || window.screenY < element.start_height){element.child_element.classList.remove("reading")}
        }else{
            element.child_element.classList.remove("reading")
        }
    })
}

function handleScroll(){
    requestAnimationFrame(applyClass)
}

window.addEventListener("resize", getElemHeights)

window.addEventListener("scroll", handleScroll)