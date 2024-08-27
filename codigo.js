function isValidText(text) {
    return /^[a-z0-9\s]+$/.test(text);
}

function encryptText(text) {
    const codeMurcielago = {
        'm': '0', 'u': '1', 'r': '2', 'c': '3', 'i': '4', 
        'e': '5', 'l': '6', 'a': '7', 'g': '8', 'o': '9'
    };
    return text.toLowerCase().split('').map(char => codeMurcielago[char] || char).join('');
}

function decryptText(text) {
    const codeMurcielagoReverse = {
        '0': 'm', '1': 'u', '2': 'r', '3': 'c', '4': 'i', 
        '5': 'e', '6': 'l', '7': 'a', '8': 'g', '9': 'o'
    };
    return text.split('').map(char => codeMurcielagoReverse[char] || char).join('');
}


document.getElementById("encryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    if (isValidText(inputText)) {
        document.getElementById("outputText").value = encryptText(inputText);
    } else {
        alert("El texto contiene caracteres inválidos.");
    }
});


document.getElementById("decryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    if (isValidText(inputText)) {
        document.getElementById("outputText").value = decryptText(inputText);
    } else {
        alert("El texto contiene caracteres inválidos.");
    }
});


document.getElementById("copyButton").addEventListener("click", function() {
    const outputText = document.getElementById("outputText");
    if (outputText.value.trim() !== "") {
        outputText.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    } else {
        alert("No hay texto para copiar.");
    }
});
