
const milissegundosPomodoro = 4000 // Este é o tempo do cronometro que você pode alterar de acordo com sua necessidade 25*60*1000;
const disparador = document.querySelector('#disparador')
let milissegundosRestantes = milissegundosPomodoro - 1000
let contador

disparador.addEventListener('click', () => {
    console.log("dispador ativado!")

    console.log('faltam', (milissegundosPomodoro/1000))
   
    contador = setInterval('contadorDeSegundos()',1000);
})
  
function contadorDeSegundos() {
    

   

    if (milissegundosRestantes == 0) {
        console.log("Acabou o Pomodoro!");
        alert("O seu tempo de produção cacabou, hora do descanso!")

        clearInterval(contador)
    } else {

    console.log('faltam', (milissegundosRestantes/1000))
    }

    milissegundosRestantes -= 1000;
}