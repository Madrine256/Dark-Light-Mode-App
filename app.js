let getClasses = myClass => document.querySelector(myClass),
    getAllElements = allElements => document.querySelectorAll(allElements);
  
  const mySwitch = getClasses('.switch'),
        body = getClasses('body'),
        switchConatiner = getClasses('.switch-container'),
        links = getAllElements('.links');

  //set function for our styles;
  let offStyles = (bgc, clr)=>{
    body.style.background = bgc;
    body.style.color = clr;
    switchConatiner.style.background = clr;
    links.forEach(link =>{
        link.style.color = clr;
        link.style.borderColor = clr;
        link.onmouseenter = e =>{
            e.currentTarget.style.background= bgc;
            e.currentTarget.style.color = clr; 
        }
        link.onmouseleave= e =>{
            e.currentTarget.style.background= bgc;
            e.currentTarget.style.color = clr; 
        }
       
    })
  }
      mySwitch.onclick = ()=>{
        mySwitch.classList.toggle('posnChange');
        if(mySwitch.classList.contains('posnChange')){
            mySwitch.innerHTML = "OFF";
            offStyles("#fff", "#000");
            
        }else{
            mySwitch.innerHTML = "ON";
            window.location.reload();
        }
      
      }