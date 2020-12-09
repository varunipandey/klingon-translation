
console.log("Hello from the app.js page");

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");


var serverUrl = "https://api.funtranslations.com/translate/klingon.json"

function getTranslationUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured ", error)
    alert("Something wrong with server! try again after some time.")
}

function clickHandler() {
    
    var translationInput = txtInput.value;
    fetch(getTranslationUrl(translationInput))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};


btnTranslate.addEventListener("click", clickHandler);