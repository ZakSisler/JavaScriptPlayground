//Below is a fully-qualified ready function
//IT waits for HTML and CSS to load before executing the code inside of the function
jQuery(document).ready(function () {
    console.log("jQuery is working")
});

//Shortcut for ready function:
$(function () {
    //Code in here executes after HTML CSS loaded

    //Syntax to select elements: 
    //$("css-selector").method(params);

    //A goal:
    //Target the <li> tags inside the ul with the id: highlights (ul#highlisghts). Hide them and then fade them back in.
    //Execution:
    $("#highlights li").hide().fadeIn(3000);

    //.html() "renders html" and .text() "escapes it";  similar to .innerHTML and .tectContent

    //When assigning a jQuery selection to a variable, the name is typically preceded with a $
    let $writeless = $("#highlights li:last-child ");

    $writeless.text("<em> Write Less Do More with jQuery</em>");//prints the <em> tags
    $writeless.html("<em> Write Less Do More with jQuery</em>");//renders the <em> tags

    //When the <h2> with the id: (h2#slide), then slideToggle() the next sibling (<p> element)
    $("#slide").on("click", function () {
        $(this).next().slideToggle();
        //The "this" variable above is dynamic -- it's value changes
        //based on the context. Here we would say "this" refers to h2#slide
        //This is because the last element selected in this context is the h2#slide
    });
    //make the h2 clickable by changing the CSS
    $("#slide").css("cursor", "pointer");

    //MINI-LAB
    // h2#fade is clicked, fadeToggle() the next sibling
    //make sure the h2 appears to be clickable

    //Bonus change the font style of the <p> after the h2#fade to italic


    $("#fade").css("cursor", "pointer");

    $("#fade").on("click", function () {

        $(this).next().fadeToggle();

    });

    $("#fade").next().css("font-style", "italic");


    ///////////////////////Custom LightBox//////////////////////////////
    //When user clicks thumbnail, display the container
    //insert an <img> tag
    $(".thumb").on("click", function () {

        //Find the src of the img that was clicked and store it as a variable
        var imgSrc = $(this).attr("src");

        console.log(imgSrc);

        //plug an <img> tag into the #lightbox-content - use imgSrc as the <img> tag's src
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');

        //Make the lightbox container visible by fading in
        $("#lightbox-container").fadeIn(500);

        //now fadeOut()
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);

        });

    });

});