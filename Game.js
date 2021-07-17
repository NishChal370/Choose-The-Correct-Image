var orgImgArray = ['guitar.png','guitar.png','drum.png','drum.png','Microphone.png','Microphone.png', 'piano.png', 'piano.png'];
var imgArray=[];// duplicate of orginal array
var path ='img/';
var start = false;// to check if start button is clickor not

var selectedImg=[];// to store selected image
var clickedBtn=[];// to store selected image index
var previousBtn=[];// to track if same button is click twice
var matchedImgBtnNum =[];
var score = 0;
/*
NOte: 
    Math.floor()  change the  decimal to int 
*/

//start game and storing orgImageArray to imgArray
function strt(){
    start = true;
    imgArray = [];

    // storing the orginal array in imgArray.
    for(var i =0; i<orgImgArray.length; i++){
        imgArray.push(orgImgArray[i]);
    }
    //calling function to chnage the position of array randomly.
    suffelArray(imgArray);
    
}

// suffel array  is a function . It change the position of array randomly.
function suffelArray(imgArray){
    for(var j =0; j<imgArray.length; j++){
        var temp;
        var randmIndex = Math.floor(Math.random()*imgArray.length);
        temp = imgArray[randmIndex];
        imgArray[randmIndex] = imgArray[j];
        imgArray[j] = temp;
    }

}


// display the imge in selected button
function selectImg(btnNum){
    if(matchedImgBtnNum.includes(btnNum) == false){
        previousBtn.push(btnNum);
        if(previousBtn[0] == previousBtn[1]){
            previousBtn.pop();
        }
        else{
            if(previousBtn.length >= 2){
                previousBtn = [];
            }

            //display selected Image
            var btn = "btn"+btnNum;
            var img = path+imgArray[btnNum-1];
            document.getElementById(btn).src= img;

            selectedImg.push(imgArray[btnNum-1]);
            clickedBtn.push(btnNum);

            if(selectedImg.length == 2){
                setTimeout(checkMatch, 400,selectedImg, clickedBtn) ; // setTimeout delay the  function call
            }

        }
    }  
    
}

function checkMatch(selectedImg,clickedBtn){
    if(selectedImg[0] !=  selectedImg[1]){
        for(var btnIndex=0; btnIndex <clickedBtn.length; btnIndex++){
            var btnId ="btn"+clickedBtn[btnIndex];
            document.getElementById(btnId).src= "img/green box.png";
        }
    }
    else{
        for(var i =0; i<clickedBtn.length; i++){
            matchedImgBtnNum.push(clickedBtn[i]);
        }
        score ++;
        document.getElementsByClassName("score")[0].innerHTML =score;
        
        
    }
    selectedImg.length= 0; // clearing array
    clickedBtn.length = 0;// clearing array
        
}



function checkIfMatches(){
    for(var i=0; i<clickedBtn.length; i++){
        var selectedBtnId = "btn"+clickedBtn[i];
        document.getElementById(selectedBtnId).src= "img/green box.png";

    }
}

/*on click function*/
//button No1
function btn1click(){
    //calling function with btn number
    if(start ==true){ selectImg("1");}
}

//button No2
function btn2click(){
    //calling function with btn number
    if(start ==true){ selectImg("2"); }
}

//button No3
function btn3click(){
    //calling function with btn number
    if(start ==true){ selectImg("3"); }
}

//button No4
function btn4click(){
    //calling function with btn number
    if(start ==true){ selectImg("4"); }
}

//button No5
function btn5click(){
    //calling function with btn number
    if(start ==true){ selectImg("5"); }
}

//button No6
function btn6click(){
    //calling function with btn number
    if(start ==true){ selectImg("6"); }
}

function btn7click(){
    //calling function with btn number
    if(start ==true){ selectImg("7"); }
}

function btn8click(){
    //calling function with btn number
    if(start ==true){ selectImg("8"); }
}


// for stop button
function stp(){
    start = false;
    imgArray=[];
    selectedImg=[];
    selectedImg=[];
    clickedBtn=[];
    previousBtn=[];
    matchedImgBtnNum =[];
    click =0;
    score =0;
    document.getElementsByClassName("score")[0].innerHTML =score;
    for(var x =1 ; x<=orgImgArray.length; x++){
        document.getElementById("btn"+x).src= "img/green box.png";
    }
}
