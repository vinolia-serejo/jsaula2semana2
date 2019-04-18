window.addEventListener('DOMContentLoaded', function () {
    let botao = document.getElementById("go")
    let series = [
        `<img src="https://media.giphy.com/media/12uRdK2q0199PW/giphy.gif">`,
        `<img src="https://media.giphy.com/media/MC2uvRK5eH0z4SMHVP/giphy.gif">`,
        `<img src="https://media.giphy.com/media/1JolFWpzHM5MY/giphy.gif">`,
        `<img src="https://media.giphy.com/media/r0Y8z8kYwT8pa/giphy.gif">`,
    ];
    let nomes = ['namoe', 'noame', 'namo', 'anaha']

    botao.addEventListener("click", function () {

        document.getElementById("titulo").innerHTML = series[0];
        setTimeout(function () {
            document.getElementById("titulo").innerHTML = series[1];
        }, 5000)
        setTimeout(function () {
            document.getElementById("titulo").innerHTML = series[2];
        }, 10000)
        setTimeout(function () {
            document.getElementById("titulo").innerHTML = series[3];
        }, 15000)
        setTimeout(function () {
            //nomes.forEach(function (item) {
                //document.getElementById("titulo").innerHTML += item + "</br>"
            //})

    document.getElementById("titulo").innerHTML = 
   `<p> Hora de Aventura</p>
    <p> Irmão do Jorel</p>
    <p> Steven Universo</p>
    <p>Apenas Um Show</p>`
  }, 20000)
    })
})





