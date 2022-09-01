function carregar(){ 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#1F74BF'
    } else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F29F05'

    } else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#A64E1B'
    }
}