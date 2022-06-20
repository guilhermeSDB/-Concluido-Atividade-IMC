let nome = '';
let altura;
let peso;
let calc;
var $radioMale = $('input[value=male]')
var $radioFemale = $('input[value=female]')
var ovalNode = $(`<div class="oval"></div>`)
let refazerElement = document.querySelector(".resultado_acoes");

$(refazerElement).click(function(){
    document.getElementById("calculadora").classList.toggle("none");
    document.getElementById("resultado").classList.toggle("none");
})

$('#btnFemale').click(function (){
    if($radioFemale.is(':checked') === false){
        $radioFemale.filter('[value=female]').prop('checked', true);
        $('button').removeClass('active') 
        $(this).addClass('active')   
        $('.femaleGroup').append(ovalNode)     
    }
})

$('#btnMale').click(function (){

    if($radioMale.is(':checked') === false){
        $radioMale.filter('[value=male]').prop('checked', true);
        $('button').removeClass('active') 
        $(this).addClass('active') 
        $('.maleGroup').append(ovalNode)
    }
})

//Captura o valor dos campos ao sair dele
$('#nome').focusout(function (){
    nome = $('#nome').val()            
})

$('#altura').focusout(function (){
    altura = $('#altura').val()
})

$('#peso').focusout(function (){
    peso = $('#peso').val()
})

//Função responsavel por calcular a massa corporal
function calcularMassaCorporal(peso, altura){
    //Converte peso e altura para Float
    parseFloat(peso, altura)

    //Troca virgula por ponto
    peso = peso.replace(/,/g, ".");
    altura = altura.replace(/,/g, ".")

    //Calcula a massa corporal ( FORMULA: peso / (altura * altura))
    calc = peso / (altura * altura) 

    //Apos a virgula só mantem 1 casa (ex: 19.999999 sera convertido para 19.9)
    calc = calc.toFixed(1)
    return calc
}

//Transforma a primeira letra em Maiscula
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

//Ao sair do foco do input
$('input').focusout(function (){
    //Pega o valor do Input
    let input = $(this).val()

    //Verifica se o input é Vazio ou Nullo ou Undefined
    if(input == '' || input == null || input == undefined){
        // if($('div').find('.'+nameClassInput).length == 0){ // Verifica se o alerta ja existe
        //     $(this).parent('div').append(nodeAlert) //Adiciona o alerta
        // }         
    }else{
        // $('.'+nameClassInput).remove() // Remove o alerta de Campo Vazio caso seja preenchido
    }
})

//Ao clickar no botão calcula e exibe o resultado
$('#calcBtn').click(function (){
    calc = (calcularMassaCorporal(peso, altura))  
    let resultadoTexto = "";
    let cor = "";

    document.getElementById("calculadora").classList.toggle("none");
    document.getElementById("resultado").classList.toggle("none");
    
    if(calc <= 16){
        resultadoTexto = 'Baixo peso muito grave';
        cor = 'azul';
    }else if (calc >= 16 && calc <= 16.9){
        resultadoTexto = 'Baixo peso grave';
        cor = 'azul';
    }else if (calc >= 17 && calc <= 18.4){
        resultadoTexto = 'Baixo peso';
        cor = 'azul';
    }else if (calc >= 18.5 && calc <= 24.99){
        resultadoTexto = 'Peso normal';
        cor = 'verde';
    }else if (calc >= 25 && calc <= 29.9){
        resultadoTexto = 'Sobrepeso';
        cor = 'vermelho';
    }else if (calc >= 30 && calc <= 34.9){
        resultadoTexto = 'Obesidade grau I';
        cor = 'vermelho';
    }else if (calc >= 35 && calc <= 39.9){
        resultadoTexto = 'Obesidade grau II';
        cor = 'vermelho';
    }else if (calc >= 40){
        resultadoTexto = 'Obesidade grau III';
        cor = 'vermelho';
    }
 
    document.querySelector(".resultado_numero").innerText = calc;
    document.querySelector(".resultado_texto").innerText = resultadoTexto;
    document.querySelector(".resultado_texto").classList.add(cor);

    
})