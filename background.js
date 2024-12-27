
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

// send checkInputFields message on tab activation
chrome.tabs.onActivated.addListener((activeInfo) => {
    executeCheckInputFields(activeInfo.tabId);
});
// send checkInputFields message on tab update
chrome.tabs.onUpdated.addListener(async (tabId) => {
    executeCheckInputFields(tabId);
});

async function executeCheckInputFields(tabId) {
    const tab = await chrome.tabs.get(tabId);
    if (!tab.url.startsWith('http')) {
        return;
    }
    await chrome.scripting.executeScript({
        target: { tabId },
        files: ['content.js'],
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'checkInputFields') {
  // unimplemented code for opening a sidebar
        if (message.inputFieldCount > 0) {
            chrome.sidePanel.open({ tabId: sender.tab.id })
        }
    }
});
