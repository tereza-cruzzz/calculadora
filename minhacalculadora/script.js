const visor = document.getElementById("visor");

function adicionar(valor){
    visor.value += valor;
}

function limpar(){
    visor.value = "";
}

function apagarUltimo(){
    visor.value = visor.value.slice(0, -1);
}

function calcular(){

    try{
        visor.value = eval(visor.value);
    }
    catch{
        visor.value = "Erro";
    }

}

document.addEventListener("keydown", function(event){

    if("0123456789+-*/().".includes(event.key)){
        adicionar(event.key);
    }

    if(event.key === "Enter"){
        calcular();
    }

    if(event.key === "Backspace"){
        event.preventDefault();
        apagarUltimo();
    }

    if(event.key === "Escape"){
        limpar();
    }
    
});