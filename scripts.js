function mostrarAcademica() {
    var SeccionAcademica = document.querySelector("#SeccionAcademica");
    var SeccionLaboral = document.querySelector("#SeccionLaboral");
    var SeccionCursos = document.querySelector("#SeccionCursos");

    SeccionAcademica.style.display = "block";
    SeccionLaboral.style.display = "none";
    SeccionCursos.style.display = "none";
}

function mostrarLaboral() {
    var SeccionAcademica = document.querySelector("#SeccionAcademica");
    var SeccionLaboral = document.querySelector("#SeccionLaboral");
    var SeccionCursos = document.querySelector("#SeccionCursos");

    SeccionLaboral.style.display = "block";
    SeccionAcademica.style.display = "none";
    SeccionCursos.style.display = "none";
}

function mostrarCursos() {
    var SeccionAcademica = document.querySelector("#SeccionAcademica");
    var SeccionLaboral = document.querySelector("#SeccionLaboral");
    var SeccionCursos = document.querySelector("#SeccionCursos");

    SeccionLaboral.style.display = "none";
    SeccionAcademica.style.display = "none";
    SeccionCursos.style.display = "block";
}
