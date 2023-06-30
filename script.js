const question =[
    {
        'que': 'The Central Rice Research Station is situated in?',
        'a': 'Chennai',
        'b': 'Cuttack',
        'c': 'Bangalore',
        'd': 'Quilon',
        'correct': 'b'
    },
    {
        'que': 'Which one of the following river flows between Vindhyan and Satpura ranges?',
        'a': 'Narmada',
        'b': 'Mahanadi',
        'c': 'Son',
        'd': 'Netravati',
        'correct': 'a'
    },
    {
        'que': 'Who among the following wrote Sanskrit grammar?',
        'a': 'Kalidasa',
        'b': 'Charak',
        'c': 'Panini',
        'd': 'Aryabhatt',
        'correct': 'c'
    }
]
let index =0;
let total= question.length;
let right=0;
let wrong =0;
let quesBox=document.getElementById("questionBox")
let optionInputs =document.querySelectorAll("input[type='radio']")

function loadQustion(){
    if(index==total){
        return endQuiz()
    }
    reset();
    const data=question[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText =data.a
    optionInputs[1].nextElementSibling.innerText =data.b
    optionInputs[2].nextElementSibling.innerText =data.c
    optionInputs[3].nextElementSibling.innerText =data.d
}
function submitQuiz(){
    const data=question[index];
    const ans=getAns();
    console.log(data.correct);
    if(ans == data.correct){
        right++;
        
    }else{
        wrong++;
    }
    index++;
    loadQustion();
    return;
}
const getAns = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer= input.value;
            }
        }
    )
    
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked=false;
        }
    )
}
function endQuiz(){

    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
        </div>
        `
}

loadQustion();