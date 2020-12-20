var pics_src = new Array("pics/1.jpg","pics/2.jpg","pics/3.jpg");
var num = 0;
 
function funcleftred(){
    document.getElementById("picLeft").src = "./image/left-red.PNG";
}

function functopred(){
    document.getElementById("picTop").src = "./image/top-red.PNG";
}

function funcrightred(){
    document.getElementById("picRight").src = "./image/right-red.PNG";
}

function funcdownred(){
    document.getElementById("picDown").src = "./image/down-red.PNG";
}

function funcleftblue(){
    document.getElementById("picLeft").src = "./image/left-blue.PNG";
}

function functopblue(){
    document.getElementById("picTop").src = "./image/top-blue.PNG";
}

function funcrightblue(){
    document.getElementById("picRight").src = "./image/right-blue.PNG";
}

function funcdownblue(){
    document.getElementById("picDown").src = "./image/down-blue.PNG";
}

function funcleftgreen(){
    document.getElementById("picLeft").src = "./image/left-green.PNG";
}

function functopgreen(){
    document.getElementById("picTop").src = "./image/top-green.PNG";
}

function funcrightgreen(){
    document.getElementById("picRight").src = "./image/right-green.PNG";
}

function funcdowngreen(){
    document.getElementById("picDown").src = "./image/down-green.PNG";
}

function funcleftyellow(){
    document.getElementById("picLeft").src = "./image/left-yellow.PNG";
}

function functopyellow(){
    document.getElementById("picTop").src = "./image/top-yellow.PNG";
}

function funcrightyellow(){
    document.getElementById("picRight").src = "./image/right-yellow.PNG";
}

function funcdownyellow(){
    document.getElementById("picDown").src = "./image/down-yellow.PNG";
}

//----------------------------------------

function funccir1red(){
    document.getElementById("pic1").src = "./image/circle1-red.PNG";
}

function funccir2red(){
    document.getElementById("pic2").src = "./image/circle2-red.PNG";
}

function funccir3red(){
    document.getElementById("pic3").src = "./image/circle3-red.PNG";
}

function funccir4red(){
    document.getElementById("pic4").src = "./image/circle4-red.PNG";
}

function funccir1blue(){
    document.getElementById("pic1").src = "./image/circle1-blue.PNG";
}

function funccir2blue(){
    document.getElementById("pic2").src = "./image/circle2-blue.PNG";
}

function funccir3blue(){
    document.getElementById("pic3").src = "./image/circle3-blue.PNG";
}

function funccir4blue(){
    document.getElementById("pic4").src = "./image/circle4-blue.PNG";
}

function funccir1green(){
    document.getElementById("pic1").src = "./image/circle1-green.PNG";
}

function funccir2green(){
    document.getElementById("pic2").src = "./image/circle2-green.PNG";
}

function funccir3green(){
    document.getElementById("pic3").src = "./image/circle3-green.PNG";
}

function funccir4green(){
    document.getElementById("pic4").src = "./image/circle4-green.PNG";
}

function funccir1yellow(){
    document.getElementById("pic1").src = "./image/circle1-yellow.PNG";
}

function funccir2yellow(){
    document.getElementById("pic2").src = "./image/circle2-yellow.PNG";
}

function funccir3yellow(){
    document.getElementById("pic3").src = "./image/circle3-yellow.PNG";
}

function funccir4yellow(){
    document.getElementById("pic4").src = "./image/circle4-yellow.PNG";
}

function funcRed(){
    const sct = document.getElementById('select');
    if(sct.value == "part1"){
        document.getElementById("picLeft").src = "./image/left-red.PNG";
    }else if(sct.value == "part2"){
        document.getElementById("picTop").src = "./image/top-red.PNG";
    }else if(sct.value == "part3"){
        document.getElementById("picRight").src = "./image/right-red.PNG";
    }else if(sct.value == "part4"){
        document.getElementById("picDown").src = "./image/down-red.PNG";
    }
}

function funcBlue(){
    const sct = document.getElementById('select');
    if(sct.value == "part1"){
        document.getElementById("picLeft").src = "./image/left-blue.PNG";
    }else if(sct.value == "part2"){
        document.getElementById("picTop").src = "./image/top-blue.PNG";
    }else if(sct.value == "part3"){
        document.getElementById("picRight").src = "./image/right-blue.PNG";
    }else if(sct.value == "part4"){
        document.getElementById("picDown").src = "./image/down-blue.PNG";
    }
}

function funcGreen(){
    const sct = document.getElementById('select');
    if(sct.value == "part1"){
        document.getElementById("picLeft").src = "./image/left-green.PNG";
    }else if(sct.value == "part2"){
        document.getElementById("picTop").src = "./image/top-green.PNG";
    }else if(sct.value == "part3"){
        document.getElementById("picRight").src = "./image/right-green.PNG";
    }else if(sct.value == "part4"){
        document.getElementById("picDown").src = "./image/down-green.PNG";
    }
}

function funcYellow(){
    const sct = document.getElementById('select');
    if(sct.value == "part1"){
        document.getElementById("picLeft").src = "./image/left-yellow.PNG";
    }else if(sct.value == "part2"){
        document.getElementById("picTop").src = "./image/top-yellow.PNG";
    }else if(sct.value == "part3"){
        document.getElementById("picRight").src = "./image/right-yellow.PNG";
    }else if(sct.value == "part4"){
        document.getElementById("picDown").src = "./image/down-yellow.PNG";
    }
}