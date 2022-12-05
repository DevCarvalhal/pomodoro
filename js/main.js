
const segundosPomodoro = 4000 // Este é o tempo do cronometro que você pode alterar de acordo com sua necessidade 25*60*1000;
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log("dispador ativado")
    setTimeout(() => {
        console.log("Acabou o Pomodoro!");
        alert("O seu tempo de produção cacabou, hora do descanso")
        clearInterval(contador)
    }, segundosPomodoro)

    let contador = setInterval('contadorDeSegundos()',1000);
})
  
function contadorDeSegundos() {
    console.log('tik tack')
}