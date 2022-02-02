const MenubtnArea = document.querySelector(".MenuPush");
const Header = document.querySelector("header");
MenubtnArea.addEventListener("click", () => {
    if (Header.classList.contains('active') == true){
        Header.classList.remove('active');
    }else{
        Header.classList.add('active');
    }
});
let MenuClick = function(){
if (Header.classList.contains('active') == true){
    Header.classList.remove('active');
}
}