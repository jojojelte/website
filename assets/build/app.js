console.log("Welcome to the website :) \nNothing special to see here! If you're interested in my code, feel free to take a look.")


// Use toLowerCase() to deal with casesensitive searches later on
var userAgent = navigator.userAgent.toLowerCase(),
    userIsOnMobileDevice = checkIfUserIsOnMobileDevice(userAgent);
if(userIsOnMobileDevice) {
    window.location.replace("https://jeltevdv.nl")
    alert("You’re on mobile!");
} else {
    alert("You're on desktop!");
}
function checkIfUserIsOnMobileDevice($userAgent) {
    if($userAgent.includes('mobi') || $userAgent.includes('tablet')){
       return true;
    }
    if($userAgent.includes('android')) {
       if(height > width && width < 800) {
          // Screen is higher than it’s wide, so we have portrait mode
          return true;
       }
       if(width > height && height < 800) {
          // Screen is wider than it’s high, so we have landscape mode
          return true;
       }
    }
    return false;
 }


var arrow = document.getElementById("down")
var area = document.getElementById("expanded")
var arrowdown = document.getElementById("arrowdown")
var arrowup = document.getElementById("arrowup")
var list = document.getElementById("list")


function expand(){
    console.log("Expanding!")
    area.style.marginTop = 0;
    arrowup.style.display = "block";
    list.style.display = "block"

    // ANIMATION
    area.style.animation = "fade-in-top 2s ease";
    arrowdown.style.animation = "fade-to-top 2s ease"
    arrowup.style.animation = "fade-in-top-button 2s ease";
    setTimeout(() => {
        arrowdown.style.display = "none";
    }, 2000);
}

function shrink(){
    console.log("Shrinking")
    area.style.marginTop = "-15vh"
    arrowdown.style.display = "block"

    // ANIMATION
    area.style.animation = "fade-out-top 2s ease";
    arrowdown.style.animation = "fade-to-bottom 2s ease";
    arrowup.style.animation = "fade-out-top-button 2s ease";
    setTimeout(() => {
    list.style.display = "none"
    arrowup.style.display = "none"
    }, 2000);
}