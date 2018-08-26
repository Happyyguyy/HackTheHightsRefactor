function newPost() {
  // push a new post to pending

  var newTags = []
  var title = $("#title").val();
  var message = $("#message").val();
  var location = $("#locTag").val();
  var tagsText = $("#tagTag").val();
  var tagsArr = tagsText.split(" ");
  var createdDateTime = firebase.database.ServerValue.TIMESTAMP;

// check for empty fields. if empty raise error
  if (![title,message,location,tagsText].every(function(snapshot){return snapshot!== '';})) {
    if (!title) {console.log("no Title")};
    if (!message) {console.log("no message")};
    if (!location) {console.log("no location")};
    if (!tagsText) {console.log("no tagsText")};
    return;
  };
  console.log("dkn")
  var data = {
    'title': title,
    'message': message,
    'locTag': location,
    'createdDateTime': createdDateTime,
    'tagTag': tagsArr,
  };
  // if ([title, message, location, tagsText].includes('')) {
  //   console.log("empty field")
  // }
  // else {
    console.log(title, message, location, tagsArr, new Date().toLocaleString('en-US'), new Date());

  var key = pending.push(data);
  // console.log(key.key);
  tagsArr.forEach(function(tag){
    firebase.database().ref("tags/"+tag).child(key.key).set("pending");
  })
    // newTags.forEach(function(element) {
    //     var div = document.createElement("div");
    //     div.innerHTML += '<div class="card" id="tags"><span style="margin-left: 15px; font-size:30px;cursor:pointer" onclick="openTwo(this.id)" id="'+ element + '">' +
    //         '<h2 id="TagCard">&#9776; ' +
    //         element +
    //         '</h2></span></div>';
    //     $("#panelOne").append(div);
    //
    // });
    };
