let numero1 = 2
let numero2 = 3
let operador = "+"

let adicao = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicação = numero1 * numero2
if (numero == 0){
    console.log ("Não é possível dividir por 0")
} else {
    let divisao = numero1 / numero2
}

switch (operador){
case '+':
    adicao = numero1 + numero2
    console.log ("Adição:" + adicao)
    break
    case '-':
        subtracao= numero1 - numero2
        console.log ("Subtração:" + subtracao)
        break
        case '*':
            multiplicação = numero1 * numero2
            console.log ("Multiplicação:" + multiplicação)
            break
            case '/':
                if (numero == 0){
                    console.log ("Não é possível dividir por 0")
                } else {
                 divisao = numero1 / numero2
                 console.log ("Divisão:" + divisao)
                }
                break
                default: 
                console.log ("Operador inválido")
}
console.log ("Adição:" + adicao)
console.log ("Subtração:" + subtracao)
console.log ("Multiplicação:" + multiplicação)
console.log ("Divisão:" + divisao)




