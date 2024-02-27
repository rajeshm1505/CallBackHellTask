
let element= document.querySelector(".result-div");

//callback Hell Task

  function PrintNumber(){
    element.innerHTML = "";
    setTimeout(() => {
        console.log(10);
        element.innerHTML = `<h1 style="text-align:center">10</h1>`
           setTimeout(() => {
             console.log(9);
             element.innerHTML = `<h1 style="text-align:center">9</h1>`
             setTimeout(()=>{
                console.log(8);
                element.innerHTML = `<h1 style="text-align:center">8</h1>`;
               setTimeout(()=>{
                console.log(7);
                element.innerHTML = `<h1 style="text-align:center">7</h1>`;
                setTimeout(()=>{
                  console.log(6);
                  element.innerHTML = `<h1 style="text-align:center">6</h1>`;
                    setTimeout(()=>{
                      console.log(5);
                      element.innerHTML = `<h1 style="text-align:center">5</h1>`;
                         setTimeout(()=>{
                           console.log(4);
                           element.innerHTML = `<h1 style="text-align:center">4</h1>`;
                            setTimeout(()=>{
                              console.log(3);
                              element.innerHTML = `<h1 style="text-align:center">3</h1>`;
                               setTimeout(()=>{
                                 console.log(2);
                                 element.innerHTML = `<h1 style="text-align:center">2</h1>`;
                                     setTimeout(()=>{
                                        console.log(1); 
                                        element.innerHTML = `<h1 style="text-align:center">1</h1>`;
                                        setTimeout(()=>{
                                            element.innerHTML = `<h1 style="text-align:center"> Happy Independence Day</h1>`;
                                        },1000);    

                                    },1000);
                                },1000);
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000);
        },1000);
      }, 1000);
    }, 1000);
}
   
 