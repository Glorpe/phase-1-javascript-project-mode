// Assuming you have an HTML element with id "image-container" to display the images
const imageContainer = document.getElementById('image-container');

// Fetch the data from db.json
fetch('http://localhost:3000/images')
  .then(response => response.json())
  .then(data => {
    // Get the first 5 image URLs from the data array
    const imageUrls = data.slice(0, 5).map(object => object.imageUrl);

    // Display the images on the webpage
    imageUrls.forEach(imageUrl => {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imageContainer.appendChild(imageElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });



  
const upvoteBtn = document.getElementById("upvote-btn");
const upvoteCount = document.getElementById("upvote-count");
let count = 0;
//user click event for upvoting
upvoteBtn.addEventListener("click", () => {
  count++;
  upvoteCount.innerText = count;
});


const downvoteBtn = document.getElementById("downvote-btn");
const downvoteCount = document.getElementById("downvote-count");
let down = 0;
//user click event to show downvoting
downvoteBtn.addEventListener("click", () => {
  down++;
  downvoteCount.innerText = down;
});


function addComment() {
  // USER INPUT 
  const commentInput = document.getElementById("commentInput");
  const comment = commentInput.value;
// incase user tries to submit comment with blank statement
  if (comment.trim() === '') {
    alert("Please add comment before submitting !");
    return;
  }
  // create new comment element
  const commentList = document.getElementById("commentList");
  const commentItem = document.createElement("li");
  const commentText = document.createTextNode(comment);
  commentItem.appendChild(commentText);
  commentList.appendChild(commentItem);

  // clear user input
  commentInput.value = "";
}


