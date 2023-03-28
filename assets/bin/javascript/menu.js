document.addEventListener("DOMContentLoaded", function() {
    let open = false;

    document.getElementById('hamburger').addEventListener('click', function (){
        if (open){
            open = false;
            document.getElementById('menu-bar-mobile').classList.add('hide');
        }
        else{
            open = true;
            document.getElementById('menu-bar-mobile').classList.remove('hide');
        }

    });


});


/* My mentor showed me how I would achieve the dropdown menu with JS */