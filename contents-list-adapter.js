function updateList(obj){
    for(let i = 0; i < obj.length; i++){
        let x = document.createElement('div');
        x.innerHTML = obj[i].title;
        x.setAttribute('class', 'content-t');
        if(i == 0){
            x.setAttribute('class', 'content-t content-t-sel');
        }
        contentsListAdapter.append(x);
    }
}
try{
    updateList(contents);
} catch (err){
    updateList(contents);
}