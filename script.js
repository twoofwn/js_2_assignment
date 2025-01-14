function updateImage(imgElement) {
    console.log("Image clicked:", imgElement.alt, imgElement.src);
    
   
    const imageDiv = document.getElementById("image");

    

    
    imageDiv.style.backgroundImage = "url('" + imgElement.src + "')";
}


const images = document.querySelectorAll(".previewImg");
images.forEach(image => {
    image.addEventListener("click", function() {
        updateImage(image);
    });
});


function undoUpdate() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    console.log("Undo update performed.");
}