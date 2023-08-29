/*NAVGATION*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)


    if(toggle && nav){
        toggle.addEventListener('click', ()=>{

            nav.classList.toggle('show-menu')
        })
    }
}
/*Direct screen*/
showMenu('nav-toggle' , 'nav-menu')

/*Remove MEnu mobile*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click' , linkAction)) 

/*Scrool section active link*/

const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const ScrollY = window.pageYoffset

    section.forEach((current)=>{
        const SectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(screenY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }    
        })
    }
    window.addEventListener('scroll', scrollActive)


    /*Show scroll top*/

    function scrollTop(){
        const scrollTop = document.getElementById('scroll-top');

        if(this.scrollY >= 200) scrollTop.classList.add('show-scroll');
        else scrollTop.classList.remove('show-scroll');
    }

    window.addEventListener('scroll', scrollTop)

    /*Dark and light theme*/

    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'


    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')


    const getCurrentTheme = () => document.body.classList(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = ()  => themeButton.body.classList(iconTheme) ? 'bx-moon' : 'bx-sun'

    if (selectedTheme) {

        document.body.classList[selectedTheme === 'dark'? 'add': 'remove'](darkTheme);
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    }


    /*Active and deactive theme change*/

    themeButton.addEventListener('click', () => {

        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })


    /* reduce the size and print on an a4 sheet*/
    function scaleCv(){
        document.body.classList.add('scale-cv')
    }

    /*Remove the size when the cv is download*/

    function removeScale(){
        document.body.classList.remove('scale-cv')
    }


    /*Generate pdf*/
    let areaCv = document.getElementById('area-cv')

    let resumeButton = document.getElementById('resume-button')

    /*Html2pdf opton*/

    let opt = {
        margin:       0,
        filename:     'myResume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        {  format: 'a4', orientation: 'portrait' }
    }

    /*Function to call areaCv and Html2pdf option*/

    function generateResume(){
        html2pdf(areaCv, opt)
    }


    /*When the button is clicked , it executed the three function*/

    resumeButton.addEventListener('click', () =>{
        scaleCv()

        /*The pdf is generated*/

        generateResume()

        /*The .scale-cv class is removed from the body after 5 seconds to return to */

        setTimeout(removeScale, 5000)
    })