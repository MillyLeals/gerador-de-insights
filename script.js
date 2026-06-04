const mensagem = document.querySelector('#texto')
const botao = document.querySelector('#botao-insight');

botao.addEventListener('click', async () => {
    
    mensagem.innerText = "Buscando sabedoria...";
    botao.disabled = true; //desativando botão nesse momento

    try {
        const resposta = await fetch('https://api.adviceslip.com/advice');
        const dados = await resposta.json();

        mensagem.textContent = dados.slip.advice;

    } catch(erro) {
        mensagem.textContent = "Erro ao fazer busca. Tente novamente.";
        console.error("Erro na API:", erro);
    } finally {
        botao.disabled = false; //dando certo ou errado, o botão é ativado dnv
    }
});
