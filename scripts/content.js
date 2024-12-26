// Function to find input fields
function checkInputFields() {
    const inputFields = document.querySelectorAll('input, textarea, select');


    console.log('found ' + inputFields.length + 'fields')
    return inputFields.length;
}


chrome.runtime.sendMessage({ action: 'checkInputFields', inputFieldCount: checkInputFields() });
