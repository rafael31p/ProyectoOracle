const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

const encrypt = text => text.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');

const decrypt = text => text.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    outputText.value = encrypt(text);
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    outputText.value = decrypt(text);
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
});
