$( document ).ready(function() {
    //IMAGE SOURCE ARRAY TO IMPORT CHARACTER IMAGES TO PIC-CONTAINER
    var image_sources = [
        "assets/images/DarthMaul.jpeg",
        "assets/images/HanSolo.jpeg",
        "assets/images/JarJarBinx.jpeg",
        "assets/images/R2D2.jpeg"
    ]

    //PUTTING ALL INITIAL TEXT IN PLACE
    $("#title").text("Star Wars RPG!");
    $("#your-character").text("Your Character");
    $("#available-enemies").text("Enemies available to Attack");
    $("#fight-section").text("Fight Section");
    $("#attack-button").text("Attack");
    $("#defender").text("Defender");


    
    //LOOP TO DISPLAY ALL CHARACTER IMAGES IN PIC-CONTAINER

    for (i=0; i < image_sources.length; i++) {
    var pic_div = $("<img>");
    pic_div.attr({
        "image-source" : image_sources[i],
        "src" : image_sources[i]
    });
    $("#pic-container").append(pic_div); 
    pic_div.css( {
        'height': '150px',
        'border': '0.05em black solid',
        'margin': '0.3em'
        })




    }




}


);