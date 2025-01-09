document.addEventListener('DOMContentLoaded', function (){
    const primaryNav = document.querySelector('.primary-navigation');
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const links = document.querySelectorAll('#nav-item');
    const res = document.querySelector('.resume_icon');
    const pro = document.querySelector('.project_icon');
    const co = document.querySelector('.contact_icon');
    
    navToggle.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');
        
        if (visibility === "false"){
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
            res.classList.add('.resume_icon');
            pro.classList.add('.project_icon');
            co.classList.add('.contact_icon');
            
        }else{
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
            location.reload();
        }
    })
    links.forEach(item => {
        item.addEventListener('click', (event) => {
            primaryNav.setAttribute('data-visible', false);
        })
    })

    document.addEventListener("scroll", (e) => {
        window.scrollX === 0 ? primaryNav.setAttribute('data-visible', false):primaryNav.setAttribute('data-visible', true); 
    })

});


