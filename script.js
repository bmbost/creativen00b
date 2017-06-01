$(document).ready(function() {
    // Start off hiding all but the Resume section.
    $("#about").hide();
    $("#projects").hide();
    $("#contact").hide();

    // Shows About section, hides all others.
    $("#btnAbout").on("click", function() {
        $("#projects").hide();
        $("#contact").hide();
        $("#resume").hide();
        $("#about").show();
    });

    // Shows Projects section, hides all others.
    $("#btnProjects").on("click", function() {
        $("#about").hide();
        $("#contact").hide();
        $("#resume").hide()
        $("#projects").show();
    });

    // Shows Contact section, hides all others.
    $("#btnContact").on("click", function() {
        $("#about").hide();
        $("#projects").hide();
        $("#resume").hide();
        $("#contact").show();
    });

    // Shows my resume, hides all other sections.
    $("#btnResume").on("click", function() {
        $("#about").hide();
        $("#projects").hide();
        $("#contact").hide();
        $("#resume").show();
    });

    // Makes my website open in new page/tab
    $("#btnMyWebsite").on("click", function() {
        window.open("http://www.creativen00b.com", "_blank");
    });

    // Opens my Github profile on a new page/tab.
    $("#btnMyGithub").on("click", function() {
        window.open("https://github.com/bmbost/", "_blank");
    });

    // Opens my freeCodeCamp profile in a new page/tab.
    $("#btnMyFreecodecamp").on("click", function() {
        window.open("https://freecodecamp.com/bmbost/", "_blank");
    });

    // Opens my Codecademy profile in a new page/tab.
    $("#btnMyCodecademy").on("click", function() {
        window.open("https://www.codecademy.com/bmbost", "_blank");
    });

    // Opens my Codepen/fcc Portfolio project in a new page/tab.
    $("#btnPortfolio").on("click", function() {
        window.open("http://codepen.io/Frenzyheart/full/VPveQy/", "_blank");
    });

    // Opens my Codepen/fcc Tribute page project in a new page/tab.
    $("#btnTribute").on("click", function() {
        window.open("http://codepen.io/Frenzyheart/full/LxVvjL/", "_blank");
    });

    // Opens my fcc Wikipedia project in a new page/tab.
    $("#btnWikipedia").on("click", function() {
        window.open("https://bmbost.github.io/freeCodeCampProjects/wikipedia/", "_blank");
    });

    // Opens my fcc Weather app project in a new page/tab.
    $("#btnWeather").on("click", function() {
        window.open("https://bmbost.github.io/freeCodeCampProjects/weather/weather.html", "_blank");
    });

    // Opens my fcc Random Quote Generator project in a new page/tab.
    $("#btnRndQuote").on("click", function() {
        window.open("http://codepen.io/Frenzyheart/full/WRjRbd/", "_blank");
    });

    // Opens the source code for this very website, located on Github
    $("#btnThisSiteCode").on("click", function() {
        window.open("https://github.com/bmbost/creativen00b/", "_blank");
    });
});