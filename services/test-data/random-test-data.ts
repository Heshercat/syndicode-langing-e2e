// Random string generator

function stringGen(lengthMax: number) {
    var text = "";
    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    var randomLength = Math.floor(Math.random() * lengthMax)

    for( var i=0; i < randomLength; i++ ) {
        text += charset.charAt(Math.ceil(Math.random() * charset.length));
    }

    return text;
}

// Random data

export var randomName = stringGen(15)+"qatest"
export var randomCorrectStructuredEmail = stringGen(15) + "@" + stringGen(5) + "." + stringGen(5)+"qatest"
export var randomEmailWithoutAmpersand = stringGen(15) + "." + stringGen(5)
export var randomEmailWithoutPartBeforeAmpersand = "@" + stringGen(5) + "." + stringGen(5)
export var randomEmailWithoutPartAfterAmpersand = stringGen(15) + "@"
