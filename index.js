//Código para la encuesta de opinion
document.getElementById("opinion-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var name = document.getElementById("name").value;
    var opinion = document.getElementById("opinion").value;
    var socialMedia = document.getElementById("social-media").value;

    // Send data to server (replace this with your own code to process the data)
    // Here, we are simply displaying a success message
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    successMessage.textContent = "¡Gracias por llenar la encuesta, " + name + "!";

    // Reset form
    document.getElementById("opinion-form").reset();
});
/*Codigo para la galeria de videos*/
// Obtener elementos
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

// Agregar evento de clic al reproductor de video
videoPlayer.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
});

// Cambiar el video y detener la reproducción del video actual
const videoThumbnails = document.querySelectorAll('.video-thumbnail');
videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoPath = thumbnail.getAttribute('data-video');
        videoSource.setAttribute('src', videoPath);
        videoPlayer.pause();
        videoPlayer.load();
    });
});

/*
Cambiar color de tema de la pagina */
// function toggleTheme() {
//     var body = document.body;
//     body.classList.toggle("dark-theme");
//   }


// Función para cambiar el tema
function toggleTheme() {
    // Obtener referencia al elemento <body>
    const body = document.querySelector("body");

    // Comprobar si el tema actual es claro o oscuro
    const isDarkTheme = body.classList.contains("dark-theme");

    // Cambiar el tema
    if (isDarkTheme) {
        body.classList.remove("dark-theme");
        setCookie("theme", "light", 365); // Establecer la cookie con una duración de 365 días
    } else {
        body.classList.add("dark-theme");
        setCookie("theme", "dark", 365); // Establecer la cookie con una duración de 365 días
    }
}

// Función para establecer una cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Función para cargar el tema almacenado en la cookie
function loadTheme() {
    // Obtener tema almacenado en la cookie
    const savedTheme = getCookie("theme");

    // Comprobar el tema almacenado y aplicar el tema correspondiente
    if (savedTheme === "dark") {
        document.querySelector("body").classList.add("dark-theme");
    }
}

// Evento click en el botón para cambiar el tema
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleTheme);

// Cargar el tema al cargar la página
document.addEventListener("DOMContentLoaded", loadTheme);
