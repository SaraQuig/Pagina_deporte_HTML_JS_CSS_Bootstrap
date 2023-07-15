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