export function setupStickey() {
    // TODO: Copy and paste your sticky code in here!!

        var header = document.getElementById("main-menu-container");
        if (header != null) {
            //console.log("can find header item!!!!")
            var sticky = header.offsetTop;
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }

 }

 window.onscroll = function(){setupStickey()};