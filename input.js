workName=document.querySelector(".workName>h1")
workLowerText=document.querySelector(".workLowerText>h5")
workImage=document.querySelector(".workImage>img")

function getName(){
    let Name=document.getElementById("Name").value
    workName.innerHTML=Name
}

function getLowerText(){
    let LowerText=document.getElementById("LowerText").value
    workLowerText.innerHTML=LowerText
}

function getImage(){
    let Image=document.getElementById("Image").value
    console.log(Image);
    workImage.src=Image
}
document.querySelector(".workName").style.justifyContent="center"
function nameJustify(){
    let nameLeftRight=document.getElementById("nameLeftRight").value
    if (nameLeftRight==50) {
        document.querySelector(".workName").style.justifyContent="center"
    }
}