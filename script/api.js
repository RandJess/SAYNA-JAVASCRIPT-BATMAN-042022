let fetchData = {
    method: 'GET',
    // body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8'
    })
}

fetch("https://plankton-app-mj9br.ondigitalocean.app/questions/all", fetchData)
.then(notreReponse => {
    //reponse
    //the response you get is not JSON,
    // but an object with a series of methods that can be used depending 
    //on what you want to do with the information.
    //To convert the object returned into JSON, use the json() method.
    return notreReponse.json()
    
})
.then(data=>{
    // let para=  document.querySelector(".para")
    // para.innerHTML=`
    // ${data[0].response[0].text}
    // `
    validation.addEventListener("click", ()=>{
        verfication()
    })

    const element = data[i].response
    const el =element[i].isGood

    console.log(el);
})
.catch(err => {
    //error

})

   