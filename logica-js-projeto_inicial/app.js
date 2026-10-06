alert('Bem Vindo ao jogo do numero secreto')
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt("Digite seu chute entre 1 a 10 ");


if (chute == numeroSecreto){
    alert(`Você acertouu! O numero secreto é ${numeroSecreto}`)
}else {
    alert(`Você errou! Seu chute foi ${chute} e o numero secreto é ${numeroSecreto}`);
}
