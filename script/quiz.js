const caseS =[...document.querySelectorAll(".case")]
const validation = document.querySelector("#validation")
Object.assign(validation.style,{
    display: "block",
    padding: "5px",
    with:"100px",
    margin: "auto",
    marginTop: "50px",
    color:'#ffc107 ',
    backgroundColor:"#212529",
    border: "2px solid #ffc107",
    borderRadius: "15px",
})
let nombreClic =[]

function verfication(){
    caseS.forEach( (point) => {
        point.addEventListener("click", ()=>{
            if (point.checked === true) {
                console.log("lol");
            } else {
                console.log("noo");
            }
        })
    })
}


