// content.js
const downloadRows = document.querySelectorAll('.js-download-rows.download-rows .row');

downloadRows.forEach(row => {
  const machineName = row.dataset.machineName;
  const downloadLink = row.querySelector('.download-buttons .download a').href;

  // Send the data to the background script for download handling
  chrome.runtime.sendMessage({
    action: 'download',
    machineName,
    downloadLink
  });
});