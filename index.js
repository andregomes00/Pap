(function () {
    'using strict';


    let menuBiografia = document.getElementById('biografiaMenu');
    let menuArmas = document.getElementById('armasMenu');
    let menuResumo = document.getElementById('resumoMenu');


    menuBiografia.onclick = () => {
        let subMenu = document.getElementById("demoAcc");
        if (subMenu.className.indexOf("w3-show") == -1) {
            subMenu.className += " w3-show";
        } else {
            subMenu.className = subMenu.className.replace(" w3-show", "");
        }
    }

    menuArmas.onclick = () => {
        let subMenu = document.getElementById("demoAcc");
        if (subMenu.className.indexOf("w3-show") == -1) {
            subMenu.className += " w3-show";
        } else {
            subMenu.className = subMenu.className.replace(" w3-show", "");
        }
    }

    menuResumo.onclick = () => {
        let subMenu = document.getElementById("demoAcc");
        if (subMenu.className.indexOf("w3-show") == -1) {
            subMenu.className += " w3-show";
        } else {
            subMenu.className = subMenu.className.replace(" w3-show", "");
        }
    }

})();