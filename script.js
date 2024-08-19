alert("player1=O  player2=x  'O'plays first")
//h
let boxes=document.querySelectorAll(".button1");
let but1=document.querySelector(".button2");
let turn0=true;
let a=[[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
// let a=[[0,1,2],
// [3,4,5],
// [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,7],[2,4,6]]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else
        {
        box.innerText="X";
        turn0=true;
            
        
        }
        box.disabled=true
    chkwinner();

    })

})

let chkwinner= ()=>{
    for(let pattern of a){
        let val=boxes[pattern[0]].innerText;
        let val1=boxes[pattern[1]].innerText;
        let val2=boxes[pattern[2]].innerText;
        if(val!=0 && val1!=0 && val2!=0  )
          {if(val==val2 && val2==val1 && val==val1)
    {   
        alert(val+" wins" );
        disableAllBoxes();    
    }
    
    }
}

}

but1.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true; 
});
const disableAllBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
 }



 