// content.js

const dltypeElement = document.querySelector(".dltype");
//console.log(dltypeElement);

  if (dltypeElement) {
    // Create a "Hoard It!" button
    const hoardButton = document.createElement("button");
    hoardButton.textContent = "Hoard It!";
    hoardButton.onclick = function() {

      console.log("CLICKED");
      // Find all the rows containing game information
      const gameRows = document.querySelectorAll(".js-download-rows > div");


      // Loop through the rows and extract information
      gameRows.forEach(function(row) {
        const gameName = row.querySelector('.title a');
        console.log(gameName);
        const downloadLink = row.querySelector(".js-start-download > a");

        if (gameName && downloadLink) {
          // Extract the URL and initiate download
          const downloadURL = downloadLink.getAttribute("href");

          //Add each download URL to an array and then download the files one at a time.  When one completes, launch the next one.

          downloadFile(downloadURL, gameName);
        }
      });
    };

    // Append the button to the dltype element
    dltypeElement.appendChild(hoardButton);
  }


// Function to download a file
function downloadFile(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.download = filename + ".exe"; // You can adjust the filename as needed
  link.click();
}






