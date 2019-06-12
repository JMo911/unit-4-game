$(document).ready(function () {
    //IMAGE SOURCE ARRAY TO IMPORT CHARACTER IMAGES TO PIC-CONTAINER
    var image_sources = [
        "assets/images/DarthMaul.jpeg",
        "assets/images/HanSolo.jpeg",
        "assets/images/JarJarBinx.jpeg",
        "assets/images/R2D2.jpeg"
    ]

    //PUTTING ALL INITIAL TEXT IN PLACE
    $('body,html').css({
        "background-image": 'url("assets/images/millenium3.jpg")',
        "background-repeat": "no-repeat",
        "background-size": "100%"
    });
    $("#title").text("Star Wars RPG!");
    $("#your-character").text("Your Character");
    $("#available-enemies").text("Enemies available to Attack");
    $("#fight-section").text("Fight Section");
    $("#attack-button").text("Attack");
    $("#defender").text("Defender");
    $("h1").css('color', 'white');



    //LOOP TO DISPLAY ALL CHARACTER IMAGES IN PIC-CONTAINER

    for (i = 0; i < image_sources.length; i++) {
        var pic_div = $("<img>");
        pic_div.addClass("characters");
        pic_div.attr({
            "data-src": image_sources[i],
            "src": image_sources[i],
        });
        $("#pic-container").append(pic_div);
        pic_div.css({
            'height': '150px',
            'border': '0.05em black solid',
            'margin': '0.3em'
        })

    }

    //MAKE THE DARTH MAUL OBJECT
    $("img[data-src='assets/images/DarthMaul.jpeg']").attr({
        "name": 'Darth Maul',
        "Health-Points": '180',
        "Attack-Power": '5',
        "Counter-Attack-Power": '25'
    });


    //MAKE THE HAN SOLO OBJECT
    $("img[data-src='assets/images/HanSolo.jpeg']").attr({
        "name": 'Han Solo',
        "Health-Points": '150',
        "Attack-Power": '10',
        "Counter-Attack-Power": '10'
    });


    //MAKE THE JARJAR BINX OBJECT
    $("img[data-src='assets/images/JarJarBinx.jpeg']").attr({
        "name": 'JarJar Binx',
        "Health-Points": '80',
        "Attack-Power": '5',
        "Counter-Attack-Power": '30'
    });


    //MAKE THE R2D2OBJECT
    $("img[data-src='assets/images/R2D2.jpeg']").attr({
        "name": 'R2D2',
        "Health-Points": '200',
        "Attack-Power": '10',
        "Counter-Attack-Power": '5'
    });













    //START THE GAME

    //SELECT YOUR CHARACTER - USER CLICKS ON A CHARACTER
    //ALL OTHER CHARACTERS SHOULD BE MOVED TO ENEMIES AVAILABLE TO ATTACK

    //ON CLICK DEFINE CHOSEN CHARACTER
    $(".characters").click(function characterSelect() {
        //PULL THE NAME OF THE CHARACTER THAT THE USER CLICKS, THEN MOVE ALL CHARACTERS WITHOUT THAT NAME
        //TO ENEMY AREA
        // this.css('border', '2px green solid');
        for (i = 0; i <= image_sources.length - 1; i++) {
            // if ($(".characters").attr("name") !== this.name) {
                $("<img>").empty();
                console.log("Inside the loop");
                console.log($(".characters").attr("name"));
                console.log(this.name);
            // }
        }

        // console.log(  (this.name)  );
        // if ($("img[name]") !== this.name) {
        //     $("<img>").empty();
        // }
        // console.log($("img[name]"));
        // console.log($(".characters").attr("name"));


    });



});