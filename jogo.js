  var altura = 0
  var largura =0
  var vidas = 1
  var tempo = 10
 function ajustaTamanhoPalcoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

   console.log(largura, altura)
 }

ajustaTamanhoPalcoJogo()
 var cronometro = setInterval(function(){
     tempo -= 1
     if(tempo <0){
         clearInterval(cronometro)
         clearInterval(mosquito)

         window.location.href = 'vitoria.html'
     }else{
        document.getElementById('cronometro').innerHTML = tempo
     }
     },1000)

function posiçaoRamdomica(){
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()
    if(vidas >5){
        
      window.location.href =  'fim_de_jogo.html'

    }

    document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
      vidas ++

}


    var posiçaoX = Math.floor( Math.random() *  largura)
    var posiçaoY = Math.floor( Math.random()  * altura)

 console.log(posiçaoX,posiçaoY)
 

  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosca.png'
  mosquito.className = TamanhoAleatorio()+ ' ' + ladoAleatorio()
  mosquito.style.left = posiçaoX + 'px'
  mosquito.style.top = posiçaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id =  'mosquito'
  mosquito.onclick =  function(){
      this.remove()
  }
 document.body.appendChild(mosquito)

 
}


function TamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
     switch(classe){
         case 0:
             return 'mosquito1'

         case 1:
             return 'mosquito2'
         case 2:
             return 'mosquito3'
     }
}


function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}