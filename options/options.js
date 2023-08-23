// options.js
const saveButton = document.getElementById('saveButton');
const downloadFolderInput = document.getElementById('downloadFolder');

saveButton.addEventListener('click', function() {
  const downloadFolder = downloadFolderInput.value;

  // Save the download folder in extension storage
  chrome.storage.sync.set({ downloadFolder });
});