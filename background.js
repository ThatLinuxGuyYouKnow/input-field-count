// background.js

// ... (rest of your background script code like tab listeners and sidePanel setup)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'checkInputFields') {
        console.log('input count: ' + message.inputFieldCount)
        // Handle the message from the content script, like opening a sidepanel
        if (message.inputFieldCount > 0) {
            chrome.sidePanel.open({ tabId: sender.tab.id })
        }
    }
});