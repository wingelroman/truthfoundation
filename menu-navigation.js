
for(let j = 0; j < header_menus.children.length; j++){
    header_menus.children[j].onclick = () =>{
        active_menus.last = active_menus.current;
        active_menus.current = j;
        header_menus.children[active_menus.last].classList.remove('selected');
        header_menus.children[j].classList.add('selected');
        let menus = document.querySelector('.body').children;

        menus[active_menus.last].setAttribute('hidden','');
        if(active_menus.last == 0){
            menus[active_menus.last].setAttribute('style', 'display: none');
        }
        try{
        menus[active_menus.current].removeAttribute('hidden');
        if(active_menus.current == 0){
            menus[active_menus.current].setAttribute('style', 'display: flex');
        }
        } catch(err){
            alert(err)
        }
    }
}