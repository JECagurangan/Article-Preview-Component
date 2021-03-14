const shareButton = document.querySelector(".card__profile__share");
const profileDiv = document.querySelector(".card__profile");
const profileImg = document.querySelector(".card__profile__image");

const shareButtonSVG = shareButton.childNodes[1];
const shareButtonPath = shareButtonSVG.childNodes[0];

const shareButtonActive = document.querySelector(".card__profile__share--active");
const profileDivActive = document.querySelector(".card__profile--active");

let isProfileActive = false;

shareButton.addEventListener("click", function() {
    console.log("hehe");

    if(screen.width >= 1440 && isProfileActive === false){
        profileDivActive.style.overflow = "show";
        profileDivActive.style.height = "55px";
        shareButton.style.backgroundColor = "#48556a"
        shareButtonPath.style.fill = "#ecf2f8";
        isProfileActive = true;

    }else if (screen.width >= 1440 && isProfileActive === true){
        profileDivActive.style.overflow = "hidden";
        profileDivActive.style.height = "0px";
        shareButton.style.backgroundColor = "#ecf2f8"; 
        shareButtonPath.style.fill = "#48556a";

        isProfileActive = false;
    }else{
        profileDiv.style.overflow = "hidden";
        profileDiv.style.height = "0";
        profileDiv.style.marginBottom = "0";
    
        profileDivActive.style.overflow = "show";
        profileDivActive.style.height = "64px";

        isProfileActive = false;
    }

});

shareButtonActive.addEventListener("click", function() {
    console.log("hehe");

    profileDivActive.style.overflow = "hidden";
    profileDivActive.style.height = "0";

    profileDiv.style.overflow = "show";
    profileDiv.style.height = "42px";
    profileDiv.style.marginBottom = "20px";

    isProfileActive = true;;
});