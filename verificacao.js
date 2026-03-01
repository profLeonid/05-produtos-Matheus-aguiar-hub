function tratandoLetras(codigo, produto, quantidade ) {
    //Tratando caso o usuário digite nada
    if (codigo == '' || produto == '' || quantidade == ''  ) {
        console.log('erro 1')
        return false
    //Tratando caso o usuário digite letras
    } else if (isNaN(codigo) || isNaN(quantidade)) {
        console.log('erro 2')
        return false
    } else {
        console.log('certo')
        return true
    }
}