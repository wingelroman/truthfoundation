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
        
        
        if(!cats.includes(obj[i].cat)){
            
            
            cats.push(obj[i].cat);
            
            let c = document.createElement('div');
            
            c.setAttribute('class', 'cat ' + obj[i].cat.split(" ").join("-"));
            
            let t = document.createElement('h1');
            
            t.setAttribute('class', 'cat-name');
            
            t.innerHTML = obj[i].cat;
            
            c.append(t);
            
            c.append(x);
            
            contentsListAdapter.append(c);
            
        } else{
            document.querySelector(`.${obj[i].cat.split(" ").join("-")}`).append(x);
        }
        
        //contentsListAdapter.append(x);

        x.onclick = () =>{
            contentView.innerHTML = obj[i].body;
            contentView.scrollTo(0,0);
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
        updateList(contents);
    });
} catch (err){
    updateList(contents);
}