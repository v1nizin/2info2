function calcularDelta(a,b,c) {
    return b * b - 4 * a *c
}
function calcularX1(delta,a,b) {
    return (-b + Math.sqrt(delta)) / (2*a)
}
function calcularX2(delta,a,b) {
    return (-b - Math.sqrt(delta)) / (2*a)
}
function bhaskara(a, b, c){
    const valorDelta = calcularDelta(a, b, c)
    let x1 = 'inexistente', x2 = 'inexistente'
    if (valorDelta === 0) {
        x1 = calcularX1(valorDelta, a, b)
        x2 = 'inexistente'
    }
    else if (valorDelta > 0) {
        x1 = calcularX1(valorDelta, a, b)
        x2 = calcularX2(valorDelta, a, b)
    }
    return { x1: x1, x2: x2}
}

function handleBtnCalcular() {
    const a = parseInt(document.getElementById('A').value)
    const b = parseInt(document.getElementById('B').value)
    const c = parseInt(document.getElementById('C').value)
    const resultado = bhaskara(a, b, c)
    document.getElementById('resultadoX1').innerHTML = 'x1: ' + resultado.x1
    document.getElementById('resultadoX2').innerHTML = 'x2: ' + resultado.x2
}

document.getElementById('btnCalcular').addEventListener('click', handleBtnCalcular)
