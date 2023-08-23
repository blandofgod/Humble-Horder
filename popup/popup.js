// const sendMessageId = document.getElementById("sendmessageid");

// function guidGenerator() {
//   const S4 = function () {
//     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//   };
//   return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
// }

// if (sendMessageId) {
//   sendMessageId.onclick = function() {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         {
//           url: chrome.runtime.getURL("images/stars.jpeg"),
//           imageDivId: guidGenerator(), // Use the function here
//           tabId: tabs[0].id
//         },
//         function(response) {
//           console.log("message with url sent");
//           window.close();
//         }
//       );
//     });
//   };
// }