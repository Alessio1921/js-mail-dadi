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
