const form = document.querySelector("form")

form.addEventListener('submit' , function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)  ) {
        results.innerHTML = `please enter a valid height: ${height}`
    }
    if(weight === '' || weight < 0 || isNaN(height)  ) {
        results.innerHTML = `please enter a valid weight: ${weight}`
    }
   
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        
//That Homework 

        let category;
        if (bmi < 18.6) {
            category = 'Under Weight';
            
        }
        else if (bmi >= 18.6 && bmi <= 24.9 ) {
            category = 'Normal Weight';
            
        }
        else{
            category = 'Higher Weight';
            
        }
        console.log(category)
        results.innerHTML += `<br> <span>${category}</span>`;
    }
})




