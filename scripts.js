function mostrarAcademica() {
    var SeccionAcademica = document.querySelector("#SeccionAcademica");
    var SeccionLaboral = document.querySelector("#SeccionLaboral");

    SeccionAcademica.style.display = "block";
    SeccionLaboral.style.display = "none";
}

function mostrarLaboral() {
    var SeccionAcademica = document.querySelector("#SeccionAcademica");
    var SeccionLaboral = document.querySelector("#SeccionLaboral");

    SeccionLaboral.style.display = "block";
    SeccionAcademica.style.display = "none";
}
