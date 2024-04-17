function imprimirPagina(url) {
    var novaJanela = window.open(url, '_blank');
    novaJanela.onload = function() {
        novaJanela.print();
    };
}