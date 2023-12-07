var firstTry=0;




document.getElementById("quiz").addEventListener("submit", function(event){
    event.preventDefault();
    
    const oldSubscriber=4;
    var newSubscriber=0;
    if (document.getElementById("aurora").checked) {
        newSubscriber= newSubscriber+1;
    }
    if (document.getElementById("select").selectedIndex==2)
    {
        newSubscriber=newSubscriber+1;
    }
    if(document.getElementById("range").value==2034){
        newSubscriber=newSubscriber+1;
    }
    bonus=document.getElementById("bonus").value;
    if(bonus=="metrotrilogy"||bonus=="metro2035")
    {
        newSubscriber=newSubscriber+1;

    }

    if(newSubscriber==4 && firstTry<1){
        var Congrats=document.createElement("h3");
        Congrats.innerHTML="Congratulations, you aced the test!";
        document.getElementById("quiz").appendChild(Congrats);
        firstTry=firstTry+1;
    }

    var drawingHelper = oldSubscriber+newSubscriber
    var winner= Math.floor(Math.random()*(drawingHelper+1));
    //alert(winner)
    //winner=2
    if (winner<=newSubscriber&&firstTry<2) {
        
        var winImg=document.createElement("img");
        var winCap=document.createElement("h2");
        winImg.src="imgSource/winner.jpg"
        
        winCap.innerHTML="You have won the drawing! We will contact you about your prize!";
        document.getElementById("quiz").appendChild(winImg);
        document.getElementById("quiz").appendChild(winCap);
        firstTry=firstTry+1;
    }
    else if(winner<=drawingHelper&&firstTry<2){
       var lose=document.createElement("h2");
       lose.innerHTML="Sorry, not this time! But there'll be more stuff to win later, so keep being subscribed to the newsletter!";
       document.getElementById("quiz").appendChild(lose);
       firstTry=firstTry+1;
    }
  });


function canContact() {
    var checkBox = document.getElementById("contact");
    var otherStuff = document.getElementById("else");
    if (checkBox.checked == true) {
        otherStuff.style.display = "block";
    } else {
        otherStuff.style.display = "none";
    }
}