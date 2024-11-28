// Variáveis para armazenar números e operador
let numero1 = null;
let numero2 = null;
let operador = null;
let calculando = false;
let textoDisplay = '0';  // Variável para armazenar o texto completo que aparece no display

// Função para mostrar os números no display
function mostrarNumero(numero) {
    const display = document.getElementById("display");

    // Se já está calculando, limpa o display antes de mostrar o próximo número
    if (calculando) {
        textoDisplay = numero.toString();
        display.textContent = textoDisplay;
        calculando = false;
    } else {
        // Exibe o número ou adiciona ao número atual
        textoDisplay = textoDisplay === "0" ? numero.toString() : textoDisplay + numero.toString();
        display.textContent = textoDisplay;
    }
}

// Função para armazenar o operador
function armazenarOperador(op) {
    if (operador !== null) {
        // Se já houver um operador armazenado, realiza o cálculo com o operador anterior
        calcularResultado();
    }
    
    numero1 = parseFloat(textoDisplay);  // Salva o número atual
    operador = op;  // Armazena o operador
    textoDisplay += ` ${op} `;  // Adiciona o operador ao display
    const display = document.getElementById("display");
    display.textContent = textoDisplay;
    calculando = true;
}

// Função para realizar o cálculo
function calcularResultado() {
    numero2 = parseFloat(textoDisplay.split(' ').pop());  // Pega o número após o operador
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

    // Atualiza o display com o resultado
    textoDisplay = resultado.toString();
    document.getElementById("display").textContent = textoDisplay;
    numero1 = resultado;  // Guarda o resultado para operações subsequentes
    operador = null;  // Limpa o operador
    calculando = true;  // Indica que já foi calculado
}

// Função para limpar o display
function limpar() {
    textoDisplay = "0";
    numero1 = null;
    numero2 = null;
    operador = null;
    const display = document.getElementById("display");
    display.textContent = textoDisplay;
}

// Funções científicas avançadas
function funçãoCientifica(func) {
    let numero = parseFloat(textoDisplay.split(' ').pop());  // Pega o último número digitado

    switch (func) {
        case 'sqrt':
            numero = Math.sqrt(numero);  // Raiz quadrada
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
        case 'asin':
            numero = Math.asin(numero) * 180 / Math.PI; // Arco seno em graus
            break;
        case 'acos':
            numero = Math.acos(numero) * 180 / Math.PI; // Arco cosseno em graus
            break;
        case 'atan':
            numero = Math.atan(numero) * 180 / Math.PI; // Arco tangente em graus
            break;
        case 'atan2':
            // Exemplo: Atan2(y, x) - considere que o y e x estão no display como "y,x"
            let valores = numero.split(',');  // Supomos que os valores são passados separados por vírgula
            numero = Math.atan2(parseFloat(valores[0]), parseFloat(valores[1])) * 180 / Math.PI;
            break;
        case 'log2':
            numero = Math.log2(numero); // Logaritmo de base 2
            break;
        case 'ln':
            numero = Math.log(numero); // Logaritmo natural (base e)
            break;
        case 'exp':
            numero = Math.exp(numero); // Exponencial (e^x)
            break;
        case 'pow':
            // Exemplo: pow(x,y) onde y é o expoente. Ex: 2^3
            let expoente = parseFloat(prompt("Digite o expoente:"));
            numero = Math.pow(numero, expoente);
            break;
        case 'abs':
            numero = Math.abs(numero); // Valor absoluto
            break;
        case 'round':
            numero = Math.round(numero); // Arredondar para o inteiro mais próximo
            break;
        case 'max':
            let maximo = parseFloat(prompt("Digite outro número:"));
            numero = Math.max(numero, maximo); // Máximo entre dois números
            break;
        case 'min':
            let minimo = parseFloat(prompt("Digite outro número:"));
            numero = Math.min(numero, minimo); // Mínimo entre dois números
            break;
        case 'factorial':
            numero = factorial(numero); // Fatorial
            break;
        case 'gcd':
            let outroNumero = parseFloat(prompt("Digite outro número para calcular o MDC:"));
            numero = gcd(numero, outroNumero); // Máximo divisor comum
            break;
        case 'lcm':
            let outroNumLCM = parseFloat(prompt("Digite outro número para calcular o MMC:"));
            numero = lcm(numero, outroNumLCM); // Mínimo múltiplo comum
            break;
        case 'pi':
            numero = Math.PI; // Constante Pi
            break;
        case 'e':
            numero = Math.E; // Constante Euler
            break;
        default:
            numero = "Erro";
    }

    textoDisplay = numero.toString();
    document.getElementById("display").textContent = textoDisplay;
    calculando = true;
}

// Função para calcular fatorial
function factorial(num) {
    if (num < 0) return "Erro: número negativo";
    if (num === 0 || num === 1) return 1;
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Função para calcular o Máximo Divisor Comum (MDC)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Função para calcular o Mínimo Múltiplo Comum (MMC)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
