// Toggle class 'Open" when user clicks the hamburger icon in the Navbar.

$('.menu-toggle').click(function() {
  
    $('.topnav').toggleClass('topnav--open', 500);
    $(this).toggleClass('open');
});

// Smooth scrolling effect when user clicks the down arrows

function scrollPageTo (to, duration=500) {
  const easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };
 
  return new Promise((resolve, reject) => {
    const element = document.scrollingElement;
 
    if (typeof to === 'string') {
      to = document.querySelector(to) || reject();
    }
    if (typeof to !== 'number') {
      to = to.getBoundingClientRect().top + element.scrollTop;
    }
 
    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
 
    const animateScroll = function() {
        currentTime += increment;
        let val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        } else {
          resolve();
        }
    };
    animateScroll();
  });
 }
 
const home = document.getElementsByClassName('nav__btn')[0];
const portfolio = document.getElementsByClassName('nav__btn')[1];
const contact = document.getElementsByClassName('nav__btn')[2];
 

home.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollPageTo(document.querySelector('.showcase'), 1000);
});

portfolio.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollPageTo(document.querySelector('.portfolio'), 1000);
});

contact.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollPageTo(document.querySelector('.contact'), 1000);
});
