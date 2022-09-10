function contar(){
   
    var cinicio = window.document.getElementById('inicio')
    var cfim = window.document.getElementById('final')
    var passo = window.document.getElementById('passo')
    let res = document.getElementById("resultado")
    

    
    
    if (cinicio.value.length == 0 || cfim.value.length ==0 || passo.value.length ==0 ){
        res.innerHTML = 'Impossivel contar! Insira valores'
    } else{
        res.innerHTML = 'Contando:'
        let i = Number(cinicio.value)
        let f = Number(cfim.value)
        let p = Number(passo.value)
        if (p <=0){
            window.alert('passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i <f ){
            //contagem crescente
            for(var c = i; c <= f;c = c += p){
                res.innerHTML += `${c}  `
            }
        } else{
            for(var c = i; c >= f;c = c -= p){
                res.innerHTML += `${c}  `
            }
        }
        res.innerHTML +='FIM'
    }
   

}