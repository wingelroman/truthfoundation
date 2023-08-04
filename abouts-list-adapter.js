let abouts_log = {
    current: 0,
    last: 0
}
let abouts = [];

let viewer = document.querySelector('.disp');

function updateAboutList(obj){
    
    for(let i = 0; i < obj.length; i++){
        let x = document.createElement('div');
        x.innerHTML = obj[i].title;
        x.setAttribute('class', 'lst-itm');
        if(i == 0){
            x.setAttribute('class', 'lst-itm content-t-sel');
            viewer.innerHTML = obj[i].body;
        }
        
        
        
            document.querySelector(".tb").append(x);
        
        
        
        x.setAttribute('rnk', obj.indexOf(obj[i]))

        x.onclick = (e) =>{
            abouts_log.last = abouts_log.current;
            abouts_log.current = parseInt(x.getAttribute('rnk'));
            viewer.innerHTML = obj[i].body;
            viewer.scrollTo(0,0);
            document.querySelector('[rnk="'+abouts_log.current+'"]').setAttribute('class', 'content-t content-t-sel');
            document.querySelector('[rnk="'+abouts_log.last+'"]').setAttribute('class', 'content-t');
        }
    }
}
try{
    fetch('./abouts.json',{
        method: 'GET'
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        abouts = data;
        updateAboutList(abouts);
    });
} catch (err){
    updateAboutList(abouts);
}