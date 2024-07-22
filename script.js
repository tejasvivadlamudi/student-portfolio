document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.querySelector('.typewriter');
    typewriter(typewriterElement, "Vadlamudi Tejasvi", 150);
    
    window.onscroll = function() {scrollFunction()};

    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});

function typewriter(element, text, speed) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

function scrollFunction() {
    const topButton = document.querySelector('.top-button');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.toggle('dark-mode');
    });
}

function openModal(projectId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const projectDescriptions = {
        project1: 'Detailed description of ATM Project...',
        project2: 'Detailed description of Hotel Management Project...',
        project3: 'Detailed description of Travel Agency Feedback Project...'
    };
    modalBody.innerHTML = projectDescriptions[projectId];
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}
