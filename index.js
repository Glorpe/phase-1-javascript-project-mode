
function createCard(card){

      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

      const imageElement = document.createElement('img');
      imageElement.src = card.imageUrl;

      const nameElement = document.createElement('h2');
      nameElement.textContent = card.name;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = card.description;
      
      const upvoteButton = document.createElement('button');
      upvoteButton.textContent = 'Upvote';
      const upvoteCount = document.createElement('span');
      upvoteCount.textContent = card.upvotes;
      upvoteButton.addEventListener('click', () => {
        card.upvotes++;
        upvoteCount.textContent = card.upvotes;
        
      
      });

      const downvoteButton = document.createElement('button');
      downvoteButton.textContent = 'Downvote';
      const downvoteCount = document.createElement('span');
      downvoteCount.textContent = card.downvotes;
      downvoteButton.addEventListener('click',() => {
        card.downvotes++;
        downvoteCount.textContent = card.downvotes;
        
      });

      cardElement.append(imageElement,nameElement, descriptionElement, upvoteButton, upvoteCount, downvoteButton, downvoteCount);

      document.body.appendChild(cardElement);

    return cardElement;
}
   
fetch('http://localhost:3000/images')
.then(response => response.json())
.then(data => {
  data.forEach(card => {
    const cardElement = createCard(card);
    document.body.appendChild(cardElement);

  });
})

const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');

commentInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const comment = commentInput.value.trim();
    if (comment !== '') {
      addComment(comment);
      commentInput.value = '';
    }
  }
});

function addComment(comment) {
  const li = document.createElement('li');
  li.textContent = comment;
  commentList.appendChild(li);
}


document.addEventListener('DOMContentLoaded', function() {
  let button = document.getElementById('toggleButton');
  let body = document.body;

  button.addEventListener('click', function() {
    if (body.style.backgroundColor === 'rgb(255, 255, 255)') {
      body.style.backgroundColor = '#000'; 
    } else {
      body.style.backgroundColor = '#fff'; 
    }
  });
});