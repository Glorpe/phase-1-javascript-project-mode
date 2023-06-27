
// Fetch  data from db.json
fetch('http://localhost:3000/images')
  .then(response => response.json())
  .then(data => {
    // Get the first 5 image URLs from the data array
    data.forEach(card => {
// create elements 
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
//create image element 
      const imageElement = document.createElement('img');
      imageElement.src = card.imageUrl;
//create card name
      const nameElement = document.createElement('h2');
      nameElement.textContent = card.name;
//create meme description 
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = card.description;
      // create upvote button and the ability to keep count of upvotes
      const upvoteButton = document.createElement('button');
      upvoteButton.textContent = 'Upvote';
      const upvoteCount = document.createElement('span');
      upvoteCount.textContent = card.upvotes;
      upvoteButton.addEventListener('click', () => {
        card.upvotes++;
        upvoteCount.textContent = card.upvotes;
        
      
      });
// create downvote button and the ability to create count of down votes
      const downvoteButton = document.createElement('button');
      downvoteButton.textContent = 'Downvote';
      const downvoteCount = document.createElement('span');
      downvoteCount.textContent = card.downvotes;
      downvoteButton.addEventListener('click',() => {
        card.downvotes++;
        downvoteCount.textContent = card.downvotes;
        
      });

      cardElement.appendChild(imageElement);
      cardElement.appendChild(nameElement);
      cardElement.appendChild(descriptionElement);
      cardElement.appendChild(upvoteButton);
      cardElement.appendChild(upvoteCount);
      cardElement.appendChild(downvoteButton);
      cardElement.appendChild(downvoteCount);

      document.body.appendChild(cardElement);

    });
  })
  .catch(error => {
    console.error('Error:', error);
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


document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById('toggleButton');
  let body = document.body;

  button.addEventListener('click', function() {
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
      body.style.backgroundColor = '#000'; // Change to black
    } else {
      body.style.backgroundColor = '#fff'; // Change to white
    }
  });
});