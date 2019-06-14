$(document).ready(function () {
    //IMAGE SOURCE ARRAY TO IMPORT CHARACTER IMAGES TO PIC-CONTAINER
    var image_sources = [
        "assets/images/DarthMaul.jpeg",
        "assets/images/HanSolo.jpeg",
        "assets/images/JarJarBinx.jpeg",
        "assets/images/R2D2.jpeg"
    ]

    //PUTTING ALL INITIAL TEXT & STYLING IN PLACE
    $('body,html').css({
        "background-image": 'url("assets/images/MilleniumBackground.jpg")',
        "background-repeat": "no-repeat",
        "background-size": "100vw 100vh"
         });
    $("#game-container").css({
        "background-color": "rgba(255,255,255,.5)",
        "border-radius": "0.2em",
        "width": "fit-content"
        });
    $("#title").text("Star Wars RPG!");
    $("#your-character").text("Your Character");
    $("#available-enemies").text("Enemies available to Attack");
    $("#fight-section").text("Fight Section");
    $("#attack-button").text("Attack");
    $("#defender").text("Defender");
    $("h1").css('color', 'black');
    $("#title").css({
        'color': 'white',
        "background-color": "rgba(0,0,0, .5)",
        "border-radius": "0.2em",
        "width": "fit-content",
        'margin-right': '1em'
        });



    //LOOP TO DISPLAY ALL CHARACTER IMAGES IN PIC-CONTAINER

    // for (i = 0; i < image_sources.length; i++) {
    //     var pic_div = $("<img>");
    //     pic_div.addClass("characters");
    //     pic_div.attr({
    //         "data-src": image_sources[i],
    //         "src": image_sources[i],
    //     });
    //     $("#pic-container").append(pic_div);
    //     pic_div.css({
    //         'height': '150px',
    //         'border': '0.05em black solid',
    //         'margin': '0.3em'
    //     })

    // }


    //MAKE THE DARTH MAUL OBJECT
    // var DarthMaul = $("img[data-src='assets/images/DarthMaul.jpeg']").attr({
    //     "name": 'Darth Maul',
    //     "healthpoints": '180',
    //     "attackpower": '5',
    //     "counterattackpower": '25'
    // });


    //MAKE THE HAN SOLO OBJECT
    // var HanSolo = $("img[data-src='assets/images/HanSolo.jpeg']").attr({
    //     "name": 'Han Solo',
    //     "healthpoints": '150',
    //     "attackpower": '10',
    //     "counterattackpower": '10'
    // });


    //MAKE THE JARJAR BINX OBJECT
    // var JarJarBinx = $("img[data-src='assets/images/JarJarBinx.jpeg']").attr({
    //     "name": 'JarJar Binx',
    //     "healthpoints": '80',
    //     "attackpower": '5',
    //     "counterattackpower": '30'
    // });


    //MAKE THE R2D2OBJECT
    // var R2D2 = $("img[data-src='assets/images/R2D2.jpeg']").attr({
    //     "name": 'R2D2',
    //     "healthpoints": '200',
    //     "attackpower": '10',
    //     "counterattackpower": '5'
    // });

// var characters{
//     "Darth Maul": {
//         "healthpoints": '200',
//         "attackpower": '10',
//         "counterattackpower": '5'
//     }

var characters = [
    {
        "name": 'R2D2',
        "healthpoints": '200',
        "attackpower": '10',
        "counterattackpower": '5',
        "imageSrc": "assets/images/R2D2.jpeg"
    },
    {
        "name": 'Darth Maul',
        "healthpoints": '180',
        "attackpower": '5',
        "counterattackpower": '25',
        "imageSrc": "assets/images/DarthMaul.jpeg"
    },
    {
        "name": 'Han Solo',
        "healthpoints": '150',
        "attackpower": '10',
        "counterattackpower": '10',
        "imageSrc": "assets/images/HanSolo.jpeg"
    },
    {
        "name": 'JarJar Binx',
        "healthpoints": '80',
        "attackpower": '5',
        "counterattackpower": '30',
        "imageSrc": "assets/images/JarJarBinx.jpeg"
    }
];

    for(var iterator = 0; iterator < characters.length; iterator++)
    {
        var characterImg = $('<img>');
        characterImg.attr('data-character_id', iterator);
        characterImg.attr('data-health', characters[iterator].healthpoints);
        characterImg.attr('data-attack', characters[iterator].attackpower);
        characterImg.attr('data-counter', characters[iterator].counterattackpower);
        characterImg.attr('data-name', characters[iterator].name);
        characterImg.attr('src', characters[iterator].imageSrc);
        characterImg.addClass("character");
        $(".pic-container").append(characterImg);
        characterImg.css({
            'height': '150px',
            'border': '0.05em black solid',
            'margin': '0.3em'
        })
    }

//if character has diff name than selected character, then move

    $(".character").click(function() {
        var selectedCharacter = ($(this).data("name"));
        (characters[$(this).data("character_id")]);
        console.log(selectedCharacter);
        // console.log(characters);
        //CODE WORKS, BUT EMPTIES EVERYTHING
    //    if ( $(".character").data("name") !== selectedCharacter) {
    //     $(".pic-container").empty(characterImg);
    //    }




    //NEED TO LOOP THROUGH ALL IMAGES IN PIC CONTAINER AND LOG CHAR. NAMES






        // for (i = 0; i < characters.length; i++) {
        //     console.log( $(".pic-container img").data("name") );
        // };

        $(".pic-container img").each(function(){
            console.log($(this).data("name"));
        }
        );


        // if($(this).data("name") !== selectedCharacter) {
        //     $('<img>').empty();
        // }
    });











    //START THE GAME

    //SELECT YOUR CHARACTER - USER CLICKS ON A CHARACTER
    //ALL OTHER CHARACTERS SHOULD BE MOVED TO ENEMIES AVAILABLE TO ATTACK

    //ON CLICK DEFINE CHOSEN CHARACTER
    // $(".characters").click(function characterSelect() {
    //     //PULL THE NAME OF THE CHARACTER THAT THE USER CLICKS, THEN MOVE ALL CHARACTERS WITHOUT THAT NAME
    //     //TO ENEMY AREA
    //     // this.css('border', '2px green solid');
    //     for (i = 0; i <= image_sources.length - 1; i++) {
    //         // if ($(".characters").attr("name") !== this.name) {
    //             var myCharacter = this.name;
    //             $("<img>").empty();
    //             // console.log("Inside the loop");
    //             // console.log($(".characters").attr("name"));
    //             console.log(myCharacter);
    //         // }
    //     }

    //     // console.log(  (this.name)  );
    //     // if ($("img[name]") !== this.name) {
    //     //     $("<img>").empty();
    //     // }
    //     // console.log($("img[name]"));
    //     // console.log($(".characters").attr("name"));


    // });



});