chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
if (changeInfo.status == 'complete')
        chrome.tabs.executeScript(tabId, {file:"run.js"});
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
	    code: 'document.body.style.padding="0px 20px"'
	});
});