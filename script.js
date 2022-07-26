// Add your code here
let introduction = "hello,"
let firstname = "kenenna"
let surname = "emelife"
console.log(introduction+" "+firstname+" "+surname)
 let haircolor = "blue"
 let myEyesColor = "blue"
 let myFavouriteColor = "red"
 let myFavouriteFood = "tamale's"
 console.log(haircolor)
 console.log( myEyesColor)
 console.log(myFavouriteColor)
 console.log(myFavouriteFood)
// Don't edit or touch the code below here!
// Don't edit or touch the code below here!
// Don't edit the code below here!

let h1 = document.querySelector('h1')
h1.textContent = 'Congrats! You have linked your JavaScript file and it is now working'

let paragraph1 = document.createElement('p');
paragraph1.setAttribute('id', 'introduction')
paragraph1.textContent = introduction;

let paragraph2 = document.createElement('p');
paragraph2.setAttribute('id', 'my-hair-color')
paragraph2.textContent = `My eye color is ${myEyesColor} and my hair color is ${myHairColor}.`;

let paragraph3 = document.createElement('p');
paragraph3.setAttribute('id', 'my-favourite-color')
paragraph3.textContent = 'my favorite color is ' + myFavouriteColor;

let paragraph4 = document.createElement('p');
paragraph4.setAttribute('id', 'my-favourite-food')
paragraph4.textContent = 'my favorite food is ' + myFavouriteFood;

let paragraph5 = document.createElement('p');
paragraph5.setAttribute('id', 'my-number-of-siblings')
paragraph5.textContent = 'I have ' + myNumberOfSiblings + ' siblings.';

let section = document.querySelector('section')
section.appendChild(paragraph1);
section.appendChild(paragraph2);
section.appendChild(paragraph3);
section.appendChild(paragraph4);
section.appendChild(paragraph5);

