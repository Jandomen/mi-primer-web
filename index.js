function suma () {
    const n1 =  Number (document.getElementById("n1").value);
    
    const n2 =  Number (document.getElementById("n2").value);
  
    let r = n1 + n2;
      document.getElementById("res").innerHTML="Su resultado es: " + r ;
}

  
function resta () {
    const n10 = Number (document.getElementById("n10").value);

    const n20 = Number (document.getElementById("n20").value);

    let r2 = n10 - n20;
      document.getElementById("res1").innerHTML="Su resultado es: " + r2 ;
}