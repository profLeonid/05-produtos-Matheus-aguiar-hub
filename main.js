'use strict'

    function adicionarCodigo(){
        const lista = document.getElementById('lista')
        const codigo = document.getElementById('codigo')
        const produto = document.getElementById('produto')
        const quantidade = document.getElementById('quantidade')

        if(
            produto == '' || codigo == '' || quantidade == ''
        ){
            return false
        }else if(isNaN(produto) || isNaN(codigo) || isNaN(quantidade)){
            return false
        }
        else{

        const span = document.createElement('span')
        const span1 = document.createElement('span')
        const span2 = document.createElement('span')


        span.textContent = produto.value
        span1.textContent = codigo.value
        span2.textContent = quantidade.value

        span.className = 'flex flex-col bg-yellow-100 px-8 py-2'
        span1.className = 'flex flex-col bg-yellow-100 px-8 py-2'
        span2.className = 'flex flex-col bg-yellow-100 px-8 py-2'
        lista.append(span, span1, span2)
            return true
}
}