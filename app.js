let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const disableallboxes = () =>{
    boxes.forEach((box) =>
    {
            box.disabled = true;
    });
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            if( pos1 !== "" && pos2!=="" && pos3!=="")
            {
                if(pos1 === pos2 && pos2 === pos3)
                {
                   msg.innerText=`Winner - ${pos1}`;
                   msg.classList.remove("hide");
                   disableallboxes();
                   
                }

            }
        }
    }

});
resetBtn.addEventListener("click",() => {
    boxes.forEach((element) =>{
        element.innerText = "";
        element.disabled =false;
    });
});