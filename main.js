//functionality for adding transcript
    
var transcriptBtn = document.querySelector('.transcript-control button');
var transcriptText = document.querySelector('.transcript');

transcriptBtn.onclick = function() {
  var showHideText = transcriptBtn.textContent;
    if(showHideText === 'Show transcript') {
      transcriptText.style.height = '150px';
         transcriptText.style.display = 'none';
      transcriptBtn.textContent = 'Hide transcript';
    } else {
      transcriptBtn.textContent = 'Show transcript'; 
      transcriptText.style.height = '0';
      transcriptText.style.display = 'none';
  }
};


// functionality for showing/hiding the comments section

var showHideBtn = document.querySelector('.show-hide');
var commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  var showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
 };

// The Enter/Return key
document.onkeydown = function(e) {
  if(e.keyCode === 13) {
    document.activeElement.onclick(e);
  }
};

// functionality for adding a new comment via the comments form

var form = document.querySelector('.comment-form');
var nameField = document.querySelector('#name');
var commentField = document.querySelector('#comment');
var list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  var listItem = document.createElement('li');
  var namePara = document.createElement('p');
  var commentPara = document.createElement('p');
  var nameValue = nameField.value;
  var commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
    
};



