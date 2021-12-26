let getClasses = myClass => document.querySelector(myClass),
    getAllElements = allElements => document.querySelectorAll(allElements);
  
  const mySwitch = getClasses('.switch'),
        container = getClasses('.container'),
        links = getAllElements('.links');

  //set function for our styles;
  let offStyles = (bgc, clr, bclr)=>{
    container.style.background = bgc;
    container.style.color = clr;
    links.forEach(link =>{
        link.style.color = clr;
        link.style.borderColor = bclr;
        link.onmouseenter = e =>{
            e.currentTarget.style.background= "#000";
            e.currentTarget.style.color = "#fff"; 
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
            offStyles("#fff", "#000", "#000");
            
        }else{
            mySwitch.innerHTML = "ON";
            window.location.reload();
        }
      
      }