var projectsSection = document.getElementById('projects');
var contactSection = document.getElementById('contact');

ScrollReveal().reveal(projectsSection, { delay: 400, duration: 800, origin: 'bottom' });
ScrollReveal().reveal(contactSection, { delay: 400, duration: 800, origin: 'bottom' });

var i = 0;
var txt = 'I\'m Nguyen Hai Nam, a quiet developer!';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("headline-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
