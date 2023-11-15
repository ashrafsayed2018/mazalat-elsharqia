const images = document.querySelectorAll('img');

// Create a new element (replace 'div' with the desired element type)
const newElement = document.createElement('div');
newElement.textContent = 'هناجر ومظلات الشرقية'; // Set the content of the new element

// Apply styles to the new element
newElement.style.color = 'white';
newElement.style.width = '100%';
newElement.style.height = '20%';
newElement.style.fontSize = '10px';
newElement.style.display = 'flex';
newElement.style.alignItems = 'center';
newElement.style.justifyContent="center";
newElement.style.backgroundColor = 'orange';
newElement.style.position ="absolute";
newElement.style.bottom = "5%";
// Add more styles as needed

// Loop through each image and append the new element after it
images.forEach(image => {
  image.style.position= "relative";
  image.style.width ="100%";
  image.style.height ="300px";
  image.style.fitObject = "cover";
  image.style.overflow = "hidden";
    // Create a clone of the new element to avoid sharing the same element among images
    const clonedElement = newElement.cloneNode(true);
    
    // Append the cloned element after the current image
    image.parentNode.insertBefore(clonedElement, image.nextSibling);
});

// Select the navbar-brand element
const navbarBrand = document.querySelector('.navbar-brand');

// Check if the screen width is less than a certain value (adjust as needed)
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (screenWidth < 768) {
    // Hide the image on mobile devices
    const image = navbarBrand.querySelector('img');
    if (image) {
        image.style.display = 'none';
    }
}
