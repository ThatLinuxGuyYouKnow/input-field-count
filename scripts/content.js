// Function to find input fields
function checkInputFields() {
    const inputFields = document.querySelectorAll('input, textarea, select');
    // return the number of input fields on a webpage
    console.log('found ' + inputFields.length + 'fields')
    return inputFields.length;
}


chrome.runtime.sendMessage({ action: 'checkInputFields', inputFieldCount: checkInputFields() });
