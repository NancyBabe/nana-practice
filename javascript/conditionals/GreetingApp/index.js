const Drink ='cocacola';

if ( Drink ==='cola') {
console.log('get cola'); 
}else if ( Drink === 'sprite') {
console.log('get sprite');
}else if ( Drink === 'Fanta') {
console.log('Fanta');   
} else {
console.log( 'Bring my money back');        
}

const greeting = document.getElementById('greeting');
const gethour  = new Date().getHours();
const Name = 'Nancy'
         
if (gethour >= 16){
 greeting.innerHTML = 'Goodevening, ' + Name ;
} else if (gethour >= 12) {
 greeting.innerHTML = 'Good afternoon, ' + Name ;
  } else if (gethour >= 0) {
  greeting.innerHTML = 'Good Morning, ' + Name ;
   } else {
  greeting ='welcome,' + Name
  }
