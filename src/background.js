chrome.action.onClicked.addListener(function () {
  chrome.tabs.query({}, function (tabs) {
    tabs.forEach(function (tab) {
      logTab(tab);
    });
  });
});

function logTab(tab) {
  console.log("Tab URL:", tab.url);
  console.log("Tab Title:", tab.title);
}
