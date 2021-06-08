const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li')

  nav.classList.add("nav-inactive");

  burger.addEventListener('click', () => {
    nav.classList.remove('nav-inactive');
    nav.classList.toggle('nav-active');
    navLinks.forEach((link,index)=>{
      if(link.style.animation){
        link.style.animation = '';
        }
      else{
        link.style.animation = `NavLinkFade 0.5s ease forwards ${index /7+ 0.5}s`
        }
      });

  });

}

navSlide();
