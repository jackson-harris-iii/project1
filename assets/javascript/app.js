$(document).ready(function () {

var topicsObject = {
	change1 : {
		youtubeID : "GBz-pwTyxtA",
		quoteID : "change",
		challenge : "Go to the grocery store and buy a food you've never eaten. Prepare and try it at home.",
		complete : false
	},
	change2 : {
		youtubeID : "5iqqLLefHsc",
		quoteID : "learning",
		challenge : "Choose a new town or area of your town to explore. Don't overplan it. Instead, go and walk around. Embrace being in an unfamiliar environment.",
		complete : false
	},
	change3 : {
		youtubeID : "jpA41I_Jc_4",
		quoteID : "inspire",
		challenge : "Rearrange your living space. Get rid of clutter and open up the space to welcome new beginnings.",
		complete : false
	},
	change4 : {
		youtubeID : "267cB6tNeUc",
		quoteID : "aspire",
		challenge : "Enroll in a local class to learn something completely new.",
		complete : false
	},
	change5 : {
		youtubeID : "NK-WOZZ-PcI",
		quoteID : "learn",
		challenge : "Change a major component of your daily routine, whether it's where you get coffee, how you get to work, or something else. Get into the moment by being aware of the newness.",
		complete : false
	},
	embarr1 : {
		youtubeID : "RFjN_SM7ijc",
		quoteID : "courage",
		challenge : "Engage totally with the first thing that comes to mind when it comes to embarrasement. Laugh at yourself.",
		complete : false
	},
	embarr2 : {
		youtubeID : "9MW1OWcb39M",
		quoteID : "importance",
		challenge : "Go into today promising youself not to say sorry. If you catch yourself, be aware of it. Ask yourself whether you said it out of habit.",
		complete : false
	},
	embarr3 : {
		youtubeID : "9gIy8tShxTw",
		quoteID : "fierce",
		challenge : "Go out into the world and wear something that makes you slightly uncomfortable. Have a shirt hiding in your closet that you don't want the world to see you in? Wear that.",
		complete : false
	},
	embarr4 : {
		youtubeID : "o268qbb_0BM",
		quoteID : "challenge",
		challenge : "Sit or stand by yourself for several minutes today and make goofy movements with your arms. Get in the practice of letting out your inner child.",
		complete : false
	},
	embarr5 : {
		youtubeID : "IfHHetAn-Fo",
		quoteID : "happiness",
		challenge : "Determine one thing that embarrases you and set out to do it. If it's dancing, so a little jig on the way to the mailbox. If it's being caught singing, sing your heart out. Be in the moment and smile at your bravery.",
		complete : false
	},
	fail1 : {
		youtubeID : "odcLP7gOGW8",
		quoteID : "failure",
		challenge : "Look back to a time in your life in which you felt like a failure. Write down the ways you thought you failer. Compare those fears to the fears you current have.",
		complete : false
	},
	fail2 : {
		youtubeID : "DeB-AkTH8YQ",
		quoteID : "fail", 
		challenge : "Keep track of how many times you talk down to yourself today. When the day is done, write down just as many positive things about yourself.",
		complete : false
	},
	fail3 : {
		youtubeID : "oN8-Np8zLfw",
		quoteID : "hard", 
		challenge : "Do something that you are nearly guaranteed to fail. Go in knowing and understanding that you will fail. Be comfortable in the failure.",
		complete : false
	},
	fail4 : {
		youtubeID : "bjzITnc7PCE",
		quoteID : "success", 
		challenge : "Talk to someone you admire about a failure you went through. Relate to them what you learned. If you don't know who to talk to, you can talk out loud to yourself.",
		complete : false
	},
	fail5 : {
		youtubeID : "zCv-ZBy6_yU",
		quoteID : "overcoming",
		challenge : "Go into the next week without a plan. Accept that things with happen that you have no control over. Write down all of the things that happen that you think will prevent you from achieving your longterm goals. Be okay with taking an alternative path to your future.",
		complete : false
	},
	reject1 : {
		youtubeID : "dsT5eV_m7BA",
		quoteID : "rejection",
		challenge : "Use a payment method at a grocery store that you know will not be enough to cover the bill. Or simply tell the cashier that you cannot cover the bill, even if you can. Live in the moment and embrace the rejection.",
		complete : false
	},
	reject2 : {
		youtubeID : "5lE-tbb-R_A",
		quoteID : "reject", 
		challenge : "Approach someone who seems intimidating to you. Strike up small talk and hold a conversation for as long as you want. Then move on and continue your day.",
		complete : false
	},
	reject3 : {
		youtubeID : "qjhf0lBHFHY",
		quoteID : "winning",
		challenge : "Ask for something at a restaurant or store that you know they don't carry or offer. Be in the moment and thank them when you get rejected or when they offer an alternative item.",
		complete : false
	},
	reject4 : {
		youtubeID : "mQMDrSxYXjo",
		quoteID : "win",
		challenge : "Ask for a stranger's phone number, whether it's meant to form a friendship, business alliance, or romantic relationship. Feel good that you did something for yourself, regardless of the outcome.",
		complete : false
	},
	reject5 : {
		youtubeID : "w_W2LeWe-RU",
		quoteID : "joy",
		challenge : "Think of one of the most intimidating and plausible ways in which you can get rejected, whether it's applying to your dream job or asking someone out. Do it and live in the moment. Know that you are not in control of the outcome, but you control your reaction.",
		complete : false
	}
}

//hide youtube and quote div
$("#individualTopic").addClass("hide");

$(".completeBtn").on("click", function(){
	$("#individualTopic").addClass("hide");
});

//when a user clicks on a specific card button, the youtube div will appear with the relevant information
$("body").on("click", ".topicButton", function(event){
	console.log("this is working");

	//prevent button submit
	event.preventDefault();

	//show youtube and quote div
	$("#individualTopic").removeClass("hide");

	var selectedTopic = $(this).attr("id");
	console.log(selectedTopic);

	//run function to populate API information
	displaySelectedTopic(selectedTopic);
});

function displaySelectedTopic(selectedTopic) {

	//YouTube API
	var youTubeQuery = "https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyBhzdPv4V5fpngnYlWdq4cYnLpj-gZV2Zo&part=player&id="

	var currentYTTopic = topicsObject[selectedTopic].youtubeID;

	$.ajax({
		url: youTubeQuery + currentYTTopic,
		method: 'GET'
	}).then(function(response) {
		console.log(response);

		$(".youtubeDIV").html("<iframe max-width='480' max-height='270' src='https://www.youtube.com/embed/" + response.items["0"].id + "' frameborder='0'></iframe>")
	});

	//quote API
	var queryURL = "http://quotes.rest/quote/search.json?api_key=_fL6rv9zmtRHXacNHMTESweF&category=";

	var currentQuoteTopic = topicsObject[selectedTopic].quoteID;

	$.ajax({
		url: queryURL + currentQuoteTopic,
		method: 'GET',
	}).then(function (response) {

		//create variables that contain the data we want to add to the page.
		var quote = response.contents.quote;
		var author = response.contents.author;

		if (author === null) {
			author = "";
		}

		//Adds the quote to the page
		$(".quoteDIV").html(quote + "<br>" + author)
	});

	var challenge = topicsObject[selectedTopic].challenge;

	$(".challengeDIV").text(challenge);

	// "supposed" to show a task has been completed...falling asleep will fix in the AM`
	// $('.completeBtn').click( function () {
	// 	var selectedTopicDIV = $('#selectedTopic').attr('class', 'text-green').text('COMPLETE')
	// 	console.log(selectedTopicDIV)
	// })
	
};

// dynamically populate the cards on the topics page
$("#dropdown #changeDropdown").on("click", function(){

	$("#allTopics #topicsRow").empty();
	var idChange = ["change1", "change2", "change3", "change4", "change5"];
	var titleChange = ["Fear of Change 1", "Fear of Change 2", "Fear of Change 3", "Fear of Change 4", "Fear of Change 5"];

	for (var i=0; i < idChange.length; i++) {

		$("#allTopics #topicsRow").append("<div class='col-md-3'><div class='card card-cascade narrower'><div class='view overlay'><img src='#' class='img-fluid'><a><div class='mask rgba-white-slight'></div></a></div><div class='card-body'><h5 class='pink-text'><i class='fa fa-cutlery'></i>" + titleChange[i] + "</h5><h4 class='card-title'>1</h4><p class='card-text'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p><a class='btn btn-unique topicButton' id=" + idChange[i] + ">Button</a></div></div>");

	}

	$("#allTopics #topicsRow").append("<div class='col-md-12'><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width: 25%; margin-top: 20px;'></div></div></div>");
});

$("#dropdown #embarrDropdown").on("click", function(){

	$("#allTopics #topicsRow").empty();
	var idChange = ["embarr1", "embarr2", "embarr3", "embarr4", "embarr5"];
	var titleChange = ["Fear of Embarrasement 1", "Fear of Embarrasement 2", "Fear of Embarrasement 3", "Fear of Embarrasement 4", "Fear of Embarrasement 5"];

	for (var i=0; i < idChange.length; i++) {

		$("#allTopics #topicsRow").append("<div class='col-md-3'><div class='card card-cascade narrower'><div class='view overlay'><img src='#' class='img-fluid'><a><div class='mask rgba-white-slight'></div></a></div><div class='card-body'><h5 class='pink-text'><i class='fa fa-cutlery'></i>" + titleChange[i] + "</h5><h4 class='card-title'>1</h4><p class='card-text'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p><a class='btn btn-unique topicButton' id=" + idChange[i] + ">Button</a></div></div>");

	}

	$("#allTopics #topicsRow").append("<div class='col-md-12'><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width: 25%; margin-top: 20px;'></div></div></div>");
});

$("#dropdown #failDropdown").on("click", function(){

	$("#allTopics #topicsRow").empty();
	var idChange = ["fail1", "fail2", "fail3", "fail4", "fail5"];
	var titleChange = ["Fear of Fail 1", "Fear of Fail 2", "Fear of Fail 3", "Fear of Fail 4", "Fear of Fail 5"];

	for (var i=0; i < idChange.length; i++) {

		$("#allTopics #topicsRow").append("<div class='col-md-3'><div class='card card-cascade narrower'><div class='view overlay'><img src='#' class='img-fluid'><a><div class='mask rgba-white-slight'></div></a></div><div class='card-body'><h5 class='pink-text'><i class='fa fa-cutlery'></i>" + titleChange[i] + "</h5><h4 class='card-title'>1</h4><p class='card-text'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p><a class='btn btn-unique topicButton' id=" + idChange[i] + ">Button</a></div></div>");

	}
	$("#allTopics #topicsRow").append("<div class='col-md-12'><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width: 25%; margin-top: 20px;'></div></div></div>");
});

$("#dropdown #rejectDropdown").on("click", function(){

	$("#allTopics #topicsRow").empty();
	var idChange = ["reject1", "reject2", "reject3", "reject4", "reject5"];
	var titleChange = ["Fear of Rejection 1", "Fear of Rejection 2", "Fear of Rejection 3", "Fear of Rejection 4", "Fear of Rejection 5"];

	for (var i=0; i < idChange.length; i++) {

		$("#allTopics #topicsRow").append("<div class='col-md-3'><div class='card card-cascade narrower'><div class='view overlay'><img src='#' class='img-fluid'><a><div class='mask rgba-white-slight'></div></a></div><div class='card-body'><h5 class='pink-text'><i class='fa fa-cutlery'></i>" + titleChange[i] + "</h5><h4 class='card-title'>1</h4><p class='card-text'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p><a class='btn btn-unique topicButton' id=" + idChange[i] + ">Button</a></div></div>");

	}
	$("#allTopics #topicsRow").append("<div class='col-md-12'><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated' role='progressbar' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100' style='width: 25%; margin-top: 20px;'></div></div></div>");
});

});