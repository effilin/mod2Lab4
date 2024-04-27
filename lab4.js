const thankYou = [ "Thank you","Merci","Gracias","Grazie","Danke","Obrigado", " 谢谢", "ありがとう", "Tack", "Asante"];

 function sayThanks() {
    let i = Math.floor(Math.random() * thankYou.length);
    let phrase = thankYou.at(i);
    document.getElementById("tYou").innerHTML = phrase + "!";
    setInterval(1000);
}

function sideOpen() {
    document.getElementById ("sideBar").style.height= "70vw"; 
}
function closePict() {
    document.getElementById ("sideBar").style.height= "0vw";  
}
sayThanks();