
export function classInformation(){
    var x = document.getElementById('class_information_dropdown');
    var y = document.getElementById('class_information_content');
    //chekcing if the element is not null
    if(x!=null){
        //check if element was clicked
        x.onclick = function(){
            if(y.style.display == "none"){
                y.style.display = "block";
            }else{
                y.style.display = "none";
            }
        }
    }
}

export function classroommGoals(){
    var x = document.getElementById('classroom_goals_dropdown');
    var y = document.getElementById('classroom_goals_content');
    //chekcing if the element is not null
    if(x!=null){
        //check if element was clicked
        x.onclick = function(){
            if(y.style.display == "none"){
                y.style.display = "block";
            }else{
                y.style.display = "none";
            }
        }
    }
}

export function classSchedule(){
    var x = document.getElementById('class_schedule_dropdown');
    var y = document.getElementById('class_schedule_content');
    //chekcing if the element is not null
    if(x!=null){
        //check if element was clicked
        x.onclick = function(){
            if(y.style.display == "none"){
                y.style.display = "block";
            }else{
                y.style.display = "none";
            }
        }
    }
}