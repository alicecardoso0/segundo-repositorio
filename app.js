function criaCartao (item, pergunta, resposta) {
    //console.log(item, pergunta,resposta)

    let flaschcard = document.getElementById(`flashcard`);
    let cartao = document.createElement(`article`);

    cartao.className = `cartao`;

    cartao.innerHTML = `
    
           <div class="cartao__conteudo">
                <h3>${item}3>
                
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta}</p>
                </div>
                
                <div class="cartao__conteudo__resposta">
                    <p>${resposta}</p>
                </div>
            </div>
     `

let respostaEstaVísivel = false

function viracartão () {
   respostaEstaVísivel = !variavelEstaVisivel;
   cartao.classList.toggle('active', viracartão);
}

cartao.addEventListener('click', viracartão);

    flaschcard.appendChild(cartao);

}
