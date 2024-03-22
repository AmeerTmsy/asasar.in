
document.addEventListener('scroll', ()=>{
    const heading = document.getElementById('header');
    
    if(window.scrollY > 0){
        heading.style.backgroundColor = '#c1bfbf'
    } else{
        heading.style.backgroundColor = '#dfdddd'
    }
})

