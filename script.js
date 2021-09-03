// Selectors
const body = document.querySelector('body');
const videoBackground = document.querySelector('.vid-background');
const loading = document.querySelector('.loading');
const loadingLine = document.querySelector('.line');
const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar-brand');
const navbarLine = document.querySelector('.navbar-line');
const time = document.querySelector('.time');
const navLink = document.querySelectorAll('.nav-link');
const navLinkIcon = document.querySelectorAll('.nav-link-icon');
const navLinkText = document.querySelectorAll('.nav-link-text');
const modeButton = document.querySelector('.mode');
const modeButtonIcon = document.querySelector('.mode-icon');
const modeButtonText = document.querySelector('.mode-text');
const text = document.querySelectorAll('.text');
const eye = document.querySelectorAll('.eye');
const eyeBall = document.querySelectorAll('.eyeball');
const scrollDown = document.querySelector('.scroll-down');
const titleText = document.querySelectorAll('.title-text');
const titleLine = document.querySelectorAll('.title-line');
const profile = document.querySelector('.profile');
const aboutMeDesc = document.querySelector('.about-me-desc');
const bioText = document.querySelectorAll('.bio-text');
const backgroundText = document.querySelectorAll('.back-text');
const circle = document.querySelectorAll('.circle');
const circleIcon = document.querySelectorAll('.circle-icon');
const circleText = document.querySelectorAll('.circle-text');
const box = document.querySelectorAll('.box');
const bar = document.querySelectorAll('.bar');
const percentBar = document.querySelectorAll('.percent-bar');
const percentBarText = document.querySelectorAll('.percent-bar-text');
const card = document.querySelectorAll('.card');
const cardSubtitle = document.querySelectorAll('.card-subtitle');
const cardText = document.querySelectorAll('.card-text');
const view = document.querySelectorAll('.view');
const see = document.querySelector('.see');
const footer = document.querySelector('.footer');
const footerLink = document.querySelectorAll('.footer-link');
const copyright = document.querySelector('.copyright');
const socialButton = document.querySelectorAll('.button');
const upButton = document.querySelector('.up-button');

const home = document.querySelector('#home');
const aboutMe = document.querySelector('#about-me');
const background = document.querySelector('#background');
const interest = document.querySelector('#interest');
const skill = document.querySelector('#skill');
const project = document.querySelector('#project');
const certificate = document.querySelector('#certificate');

const homePos = window.scrollY + home.getBoundingClientRect().top;
const aboutMePos = window.scrollY + aboutMe.getBoundingClientRect().top;
const backgroundPos = window.scrollY + background.getBoundingClientRect().top;
const interestPos = window.scrollY + interest.getBoundingClientRect().top;
const skillPos = window.scrollY + skill.getBoundingClientRect().top;
const projectPos = window.scrollY + project.getBoundingClientRect().top;
const certificatePos = window.scrollY + certificate.getBoundingClientRect().top;

// Variables & Arrays
let light = true;
let values = ['95%', '90%', '85%', '80%', '90%', '85%', '85%', '75%', '70%', '65%', '90%', '75%', '80%', '70%'];
let lastScrollTop = 0;

// Event Listeners
window.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let y = window.scrollY;

    if (st > lastScrollTop) {
        navbar.style.transform = 'translateY(-100px)';
    } else {
        navbar.style.transform = 'translateY(50px)';
    }

    if (st <= 0) lastScrollTop = 0;
    else lastScrollTop = st;

    for (let i = 0; i < navLink.length; i++) {
        if (navLink[i].classList.contains('active')) {
            navLink[i].classList.remove('active');

            if (light) {
                navLink[i].style.backgroundColor = '#fcfcfc';
                navLinkIcon[i].style.color = '#000';
                navLinkText[i].style.color = '#000';
            } else {
                navLink[i].style.backgroundColor = '#141414';
                navLinkIcon[i].style.color = '#fff';
                navLinkText[i].style.color = '#fff';
            }
        }
    }

    if (y >= certificatePos) navLink[5].classList.add('active');
    else if (y >= projectPos) navLink[4].classList.add('active');
    else if (y >= skillPos) navLink[3].classList.add('active');
    else if (y >= interestPos) navLink[2].classList.add('active');
    else if (y >= backgroundPos) navLink[1].classList.add('active');
    else if (y >= aboutMePos) navLink[0].classList.add('active');

    for (let i = 0; i < navLink.length; i++) {
        if (navLink[i].classList.contains('active')) {
            if (light) {
                navLink[i].style.backgroundColor = '#000';
                navLinkIcon[i].style.color = '#fff';
                navLinkText[i].style.color = '#fff';
            } else {
                navLink[i].style.backgroundColor = '#fff';
                navLinkIcon[i].style.color = '#000';
                navLinkText[i].style.color = '#000';
            }
        }
    }
});

for (let i = 0; i < view.length; i++) {
    view[i].addEventListener('mouseover', () => {
        view[i].style.boxShadow = 'inset 0 40px 0 0 #000';
        view[i].style.color = '#fff';
    });
    
    view[i].addEventListener('mouseout', () => {
        view[i].style.boxShadow = 'inset 0 0 0 0 #000';
        view[i].style.color = '#000';
    });
}

see.addEventListener('mouseover', () => {
    see.style.boxShadow = 'inset 0 40px 0 0 #000';
    see.style.color = '#fff';
});

see.addEventListener('mouseout', () => {
    see.style.boxShadow = 'inset 0 0 0 0 #000';
    see.style.color = '#000';
});

for (let i = 0; i < socialButton.length; i++) {
    socialButton[i].addEventListener('mouseover', () => {
        socialButton[i].style.backgroundColor = '#000';
        socialButton[i].style.color = '#fff';
    });

    socialButton[i].addEventListener('mouseout', () => {
        socialButton[i].style.backgroundColor = '#fff';
        socialButton[i].style.color = '#000';
    });
}

upButton.addEventListener('mouseover', () => {
    upButton.style.backgroundColor = '#000';
    upButton.style.color = '#fff';
});

upButton.addEventListener('mouseout', () => {
    upButton.style.backgroundColor = '#fff';
    upButton.style.color = '#000';
});

modeButton.addEventListener('click', () => {
    if (light) {
        videoBackground.setAttribute('src', 'video/particles-dark.mp4');
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
        navbarBrand.style.color = '#fff';
        navbarLine.classList.add('border-dark');
        time.style.color = '#fff';
        modeButtonIcon.classList.remove('fa-moon');
        modeButtonIcon.classList.add('fa-sun');
        modeButtonText.innerText = 'LightMode';
        for (nl of navLink) nl.style.backgroundColor = '#111';
        for (nli of navLinkIcon) nli.style.color = '#fff';
        for (nlt of navLinkText) nlt.style.color = '#fff';
        for (t of text) t.style.color = '#fff';
        for (e of eye) e.style.backgroundColor = '#fff';
        for (e of eye) e.style.boxShadow = '0 0 5px #fff';
        for (eb of eyeBall) eb.style.backgroundColor = '#000';
        scrollDown.classList.add('text-light');
        for (tt of titleText) tt.classList.add('text-light');
        for (tl of titleLine) tl.classList.remove('border-dark');
        aboutMeDesc.style.backgroundColor = 'rgba(0, 0, 0, .5)';
        aboutMeDesc.classList.add('text-light');
        for (bt of bioText) bt.classList.add('text-light');
        for (bt of backgroundText) bt.style.backgroundColor = '#141414';
        for (bt of backgroundText) bt.style.color = '#fff';
        for (c of circle) c.style.backgroundColor = '#141414';
        for (c of circle) c.style.color = '#fff';
        for (b of box) b.style.backgroundColor = 'rgba(0, 0, 0, .25)';
        for (b of box) b.style.color = '#fff';
        for (b of bar) b.style.backgroundColor = '#5c5c5c';
        for (pb of percentBar) pb.style.backgroundColor = '#fff';
        for (pbt of percentBarText) pbt.style.color = '#000';
        for (c of card) c.style.backgroundColor = 'rgba(0, 0, 0, .25)';
        for (c of card) c.style.color = '#fff';
        for (cs of cardSubtitle) cs.classList.add('text-white-50');
        for (ct of cardText) ct.classList.add('text-white-50');
        for (v of view) v.style.backgroundColor = '#000';
        for (v of view) v.style.color = '#fff';
        for (v of view) v.style.boxShadow = 'inset 0 0 0 0 #fff';

        for (let i = 0; i < view.length; i++) {
            view[i].addEventListener('mouseover', () => {
                view[i].style.boxShadow = 'inset 0 40px 0 0 #fff';
                view[i].style.color = '#000';
            });
            
            view[i].addEventListener('mouseout', () => {
                view[i].style.boxShadow = 'inset 0 0 0 0 #fff';
                view[i].style.color = '#fff';
            });
        }

        see.style.backgroundColor = '#000';
        see.style.color = '#fff';
        see.style.boxShadow = 'inset 0 0 0 0 #fff';

        see.addEventListener('mouseover', () => {
            see.style.boxShadow = 'inset 0 40px 0 0 #fff';
            see.style.color = '#000';
        });
        
        see.addEventListener('mouseout', () => {
            see.style.boxShadow = 'inset 0 0 0 0 #fff';
            see.style.color = '#fff';
        });

        footer.style.backgroundColor = '#000';
        footer.style.color = '#fff';
        for (fl of footerLink) fl.style.color = '#fff';
        for (sb of socialButton) sb.style.backgroundColor = '#141414';
        for (sb of socialButton) sb.style.color = '#fff';
        
        for (let i = 0; i < socialButton.length; i++) {
            socialButton[i].addEventListener('mouseover', () => {
                socialButton[i].style.backgroundColor = '#fff';
                socialButton[i].style.color = '#000';
            });
            
            socialButton[i].addEventListener('mouseout', () => {
                socialButton[i].style.backgroundColor = '#141414';
                socialButton[i].style.color = '#fff';
            });
        }

        upButton.style.backgroundColor = '#141414';
        upButton.style.color = '#fff';

        upButton.addEventListener('mouseover', () => {
            upButton.style.backgroundColor = '#fff';
            upButton.style.color = '#000';
        });

        upButton.addEventListener('mouseout', () => {
            upButton.style.backgroundColor = '#141414';
            upButton.style.color = '#fff';
        });
    } else {
        videoBackground.setAttribute('src', 'video/particles-light.mp4');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
        navbarBrand.style.color = '#000';
        navbarLine.classList.remove('border-dark');
        time.style.color = '#000';
        modeButtonIcon.classList.remove('fa-sun');
        modeButtonIcon.classList.add('fa-moon');
        modeButtonText.innerText = 'DarkMode';
        for (nl of navLink) nl.style.backgroundColor = '#fcfcfc';
        for (nli of navLinkIcon) nli.style.color = '#000';
        for (nlt of navLinkText) nlt.style.color = '#000';
        for (t of text) t.style.color = '#000';
        for (e of eye) e.style.backgroundColor = '#000';
        for (e of eye) e.style.boxShadow = '0 0 5px #000';
        for (eb of eyeBall) eb.style.backgroundColor = '#fff';
        scrollDown.classList.remove('text-light');
        for (tt of titleText) tt.classList.remove('text-light');
        for (tl of titleLine) tl.classList.add('border-dark');
        aboutMeDesc.style.backgroundColor = 'rgba(255, 255, 255, .5)';
        aboutMeDesc.classList.remove('text-light');
        for (bt of bioText) bt.classList.remove('text-light');
        for (bt of backgroundText) bt.style.backgroundColor = '#fcfcfc';
        for (bt of backgroundText) bt.style.color = '#000';
        for (bt of backgroundText) bt.style.boxShadow = 'rgba(0, 0, 0, .2) 0 4px 12px';
        for (c of circle) c.style.backgroundColor = '#fcfcfc';
        for (c of circle) c.style.color = '#000';
        for (c of circle) c.style.boxShadow = 'rgba(0, 0, 0, .2) 0 4px 12px';
        for (b of box) b.style.backgroundColor = 'rgba(255, 255, 255, .25)';
        for (b of box) b.style.color = '#000';
        for (b of box) b.style.boxShadow = 'rgba(0, 0, 0, .2) 0 4px 12px';
        for (b of bar) b.style.backgroundColor = '#e1e1e1';
        for (pb of percentBar) pb.style.backgroundColor = '#000';
        for (pbt of percentBarText) pbt.style.color = '#fff';
        for (c of card) c.style.backgroundColor = 'rgba(255, 255, 255, .25)';
        for (c of card) c.style.color = '#000';
        for (cs of cardSubtitle) cs.classList.remove('text-white-50');
        for (ct of cardText) ct.classList.remove('text-white-50');
        for (v of view) v.style.backgroundColor = '#fff';
        for (v of view) v.style.color = '#000';
        for (v of view) v.style.boxShadow = 'inset 0 0 0 0 #000';

        for (let i = 0; i < view.length; i++) {
            view[i].addEventListener('mouseover', () => {
                view[i].style.boxShadow = 'inset 0 40px 0 0 #000';
                view[i].style.color = '#fff';
            });
            
            view[i].addEventListener('mouseout', () => {
                view[i].style.boxShadow = 'inset 0 0 0 0 #000';
                view[i].style.color = '#000';
            });
        }

        see.style.backgroundColor = '#fff';
        see.style.color = '#000';
        see.style.boxShadow = 'inset 0 0 0 0 #000';

        see.addEventListener('mouseover', () => {
            see.style.boxShadow = 'inset 0 40px 0 0 #000';
            see.style.color = '#fff';
        });
        
        see.addEventListener('mouseout', () => {
            see.style.boxShadow = 'inset 0 0 0 0 #000';
            see.style.color = '#000';
        });

        footer.style.backgroundColor = '#fcfcfc';
        footer.style.color = '#000';
        for (fl of footerLink) fl.style.color = '#000';
        for (sb of socialButton) sb.style.backgroundColor = '#fff';
        for (sb of socialButton) sb.style.color = '#000';
        
        for (let i = 0; i < socialButton.length; i++) {
            socialButton[i].addEventListener('mouseover', () => {
                socialButton[i].style.backgroundColor = '#000';
                socialButton[i].style.color = '#fff';
            });
            
            socialButton[i].addEventListener('mouseout', () => {
                socialButton[i].style.backgroundColor = '#fff';
                socialButton[i].style.color = '#000';
            });
        }

        upButton.style.backgroundColor = '#fff';
        upButton.style.color = '#000';

        upButton.addEventListener('mouseover', () => {
            upButton.style.backgroundColor = '#000';
            upButton.style.color = '#fff';
        });

        upButton.addEventListener('mouseout', () => {
            upButton.style.backgroundColor = '#fff';
            upButton.style.color = '#000';
        });
    }
    
    light = !light;
});

body.addEventListener('mousemove', () => {
    eye.forEach(e => {
        let x = (e.getBoundingClientRect().left) + (e.clientWidth / 2);
        let y = (e.getBoundingClientRect().top) + (e.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        e.style.transform = `rotate(${rotation}deg)`;
    });
});

scrollDown.addEventListener('click', () => {
    let height = window.innerHeight;
    window.scrollTo(0, height);
});

upButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        let height = window.innerHeight;
        loading.style.transform = `translateY(-${height}px)`;
    }, 1000);

    setTimeout(() => {
        navbar.style.transform = 'translateY(50px)';
        navbar.style.opacity = '1';
    }, 1500);

    setTimeout(() => {
        scrollDown.style.opacity = '1';
        loading.style.display = 'none';
    }, 2000);
});

// DOM Manipulation
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    time.innerHTML = '';
    if (hour < 10) time.innerHTML += '0';
    time.innerHTML += `${hour} : `;
    if (minute < 10) time.innerHTML += '0';
    time.innerHTML += `${minute} : `;
    if (second < 10) time.innerHTML += '0';
    time.innerHTML += `${second}`;
}, 1000);

function getAge() {
    let date = new Date();
    let dateNum = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let age = year - 2002;

    if (month < 6) age--;
    else if (month === 6 && dateNum < 26) age--;
    return age;
}

bioText[2].innerHTML = `<i class="fa fa-user"></i> ${getAge()} years old`;
copyright.innerHTML = `Copyright &copy; ${new Date().getFullYear()}, Leonardo Lim.`;

// Scroll
$('.page-scroll').on('click', function(e) {
    let obj = $(this).attr('href');
    let objElement = $(obj);

    $('html, body').animate({
        scrollTop: objElement.offset().top
    }, 0);

    e.preventDefault();
});

// Parallax
$(window).on('load', function() {
    $('#home .eyes').addClass('show');
    $('#home .desc').addClass('show');
    $('#home .scroll-down').addClass('show');
});

let windowWidth = $(window).width();

if (windowWidth > 990) {
    $(window).scroll(function() {
        let wScroll = $(this).scrollTop();
        let windowHeight = $(window).height();
        let documentHeight = $(document).height();
        
        // About Me
        if (wScroll > $('#about-me').offset().top - 50) {
            $('#about-me .title').addClass('show');
            $('#about-me .image').addClass('show');
            $('#about-me .about-me-desc').addClass('show');
            $('#about-me .bio').addClass('show');
        } else {
            $('#about-me .title').removeClass('show');
            $('#about-me .image').removeClass('show');
            $('#about-me .about-me-desc').removeClass('show');
            $('#about-me .bio').removeClass('show');
        }
    
        // Background
        if (wScroll > $('#background').offset().top - 50) {
            $('#background .title').addClass('show');
            $('#background .illustration').addClass('show');
            $('#background .timeline').addClass('show');
            $('#background .back-text').addClass('show');
        } else {
            $('#background .title').removeClass('show');
            $('#background .illustration').removeClass('show');
            $('#background .timeline').removeClass('show');
            $('#background .back-text').removeClass('show');
        }
    
        // Interest
        if (wScroll > $('#interest').offset().top - 50) {
            $('#interest .title').addClass('show');
            $('#interest .illustration').addClass('show');
            $('#interest .circle').each(function(i) {
                setTimeout(function() {
                    $('#interest .circle').eq(i).addClass('show');
                }, 100 * i);
            });
        } else {
            $('#interest .title').removeClass('show');
            $('#interest .illustration').removeClass('show');
            $('#interest .circle').each(function(i) {
                setTimeout(function() {
                    $('#interest .circle').eq(i).removeClass('show');
                }, 100 * i);
            });
        }
    
        // Skill
        if (wScroll > $('#skill').offset().top - 50) {
            $('#skill .title').addClass('show');
            $('#skill .illustration').addClass('show');
            $('#skill .box').each(function(i) {
                setTimeout(function() {
                    $('#skill .box').eq(i).addClass('show');
                }, 200 * i);
            });
            setTimeout(() => {
                percentBar.forEach((percent, index) => {
                    percent.style.width = values[index];
                });
            }, 500);
        } else {
            $('#skill .title').removeClass('show');
            $('#skill .illustration').removeClass('show');
            $('#skill .box').each(function(i) {
                setTimeout(function() {
                    $('#skill .box').eq(i).removeClass('show');
                }, 200 * i);
            });
            setTimeout(() => {
                percentBar.forEach((percent) => {
                    percent.style.width = '0';
                });
            }, 500);
        }
    
        // Project
        if (wScroll > $('#project').offset().top - 50) {
            $('#project .title').addClass('show');
            $('#project .illustration').addClass('show');
            $('#project .card').each(function(i) {
                setTimeout(function() {
                    $('#project .card').eq(i).addClass('show');
                }, 100 * i);
            });
        } else {
            $('#project .title').removeClass('show');
            $('#project .illustration').removeClass('show');
            $('#project .card').each(function(i) {
                setTimeout(function() {
                    $('#project .card').eq(i).removeClass('show');
                }, 100 * i);
            });
        }
    
        // Certificate
        if (wScroll > $('#certificate').offset().top - 50) {
            $('#certificate .title').addClass('show');
            $('#certificate .illustration').addClass('show');
            $('#certificate .carousel').addClass('show');
            $('#certificate .see-more').addClass('show');
        } else {
            $('#certificate .title').removeClass('show');
            $('#certificate .illustration').removeClass('show');
            $('#certificate .carousel').removeClass('show');
            $('#certificate .see-more').removeClass('show');
        }
    
        // Footer
        if (wScroll + windowHeight > documentHeight - 50) {
            $('#footer').addClass('show');
            $('#footer .footer-link').each(function(i) {
                setTimeout(function() {
                    $('#footer .footer-link').eq(i).addClass('show');
                }, 100 * i);
            });
            $('#footer .copyright').addClass('show');
            $('#footer .button').addClass('show');
            $('#footer .footer-contact').each(function(i) {
                setTimeout(function() {
                    $('#footer .footer-contact').eq(i).addClass('show');
                }, 100 * i);
            });
            $('#footer .up-button').addClass('show');
        } else {
            $('#footer').removeClass('show');
            $('#footer .footer-link').each(function(i) {
                setTimeout(function() {
                    $('#footer .footer-link').eq(i).removeClass('show');
                }, 100 * i);
            });
            $('#footer .copyright').removeClass('show');
            $('#footer .button').removeClass('show');
            $('#footer .footer-contact').each(function(i) {
                setTimeout(function() {
                    $('#footer .footer-contact').eq(i).removeClass('show');
                }, 100 * i);
            });
            $('#footer .up-button').removeClass('show');
        }
    });
} else {
    percentBar.forEach((percent, index) => {
        percent.style.width = values[index];
    });
}