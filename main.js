//Colocando os elementos dentro de variáveis para otimizar o código (devido ao número de repetições) 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

//Math.random para gerar números randômicos entre 0 e 10 e math.round para transformar os valores em números inteiros (arredondar)
const randomNumber = Math.round(Math.random() * 10) 

//Variável de controle para guardar o número de tentativas.
let xAttempts = 1

//Função callback
function handleTryClick(event) {
  //Interromper carregamento da tela toda vez que o submit for acionado (botão for clicado)
  event.preventDefault();     

  const inputNumber = document.querySelector("#inputNumber")

  //Pega o valor inserido no input e converte para Número, depois compara com o número randômico que foi gerado e armazenado na variável randomNumber.
  if(Number(inputNumber.value) == randomNumber) {
    // Se o palpite estiver correto, oculta a screen 1, exibe a screen 2 e o número de tentativas executadas.
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!` 
  } else {
    // Se o palpite estiver errado o GIF de erro aparece na tela.
    document.querySelector("img").classList.remove("hide")
    // Depois de 1 segundo a classe hide é adicionada novamente na img (gif)
    setTimeout(() => {
      document.querySelector("img").classList.add("hide")
    }, 1000)
  }  

  //Limpar o input a cada tentativa
  inputNumber.value = ""
  xAttempts++   
}

//Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


btnTry.addEventListener("click", handleTryClick)
 

//outra maneira de declarar uma função callback
btnReset.addEventListener("click", function() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")  
  
  //Resetando o número de tentativas
  xAttempts = 1
})


