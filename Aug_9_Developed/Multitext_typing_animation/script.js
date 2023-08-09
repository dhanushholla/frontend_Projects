const floaterTextNode = document.querySelector('.floater');
const loadtext = () =>{
    setTimeout(()=>{
        floaterTextNode.textContent ="Dhanush Holla 🐱‍👤🙋‍♂️" 
    },0)
    setTimeout(()=>{
        floaterTextNode.textContent ="a frontend developer 🐱‍💻👨‍💻" 
    },4000)
    setTimeout(()=>{
        floaterTextNode.textContent ="using react,redux,js 💁‍♂️📝🤷‍♂️🤦‍♂️" 
    },8000)
    setTimeout(()=>{
        floaterTextNode.textContent ="building interactive & responsive UI 💻🖥📲" 
    },12000)
}
 loadtext();
 setInterval(loadtext,16000); 