var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
console.log(windowHeight + " "+ windowWidth);

var postPane = document.getElementById("postPane")
var panelOne = document.getElementById("panelOne")
var panelTwo = document.getElementById("panelTwo")
var panelThree = document.getElementById("panelThree")


function clickFunc() {
  var pane = document.getElementById("postPane");
  pane.style.height = '33rem';
}
function newPost() {

    var newTags = []
    var title = $("#title").val();
    var message = $("#message").val();
    var location = $("#LocTag").val();
    var tagsText = $("#tagTag").val();
    var tagsArr = tagsText.split(" ");

    if ([title, message, location, tagsText].includes('')) {
      console.log("empty field")
    }
    else {
      console.log(title, message, location, tagsText, tagsArr);
    }
    return null;
    tagsArr.forEach(function(element) {
        if (!masterTags.includes(element)) {
            masterTags.push(element);
            newTags.push(element);
            }
    });

    database.push({
        'title': title,
        'message': message,
        'locTag': location,
        'tagTag': tagsArr
    });

    newTags.forEach(function(element) {
        var div = document.createElement("div");
        div.innerHTML += '<div class="card" id="tags"><span style="margin-left: 15px; font-size:30px;cursor:pointer" onclick="openTwo(this.id)" id="'+ element + '">' +
            '<h2 id="TagCard">&#9776; ' +
            element +
            '</h2></span></div>';
        $("#panelOne").append(div);

    });

    $("#Post").click(function() {
        newPost();

    });
}


function closePane(){
  var pane = document.getElementById("postPane");
  pane.style.height = 0;

}
function clearFields() {
  document.getElementById("title").value = "";
  document.getElementById("message").value = "";
  document.getElementById("locTag").value = "";
  document.getElementById("tagTag").value = "";
}
function openPanelTwo() {
  // if (document.getElementById('panelTwo').style.width === "35%") {
  //   return null;
  // }
  // else {
  createCard()
  document.getElementById("panelTwo").style.width = "35%";
  document.getElementById("panelOne").style.width = "25%";
  document.getElementById("panelThree").style.marginLeft = "50%";
  // }
}
function openPanelThree() {
  document.getElementById("panelThree").style.width = "35%";
  document.getElementById("panelTwo").style.width = "25%";
}
function closePanelTwo() {
  var panelThree = document.getElementById("panelThree").style.width;
  if (panelThree === "0%") {
    document.getElementById("panelTwo").style.width = "0%";
    setTimeout(deleteCards, 300);
  }
  else {
    document.getElementById("panelTwo").style.width = "0%";
    document.getElementById("panelThree").style.marginLeft = "25%";
    document.getElementById("panelThree").style.width = "0%";
  }
}
function closePanelThree() {
  document.getElementById("panelThree").style.width = "0%";
}

function createCard() {
  var cards = document.getElementById("cards");

  var card = document.createElement('div');
  card.setAttribute("class", "card");
  card.setAttribute("id", "card");

  card.innerHTML = `
  <span style="font-size:30px;cursor:pointer" onclick="openPanelThree()">
      <h1 class="title" id="PostCardTitle">Title</h1>
          <p class="comment" id="PostCardMessage">Subtitle of a card</p>
          <p class="time">Time: Sometime EST</p>
      </span>
  `

  cards.appendChild(card);
}
function deleteCards() {
  var cards = document.getElementById("cards");
  var cardList = document.getElementById("cards").querySelectorAll("#card");
  console.log("deleteCards()");
  for (i = 0; i < cardList.length; i++) {
    cards.removeChild(cardList[i]);
    }
  }
