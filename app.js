//movement animation
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const title = document.querySelector('.title')
const lipstick = document.querySelector('.lipstick img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.info')
const colors = document.querySelector('.colors')
const logo = document.querySelector('.logo')

//moving animation event
container.addEventListener('mousemove', e => {
    let x = (window.innerWidth / 2 - e.pageX) / 15;
    let y = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
})

container.addEventListener('touchmove', e => {
    let x = (window.innerWidth / 2 - e.pageX) / 15;
    let y = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
})


//animate in
container.addEventListener('mouseenter',e=>{
    card.style.transtion='none';
    //popout
    title.style.transform='translateZ(120px)'
    lipstick.style.transform='translateZ(120px)'
    purchase.style.transform='translateZ(120px)'
    description.style.transform='translateZ(120px)'
    colors.style.transform='translateZ(120px)'
    logo.style.transform='translateZ(120px)'
})

container.addEventListener('touchstart',e=>{
    card.style.transtion='none';
    //popout
    title.style.transform='translateZ(120px)'
    lipstick.style.transform='translateZ(120px)'
    purchase.style.transform='translateZ(120px)'
    description.style.transform='translateZ(120px)'
    colors.style.transform='translateZ(120px)'
    logo.style.transform='translateZ(120px)'
})

//animate out
container.addEventListener('mouseleave',e=>{
    card.style.transtion='all 0.5 ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform='translateZ(0px)'
    lipstick.style.transform='translateZ(0px)'
    purchase.style.transform='translateZ(0px)'
    description.style.transform='translateZ(0px)'
    colors.style.transform='translateZ(0px)'
    logo.style.transform='translateZ(0px)'
})

container.addEventListener('touchend',e=>{
    card.style.transtion='all 0.5 ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform='translateZ(0px)'
    lipstick.style.transform='translateZ(0px)'
    purchase.style.transform='translateZ(0px)'
    description.style.transform='translateZ(0px)'
    colors.style.transform='translateZ(0px)'
    logo.style.transform='translateZ(0px)'
})