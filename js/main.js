$(document).ready(function(){
    // deixar botões de novidades dinâmicos
    const btnNovidades = $("#divMostrarNov")
    const divNovidades = $("#novidadesplus")
    $(btnNovidades).on("click", function(){
        if (!btnNovidades.hasClass("mostrarMenos")){
            divNovidades.slideDown()
            divNovidades.css("display", "flex")

            btnNovidades.appendTo(divNovidades)
            btnNovidades.toggleClass("mostrarMenos")
            $("#divMostrarNov").attr("title", "clique para mostrar menos!")
            btnNovidades.html('<p>mostrar menos<span class="span_setaNoticia">△</p></span>')
        }else{
            $("html").animate({
                scrollTop: $("#novidadesPadrao").offset().top
            }, 0)
            divNovidades.slideUp()
            btnNovidades.toggleClass("mostrarMenos")
            btnNovidades.appendTo("#novidadesPadrao")
            $("#divMostrarNov").attr("title", "clique para mostrar menos!")
            btnNovidades.html('<p>mostrar mais<span class="span_setaNoticia">▽</p></span>')
        }
    })
    $(".bi-search").on("click", function(){
        console.log($("#pesquisa_cosm input").val())
    })
})























// .container_novidade {
//     display: flex;
//     flex-wrap: wrap;
//   }
  
//   .novidade {
//     width: 50%;
//   }
//   Nesse exemplo, a classe .container_novidade é aplicada ao contêiner pai que envolve as divs com a classe .novidade. Ao definir display: flex nesse contêiner, ele se torna um contêiner flexível.
//   A propriedade flex-wrap: wrap garante que as divs filhas possam quebrar para a próxima linha quando necessário.
//   A classe .novidade define a largura das divs individuais para ocupar 50% da largura do contêiner pai, permitindo que duas divs sejam exibidas lado a lado.
//   Com esses estilos, as divs com a classe .novidade serão organizadas em duas colunas e várias linhas, dependendo do espaço disponível na largura da tela.