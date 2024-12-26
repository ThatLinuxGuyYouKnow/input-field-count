// Function to find input fields
function checkInputFields() {
    const inputFields = document.querySelectorAll('input, textarea, select');
    // return the number of input fields on a webpage
    return inputFields.length;
}

// Send a message to the background script to check for input fields
chrome.runtime.sendMessage({ action: 'checkInputFields', inputFieldCount: checkInputFields() });
