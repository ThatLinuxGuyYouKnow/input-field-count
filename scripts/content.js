// content.js

// Function to find input fields and extract their class names
function getInputFieldsInfo() {
    const inputFields = document.querySelectorAll('input, textarea, select');
    const inputData = [];

    inputFields.forEach(field => {
        inputData.push({
            tagName: field.tagName,
            className: field.className, // Get the class name
            id: field.id
        });
    });
    console.log(inputData)
    return inputData;
}

// Send a message to the background script
chrome.runtime.sendMessage({ action: 'inputInfo', inputData: getInputFieldsInfo() });