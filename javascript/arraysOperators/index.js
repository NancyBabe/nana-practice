// const phoneElement = document.getElementById('phone');
// const phoneChoice  ='iphone 14pro';

// if ( phoneChoice ==='iphone 14pro') {
// phoneElement.innerHTML ='get iphone 14pro'; 
// }else if ( phoneChoice === 'iphone 13promax') {
// phoneElement.innerHTML ='get iphone 13promax';
// }else if ( phoneChoice === 'samsung galaxy note 23 ultra') {
// phoneElement.innerHTML ='samsung galaxy note 23 ultra';   
// } else {
// phoneElement.innerHTML = 'send the bitcoin equivalent to my wallet address';        
// }

//boolean
// const colors = 'white'
// const number = 7.9
// const boolean = false


//OPERATORS
// const num =4 > 3
// console.log(num);


//STRING OPERATORS
// const firstName = 'Nancy'
// const Lastname ='Samuel,'
// const msg =  'please check your orders'; 

// const Fullname = firstName + Lastname +msg
// console.log(Fullname);

// const sign = 'Montague House'
// const tiles = sign.length;
// const subtotal = tiles *5
// const shipping =7;
// const grandTotal = subTotal + shipping


//Array
// const colours = ['white', 8, true, 'green', 'yellow', 'orange', 'purple' ]
// for ( let index = 0; index < colours.length; index++) {

//          const element = colours [index];
//          console.log(element);
// }

// const Names = [ 'Nancy', 'Samuel', 'Chibuikem', 'Peace',]
// for ( let index = 0; index < Names.length; index++) {

//        const element = Names [index];
//         console.log(element);
// }


// const greeting =document.getElementById('greeting');

// greeting.innerHTML = 'Hello World'



// const num = 4 > 2
// const number =document.getElementById('num')
// number.innerHTML = num

// const sign = 'Nana House'
// const tiles = sign.length;
// const subTotal = tiles *5;
// const shipping =7;
// const grandTotal =subTotal + shipping
// const number = document.getElementById('sign')
// number.innerHTML = sign


// const firstName = 'Nancy';
// const Lastname = ' Samuel,';
// const msg = ' i will be coming soon.';
// const Fullname = firstName + Lastname + msg
// const number = document.getElementById('firstName')
// number.innerHTML = Fullname
          

// const colours = ['blue', 'green', 'yellow', 'orange', 'purple' ]
// for ( let index = 0; index < colours.length; index++) {
// const element = colours [index];

// const number = document.getElementById('colours')
// number.innerHTML = colours
//  }

let namesArray=['victor','darline','satoshi','nana','gabriel','victoria','jayboy','chiamaka','vera']
function randomNumber() { 
         const min= 0 
         const max = namesArray.length - 1
         return Math.floor(Math.random()* (max - min +1)) + min 


}

function generateName() {
 const name =document.getElementById('name')
 name.innerHTML= namesArray[randomNumber()]    
}





