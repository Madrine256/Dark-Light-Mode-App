let getClasses = myClass => document.querySelector(myClass),
    getAllElements = allElements => document.querySelectorAll(allElements);
  
  const mySwitch = getClasses('.switch'),
        body = getClasses('body'),
        switchConatiner = getClasses('.switch-container'),
        link_container = getClasses('.link_container'),
        links = getAllElements('.links'),
        fieldset = getClasses('.title'),
        bar = getClasses('.bar-container');
        bar.onclick = ()=>{
            
                link_container.classList.toggle('showLinks');
                if(link_container.classList.contains('showLinks')){
                    fieldset.style.left = "-20%";
                }else{
                    fieldset.style.left = "auto";
                }
            
            
        }

  //set function for our styles;
  let offStyles = (themebgColor, themeColor, linkbgColor)=>{
    body.style.background = themebgColor;
    body.style.color = themeColor;
    switchConatiner.style.background = themeColor;
    links.forEach(link =>{
        link.style.color = themeColor;
        link.style.borderColor = themeColor;
        link.addEventListener('mouseenter' , (e)=>{
            e.currentTarget.style.background= linkbgColor;
            e.currentTarget.style.color = themebgColor; 
        })
        link.addEventListener('mouseleave',( e )=>{
            e.currentTarget.style.background= "rgba(9,9,9,0.1)";
            e.currentTarget.style.color = themeColor; 
           
        })
       
    })
  }
      mySwitch.onclick = ()=>{
        mySwitch.classList.toggle('posnChange');
        if(mySwitch.classList.contains('posnChange')){
            mySwitch.innerHTML = "OFF";
            offStyles("#fff", "#000", "rgba(0,0,0,0.5)");
            bar.style.color = "#000";
            link_container.style.background = "rgba(9,9,9,0.1)";
            link_container.style.color = "#000";
            
        }else{
            mySwitch.innerHTML = "ON";
            window.location.reload();
        }
      
      }
    
          
      