const jokespace = document.querySelector(".joke p");
const regenerate = document.querySelector("button");
document.addEventListener("DOMContentLoaded", fetchJoke);

regenerate.addEventListener("click", fetchJoke);

async  function fetchJoke(e){
  
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    "Accept": "application/json"
                }
            });
            
            const data = await response.json();
            jokespace.textContent = data.joke;
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    
}