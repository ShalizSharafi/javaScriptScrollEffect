// selected elements ____==+++++++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////____==+++++++++________+++++++++++??????/////////////////
 const hamIcon = document.querySelector('.hamIcon')
const hamLine = document.querySelectorAll('.hamLine')

const square = document.querySelectorAll('.square')
 hamIcon.addEventListener('click',()=>{
       hamLine[0].classList.toggle('openHam')
       hamLine[2].classList.toggle('openHam')
 })

 square.forEach((val,i)=>{
       val.style.width = randWidth(200,300) +'px'
       val.style.height = randWidth(200,350) + 'px'
       rotateSquare(val,i)

       val.addEventListener('mouseenter',(e)=>{
              val.addEventListener('mousemove',removeRotate)
       })

       val.addEventListener('mouseleave',(e)=>{
              val.removeEventListener('mousemove',removeRotate)
              rotateSquare(val,i)
       })

 })


 function randWidth(min,max){
       return (Math.floor(Math.random()*(max - min))) + min
 }

function rotateSquare(sq,index){
       if(index %2){
              //odd squares
              sq.style.transform='rotate(4deg)'
       }else if(index % 4 == 2 ){
              //even squares
              sq.style.transform='rotate(-6deg)'
       }else if(index %7 == 3){
              sq.style.transform='rotate(8deg)'
       }else if(index % 4 == 3 ){
              sq.style.transform='rotate(3deg)'
       }else{
              sq.style.transform='rotate(-4deg)'
       }
}


function removeRotate(e){
       e.target.style.transform='rotate(0deg)'
}