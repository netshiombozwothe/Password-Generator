
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let display1 = document.getElementById("display1-el")
let display2 = document.getElementById("display2-el")

function getPassword() {
     let passwordArray = []
     let password = ""
     
     for (e = 0; e < 2; e++) {
         for (i = 0; i < 15; i++) {  
            password += characters[Math.floor(Math.random() * characters.length)]
         } 
         passwordArray.push(password)
         password = ""
     }
 
     display1.textContent = passwordArray[0]
     display2.textContent = passwordArray[1]
 }