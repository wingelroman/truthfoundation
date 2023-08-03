let contents_log = {
    current: 0,
    last: 0
}

function updateList(obj){
    
    for(let i = 0; i < obj.length; i++){
        let x = document.createElement('div');
        x.innerHTML = obj[i].title;
        x.setAttribute('class', 'content-t');
        if(i == 0){
            x.setAttribute('class', 'content-t content-t-sel');
            contentView.innerHTML = obj[i].body;
        }
        contentsListAdapter.append(x);
        x.onclick = () =>{
            contentView.innerHTML = obj[i].body;
        }
    }
}
try{
    fetch('./contents.json',{
        method: 'GET'
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        contents = data;
    })
    setTimeout(function() {
        updateList(contents);
    }, 100);
    //updateList(contents);
} catch (err){
    updateList(contents);
}