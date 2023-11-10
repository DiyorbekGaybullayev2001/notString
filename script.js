
let btn = document.getElementById("btn")
 
btn.onclick = function notString(){
    
    let str = document.getElementById("matn").value
    let p = document.getElementById("par")

    if(str.startsWith('not')){
      return p.innerHTML=str
    }
    else{
    return p.innerHTML = "not" +" "+ str
    }
  }