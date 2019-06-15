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

var enemeies = [];
var selectedCharacter="";    
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


function renderCharacters(divLocation, characters) {
    $(divLocation).empty();

    for(var iterator = 0; iterator < characters.length; iterator++)
    {
        
        var charPicContainer = $('<div>').html('<p>' + characters[iterator].healthpoints + '</p>');
        var characterImg = $('<img>');
        characterImg.attr('data-character_id', iterator);
        characterImg.attr('data-health', characters[iterator].healthpoints);
        characterImg.attr('data-attack', characters[iterator].attackpower);
        characterImg.attr('data-counter', characters[iterator].counterattackpower);
        characterImg.attr('data-name', characters[iterator].name);
        characterImg.attr('src', characters[iterator].imageSrc);
        characterImg.addClass("character");
        charPicContainer.append(characterImg);
        $(divLocation).append(charPicContainer);

        characterImg.css({
            'height': '150px',
            'border': '0.05em black solid',
            'margin': '0.3em',
            
        });
        charPicContainer.css({
            'position': 'relative'
        });
        charPicContainer.children("p").css({
            'position': 'absolute',
            'color': 'snow',
            'background-color': 'darkblue',
            'left': '40%',
            'bottom': '0'
        });
    }
};
renderCharacters("#pic-container", characters);

//if character has diff name than selected character, then move



    $(".character").click(function selectACharacter() {
        
        if (!selectedCharacter) {
            selectedCharacter = characters[$(this).data("character_id")];
            renderCharacters("#pic-container", [selectedCharacter]);
        
            for(var i = 0; i < characters.length; i++) {
                if (i !== $(this).data("character_id")) {
                    enemeies.push(characters[i]);
                }
            }

            console.log(enemeies);
            renderCharacters("#available-enemies", enemeies);
        //rerender top portion to just show my character & move other images to enemy area
        }
    

        // console.log(selectedCharacter);
        
        // console.log(selectedCharacter);
        // console.log(characters);

        
        //CODE WORKS, BUT EMPTIES EVERYTHING
    //     function clearenemies(character) {
    //    if ( $(".character").data("name") !== character) {
    //     $(".pic-container").empty(characterImg);
    //    }
    // } clearenemies(selectedCharacter);

        // if ($(".pic-container").children("img").data("name") !== selectedCharacter ) {
        //     $(".pic-container").children("img").empty();
        // };
        //     console.log($(".pic-container").children("img").data("name"));
    //NEED TO LOOP THROUGH ALL IMAGES IN PIC CONTAINER AND LOG CHAR. NAMES

//ONCE CHARACTER IS SELECTED, REMOVE ALL OTHER CHARACTER PICS
        
        $(".pic-container img").each(function enemies(){
            var allNames = $(this).data("name");
            
        //    console.log(allNames);
        //    console.log("--------");
        //    console.log(selectedCharacter);
        // console.log($(this).data("name"));
           

            // console.log(selectedCharacter);
       
            if (allNames === selectedCharacter){
                console.log("true");

            // $(`.${selectedCharacter})`).attr('enemy', 'blue');
            } else {
                // $(".pic-container").children("<div>").empty();
                console.log("false");
                // $(".pic-container img").attr('enemy', 'true');
                //  console.log(selectedCharacter);
                //  console.log(allNames);
            };
        }
        );
        

        // if($(this).data("name") !== selectedCharacter) {
        //     $('<img>').empty();
        // }
    });
});