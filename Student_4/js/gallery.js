// Initially hide the details container
document.getElementById('detailsContainer').style.display = 'none';

// Function to show details for a clicked image
function showDetails(imageNumber) {
  var detailsContainer = document.getElementById('detailsContainer');
  detailsContainer.style.display = 'block';

  // Update the image and description on the right side
  var imageElement = document.querySelector('.image-container img:nth-child(' + imageNumber + ')');
  var descriptionElement = document.querySelector('.description');

  var imageSrc = "";
  var imageDescription = "";

  if (imageNumber === 1) {
    imageSrc = `../Images/Awards/tony.jpg`;
    imageDescription = "Description of image 1.";
  } else if (imageNumber === 2) {
    imageSrc = `../Images/Awards/oliver.jpg`;
    imageDescription = "Description of image 2.";
  } else if (imageNumber === 3) {
    imageSrc = `../Images/Awards/emmy.jpg`;
    imageDescription = "Description of image 3.";
  } else if (imageNumber === 4) {
    imageSrc = `../Images/Awards/MTV.jpg`;
    imageDescription = "Description of image 4.";
  } else if (imageNumber === 5) {
    imageSrc = `../Images/Awards/grammy.jpg`;
    imageDescription = "Description of image 5.";
  } else if (imageNumber === 6) {
    imageSrc = `../Images/Awards/CMA.jpg`;
    imageDescription = "Description of image 6.";
  } else if (imageNumber === 7) {
    imageSrc = `../Images/Awards/Prixde-lausanne.jpeg`;
    imageDescription = "Description of image 7.";
  } else if (imageNumber === 8) {
    imageSrc = `../Images/Awards/benois.jpeg`;
    imageDescription = "Description of image 8.";
  }

  imageElement.src = imageSrc;
  imageElement.alt = `Image ${imageNumber} Description`;



  // Hide details and description for other images
  var allImageDetails = document.querySelectorAll('.details');
  allImageDetails.forEach(function (element) {
    if (element.id === `details${imageNumber}`) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });

  // Position the details container to the right of the clicked image
  var imageContainer = document.getElementById('imageContainer');
  var imageContainerRect = imageContainer.getBoundingClientRect();
  detailsContainer.style.top = (imageContainerRect.top + imageElement.offsetTop) + 'px';
  detailsContainer.style.left = (imageContainerRect.left + imageElement.offsetLeft + imageElement.offsetWidth) + 'px';
}

// Function to hide image details when clicking outside the container
document.addEventListener('click', function (event) {
  var detailsContainer = document.getElementById('detailsContainer');
  var imageContainer = document.getElementById('imageContainer');

  // Check if the click was outside the details container and image container
  if (!detailsContainer.contains(event.target) && !imageContainer.contains(event.target)) {
    detailsContainer.style.display = 'none';
  }
});


function changeFontSize(size) {
  // Get the root element (html) to change the font size for the entire page
  var rootElement = document.documentElement;

  // Set the appropriate font size based on the button clicked
  switch (size) {
    case 'large':
      rootElement.style.fontSize = '24px';
      break;
    case 'medium':
      rootElement.style.fontSize = '16px';
      break;
    case 'small':
      rootElement.style.fontSize = '12px';
      break;
    default:
      // If an unknown size is passed, reset to the default font size (16px)
      rootElement.style.fontSize = '16px';
      break;
  }
}


function changeBackgroundColor(colorId) {
  var body = document.body;
  var detailsContainer = document.getElementById('detailsContainer');
  var descriptionElements = document.querySelectorAll('.description, .description h2, .description p');

  switch (colorId) {
    case 'color-1':
      body.style.backgroundColor = '#FFFFFF'; // Change this to the desired color for color-1
      detailsContainer.style.backgroundColor = ' #C0C0C0'; // Change this to the desired color for detailsContainer
      descriptionElements.forEach(function (element) {
        element.style.color = '#000000'; // Change this to the desired text color for description, description h2, and description p
      });
      break;
    case 'color-2':
      body.style.backgroundColor = '#404040'; // Change this to the desired color for color-2
      detailsContainer.style.backgroundColor = '#515A5A'; // Change this to the desired color for detailsContainer
      descriptionElements.forEach(function (element) {
        element.style.color = '#FFFFFF'; // Change this to the desired text color for description, description h2, and description p
      });
      break;
    case 'color-3':
      body.style.backgroundColor = '#6527BE'; // Change this to the desired color for color-3
      detailsContainer.style.backgroundColor = '#40128B'; // Change this to the desired color for detailsContainer
      descriptionElements.forEach(function (element) {
        element.style.color = '#FFFFFF'; // Change this to the desired text color for description, description h2, and description p
      });
      break;
    default:
      // If an unknown colorId is passed, reset to the default background color (white)
      body.style.backgroundColor = '#FFFFFF';
      detailsContainer.style.backgroundColor = '#FFFFFF'; // Change this to the desired default color for detailsContainer
      descriptionElements.forEach(function (element) {
        element.style.color = '#000000'; // Change this to the desired default text color for description, description h2, and description p
      });
      break;
  }
}
