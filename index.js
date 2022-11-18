
scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.height = "10vh";
        document.getElementById("header").style.fontSize = "13px";
        document.getElementById("name").style.fontSize = "20px";
    
    } else {
        document.getElementById("header").style.height = "13vh";
        document.getElementById("header").style.fontSize = "16px";
        document.getElementById("name").style.fontSize = "25px";
    }
};
window.onscroll = scrollFunction;



goTo = (keyword) => {
    const identifier = '#' + keyword;
    const skills = document.querySelector(identifier);
    skills.scrollIntoView({behavior: 'smooth'});
   
    
}
