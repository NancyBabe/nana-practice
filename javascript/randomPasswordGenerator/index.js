function generatePassword () {
         const PasswordLength = 8;
         const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWSYZ0123456789';
 
        let password =''; 

        for (let index = 0; index < PasswordLength; index++) {
let randomIndex = Math.floor(Math.random() *characterSet.length)
password += characterSet.charAt(randomIndex)
};
const pass = document.getElementById('Password').value =password;

   }

   function generateSpecialcharacter(){
         const PasswordLength = 8;
         const characterSet = '*%#^()_+@!{}&<>;:?/[],.0123456789'
        let password =''; 

        for (let index = 0; index < PasswordLength; index++) {
         let randomIndex = Math.floor(Math.random() *characterSet.length)
         password += characterSet.charAt(randomIndex)
};
const pass = document.getElementById('Password').value= password
 }

   function reset() {
document.getElementById('Password').value =''

   }

