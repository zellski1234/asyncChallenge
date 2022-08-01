


// curl https://meowfacts.herokuapp.com/


// fetch(`https://meowfacts.herokuapp.com/`).then(response => response.json).then(data => console.log(data));

// fetch(`https://meowfacts.herokuapp.com/`).then(response => console.log(response));


// fetch(`https://meowfacts.herokuapp.com/`, {
//     "data": [
//       "0", "Mother cats teach their kittens to use the litter box."
//     ]
//   }
// ).then(response => console.log(response));


const facts = document.getElementById(`facts`)
const generate = document.getElementById(`generate`)

    

  

generate.addEventListener(`click`, () =>{
    async function fetchText() {
        let response = await fetch(`https://meowfacts.herokuapp.com/`);
        let data = await response.text();
        let newArray = [];

        for(let i = 10; i < data.length-3; i++){
            newArray.push(data[i]) 
        };
        console.log(`button clicked`);
        facts.textContent = newArray.join("")
    }
    fetchText()

    
}
);
