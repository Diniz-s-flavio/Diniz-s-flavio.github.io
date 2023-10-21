var gasolina, etanol;

function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
    if(etanol < 0.7*gasolina){
        document.getElementById("imagemGas").src="imagens/etanol.png"
        document.getElementById("imagemGas").title="Etanol e melhor"
    }else{
        document.getElementById("imagemGas").src="imagens/gasolina.jpg"
        document.getElementById("imagemGas").title="Gasolina e melhor"
    }
}

function limpar(){
    document.getElementById("imagemGas").src="imagens/normal.png"
}
