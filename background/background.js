// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'download') {
      const machineName = message.machineName;
      const downloadLink = message.downloadLink;
  
      // Retrieve the download folder from extension storage
      chrome.storage.sync.get(['downloadFolder'], result => {
        const downloadFolder = result.downloadFolder || 'defaultFolder'; // Default folder if not set
  
        // Create a new filename based on the machine name
        const filename = machineName + '.zip';
  
        // Use the chrome.downloads API to initiate the download
        chrome.downloads.download({
          url: downloadLink,
          filename: `${downloadFolder}/${filename}`
        });
      });
    }
  });