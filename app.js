let getClasses = (myClass)=>{
    return document.querySelector(myClass);
  }
  const mySwitch = getClasses('.switch'),
  container = getClasses('.container'),
  links = document.querySelectorAll('.links');
  //set function for our styles;
  function offStyles(bgc, clr, bclr){
    container.style.background = bgc;
    container.style.color = clr;
    links.forEach(link=>{
        link.style.color = clr;
        link.style.borderColor = bclr;
    })
  }
      mySwitch.onclick = ()=>{
        mySwitch.classList.toggle('posnChange');
        if(mySwitch.classList.contains('posnChange')){
            mySwitch.innerHTML = "OFF";
            offStyles("#fff", "#000", "#000");
            
        }else{
            mySwitch.innerHTML = "ON";
            
            offStyles("#000", "#fff" , "#fff")
        }
      
      }