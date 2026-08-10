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

       if(i %2){
              //odd squares
              val.style.transform='rotate(4deg)'
       }else if(i % 4 == 2 ){
              //even squares
              val.style.transform='rotate(-6deg)'
       }else if(i %7 == 3){
              val.style.transform='rotate(8deg)'
       }else if(i % 4 == 3 ){
              val.style.transform='rotate(3deg)'
       }else{
              val.style.transform='rotate(-4deg)'
       }
 })

 function randWidth(min,max){
       return (Math.floor(Math.random()*(max - min))) + min
 }

