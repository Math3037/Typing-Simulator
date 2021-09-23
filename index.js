const body = document.getElementsByTagName("body")[0];
const wrapper = document.querySelector(".wrapper");
const textContainersList = document.querySelectorAll(".wrapper__text-container");
let spanList;
let currentSpan = 0;
let index = 0;
let length;
let removedNodes = [];


window.onload = () => {
  
  wrapper.focus();
  updateElement(index,currentSpan);
 
};



//click event
document.addEventListener("click", (event) => {
  let  target, classPropsArr;
  target = event.target;
  
  checkPropertyExists = target.attributes.hasOwnProperty("class");
  classPropsArr = ["wrapper", "wrapper__text-container", "text"];

  if (checkPropertyExists && !classPropsArr.includes(target.classList[0])) {
      // remove focus of the wrapper
      wrapper.blur();
  }

});

// Key down event

wrapper.addEventListener("keydown", (event) => {
 
    if(event.target != undefined && spanList[currentSpan].textContent == event.key){
      
    
    if(currentSpan === length){
     
      // remove the cursor from front of element
      spanList[currentSpan].classList.remove("cursor");
      // add the newly cursor after element
      spanList[currentSpan].classList.add("newCursor");
    }
  

    if((currentSpan < length)){
      
      spanList[currentSpan].classList.remove("cursor");
      
      ++currentSpan;
     
      spanList[currentSpan].classList.add("cursor");
     
    } }

    if( event.which === 32  || event.keyCode === 32 && currentSpan === length){
     
        
        //if true than push the whole span out using animation
        textContainersList[index].classList.add("bounce-it");

        // textContainersList[index].classList.remove("cursor");
        spanList[length].classList.remove("newCursor");
        
        setTimeout(() => {
              removedNodes[index] = wrapper.removeChild(textContainersList[index]);
                ++index;
            
          }, 800);
          
        setTimeout(() =>{
          
          if (textContainersList.length != 1 && textContainersList[index] != undefined) {
                 
            currentSpan = 0;
                  updateElement(index,currentSpan);
                }
        },800)
        
      
      
    }
  // Else part comes here if key doesn't matches the key pressed by user
  
});

const updateElement = (index, i) =>{
  // Change the spanList
  spanList = textContainersList[index].childNodes;
  
  // Change the length variable
  length = spanList.length - 1;
  // Add cursor to first element of span
  spanList[currentSpan].classList.add("cursor");
}

const appendElement = (element) => {
  const rand = [
    "where","fill","close","desert","elite",
    "fanbase","ghost","hilton","injector",
    "jack","kill","lost","month","not",
    "over","prized","quit","rest","smart",
    "talented","user","visitor","westler",
    "xponent","yes","zoo",
  ];

  const node = document.createElement("span");
  element.appendChild(node);
  node.innerHTML = `${rand[Math.floor(Math.random() * 25)]}`;
  node.classList.add("wrapper__text-container");
  
};

// Below is old code commented only for reference in case i need something
// Change the value of length to next element items length
        // Set the value of i = 0 again
    //     spanList[i].classList.add("bounce-it");
    //     spanList[i].classList.remove("cursor");
    //     setTimeout(() => {
    //     removedNodes[index] = wrapper.removeChild(spanList[i]);
    //       ++index;
    //   appendElement(wrapper);
    // }, 800);
//     if (spanList.length != 1 && spanList[i + 1] != undefined) {
//       spanList[i + 1].classList.add("cursor");
//     }
//   } else {
//     spanList[i].classList.remove("cursor");
//     spanList[i].classList.add("is-wrong");
//     spanList[i].classList.toggle("shake");
//     setTimeout(() => {
//       spanList[i].classList.add("cursor");
//       spanList[i].classList.toggle("is-wrong");
//       spanList[i].classList.toggle("shake");
//       console.log("Waiting For Animation To Occur");
//       console.log("Is class removed or not ", spanList[i]);
//     }, 800);
