let randomnumber = Math.floor(Math.random() * 100) + 1;
let lives = 10;

function checknumber() {
    const num = Number(document.getElementById("mynumber").value);
    const result = document.getElementById("result");
    
    lives--;
    
    if (lives <= 0) {
        window.location.href = "loss.html";
    } else if (num === randomnumber) {
        window.location.href = "win.html";
    } else if (num > randomnumber) {
        result.innerHTML = `Oops, your guess is too high. You have ${lives} tries remaining.`;
    } else {
        result.innerHTML = `Oops, your guess is too low. You have ${lives} tries remaining.`;
    }
    
    document.getElementById("lives").innerText = `Lives: ${lives}`;
}
