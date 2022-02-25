const mail=["riccardopetricca@gmail.com" , "ciao@gmail.com" , "alessio1999@icloud.com" , "sony@playstation.com" , "paperella@boolean.it" , "nonmiguardatelesercizio@fattigliaffarituoi.com" , "homersimpson@springfield.boe" , "tonystark@starkindustries.marvel" , "peterparker@live.us" , "rabiotseitropposcarso@ritirati.fr"];
let userMail=document.getElementById("email");

document.getElementById("sent").addEventListener('click', function () {
  let result="";
  for (let i = 0; i < mail.length; i++) {
    if (userMail.value==mail[i]) {
      result="ok puoi entrare";
      i=mail.length;
    }
    else{
      result="non puoi entrare";
    }
    console.log(result);
    document.getElementById("reply").innerHTML=result;
  }
})
// dice game
document.getElementById("play").addEventListener('click', function () {
  let diceUser= Math.floor(( Math.random ()*6)+ 1);
  let diceBot= Math.floor(( Math.random ()*6)+ 1);
  console.log(diceUser);
  console.log(diceBot);
  if (diceUser > diceBot){
    console.log("hai vinto");
  }
  else if( diceUser==diceBot){
    console.log("abbiamo pareggiato");
  }
  else{
    console.log("ha vinto il computer");
  }
})