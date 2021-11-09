// les variables
const value = document.querySelector(".value");
// récuperation de tous les boutons
const boutons = document.querySelectorAll("button");
// demarrage du compteur
let count = 0;

// récuperation d'un bouton parmi la liste des boutons
boutons.forEach(function (btn){
    // capture de l'evenement au clic
    btn.addEventListener("click", function (e){
        
        let style = e.currentTarget;

        if (style.id === "add"){
            count++;
        }else if(style.id === "remove"){
            count--;
        }else {
           count = 0;
        }
        
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else{
            value.style.color = "black";
        }
        value.innerHTML = count
    })
})



