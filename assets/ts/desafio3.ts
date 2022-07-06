let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement
let soma = document.getElementById('soma') as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement

let saldo = 0

function somarAoSaldo(soma: number) {
  saldo = saldo + soma
  campoSaldo.innerHTML = saldo.toString()
}

function limparSaldo() {
  campoSaldo.innerHTML = ''
}

botaoAtualizar.addEventListener('click', function () {
  somarAoSaldo(Number(soma.value))
})

botaoLimpar.addEventListener('click', function () {
  limparSaldo()
})