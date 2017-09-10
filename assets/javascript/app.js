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
			$(".resultsSection").show();
		};

		}, 1000);

	};

	$(".timer").hide();
	$(".questionSection").hide();
	$(".resultsSection").hide();
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

		var fieldSet;

		questions.forEach(function(value, j){

			var questionParagraph = $("<p>").text(value.question);
			
			$(".questionField").append(questionParagraph);

			fieldSet = $("<fieldset>");
			
			value.choices.forEach(function (value, index){

				console.log(j);

				var answer = $("<input type='radio' value="+value+" name="+j+">");
				
				var label = $("<label>").text(value);
				
				fieldSet.append(answer);
				
				fieldSet.append(label);

				$(".questionField").append(fieldSet);

			});
		
			});

	};

	// function resultPage () {

	// 	if (question.correctAnswer === correctAnswer) {



	// 	}

	// }

	/* do what you want with the form */ // You must return false to prevent the default form behavior return false; }

	function processForm(e) {

		if (e.preventDefault) e.preventDefault()

		var form = $("#form");
		console.log(form);

	}; 

	$(".submit").on("click", function(e){

		e.preventDefault();

		// processForm();

		var form = $("#form");
		console.log(form[0].);

		clearInterval(intervalId);
		$(".start").hide();
		$(".timer").hide();
		$(".questionSection").hide();
		$(".submit").hide();
		$(".resultsSection").show();

	});

});





