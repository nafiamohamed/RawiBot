// Diaporama automatique
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3500);
}
showSlides();

// Menu burger toggle
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// Navigation simple par ancre (affichage / masquage sections)
function showSection(id) {
    const sections = ['accueil', 'chatbot', 'audio', 'qr'];
    sections.forEach(sectionId => {
        const sec = document.getElementById(sectionId);
        if (sec) {
            if (sectionId === id) {
                sec.style.display = 'block';
            } else {
                sec.style.display = 'none';
            }
        }
    });
    function toggleChatbot() {
        const chatbotBox = document.getElementById('chatbot-container');
        chatbotBox.style.display = (chatbotBox.style.display === 'none') ? 'block' : 'none';
      }
      
    // Fermer menu burger après clic
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("show");
}
function showAudio() {
    const audioSection = document.getElementById('audio');
    if (audioSection.style.display === 'block') {
      audioSection.style.display = 'none';
    } else {
      audioSection.style.display = 'block';
      audioSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  