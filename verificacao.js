function tratandoLetras(codigo, produto, quantidade ) {
    //Tratando caso o usuário digite nada
    if (codigo == '' || produto == '' || quantidade == ''  ) {
        return false
    //Tratando caso o usuário digite letras
    } else if (isNaN(codigo) || isNaN(produto) || isNaN(quantidade)) {
        return false
    } else {
        return true
    }
}
