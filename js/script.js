let min=0;
let max=100;
let random = getRandom(0,100);
console.log(random)


guess()
function guess(){
    let num = parseInt(prompt("猜猜看" + min + "-" + max));
    if(isNaN(num)){
        alert("Not a Number.");
        guess()
    }else if(num < min){
        alert("Number <"+min);
        guess()
    }else if(num > max){
        alert("Number >"+max);
        guess()
    }else if(num > random){
        max = num;
        guess()
    }else if(num < random){
        min = num;
        guess()
    }else if(num == random){
        alert("恭喜 猜對了");
    }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};



