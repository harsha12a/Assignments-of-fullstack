const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const user = document.getElementById("user");
const comp = document.getElementById("comp");
const res = document.getElementById("res");
const sub = document.getElementById("sub");
rock.onclick = function() {
    user.src = rock.src;
    comp.src="";
};
paper.onclick = function() {
    user.src = paper.src;
    comp.src="";
};
scissor.onclick = function() {
    user.src = scissor.src;
    comp.src="";
};
function getrandom(arr, prevIndex) {
    let i;
    do {
        i = Math.floor(Math.random() * arr.length);
    } while (i === prevIndex);
    return { element: arr[i], index: i };
}
let score = 0;
let prevIndex = -1;
sub.onclick = function() {
    res.textContent = "";
    const arr = [rock, paper, scissor];
    const { element: compChoice, index: newIndex } = getrandom(arr, prevIndex);
    prevIndex = newIndex;
    comp.src = compChoice.src;
    if (comp.src === user.src) {
        res.textContent = "Draw";
    } else if ((comp.src === rock.src && user.src === paper.src) ||
               (comp.src === scissor.src && user.src === rock.src) ||
               (comp.src === paper.src && user.src === scissor.src)) {
        score++;
        res.textContent = "You won!!\nScore:" + score;
    } else {
        score = 0;
        res.textContent = "Computer wins!\nScore:" + score;
    }
};
