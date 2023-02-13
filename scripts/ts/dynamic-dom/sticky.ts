export function setupStickey() {
    window.onscroll = function() {myFunction()};  
    function myFunction() {
        var header = document.getElementById("main-menu-container");
        if (header != null) {
            console.log("can find header item!!!!")
            var sticky = header.offsetTop;
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
}