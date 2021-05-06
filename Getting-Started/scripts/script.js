let ImageOne = document.querySelector('#img1');
let ImageTwo = document.querySelector('#img2');
let Button = document.querySelector('button');
let Heading = document.querySelector('h1');

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    Heading.textContent = "Top Gear Fan: " + storedName;
}

ImageOne.onclick = () => {
    let mySrc = ImageOne.getAttribute('src');
    if(mySrc === 'images/Top-Gear/Top_Gear_Live_Italia,_2014_Richard_Hammond,_James_May,_Jeremy_Clarkson.jpeg'){
        ImageOne.setAttribute('src', 'images/Top-Gear/Top_Gear_S17.jpeg');
    } else if(mySrc === 'images/Top-Gear/Top_Gear_S17.jpeg'){
        ImageOne.setAttribute('src', 'images/Top-Gear/Top_Gear_Random_Shoot_Pic.jpeg');
    } else {
        ImageOne.setAttribute('src', 'images/Top-Gear/Top_Gear_Live_Italia,_2014_Richard_Hammond,_James_May,_Jeremy_Clarkson.jpeg');
    }
}

ImageTwo.onclick = () => {
    let mySrc = ImageTwo.getAttribute('src');
    if(mySrc === 'images/The-Grand-Tour/The-Grand-Tour.jpeg'){
        ImageTwo.setAttribute('src', 'images/The-Grand-Tour/The-Grand-Tour-S3.jpeg');
    } else if(mySrc === 'images/The-Grand-Tour/The-Grand-Tour-S3.jpeg'){
        ImageTwo.setAttribute('src', 'images/The-Grand-Tour/The-Grand-Tour-Seamen.jpeg');
    } else {
        ImageTwo.setAttribute('src', 'images/The-Grand-Tour/The-Grand-Tour.jpeg');
    }
}

Button.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please Enter Your Name.');
    if(myName === null){
        let storedName = localStorage.getItem('name');
        if(storedName != null){
            Heading.textContent = "Top Gear Fan: " + storedName;
        } else{
            Heading.textContent = "Top Gear";
        }
    } else if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        Heading.textContent = "Top Gear Fan: " + myName;
    }
}