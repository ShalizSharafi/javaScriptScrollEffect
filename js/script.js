// selected elements ____==+++++++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////
 const hamIcon = document.querySelector('.hamIcon')
const hamLine = document.querySelectorAll('.hamLine')

const square = document.querySelectorAll('.square')
 hamIcon.addEventListener('click',()=>{
       hamLine[0].classList.toggle('openHam')
       hamLine[2].classList.toggle('openHam')
 })


// seeded random number generator +++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////
function mulberry32(seed){
       return function(){
              seed |= 0
              seed = (seed + 0x6D2B79F5) | 0
              let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
              t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
              return ((t ^ (t >>> 14)) >>> 0) / 4294967296
       }
}



 //////squares height and width +++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////
 square.forEach((val,i)=>{
       const rand =  mulberry32(i)

       val.style.width = randWidth(300,500,rand) +'px'
       val.style.height = randWidth(350,500,rand) + 'px'
       val.parentElement.setAttribute('data-h',val.parentElement.offsetTop)
       val.classList.add(val.getAttribute('data-effect'))
       rotateSquare(val,i)
        if(i <=2){
               val.style.visibility='visible'
               val.style.scale='1'
       }
                    
       val.addEventListener('mouseenter',(e)=>{
              val.addEventListener('mousemove',removeRotate)
       })

       val.addEventListener('mouseleave',(e)=>{
              val.removeEventListener('mousemove',removeRotate)
              rotateSquare(val,i)
       })

 })


 function randWidth(min,max,rand){
       return (Math.floor(rand()*(max - min))) + min
        
 }

 //////squares height and width

 //////squares rotate +++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////

function rotateSquare(sq,index){
       if(index %2){
              //odd squares
              sq.style.transform='rotate(2deg)translateY(-20px)'
       }else if(index % 4 == 2 ){
              //even squares
              sq.style.transform='rotate(-3deg)translateY(25px)'
       }else if(index %7 == 3){
              sq.style.transform='rotate(5deg)translateY(-10px)'
       }else if(index % 4 == 3 ){
              sq.style.transform='rotate(4deg)translateY(30px)'
       }else{
              sq.style.transform='rotate(-2deg)translateY(20px)'
       }
}


function removeRotate(e){
    e.currentTarget.style.transform='rotate(0deg)translateY(0px)'
}

 //////squares rotate


// scroll behaviour  +++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////




addEventListener('scroll',()=>{
       let scrollT = scrollY + 400
       square.forEach((sq,i)=>{
              if(scrollT > sq.parentElement.getAttribute('data-h')){
                     sq.classList.remove(sq.getAttribute('data-effect'))
              }
       })
})

m