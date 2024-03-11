const botoes = document.querySelectorA11(".botao")

for(let i=0;i <botoes.lenght;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.legth;j+){
            botoes[j].classList.add("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}