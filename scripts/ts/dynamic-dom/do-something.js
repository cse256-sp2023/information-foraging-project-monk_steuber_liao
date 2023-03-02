export function doSomething() {
  console.log("Put some code in here!");
}

export function displayPDF() {
  var x = document.getElementById('cur_btn');
  if (x != null) {
    x.onclick = function() {toggle('cur_over_pdf')};
  }
}

export function displayContent() {
  var x = document.getElementById('class-goal-btn');
  var y = document.getElementById('class-schedule-btn');
  if (x != null) {
    x.onclick = function() {toggle('classroom-goals')};
  }
  if (y != null) {
    y.onclick = function() {toggle('class-schedule')};
  }
}

function toggle(id) {
  var item = document.getElementById(id);
  if (item != null) {
    console.log("click on "+ id)
    item.style.display = (item.style.display === 'none') ? 'block':'none';
  }
}