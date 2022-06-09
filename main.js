const generateRandomColumn = () => {

    let randomNumber = undefined;

    for(let i = 0; i < 5; i++){
        generateRandomLine(i)
    }
}

const generateRandomLine = (c) => {

    let count = 0;

    while(count < 4){

        for(let i = 0; i < 5; i++){

            if(count == 4){
                break;
            }
            else{

                if(c===0){
                    document.getElementById(i+'_c_'+c).style.pointerEvents = "auto";
                }

                randomNumber = Math.floor(generateRandomNumber(0,4));
                if(randomNumber ===  i){
                    count++;
                    document.getElementById(i+'_c_'+c).className = "g";
                }
            }
        }
    }    
}

const generateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}




const walkNextHouse = (v) => {

    if(v.className==="g"){

        v.style.backgroundColor = 'green';
        unlockNextColumn(v.id);
    }
    else{
        v.style.backgroundColor = 'red';
        getMessage(false);
        gameOver();
    }
}

const unlockNextColumn = (id) => {

    let aux = id.split("_");
    let columnNumber = aux[2];
    let nextColumn   = parseInt(columnNumber)+1;


    if(nextColumn > 4){
        getMessage(true);
        gameOver();
    }
    else{
        for(let i = 0; i < 5; i++){
            document.getElementById(i+'_c_'+columnNumber).style.pointerEvents = 'none';
            document.getElementById(i+'_c_'+nextColumn).style.pointerEvents = 'auto';
        }
    }
}

const getMessage = (v) =>{
    
    let elementMessage = document.getElementById("msg_user");

    if(v){

        elementMessage.innerHTML     = 'Você ganhou!';
        elementMessage.style.color   = 'green';
        elementMessage.style.display = 'inline';
    }
    else{

        elementMessage.innerHTML     = 'Você perdeu!';
        elementMessage.style.color   = 'red';
        elementMessage.style.display = 'inline';
    }
}



const startGame = () => {
    generateRandomColumn();
}

const restart = () => {
    location.reload();
}

const gameOver = () => {
    document.getElementById("table").style.pointerEvents = "none";
    document.getElementById("button").style.display = "inline";
}

startGame()
