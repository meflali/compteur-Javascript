// les variables
const value = document.querySelector(".value");
const boutons = document.querySelectorAll("button");
const count = 0;


boutons.forEach(function (btn){
    btn.addEventListener("click", function (e){
        let style = e.currentTarget;
        console.log(style.id);
    })
})



