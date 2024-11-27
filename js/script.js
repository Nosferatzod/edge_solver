// Variáveis para armazenar números e operador
let numero1 = null;
let numero2 = null;
let operador = null;
let calculando = false;

// Função para mostrar os números no display
function mostrarNumero(numero) {
    const display = document.getElementById("display");
    
    // Se já está calculando, limpa o display antes de mostrar o próximo número
    if (calculando) {
        display.textContent = numero;
        calculando = false;
    } else {
        // Exibe o número ou adiciona ao número atual
        display.textContent = display.textContent === "0" ? numero : display.textContent + numero;
    }
}

// Função para armazenar o operador
function armazenarOperador(op) {
    numero1 = parseFloat(document.getElementById("display").textContent);
    operador = op;
    calculando = true;
}

// Função para realizar o cálculo
function calcularResultado() {
    numero2 = parseFloat(document.getElementById("display").textContent);
    let resultado;

    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero2 !== 0 ? numero1 / numero2 : "Erro: Divisão por zero";
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("display").textContent = resultado;
    numero1 = resultado;
    operador = null;
    calculando = true;
}

// Função para limpar o display
function limpar() {
    document.getElementById("display").textContent = "0";
    numero1 = null;
    numero2 = null;
    operador = null;
}

// Funções científicas
function funçãoCientifica(func) {
    let numero = parseFloat(document.getElementById("display").textContent);

    switch (func) {
        case 'sqrt':
            numero = Math.sqrt(numero);
            break;
        case 'sin':
            numero = Math.sin(numero * Math.PI / 180); // Converte para radianos
            break;
        case 'cos':
            numero = Math.cos(numero * Math.PI / 180); // Converte para radianos
            break;
        case 'tan':
            numero = Math.tan(numero * Math.PI / 180); // Converte para radianos
            break;
        default:
            numero = "Erro";
    }

    document.getElementById("display").textContent = numero;
    calculando = true;
}
