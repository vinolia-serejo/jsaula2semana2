
    let gatos = ["Nani", "Renata", "Jhonny", "Romeu", "Bifinho"];

    let resposta = document.querySelector("#resultado");

    let lista = document.querySelector('#lista');

    gatos.forEach(function(item) {
        resposta.innerHTML = 'O array tem ' + gatos.length +' itens'        
        lista.innerHTML += item + "</br>"

    })
 

