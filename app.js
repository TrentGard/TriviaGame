var questions = [

	{
		question: "How many national championship titles does IU have?",
		choices: ["3","4","5","6","7"],
		correctAnswer: "5"
	},

	{
		question: "Who was the winningest coach in IU history?",
		choices: ["Branch McCracken","Mike Davis","Tom Crean","Bob Knight","Everett Dean"],
		correctAnswer: "Bob Knight"
	},

	{
		question: "How many conference titles does IU have?",
		choices: ["20","22","24","26","28"],
		correctAnswer: "22"
	},

	{
		question: "Who is the all-time leading scorer in IU history?",
		choices: ["Calbert Cheaney","Steve Alford","Don Schlundt","A.J. Guyton","Yogi Ferrell"],
		correctAnswer: "Calbert Cheaney"
	},

	{
		question: "How many current NBA players went to IU?",
		choices: ["6","7","8","9","10"],
		correctAnswer: "8"
	}

];

var startTime;

var intervalId;

$(document).ready(function() {

	function time () {

		clearInterval(intervalId);
		startTime = 60;
		intervalId = setInterval(function() {

			startTime--;
			$(".timerHeader").html("Time Remaining: "+startTime);

		if (startTime===0) {
			clearInterval(intervalId);
			$(".questionSection").hide()
			$(".results").show();
		};

		}, 1000);

	};

	$(".timer").hide();
	$(".questionSection").hide();
	$(".results").hide();
	$(".submit").hide();


	$(".startButton").on ("click", function() {

		$(".start").hide();
		$(".timer").show();
		$(".questionSection").show();
		$(".submit").show();
		time();
		questionsShow();

	});

	function questionsShow () {

		questions.forEach(function(value){

			var form = $("<form>");
			var questionParagraph = $("<p>").text(value.question);
			form.append(questionParagraph);
			
			value.choices.forEach(function (value, index){
				
				var answer = $("<input type='radio'>");
				var label = $("<label>").text(value);
				form.append(answer);
				form.append(label);

			});
			
			$(".questionSection").append(form);
		
			});

	};

	$(".submit").on("click", function(){

		clearInterval(intervalId);
		$(".start").hide();
		$(".timer").hide();
		$(".questionSection").hide();
		$(".submit").hide();
		$(".results").show();

	})

});

//var form, instead of appending to questionDivision, append to form (advice from tutor)

//honestly, tried to use more HTML, tutor suggested I use more jQuery

//use if statements to record values

//once either timer runs out or submit button is clicked display values appended to 'results' section

//had most trouble with radio buttons in jquery/clicking one and turning off the other



