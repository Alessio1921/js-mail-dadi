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
    document.getElementById("winner").innerHTML=("Hai Vinto!");
  }
  else if( diceUser==diceBot){
    console.log("abbiamo pareggiato");
    document.getElementById("winner").innerHTML=("Abbiamo pareggiato!");
  }
  else{
    console.log("ha vinto il computer");
    document.getElementById("winner").innerHTML=("Hai Perso!");
    }
    
    // I add and remove the display none class to the image of the data assigned to the user
    switch (true) {
      case (diceUser==1):
        document.getElementById("dice-1-user").classList.remove("d-none");
        document.getElementById("dice-2-user").classList.add("d-none");
        document.getElementById("dice-3-user").classList.add("d-none");
        document.getElementById("dice-4-user").classList.add("d-none");
        document.getElementById("dice-5-user").classList.add("d-none");
        document.getElementById("dice-6-user").classList.add("d-none");
        
        break;
      case (diceUser==2):
        document.getElementById("dice-2-user").classList.remove("d-none");
        document.getElementById("dice-1-user").classList.add("d-none");
        document.getElementById("dice-3-user").classList.add("d-none");
        document.getElementById("dice-4-user").classList.add("d-none");
        document.getElementById("dice-5-user").classList.add("d-none");
        document.getElementById("dice-6-user").classList.add("d-none");
        break;
      case (diceUser==3):
        document.getElementById("dice-3-user").classList.remove("d-none");
        document.getElementById("dice-1-user").classList.add("d-none");
        document.getElementById("dice-2-user").classList.add("d-none");
        document.getElementById("dice-4-user").classList.add("d-none");
        document.getElementById("dice-5-user").classList.add("d-none");
        document.getElementById("dice-6-user").classList.add("d-none");
        break;
      case (diceUser==4):
        document.getElementById("dice-4-user").classList.remove("d-none");
        document.getElementById("dice-1-user").classList.add("d-none");
        document.getElementById("dice-2-user").classList.add("d-none");
        document.getElementById("dice-3-user").classList.add("d-none");
        document.getElementById("dice-5-user").classList.add("d-none");
        document.getElementById("dice-6-user").classList.add("d-none");
        break;
      case (diceUser==5):
        document.getElementById("dice-5-user").classList.remove("d-none");
        document.getElementById("dice-1-user").classList.add("d-none");
        document.getElementById("dice-2-user").classList.add("d-none");
        document.getElementById("dice-3-user").classList.add("d-none");
        document.getElementById("dice-4-user").classList.add("d-none");
        document.getElementById("dice-6-user").classList.add("d-none");
        break;
      case (diceUser==6):
        document.getElementById("dice-6-user").classList.remove("d-none");
        document.getElementById("dice-1-user").classList.add("d-none");
        document.getElementById("dice-2-user").classList.add("d-none");
        document.getElementById("dice-3-user").classList.add("d-none");
        document.getElementById("dice-4-user").classList.add("d-none");
        document.getElementById("dice-5-user").classList.add("d-none");
        break;
    }
    // I add and remove the display none class to the image of the data assigned to the bot
    switch (true) {
      case (diceBot==1):
        document.getElementById("dice-1-bot").classList.remove("d-none");
        document.getElementById("dice-2-bot").classList.add("d-none");
        document.getElementById("dice-3-bot").classList.add("d-none");
        document.getElementById("dice-4-bot").classList.add("d-none");
        document.getElementById("dice-5-bot").classList.add("d-none");
        document.getElementById("dice-6-bot").classList.add("d-none");
        
        break;
      case (diceBot==2):
        document.getElementById("dice-2-bot").classList.remove("d-none");
        document.getElementById("dice-1-bot").classList.add("d-none");
        document.getElementById("dice-3-bot").classList.add("d-none");
        document.getElementById("dice-4-bot").classList.add("d-none");
        document.getElementById("dice-5-bot").classList.add("d-none");
        document.getElementById("dice-6-bot").classList.add("d-none");
        break;
      case (diceBot==3):
        document.getElementById("dice-3-bot").classList.remove("d-none");
        document.getElementById("dice-1-bot").classList.add("d-none");
        document.getElementById("dice-2-bot").classList.add("d-none");
        document.getElementById("dice-4-bot").classList.add("d-none");
        document.getElementById("dice-5-bot").classList.add("d-none");
        document.getElementById("dice-6-bot").classList.add("d-none");
        break;
      case (diceBot==4):
        document.getElementById("dice-4-bot").classList.remove("d-none");
        document.getElementById("dice-1-bot").classList.add("d-none");
        document.getElementById("dice-2-bot").classList.add("d-none");
        document.getElementById("dice-3-bot").classList.add("d-none");
        document.getElementById("dice-5-bot").classList.add("d-none");
        document.getElementById("dice-6-bot").classList.add("d-none");
        break;
      case (diceBot==5):
        document.getElementById("dice-5-bot").classList.remove("d-none");
        document.getElementById("dice-1-bot").classList.add("d-none");
        document.getElementById("dice-2-bot").classList.add("d-none");
        document.getElementById("dice-3-bot").classList.add("d-none");
        document.getElementById("dice-4-bot").classList.add("d-none");
        document.getElementById("dice-6-bot").classList.add("d-none");
        break;
      case (diceBot==6):
        document.getElementById("dice-6-bot").classList.remove("d-none");
        document.getElementById("dice-1-bot").classList.add("d-none");
        document.getElementById("dice-2-bot").classList.add("d-none");
        document.getElementById("dice-3-bot").classList.add("d-none");
        document.getElementById("dice-4-bot").classList.add("d-none");
        document.getElementById("dice-5-bot").classList.add("d-none");
        break;
    }
})