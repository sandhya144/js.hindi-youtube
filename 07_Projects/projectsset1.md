# Projects related to DOM 

## project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1- (color changer)

``` javacsript
console.log("Hello")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListner('click', function (e) {
            console.log(e);
            console.log(e.target);     // from where it get's targeted
            if (e.target.id === 'grey'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'white'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'blue'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
    });
    
});

```

# Project 2 Solution (BMI Calculator)

const form = document.querySelector('form')

// this usecase will give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListner('submit',function(e){
    e.preventDefault();

const height = parseInt(document.querySeletor('#height').value);
const weight = parseInt(document.querySeletor('#weight').value);
const results = document.querySelector('#results')

if (height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `please give a valid height ${height}`;
} else if (weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `please give a valid weight ${weight}`;
}else {
    const bmi = (weight / ((height * height)/ 10000)).toFixed(2);

    //show the results...

    results.innerHTML = `<span>${bmi}</span>`;
}
});

# Project 3 (Digital Clock)

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
 // console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();
}, 1000);    // {for 1sec = 1000 intervals}

# Project 4 (Guess Numbers)














