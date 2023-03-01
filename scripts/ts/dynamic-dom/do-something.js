export function doSomething() {
  console.log("Put some code in here!");
}

export function displayPDF() {
  var x = document.getElementById("cur_btn");
  //var link = document.getElementById("copdf").href;
  if (x != null) {
    //x.onclick = function() {window.open(link, "_self")};
    x.onclick = function() {toggle('cur_over_pdf')};
  }
}

function toggle(id) {
  var pdfs = document.getElementById(id);
  pdfs.style.display = (pdfs.style.display === 'none') ? 'block':'none';
  // if (pdfs.style.display === "none") {
  //   pdfs.style.display = "block";
  // } else {
  //   pdfs.style.display = "none";
  // }
}