// Variáveis
/* Colocando os elementos dentro de variáveis para otimizar o código(devido ao número de repetições) */ 
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
const gifWrongAnswer = document.querySelector(".gifWrongAnswer")
let randomNumber = Math.round(Math.random() * 10) //Math.random para gerar números randômicos entre 0 e 10 e math.round para transformar os valores em números inteiros (arredondar)
let xAttempts = 1 //Variável de controle para guardar o número de tentativas.

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function (event) {
  if(event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
})

// Funções
function handleTryClick(event) {
  //Interromper carregamento da tela toda vez que o submit for acionado (botão for clicado)
  event.preventDefault();
    
  validNumber()
  //Pega o valor inserido no input e converte para Número, depois compara com o número randômico que foi gerado e armazenado na variável randomNumber.
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!` 
  } else {
    // Se o palpite estiver errado o GIF de erro aparece na tela.
    gifWrongAnswer.classList.remove("hide")
    // Depois de 1 segundo a classe hide é adicionada novamente na img (gif) para oculta-lo.
    setTimeout(() => {
      gifWrongAnswer.classList.add("hide")
    }, 1000)
  }  
  //Limpar o input a cada tentativa
  inputNumber.value = ""
  xAttempts++   
  console.log(xAttempts)
}

/*Função para verificar o estado dos elementos (screen1 e screen2). Se tiver a classe hide, ele retira e se NÃO tiver ele coloca.*/
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide") 
}

function handleResetClick() {
  toggleScreen()
  //Resetando o número de tentativas e gerando um novo número randômico
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function validNumber() {
  if(Number(inputNumber.value) > 10 || Number(inputNumber.value) < 0 || inputNumber.value == ""){    
    alert("Por gentileza, digite um número entre 0 e 10.")
    xAttempts--
  }
}