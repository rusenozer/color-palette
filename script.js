const seedColorInput = document.getElementById("color-input")
const form = document.querySelector('.color-schema--form')
const optionInput = document.getElementById("palette-selection")

const btn = document.getElementById("btn");

setInitialValues()


form.addEventListener('submit',function(e){

    e.preventDefault()

    const seedColor = (seedColorInput.value).slice(1)
    const mode = optionInput.value;

    getData(seedColor,mode)
 
})


 function getData(seedColor,mode){
      fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=6`)
    .then(response=>response.json())
    .then(data=>{
        useData(data)
    }); 
}


function useData(data){
    const colors = document.querySelectorAll(".color")
        const colorNames = document.querySelectorAll(".colorName")
        const colorArr = Array.from(colors);
        colorArr.forEach((color,index)=>{
            color.style.backgroundColor = data.colors[index].hex.value

            colorNames[index].textContent=data.colors[index].hex.value
        })
}

function setInitialValues(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    seedColorInput.value="#" + randomColor
    getData(randomColor.toString(),optionInput.value)
}