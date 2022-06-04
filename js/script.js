const okBtn = document.getElementById("okBtn");
const guess = document.getElementById("guess");
const dialog = document.querySelector("dialog");
const dialogTitel = dialog.querySelector("p");

const define = {
    minValue: 0,
    maxValue: 999
};

let minValue = 0;
let maxValue = 100;
let random = 50;

function checkScopeValue(){
    const minInput = document.getElementById("minValue");
    const maxInput = document.getElementById("maxValue");
    minInput.min = define.minValue;
    minInput.max = define.maxValue;
    maxInput.min = define.minValue;
    maxInput.max = define.maxValue;
    minValue = parseInt(minInput.value);
    maxValue = parseInt(maxInput.value);
    
    if(isNaN(minValue) || isNaN(maxValue)){
        dialogTitel.textContent = "Not a Number."
        dialog.showModal();
        return;
    }

    if(minValue < define.minValue) {
        dialogTitel.textContent = "minValue < "  + define.minValue
        dialog.showModal();
        return;
    }

    if(maxValue > define.maxValue) {
        dialogTitel.textContent = "minValue > " + define.maxValue
        dialog.showModal();
        return;
    }

    if(minValue > maxValue) {
        dialogTitel.textContent = "minValue > maxValue";
        dialog.showModal();
        return;
    }

    console.log("minValue:", minValue)
    console.log("maxValue:", maxValue)
    random = getRandom(minValue, maxValue);
    console.log("random:", random)

    document.querySelector(".guess").style="display:none;";

    guess.innerHTML = `
    <div class="guess">
        <p style="letter-spacing: 1.5px;">Guess ${minValue}-${maxValue}：</p>
        <input type="number" class="inputGuessNumber" placeholder="${minValue}-${maxValue}">
        <div class="center">
            <div id="guessBtn" class="okBtn">ok
                <svg class="btnSvg" width="31" height="32" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M17.1563 0.475236C13.9229 0.15944 10.6701 0.925174 7.87618 2.65982C5.08226 4.39446 2.89474 7.00646 1.63534 10.1117C0.375935 13.2168 0.111126 16.6513 0.879857 19.91C1.64859 23.1687 3.41028 26.0795 5.90585 28.2144C8.40141 30.3493 11.4991 31.5956 14.7434 31.7699C17.9876 31.9443 21.2072 31.0375 23.9286 29.183C26.6499 27.3285 28.7294 24.6241 29.8613 21.4676C30.9931 18.3111 31.1175 14.869 30.2162 11.6477L15.6304 16.0984L17.1563 0.475236Z" fill="#4C4C4C"/>
                </svg>
            </div>
        </div>
    </div>`;
    okBtn.removeEventListener("click", checkScopeValue);

    const guessBtn = document.getElementById("guessBtn");
    guessBtn.addEventListener("click", checkGuess);
}

function checkGuess(){
    let guessValue = document.querySelector(".inputGuessNumber").value;

    if(!guessValue && guessValue !== 0){
        dialogTitel.textContent = "Not a Number."
        dialog.showModal();
        return;
    }

    // if(guessValue == '' || guessValue === null) {
    //     dialogTitel.textContent = "Not a Number."
    //     dialog.showModal();
    //     return;
    // }

    guessValue = Number(guessValue);

    if(isNaN(guessValue)){
        dialogTitel.textContent = "Not a Number."
        dialog.showModal();
        return;
    }

    if (guessValue % 1) {
        dialogTitel.textContent = "Not a integer."
        dialog.showModal();
        return;
    }

    if(guessValue < minValue) {
        dialogTitel.textContent = "Guess Number < " + minValue + ".";
        dialog.showModal();
        return;
    }

    if(guessValue > maxValue) {
        dialogTitel.textContent = "Guess Number > " + maxValue + ".";
        dialog.showModal();
        return;
    }

    if(guessValue > random) {
        maxValue = guessValue;
    }

    if(guessValue < random) {
        minValue = guessValue;
    }

    guess.innerHTML = `
    <div class="guess">
        <p style="letter-spacing: 1.5px;">Guess ${minValue}-${maxValue}：</p>
        <input type="number" class="inputGuessNumber" placeholder="${minValue}-${maxValue}">
        <div class="center">
            <div id="guessBtn" class="okBtn">ok
                <svg class="btnSvg" width="31" height="32" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M17.1563 0.475236C13.9229 0.15944 10.6701 0.925174 7.87618 2.65982C5.08226 4.39446 2.89474 7.00646 1.63534 10.1117C0.375935 13.2168 0.111126 16.6513 0.879857 19.91C1.64859 23.1687 3.41028 26.0795 5.90585 28.2144C8.40141 30.3493 11.4991 31.5956 14.7434 31.7699C17.9876 31.9443 21.2072 31.0375 23.9286 29.183C26.6499 27.3285 28.7294 24.6241 29.8613 21.4676C30.9931 18.3111 31.1175 14.869 30.2162 11.6477L15.6304 16.0984L17.1563 0.475236Z" fill="#4C4C4C"/>
                </svg>
            </div>
        </div>
    </div>`;

    guessBtn.addEventListener("click", checkGuess);

    if(guessValue === random) {
        guessBtn.removeEventListener("click", checkGuess);
        document.querySelector('.roundCakeRightBottom').classList.add('chickHair');
        document.querySelector('.circleRightBottom svg use').href.baseVal = './svg.svg#chick' ;
        document.querySelector('.circleRightBottom').classList.add('chickBody');
        

        guess.innerHTML = `
        <div class="guess">
            <p style="letter-spacing: 1.5px;">Congratulations</p>
            <input type="text" class="great" value="Guessed it right !" style="color:green;">
            <div class="center">
                <div id="againBtn" class="again">again
                    <svg class="btnSvg" width="31" height="32" viewBox="0 0 31 32" xmlns="http://www.w3.org/2000/svg">
                        <path  d="M17.1563 0.475236C13.9229 0.15944 10.6701 0.925174 7.87618 2.65982C5.08226 4.39446 2.89474 7.00646 1.63534 10.1117C0.375935 13.2168 0.111126 16.6513 0.879857 19.91C1.64859 23.1687 3.41028 26.0795 5.90585 28.2144C8.40141 30.3493 11.4991 31.5956 14.7434 31.7699C17.9876 31.9443 21.2072 31.0375 23.9286 29.183C26.6499 27.3285 28.7294 24.6241 29.8613 21.4676C30.9931 18.3111 31.1175 14.869 30.2162 11.6477L15.6304 16.0984L17.1563 0.475236Z" fill="#4C4C4C"/>
                    </svg>
                </div>
            </div>
        </div>`;

        let againBtn = document.getElementById("againBtn");
        againBtn.addEventListener("click", again);
    }

}


function again(){
    document.querySelector(".guess").style="display:block;";
    guess.innerHTML = '';
    document.querySelector('.roundCakeRightBottom').classList.remove('chickHair');
    document.querySelector('.circleRightBottom svg use').href.baseVal = './svg.svg#circleCutDown' ;
    document.querySelector('.circleRightBottom').classList.remove('chickBody');
    okBtn.addEventListener("click", checkScopeValue);
    // location.reload()
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

okBtn.addEventListener("click", checkScopeValue);

dialog.addEventListener("click", (ev) => {
    if (ev.target === dialog) {
        dialog.close();
    }
});