$(document).ready(function(){
    const iNick = $("#nickname")
    const iEmail = $("#e-mail")
    const iSenha = $("#senha")

    const erroEmail = $(".eEmail")
    const erroNickname = $(".eNickname")

    //o change é um evento que é ativado quando a entrada é o foco ou é alterada de uma maneira sem que o usuário digite
    iNick.on("change", function(){
        let i = iNick.val()
        if (!validarNickname(i)){
            erroNickname.css("display", "block")
            erroNickname.text("Esse nickname é inválido!")
        }else{
            erroNickname.css("display", "none")
        }
    })

    iEmail.on("change", function(){
        let i = iEmail.val()
        if (!validarEmail(i)){
            erroEmail.css("display", "block")
            erroEmail.text("Esse e-mail é inválido!")
        }else{
            erroEmail.css("display", "none")
        }
    })

    //regex: email tem que começar com uma letra, de resto por qualquer coisa (dígitos, . e _), obrigatório @, domínio e terminar com .com
    //emails como ".gov.com.br" não coloquei no regex porque acredito que esses emails não são apropriados para jogos
    function validarEmail(emailValor){
        const regexEmail = /^[a-z]{1}[\w\.]{2,}@[a-z]{1,}\.com$/gi
        return regexEmail.test(emailValor)
    }

    //melhorar este regex com um lookahead
    function validarNickname(nicknameValor) {
        const regexNickname = /^[a-z]{1}[\w]{1,20}$/gi
        return regexNickname.test(nicknameValor)
    }

    //validador de senhas não adicionei porque vou entregar o quanto antes, pretendo termianr este projeto.
    $("form").on("submit", function(e){
        e.preventDefault()
        if (validarEmail(iEmail.val()) && validarNickname(iNick.val())){
            const toastMsg = $("#msgCadastroSucess")
            const toastSucess = new bootstrap.Toast(toastMsg)
            toastSucess.show()
            iNick.val("")
            iEmail.val("")
            iSenha.val("")
        }
    })
})