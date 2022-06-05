var header = document.querySelector('#header'),
    mainMenu = document.querySelectorAll('.mainMenu'),
    subMenu = document.querySelectorAll('.subMenu'),
    subMenuHeight = 0,
    headerHeight = header.offsetHeight;

for (var a = 0; a < subMenu.length; a++) {
    if(subMenu[a].offsetHeight > subMenuHeight) {
        subMenuHeight = subMenu[a].offsetHeight + 20
    }
}
console.log(subMenuHeight);

for (var i = 0; i < mainMenu.length; i++) {
    mainMenu[i].addEventListener('mouseover', function(){
        header.style.height = headerHeight + subMenuHeight + 'px'
    })
    mainMenu[i].addEventListener('mouseout', function(){
        header.style.height = headerHeight + 'px'
    })
}