function tratandoLetras(codigo, produto, quantidade ) {
    //Tratando caso o usuário digite nada
    if (codigo == '' || produto == '' || quantidade == ''  ) {
        console.log('erro de caixa vazia')
        return false
    //Tratando caso o usuário digite letras
    } else if (isNaN(codigo) || isNaN(quantidade) || !isNaN(produto) ) {
        console.log('erro de número ou letra')
        return false
    } else {
        console.log('Validado')
        return true
    }
}