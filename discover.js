document.addEventListener("DOMContentLoaded", () =>
{
    var counter = 0;
    document.querySelector(".appPresentation").addEventListener("scroll", scrollEvent);
    document.querySelector(".scrollImage").addEventListener("click", scrollEvent);
    var texts = document.querySelectorAll(".presText");

    function scrollEvent(event)
    {
        if ((counter + 4) <= (texts.length - 1))
        {
            if (counter % 2 == 0)
            {
                texts[counter].style.top = "-200px";
                texts[counter+1].style.top = "-200px";
                texts[counter+2].style.top = "250px";
                texts[counter+3].style.top = "70px";
            }
            else
            {
                texts[counter+1].style.top = "-200px";
                texts[counter+2].style.top = "-200px";
                texts[counter+3].style.top = "70px";
                texts[counter+4].style.top = "250px";
            }

            counter++;
            event.preventDefault();
        }
    }
});

// parcours => dessin => selfie