'use strict'


function adicionarCodigo(){
       const lista = document.getElementById('lista')
    const codigo = document.getElementById('codigo')
        const produto = document.getElementById('produto')
        const quantidade = document.getElementById('quantidade')

    const span = document.createElement('span')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')


    span.textContent = produto.value
    span1.textContent = codigo.value
    span2.textContent = quantidade.value

    span.className = 'flex flex-col bg-yellow-100 px-8 py-2'
    lista.append(span, span1, span2)

}

