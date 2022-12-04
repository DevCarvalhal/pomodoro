
const segundosPomodoro = 4000 //25*60*1000;
const disparador = document.querySelector('#disparador')

disparador.addEventListener('click', () => {
    console.log("dispador ativado")
    setTimeout(() => {
        console.log("Acabou o Pomodoro!");
    }, segundosPomodoro)
})
  