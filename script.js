// Smooth scrolling
document.querySelectorAll('.sidebar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
// Photo click animation
const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    photos.forEach(p => p.classList.remove('active')); // reset others
    photo.classList.add('active');
  });
});
const photoWrappers = document.querySelectorAll('.photo-wrapper');

photoWrappers.forEach(wrapper => {
  wrapper.addEventListener('mousemove', e => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    wrapper.style.transform = `
      rotateX(${(-y / 20)}deg)
      rotateY(${(x / 20)}deg)
    `;
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'rotateX(0) rotateY(0)';
  });
});
const aboutSection = document.querySelector('#about');
const aboutParagraphs = document.querySelectorAll('#about p');

function revealAbout() {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 150;

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add('show');

    aboutParagraphs.forEach((p, index) => {
      setTimeout(() => {
        p.classList.add('reveal');
      }, index * 200); // staggered reveal
    });

    window.removeEventListener('scroll', revealAbout);
  }
}

window.addEventListener('scroll', revealAbout);
const eduCards = document.querySelectorAll('#education .card');

eduCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
});

function revealEducation() {
  eduCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const trigger = window.innerHeight - 120;

    if (top < trigger) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealEducation);
const expCards = document.querySelectorAll('#experience .card');

expCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
});

function revealExperience() {
  expCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    const trigger = window.innerHeight - 120;

    if (top < trigger) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealExperience);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar ul li a');

function setActiveLink() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

const skillItems = document.querySelectorAll('#skills .skills span');

skillItems.forEach((skill, index) => {
  skill.style.opacity = '0';
  skill.style.transform = 'scale(0.8)';

  setTimeout(() => {
    skill.style.opacity = '1';
    skill.style.transform = 'scale(1)';
  }, index * 120);
});
const contactItems = document.querySelectorAll('#contact p');

contactItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(25px)';

  setTimeout(() => {
    item.style.opacity = '1';
    item.style.transform = 'translateY(0)';
  }, index * 200);
});
// Close nav after clicking (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('open');
  });
});
