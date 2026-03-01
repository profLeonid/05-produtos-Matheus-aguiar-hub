'use strict'

    function adicionarCodigo(){

        const lista = document.getElementById('lista')
        const codigo = document.getElementById('produto')
        const produto = document.getElementById('codigo')
        const quantidade = document.getElementById('quantidade')

        const validando = tratandoLetras(
            produto.value,
            codigo.value,
            quantidade.value
        )

         if (!validando) return true
        
        const span = document.createElement('span')
        const span1 = document.createElement('span')
        const span2 = document.createElement('span')

        span.textContent = codigo.value
        span1.textContent = produto.value
        span2.textContent = quantidade.value

        span1.className = 'flex flex-col ; bg-gray-100 border rounded-xs ; px-8 py-4 '
        span.className = 'flex flex-col ; bg-gray-100 border rounded-xs ; px-8 py-4'
        span2.className = 'flex flex-col ; bg-gray-100 border rounded-xs ; px-8 py-4'

        lista.append(span ,span1 , span2)
}