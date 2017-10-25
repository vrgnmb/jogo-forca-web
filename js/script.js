var comecou = false;
var letrasChutadas = [];
var palavra = "";


$("#btnCadastrar").click(function (event) {
    event.preventDefault();
    //Declarar variavel palavra com o valor do input
    palavra = $("#palavra").val();
    //Verificar se o campo esta 
    if (palavra === "") {
        //se estiver vazio, mostre erro
        alert("preencha o campo");
    } else {
        // se não estiver vazio mostra underline
        for (var i = 0; i < palavra.length; i++) {
            var span = $("<span>" + palavra[i] + "</span>");
            span.appendTo(".letras");
        }
        // se nao tiver vazio mostraa tela 
        // ADD classe na tela da forca
        $("#forca").addClass("visivel");
        //remover a classe na tela do cadastro
        $("#cadastro").removeClass("visivel");
        comecou = true;
    }
});

$(document).keydown(function (event) {
    if (comecou) {
        var letra = event.key;
        //Validando se é apenas uma letra
        if (letra.length > 1)
            return;
        //verificar se a letra ja foi utilizada
        if (letrasChutadas.indexOf(letra) != -1) {
            return;
        }
        //registar a letra utilizada
        letrasChutadas.push(letra);
        var span = $("<span>" + letra + "</span>");
        span.appendTo(".letras-usadas");
        //letra existe na palavra cadastrada?
        if (palavra.indexOf(letra) != -1) {

            //se sim 
            //mostra no campo a letra correspondente
            for (var i = 0; i < palavra.length; i++) {
                var letra2 = palavra[i];
                //se a letra que eu pressionei for igual a letra que estou inteirando (fazendo o loop)
                if (letra == letra2) {
                    //i é o indice que temos que mostrar na tela
                    $(".letras span").eq(i).addClass("visivel");
                }
            }
            //Se a palavra estiver completa
            //mostra o final correto
        } else {
            //se não 
            //mostra o membro do boneco
            //se excedeu as tentativas
            //mostra a familia triste
        }
    }
});