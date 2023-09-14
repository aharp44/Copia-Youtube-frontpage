// ==================== HEADER ====================

function showMagnifying(x){

    var element = document.getElementById("magnifyingID");
    var element2 = document.getElementById("searchtxfID");
    var element3 = document.getElementById("searchbarID");
    var element4 = document.getElementById("searchHistoryID");

    if(x === true){
        element.classList.remove('header-search-img-HIDE');
        element2.classList.remove('header-search-txf-HIDE');
        element3.classList.remove('header-search-esq-HIDE');
        element4.classList.remove('header-HIDE');

        console.log("HEADER: clicked on Search Bar");
    }
    else{ 
        element.classList.add('header-search-img-HIDE');
        element2.classList.add('header-search-txf-HIDE');
        element3.classList.add('header-search-esq-HIDE');
        element4.classList.add('header-HIDE');
        console.log("HEADER: clicked out of Search Bar");
    }
}

function showProfile(){

    var element = document.getElementById("profileID");
    element.classList.toggle('header-HIDE');
    console.log("HEADER: clicked in/out of profile");

}

function showNotifications(){

    var element = document.getElementById("notificationsID");
    element.classList.toggle('header-HIDE');
    console.log("HEADER: clicked in/out of notifications");

}

function showNotif3dots(elem){

    elem.classList.toggle('header-3dots-HIDE');
    console.log("HEADER: clicked on the 3dots of notifications");
}

function showBigNav(){

    var element = document.getElementById("navID");
    var element2 = document.getElementById("navLeftID");
    var element3 = document.getElementById("frontID");
    var element4 = document.getElementById("topicsRootID");
    element.classList.toggle('nav-bigNav');
    element2.classList.toggle('nav-big');
    element3.classList.toggle('front-bigNav');
    element4.classList.toggle('topics-bigNav');
    console.log("NAV: clicked on the 3bars");

}

function showMore(){
    
    var element = document.getElementById("navSubsID");
    element.classList.toggle('nav-subscriptions-compacted');
    console.log("NAV: clicked on the 'Show 50 more'");

}

class ArrowClick{


    constructor() {  

        this.box = document.getElementById("topicsID");
        this.x = 1;
    }

    // Moves the box an x amount to the right
    draw(){
        this.box.style.left = this.x + "px";
    }

    // Hides/Shows the right and left arrows
    hideArrows(){
        var sideArrowL = document.getElementById("topics-LArrow");
        var sideArrowR = document.getElementById("topics-RArrow");
        var topicsList = document.getElementById("topicsID");
        var topicsContainer = document.getElementById('sideBarID');

        let width = topicsList.offsetWidth;
        let offset = width + this.x;

        // Left Arrow
        if (this.x >= 0){
            sideArrowL.classList.add('topics-HIDE');
            console.log("TOPICS: hiding left arrow");

            this.x = 0;
        }else if (sideArrowL.classList.contains("topics-HIDE")){
            sideArrowL.classList.remove('topics-HIDE');
            console.log("TOPICS: showing left arrow");
        }
        
        // Right Arrow
        if (offset < topicsContainer.offsetWidth){
            sideArrowR.classList.add('topics-HIDE');
            console.log("TOPICS: hiding right arrow");

            let diff = offset - topicsContainer.offsetWidth;
            this.x -= diff + 6;
        }else if (sideArrowR.classList.contains("topics-HIDE")){
            sideArrowR.classList.remove('topics-HIDE');
            console.log("TOPICS: showing right arrow");
        }
    }

   
    right() {

        this.x -= 100;
        this.hideArrows();
        this.draw();
        console.log("TOPICS: moved to the right");
    }
    left() {
  
        this.x += 100;
        console.log("TOPICS: moved to the left");
        this.hideArrows();
        this.draw();
    }
}

var arrowClick = new ArrowClick();


