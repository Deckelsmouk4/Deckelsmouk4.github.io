function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Show the modal
    modalImage.src = img.src; // Get the source of the clicked image
    captionText.innerHTML = img.alt; // Set the caption to the alt text
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal on pressing the Esc key
window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
