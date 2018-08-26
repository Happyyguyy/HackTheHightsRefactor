panelOne = document.querySelector("#panelOne");
panelTwo = document.querySelector("#panelTwo");
panelThree = document.querySelector("#panelThree");

panelOne.dataset.state = "extended";
panelTwo.dataset.state = "closed";
panelThree.dataset.state = "closed";
// states are "open","extended","closed"

var open = 25;
var extended = 35;
var closed = 0;

function alignPanels () {

  // var rightEdge = 25;
  // var extendPanel = 10;
  // var retractPanel = -10;
  // var openPanel = 25;
  // var openExtendedPanel = 35;
  // var closePanel = -25;
  // var closeExtendedPanel = -35;

  var panelOneState = panelOne.dataset.state;
  var panelTwoState = panelTwo.dataset.state;
  var panelThreeState = panelThree.dataset.state;
  // states are "open","extended","closed"

  if (panelOneState === "extended" && panelTwoState === "closed" && panelThreeState === "closed") {
    panelTwo.style.marginLeft = extended + "%";
    panelThree.style.marginLeft = extended + "%";
  }
  else if (panelOneState === "open" && panelTwoState === "extended" && panelThreeState === "closed") {
    panelTwo.style.marginLeft = open + "%";
    panelThree.style.marginLeft = open + extended + "%";
  }
  else if (panelOneState === "open" && panelTwoState === "open" && panelThreeState === "extended") {
    panelTwo.style.marginLeft = open + "%";
    panelThree.style.marginLeft = open + open + "%";
  }
  // if (panelOneExtended === "true") {
  //   panelOne.style.width = "35%";
  //   panelTwo.style.marginLeft = "35%";
  //   panelThree.style.marginLeft = "35%";
  // }
  // else if (panelOneExtended === "false"){
  //   panelOne.style.width = "25%";
  //   panelTwo.style.marginLeft = "25%";
  //   panelThree.style.marginLeft = "25%";
  // };
  // if (panelTwoExtended === "true" && panelTwoOpen === "true") {
  //   panelTwo.style.width = "35%";
  //   panelThree.style.marginLeft = "60%";
  // }
  // else if (panelTwoExtended === "false" && panelTwoOpen === "true") {
  //   panelTwo.style.width = "25%";
  //   panelThree.style.marginLeft = "50%";
  // };
  // else if (panelTwoOpen === "false") {
  //   panelTwo.style.width = "0%";
  //   panelThree.style.marginLeft = ""
  // }
  // }
}

function closePanelThree() {
  panelThree.style.width = 0 + "%";
  panelTwo.style.width = extended + "%";

  panelThree.dataset.state = "closed";
  panelTwo.dataset.state = "extended";

  alignPanels();

}

function closePanelTwo() {
  panelThree.style.width = 0 + "%";
  panelTwo.style.width = 0 + "%";
  panelOne.style.width = extended + "%";

  panelOne.dataset.state = "extended";
  panelTwo.dataset.state = "closed";
  panelThree.dataset.state = "closed";

  alignPanels();
}

function openPanelTwo(tag) {
  closePanelThree();
  panelOne.style.width = open + "%";
  panelTwo.style.width = extended + "%";

  panelOne.dataset.state = "open";
  panelTwo.dataset.state = "extended";

  panelTwo.dataset.tag = tag;


  alignPanels()

}

function openPanelThree(thread) {
  panelTwo.style.width = open + "%";
  panelThree.style.width = extended + "%";

  panelTwo.dataset.state = "open";
  panelThree.dataset.state = "extended";

  panelThree.dataset.thread = thread;
  alignPanels();
}
