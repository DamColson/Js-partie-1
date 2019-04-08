// Exercice 2
//     var firstName = prompt ("quel est ton prénom ?");
//     var lastName = prompt ("quel est ton nom de famille ?");
//     var city = prompt ("Où habites-tu?");
//     alert("Nom : " + firstName + "\n" + "Prénom : " + lastName + "\n" + "Ville : " + city);

// Exercice 3

// var firstName = prompt ("quel est ton prénom ?");
// alert ("Bonjour " +firstName);

// Exercice 4

// var myButton = document.querySelector('button');
//
// myButton.addEventListener('click',function(){
//   var regexText =/^[a-zA-Zéàïçëö\- ]+$/;
//   var firstName = document.getElementById('firstName').value;
//   var lastName = document.getElementById('lastName').value;
//   var city = document.getElementById('city').value;
//     if((regexText.test(lastName)) != true){
//       alert('Le nom de famille est invalide');
//     } else if(!(regexText.test(firstName))){
//       alert('Le prénom est invalide');
//     } else if(!(regexText.test(city))){
//       alert('La ville est invalide');
//     } else {
//   alert('Nom : ' + lastName + '\nPrénom : ' + firstName + '\nVille : ' + city);
// }
// });

// Exercice 5

// var myButton = document.querySelector('button');
//
// myButton.addEventListener('click',function(){
//   var regexNumb =/^[0-9]+.[0-9]+$/;
//   var num1 = document.getElementById('num1').value;
//   var num2 = document.getElementById('num2').value;
//   if((regexNumb.test(num1)) != true){
//     alert('Le premier Nombre est invalide');
//   } else if(!(regexNumb.test(num2))){
//     alert('Le second nombre est invalide');
//   } else {
//   alert((Math.trunc(num1))*num2);
// }
// });

// Exercice 6
// var myButton = document.querySelector('button');
//
// function divide(){
//   var regexNumb =/^(\d*)(\.?)(\d+)$/;
//   var num1 = document.getElementById('num1').value;
//   var num2 = document.getElementById('num2').value;
//   if((regexNumb.test(num1)) != true){
//     alert('Le premier Nombre est invalide');
//     } else if(!(regexNumb.test(num2))){
//     alert('Le second nombre est invalide');
//     } else {
//     alert(num1 % num2);
//   }
// }
// myButton.addEventListener('click',function(){
//   divide();
// });

// Exercice 7
//
// var myButton = document.querySelector('button');
//
// function calc() {
//   var regexSize = /^[3-5][0-9][.][5]$/;
//   var regexYear = /^[1-2][0-9][0-9][0-9]$/;
//   var size = document.getElementById('size').value;
//   var year = document.getElementById('year').value;
//   var total = (((size * 2) + 5) * 50) - year + 1769;
//   if (!regexSize.test(size)) {
//     alert('Tu as un problème de pied ma grande');
//   } else if (!regexYear.test(year)) {
//     alert('Problème de date mon chou');
//   } else {
//
//     return (total);
//   }
// }
// myButton.addEventListener('click', function() {
//   calc();
// });

// Exercice 8

// var myButton = document.querySelector('button');
//
// function age(){
//   var regexAge = /^[0-9][0-9][0-9]$/;
//   var age = document.getElementById('age').value;
//   if (!regexAge.text(age)){
//     alert('Age incohérent');
//   } else {
//       if(age>=18){
//         alert('Vous êtes majeur');
//       }
//       else{
//         alert('Vous êtes mineur');
//       }
//     }
//
//   }
//   myButton.addEventListener('click',function(){
//     age();
//   });
