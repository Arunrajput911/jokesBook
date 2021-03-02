const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')

jokebtn.addEventListener('click',generatejoke)

function generatejoke() {
    fetch('https://icanhazdadjoke.com',{
        headers:{
               'Accept':'application/json'  
            }
})
.then(res => res.json())
.then((data) => {
    jokeEl.innerHTML = data.joke
})
}