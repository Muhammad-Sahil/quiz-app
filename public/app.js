var currentQuestionNo = document.getElementById('currentQuestionNo')
var totalQuestionNo = document.getElementById('totalQuestionNo')
var questions = document.getElementById('questions')
var answerParent = document.getElementById('answerParent')
var progress = document.getElementById('progress')
var next = document.getElementById('next')

var question = [
    {
        question: 'Prophet Muhammad (PBUH) belonged to __________ family.',
        options: ['Hashmi','Quraishi',' Makki','Madni'],
        correctAnswer:'Hashmi'
    },
    {
        question: 'Prophet Muhammad (PBUH) had __________ sons.',
        options: ['1','2','3','4'],
        correctAnswer:3
    },
    {
        question: 'To what Prophet the Zabur was revealed by Allah',
        options: ['Prophet Ibraheem (A.S)','Prophet Dawood (A.S)','Prophet Moosa (A.S)','Prophet Essa (A.S)'],
        correctAnswer:4
    },
    {
        question: 'Prophet Muhammad (PBUH) had __________ daughters',
        options: [1,2,3,4],
        correctAnswer:4
    },
       {
         question: 'What was the name of Imam Bukhari (R.A)?',
        options: ['Muhammad bin Ismaeel',' Muhammad Ismaeel','Muhammad Ibraheem','Ismaeel bin Ibraheem'],
        correctAnswer:' Muhammad bin Ismaeel'
    },

]
var index = 0
var marks = 0
function startQuiz(){
    answerParent.innerHTML = ''
    currentQuestionNo.innerHTML = index+1
    totalQuestionNo.innerHTML = question.length
    questions.innerHTML = question[index].question
    for(var i=0; i < question[index].options.length; i++){
        answerParent.innerHTML += ` <div class="col-md-6 py-3 text-center">
        <div class="rounded shadow light p-3">
            <button onclick="checkAnswer('${question[index].options[i]}','${question[index].correctAnswer}')" class="btn btn-block btn-light px-5 rounded-pill">${question[index].options[i]}</button>
        </div> 
    
    </div> `

}
progress.value = index+1
progress.max = question.length

}

startQuiz()

function nextQuestion(){
   if(index != question.length-1){
       index++
       startQuiz()
   }else{
       alert(marks)
   }
}

function checkAnswer(optionValue,correctValue){
    if (optionValue == correctValue){
        marks++
        // console.log(marks)
    }
    nextQuestion()
}

