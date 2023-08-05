let contents_log = {
    current: 0,
    last: 0
}
let cats_log = {
    current: 0,
    last:0
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
            
            if(i == 0){
            c.setAttribute('class', 'cat ' + obj[i].cat.split(" ").join("").split("'").join(""));
            cats_log.current = obj[i].cat.split(" ").join("").split("'").join("");
            cats_log.last = obj[i].cat.split(" ").join("").split("'").join("");
            } else{
                c.setAttribute('class', 'cat acc ' + obj[i].cat.split(" ").join("").split("'").join(""));
            }
            
            let t = document.createElement('h1');
            
            t.setAttribute('class', 'cat-name');
            
            t.innerHTML = obj[i].cat;
            
            c.append(t);
            
            c.append(x);
            
            contentsListAdapter.append(c);
            
            c.onclick = () =>{
                cats_log.last = cats_log.current;
                cats_log.current = obj[i].cat.split(" ").join("").split("'").join("");
                
                document.querySelector('.'+cats_log.last).classList.add("acc");
                document.querySelector('.'+cats_log.current).classList.remove("acc");
            }
            
        } else{
            document.querySelector(`.${obj[i].cat.split(" ").join("").split("'").join("")}`).append(x);
        }
        
        
        x.setAttribute('pos', obj.indexOf(obj[i]))

        x.onclick = (e) =>{
            contents_log.last = contents_log.current;
            contents_log.current = parseInt(x.getAttribute('pos'));
            contentView.innerHTML = obj[i].body;
            contentView.scrollTo(0,0);
            document.querySelector('[pos="'+contents_log.current+'"]').setAttribute('class', 'content-t content-t-sel');
            document.querySelector('[pos="'+contents_log.last+'"]').setAttribute('class', 'content-t');
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