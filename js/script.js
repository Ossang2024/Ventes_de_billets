function changeOption(option) {
    image = document.querySelector (".img")
    text = document.querySelector(".testimony-text")
    title_name = document.querySelector(".title_name")
    title_profession = document.querySelector(".title_profession")
    const point1 = document.querySelector('.point1')
    const point2 = document.querySelector('.point2')
    const point3 = document.querySelector('.point3')

    // Retirer la classe active de tous les points
    point1.classList.remove("active-testimony");
    point2.classList.remove("active-testimony");
    point3.classList.remove("active-testimony");

    if (option === 1 ) {
        text.textContent = '"Grat customer sevice, social media Marcketing Company is professional and extremlly serious about buisness. I have Increased my revenue of my buisness."';
        image.src = "../images/testimonial-1.jpg";
        title_name.textContent = 'Sarah Lee';
        title_profession.textContent = 'Teacher' ;
        point1.classList.add("active-testimony");
    } else if (option === 2 ) {
        text.textContent = '"I have use Xtra marcketing for two of my nuisness. The help me generate revenues of 06 figures of social media alone. I recommanded them to all owners"'
        image.src = "../images/testimonial2.jpg"
        title_name.textContent = "Jack Rucher"
        title_profession.textContent = "Student"
        point = document.querySelector(".point2")
        point2.classList.add("active-testimony")
    } else if (option === 3 ) {
        text.textContent = '"There are two types of person who will tell you that you cannot make a diffrence in this world: Those who are affraid to try and those who afraid you will succed"'
        image.src = "../images/testimonial3.jpg"
        title_name.textContent = "Young Man"
        title_profession.textContent = "Engenier"
        point3.classList.add('active-testimony');
    }
}







let lastScrollY = window.scrollY ;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // On scroll vers le bas → cacher le header
    header.classList.add('hide');
  } else {
    // On scroll vers le haut → montrer le header
    header.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});

