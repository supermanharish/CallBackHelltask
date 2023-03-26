let time = document.createElement("div")
time.style.textAlign ="center"
time.style.fontSize = "100px"
time.style. color ="blue"
time.style.position="absolute"
time.style.top="50%"
time.style.left="50%"
time.style.marginTop="-50px"
time.style.marginLeft="-50px"
time.style.width="100px"
time.style.height="100px"
document.body.append(time)
setTimeout(()=>{
  time.textContent="10"
  setTimeout(()=>{
    time.textContent="9"
    setTimeout(()=>{
      time.textContent="8"
      setTimeout(()=>{
        time.textContent="7"
        setTimeout(()=>{
          time.textContent="6"
          setTimeout(()=>{
           time.textContent="5"
            setTimeout(()=>{
            time.textContent="4"
              setTimeout(()=>{
               time.textContent="3"
                setTimeout(()=>{
                  time.textContent="2"
                  setTimeout(()=>{
                    time.textContent="1"
                    clearTimeout(time);
                    
                    setTimeout(()=>{
                      time.style.textAlign ="center"
                    time.style.fontSize = "100px"
                    time.style. color ="orange"
                    time.style.position="absolute"
                    time.style.top="30%"
                    time.style.left="30%"
                    time.style.marginTop="-30px"
                    time.style.marginLeft="-30px"
                    time.style.width="100px"
                    time.style.height="100px"
                      
                     time.textContent="Happy Independence Day"
},1000)
},1000)
},1000)
},1000)
},1000)
},1000)
},1000)
},1000)
},1000)
},1000)
},1000);


