function loadQuote(){
   // console.log("event fired")
let URL = "https://dummyjson.com/quotes"
let qid = document.getElementById("qid").value
console.log(qid)
fetch(`${URL}/${qid}`).then(response=>response.json()).then(result=>{
   // console.log(result)
    //let pTag = document.createElement("p")
    //let pTagValue = document.createTextNode(result.quote);
    //pTag.appendChild(pTagValue);

    document.getElementById("result").innerHTML=result.quote
}).catch(error=>console.log(error))
}