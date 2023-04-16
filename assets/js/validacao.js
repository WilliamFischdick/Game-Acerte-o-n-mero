

function verificaChuteValido (chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML +='<div>Valor Inválido</div>'
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=`<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O numero Secreto era ${numeroSecreto}</h3>
        `
    }
}

function chuteInvalido (numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor ||  numero < menorValor
}