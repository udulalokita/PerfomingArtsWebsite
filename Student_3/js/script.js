//assigning varaibles
const start_button = document.querySelector(".start_button button");
const ins_box = document.querySelector(".ins_box");
const exit_button = ins_box.querySelector(".buttons .quit");
const continue_button = ins_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// when start button is clicked
start_button.onclick = ()=>{
    ins_box.classList.add("activeInfo");
        var blur = document.getElementById("blur");
        blur.classList.toggle("actives"); 
}



// when continue button is clicked
continue_button.onclick = ()=>{
    //hides instruction box
    ins_box.classList.remove("activeInfo");
    //show quiz box 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(6); 
}

let timeValue = 6;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// when restart button is clicked
restart_quiz.onclick = ()=>{
    //shows quiz box
    quiz_box.classList.add("activeQuiz"); 
    //hides result box
    result_box.classList.remove("activeResult"); 
    timeValue = 6; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    //calling showQestions function
    showQuetions(que_count); 
    //passing que_numb value to queCounter
    queCounter(que_numb); 
    //clear counter
    clearInterval(counter);
    //clear counterLine 
    clearInterval(counterLine); 
    //calling startTimer function
    startTimer(timeValue); 
    //change the text of timeText to Time Left
    timeText.textContent = "Time Left"; 
    //hides the next button
    next_button.classList.remove("show"); 
}

// when quiz button is clicked
    quit_quiz.onclick = ()=>{
    //reloads the window
    window.location.reload(); 
}

const next_button = document.querySelector(".next_button");
const bottom_ques_counter = document.querySelector(".total_que");

// when next que button is clicked
next_button.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        timeText.textContent = "Time Left";
        next_button.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}

// getting questions from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="tick"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine);
    //getting selected option 
    let userAns = answer.textContent; 
    //getting correct answer from array
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 

//if the answer is correct
    if(userAns == correcAns){ 
        //updating score value with 1
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        //adding red color selected option
        answer.classList.add("incorrect"); 
        //adding an icon to mark selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                //adding green color to selected option
                option_list.children[i].setAttribute("class", "option correct"); 
                //marking selected item with an icon
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    //disables all options when one option is selected 
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
        //shows next button if user selects any option
        next_button.classList.add("show"); 
}
//result
function showResult(){
    ins_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".result_score");

    //creating messages according to user's score
    //if user scores more than 3
    if (userScore > 3){ 
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    // if user scores more than 1
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    // if user scores less than 1
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
//timer
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 5){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ 
            //clears counter
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            //selecting the correct answer from array
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    //adds green color to matched option
                    option_list.children[i].setAttribute("class", "option correct"); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            //disables all options when one option is selected 
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            //shows next button if user selects any option
            next_button.classList.add("show"); 
        }
    }
}


//question numbers and question count
function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}