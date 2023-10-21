var gasolina, etanol;

function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",","."));
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
    if(etanol < 0.7*gasolina){
        document.getElementById("imagemGas").src="imagens/etanol.png"
    }else{
        document.getElementById("imagemGas").src="imagens/gasolina.jpg"
    }
}

function limpar(){
    document.getElementById("imagemGas").src="imagens/normal.png"
}
