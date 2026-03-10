'use strict'

    function adicionarCodigo(){

        const lista         = document.getElementById('lista')
        const codigo        = document.getElementById('produto')
        const produto       = document.getElementById('codigo')
        const quantidade    = document.getElementById('quantidade')

        const validando = tratandoLetras(
            produto.value,
            codigo.value,
            quantidade.value
        )

         if (!validando) return true
        
        const div         = document.createElement('div')
        const span        = document.createElement('span' )
        const span1       = document.createElement('span')
        const span2       = document.createElement('span')

        span.textContent      = codigo.value
        span1.textContent     = produto.value
        span2.textContent     = quantidade.value

        span.textContent = "Produto: " + span.textContent
        span1.textContent = "Codigo: " + span1.textContent
        span2.textContent = "Quantidade: " + span2.textContent

        div.className       = 'space-y-4 mt-8'
        span.className      = 'flex flex-col ; bg-gray-100 border rounded-2xl ; px-8 py-4 '
        span1.className     = 'flex flex-col ; bg-gray-100 border rounded-2xl ; px-8 py-4'
        span2.className     = 'flex flex-col ; bg-gray-100 border rounded-2xl ; px-8 py-4'
        
        div.append(span ,span1 , span2)

        lista.appendChild(div)
}

    function removerAnterior() {

        const lista = document.getElementById('lista')

        const ultimoElementoAcionado = lista.lastElementChild

        if (ultimoElementoAcionado) ultimoElementoAcionado.remove()

}