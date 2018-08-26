var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
console.log(windowHeight + " "+ windowWidth);

function clickFunc() {
  postPane.style.height = '33rem';
}

function closePane(){
  postPane.style.height = 0;

}

function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("message").value = "";
  document.getElementById("locTag").value = "";
  document.getElementById("tagTag").value = "";
}

function createCard(object) {
  var cards = document.getElementById("cards");

  cardContent = object.val();

  var id = object.key;
  var title = cardContent["title"];
  var message = cardContent["message"];
  var time = new Date(cardContent["createdDateTime"] *1000).toLocaleString("en-US");

  var card = document.createElement('div');
  card.setAttribute("class", "card");
  card.setAttribute("id", object.key);
  card.setAttribute("data-thread", id);

  card.innerHTML = `
  <span style="font-size:30px;cursor:pointer" onclick="populateComments(this.parentElement.id)">
      <h1 class="title">`+title+`</h1>
          <p class="comment">`+message+`</p>
          <p class="time">Created: `+time+`</p>
      </span>
  `
  cards.appendChild(card);
}

function populateCards(tag){
  var cardListHeading = panelTwo.dataset.tag;
  if (cardListHeading !== tag) {
    document.querySelector("#cardListHeading").textContent = tag;
    closePanelTwo();
    deleteCards();
    firebase.database().ref("tags").child(tag).once("value", function(snapshot){
     for (var key in snapshot.val()) {
       var value = snapshot.val()[key];
       if (value === "completed"){
         completed.child(key).once("value", createCard);
       }
      }
    });
    openPanelTwo();
  };
  if (cardListHeading === tag && panelTwo.dataset.state === "closed") {
    openPanelTwo();
  }
 panelTwo.dataset.tag = tag;
}

function deleteCards() {
  var cards = document.getElementById("cards");
  var cardList = document.querySelector("#cards").querySelectorAll(".card");
  // console.log("deleteCards()");
  for (i = 0; i < cardList.length; i++) {
    cards.removeChild(cardList[i]);
    }
  }

function populateTags(snapshot) {
  var tagList = document.querySelector("#panelOne");
  var id = snapshot.key;
  var tag = document.createElement('div');
    tag.setAttribute("class", "card");
    tag.setAttribute("id", id);
    tag.innerHTML = `<span style="cursor:pointer; height:5rem;text-align:center" onclick="populateCards(this.parentElement.id)">`+id+'</span>'
    tagList.appendChild(tag);
}

function createComment(commentData)  {

  var comment = commentData["comment"];
  var timeStamp = new Date(commentData["dateTime"] * 1000).toLocaleString("en-US");

  var commentList = document.querySelector("#commentList");

  var commentCard = document.createElement('div');
  commentCard.setAttribute("class", "card comCard");
  // commentCard.setAttribute("class", "comCard")

    var commentText = document.createElement('h2');
    commentText.setAttribute("class", "comment");
    commentText.textContent = comment;
    commentCard.appendChild(commentText);

    var commentTime = document.createElement('p');
    commentTime.setAttribute("class", "time");
    commentTime.textContent = "Time: " + timeStamp;
    commentCard.appendChild(commentTime);

  commentList.appendChild(commentCard);
}

function populateComments(key) {
  var test = panelThree.dataset.thread;
  if (test !== key) {
    deleteComments();
    openPanelThree();
    completed.child(key).child("comments").once("value", function(snapshot){
      for (var each in snapshot.val()){
        createComment(snapshot.val()[each]);
      }
  });
  // Set data regarding what comments are being shown.
  panelThree.dataset.thread = key;

  }
  if (test === key %% panelThree.dataset.state === "closed") {
    openPanelThree();
  }
}

function deleteComments() {
  var commentList = document.querySelectorAll(".comCard");

  commentList.forEach(function(element){
    element.parentNode.removeChild(element);
  });
}
