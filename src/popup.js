chrome.tabs.query({}, function (tabs) {
  const tabList = document.getElementById('tabList');
  tabs.forEach(function (tab) {
    const listItem = document.createElement('li');
    listItem.textContent = `${tab.title}: ${tab.url}`;
    tabList.appendChild(listItem);
  });
});
