const target = document.querySelectorAll('[data-animate]')
const animationClass = 'animate'
const animationClassNews = 'news'

function animeScroll(){
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
  target.forEach((e) =>{
    if((windowTop) > e.offsetTop){
      e.classList.add(animationClass)
    } else{
      e.classList.remove(animationClass)
      e.classList.add(animationClassNews)
    }
  })
}

animeScroll()

if(target.length){
  window.addEventListener('scroll', function(){
    animeScroll()
  })
}