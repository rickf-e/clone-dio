const contadorLetrar = (letra, texto) => {
    let cont = 0
    
    for(var i in texto){
        if(letra === texto[i]){
            cont++
            console.log('A letra foi encontrada ' + cont + ' vezes')
        }else{
            console.log('Letra não encontrada')
        }
    }
}

contadorLetrar("i", "Pindamonhangaba")