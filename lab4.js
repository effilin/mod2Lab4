const thankYou = [ "Thank you","Merci","Gracias","Grazie","Danke","Obrigado", " 谢谢", "ありがとう", "Tack","Asante"]

function sayThanks() {
    let i = Math.floor(math.random()* 10)
    let phrase = thankYou.at(i)
    document.getElementById("tYou").innerHTML = phrase
    setInterval(5000)
}