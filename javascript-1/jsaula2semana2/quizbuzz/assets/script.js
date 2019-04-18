window.addEventListener('DOMContentLoaded', function (event) {
    
    const botao = document.getElementById("botao");
    botao.addEventListener("click", function () {
        const certa = document.querySelectorAll("input[name=escolhido]:checked").length;
        console.log(certa);
        document.querySelector("#vazio").innerHTML = "";
        if(certa < 5){
            document.querySelector("#resposta").innerHTML= `<p>Você é poser</p><img src="./poser.gif">`
        }
        else if(certa >= 5){
            document.querySelector("#resposta").innerHTML= `<p>Manja um pouco<img src="./sabepouco.gif></p>`
        
        }
        else{
            document.querySelector("#resposta").innerHTML= `<p>Manja muito <img src="./pamlas.gif></p>`
        
        }
    })

})

/* 
*/

