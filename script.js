document.getElementById('generate').addEventListener('click', function() {
    var alphabetCount = parseInt(document.getElementById('alphabetCount').value);
    var numberCount = parseInt(document.getElementById('numberCount').value);
    var symbolCount = parseInt(document.getElementById('symbolCount').value);

    var passwords = generatePasswords(alphabetCount, numberCount, symbolCount, 5); // Generate 5 passwords
    displayPasswords(passwords);
});

function generatePasswords(alphabetCount, numberCount, symbolCount, quantity) {
    var passwords = [];
    for (var i = 0; i < quantity; i++) {
        var password = generatePassword(alphabetCount, numberCount, symbolCount);
        passwords.push(password);
    }
    return passwords;
}

function generatePassword(alphabetCount, numberCount, symbolCount) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var symbols = '!@#$%^&*()-_=+[{]}|;:,<.>/';

    var password = '';
    for (var i = 0; i < alphabetCount; i++) {
        password += getRandomChar(alphabet);
    }
    for (var i = 0; i < numberCount; i++) {
        password += getRandomChar(numbers);
    }
    for (var i = 0; i < symbolCount; i++) {
        password += getRandomChar(symbols);
    }

    return shuffleString(password);
}

function getRandomChar(charSet) {
    return charSet.charAt(Math.floor(Math.random() * charSet.length));
}

function shuffleString(str) {
    var array = str.split('');
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join('');
}

function displayPasswords(passwords) {
    var passwordsDiv = document.getElementById('passwords');
    passwordsDiv.innerHTML = '';
    passwords.forEach(function(password) {
        var p = document.createElement('p');
        p.textContent = password;
        passwordsDiv.appendChild(p);
    });
}
