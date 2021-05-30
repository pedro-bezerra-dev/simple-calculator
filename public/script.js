const areaResult = document.querySelector("#area-result")
const areaEquation = document.querySelector("#area-equation")
const keys = document.querySelectorAll(".key")

// insere o valor da tecla, guardado no atributo data-value 
function insertValue(event) {
    const button = event.currentTarget
    const value = button.dataset.value
    const currentValue = areaEquation.value

    areaEquation.value = currentValue + value
}

// limpa todos os campos de valores
function clearAll() {
    areaResult.value = ''
    areaEquation.value = ''
}

// inverte o valor do campo de resultado
function invertValue() {
    const currentCalcResult = areaResult.value

    areaResult.value = currentCalcResult * (-1)
}

// limpa o campo de resultado ou o último caracter digitado
function clean() {
    if(areaResult.value.length > 0) {
        areaResult.value = ''
    } else if(areaResult.value.length == 0) {
        const currentEquation = areaEquation.value
        const newEquation = currentEquation.replace(/.$/, '')

        areaEquation.value = newEquation
    }
}

// calcula o resultado da equação
function calcResult() {
    const equation = areaEquation.value
    const result = eval(equation)

    areaResult.value = result
}

// define o tema da calculadora
function selectTheme(event) {
    const button = event.currentTarget
    const calculator = document.querySelector("#calculator")
    
    if(button.id == "light-theme") {
        calculator.classList.remove("light-theme")
        calculator.classList.remove("dark-theme")
        calculator.classList.add("light-theme")
    }
    if(button.id == "dark-theme") {
        calculator.classList.remove("light-theme")
        calculator.classList.remove("dark-theme")
        calculator.classList.add("dark-theme")
    }
}

// mostra qual tecla foi clicada por 0.1s
keys.forEach((key) => {
    key.addEventListener('click', () => {
        key.style.background = "#45cabe"
        setTimeout(() => {
            key.style.background = "initial"
        }, 100);
    })
})