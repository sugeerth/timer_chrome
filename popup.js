document.getElementById('start-timer').addEventListener('click', () => {
  chrome.windows.create({
    url: chrome.runtime.getURL("timer.html"),
    type: "popup",
    state: "fullscreen"
  });
});
