          /***by  dev Judicael***/
            
          /*
                      ***link***

                #linkedin : https://www.linkedin.com/in/judicael-cakpo-6907b32a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

                #github : https://github.com/devJudicael

                #email : judicaelcakpo35@gmail.com




          */






var btn = document.querySelectorAll(".btn") //cibler tous les boutons et les receuillir dans un tableau

var w = document.querySelector(".w")
var a = document.querySelector(".a")
var s = document.querySelector(".s")
var d = document.querySelector(".d")
var j = document.querySelector(".j")
var k = document.querySelector(".k")
var l = document.querySelector(".l")












 //retirer la class "scaling" à tous les boutons lorsqu'une touche sera pressée 



 document.addEventListener("keypress",(event)=>{



    btn.forEach(bton =>{

        bton.classList.remove("scaling");
    
    })




// faire augmenter la taille du bouton et jouer le son approprié en fonction de la touche pressée
    switch (event.code) {
        case "KeyW":
            w.classList.add ("scaling")
            var audio = new Audio("crash.mp3")
audio.play()
            break;

        case "KeyA":
            a.classList.add ("scaling")
            var audio = new Audio("kick-bass.mp3")
audio.play()
            break

        case "KeyS":
            s.classList.add ("scaling")
            var audio = new Audio("snare.mp3")
audio.play()
            break

        case "KeyD":
            d.classList.add ("scaling")
            var audio = new Audio("tom-1.mp3")
audio.play()
            break

        case "KeyJ":
            j.classList.add ("scaling")
            var audio = new Audio("tom-2.mp3")
audio.play()
            break

        case "KeyK":
            k.classList.add ("scaling")
            var audio = new Audio("tom-3.mp3")
audio.play()
            break

        case "KeyL":
            l.classList.add ("scaling")
            var audio = new Audio("tom-4.mp3")
audio.play()
        break

        


    }
    
 })


 btn.forEach (elem =>{ //parcourir chaque élement du tableau

        elem.addEventListener('click', (el) =>{

            btn.forEach(bton =>{

                bton.classList.remove("scaling");   // lorsqu'un bouton est cliqué  , retirer la class .scaling à tous les éléments du tableau
            
            })

            
            //faire augmenter la taille du bouton et jouer le son approprié en fonction du bouton cliqué


            switch (el.currentTarget.id) {
                

                case "W":
                    w.classList.add ("scaling")
                    var audio = new Audio("crash.mp3")
        audio.play()
                    break;
        
                case "A":
                    a.classList.add ("scaling")
                    var audio = new Audio("kick-bass.mp3")
        audio.play()
                    break
        
                case "S":
                    s.classList.add ("scaling")
                    var audio = new Audio("snare.mp3")
        audio.play()
                    break
        
                case "D":
                    d.classList.add ("scaling")
                    var audio = new Audio("tom-1.mp3")
        audio.play()
                    break
        
                case "J":
                    j.classList.add ("scaling")
                    var audio = new Audio("tom-2.mp3")
        audio.play()
                    break
        
                case "K":
                    k.classList.add ("scaling")
                    var audio = new Audio("tom-3.mp3")
        audio.play()
                    break
        
                case "L":
                    l.classList.add ("scaling")
                    var audio = new Audio("tom-4.mp3")
        audio.play()
                break

            }




        })






 })