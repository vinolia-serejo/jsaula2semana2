window.addEventListener('DOMContentLoaded', function(event) {

const opcoes = document.querySelector("#opcoes")
opcoes.addEventListener("change", function(){
    const escolhaValue = this.value
    console.log (escolhaValue)
})
})  
let joga = 'jogador';

switch(fruta) {
  case 'pedra':
    alert('pedra escolhida');
    break;
  case 'papel':
    alert('papel escolhido!');
    break;
  case 'tesoura':
    alert('tesoura escolhida!');
    break;
  case 'lagarto':
    alert('lagarto escolhido!');
    break;
  case 'spock':
    alert('Spock escolhido!');
    break;  
  default:
    alert('Não encontramos o que queriamos');
}