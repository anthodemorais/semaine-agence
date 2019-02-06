document.addEventListener("DOMContentLoaded", () =>
{
    document.querySelector(".appPresentation").addEventListener("scroll", scrollEvent);
    document.querySelector(".scrollImage").addEventListener("click", scrollEvent);

    function scrollEvent(event)
    {
        document.querySelector(".firstPres").style.top = "-200px";
        document.querySelector(".secondPres").style.top = "-200px";
        document.querySelector(".thirdPres").style.top = "250px";
        document.querySelector(".forthPres").style.top = "70px";
    }
});

// parcours => dessin => selfie