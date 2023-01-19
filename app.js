const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');

//open nav menu

openBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  closeBtn.style.display = 'inline-block';
  openBtn.style.display = 'none';
});

//Close nav menu

const closeNav = () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline-block';
};

closeBtn.addEventListener('click', closeNav);

//close nav menu when clicked

if (window.innerWidth < 1024) {
  document.querySelectorAll('.nav__menu li a').forEach((navItem) => {
    navItem.addEventListener('click', closeNav);
  });
}

//Changin NavBar color

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

//Fetch testiminials
const fetchTestimonials = () => {
  let testimonialsContainer = document.querySelector('.testimonials__container');
  testimonialsContainer.innerHTML = '';

  // loop through array and print testimonials
  testimonials.forEach((testimonial) => {
    const newTestmonial = document.createElement('article');
    newTestmonial.className = 'testimonial';
    newTestmonial.innerHTML = `
          <p>
          "${testimonial.quote}"
          </p>
          <div class="testimonial__client">
              <span class="avatar">
                  <img src="./Images/${testimonial.avatar}.png">
              </span>
              <div class="testimonial__work">
                  <p><b>${testimonial.name}</b></p>
                  <small>${testimonial.title}</small>
              </div>
          </div>`;

    testimonialsContainer.append(newTestmonial);
  });
};

window.addEventListener('load', fetchTestimonials);
