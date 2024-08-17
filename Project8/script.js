const generateButton = document.querySelector("#generate-btn");
const qrText = document.querySelector("#qrText");
const qrImage = document.querySelector("#qr-image");
const qrArea = document.querySelector(".bottom-area");

const generateQR = () => {
  const qrValue = qrText.value.trim();
  

    if (qrValue === "") {
        qrArea.classList.add("hidden");
        qrImage.src = ""; // Clear the image source if input is empty
      } else {
        qrArea.classList.remove("hidden");
    
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrValue)}`;
    
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to generate QR code: ' + response.statusText);
            }
            return response.blob(); // Get the response as a Blob
          })
          .then(blob => {
            const imageUrl = URL.createObjectURL(blob); // Create a URL for the Blob
            qrImage.src = imageUrl; // Set the image source
          })
          .catch(error => {
            console.error("Error:", error);
            qrImage.classList.add("hidden");
            qrImage.src = ""; // Clear the image source in case of error
            alert("There was an error generating the QR code.");
          });
      }
    
  
};

generateButton.addEventListener('click', generateQR);

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    generateQR();
  }
});

