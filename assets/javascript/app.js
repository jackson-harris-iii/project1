$(document).ready(function () {

var topicsObject = {
	change1 : {
		youtubeID : "GBz-pwTyxtA",
		// quoteID : 
		challenge : "Go to the grocery store and buy a food you've never eaten. Prepare and try it at home.",
		complete : false
	},
	change2 : {
		youtubeID : "5iqqLLefHsc",
		// quoteID : 
		challenge : "Choose a new town or area of your town to explore. Don't overplan it. Instead, go and walk around. Embrace being in an unfamiliar environment.",
		complete : false
	},
	change3 : {
		youtubeID : "jpA41I_Jc_4",
		// quoteID : 
		challenge : "Rearrange your living space. Get rid of clutter and open up the space to welcome new beginnings.",
		complete : false
	},
	change4 : {
		youtubeID : "267cB6tNeUc",
		// quoteID : 
		challenge : "Enroll in a local class to learn something completely new.",
		complete : false
	},
	change5 : {
		youtubeID : "NK-WOZZ-PcI",
		// quoteID : 
		challenge : "Change a major component of your daily routine, whether it's where you get coffee, how you get to work, or something else. Get into the moment by being aware of the newness.",
		complete : false
	},
	embarr1 : {
		youtubeID : "RFjN_SM7ijc",
		// quoteID : 
		challenge : "Engage totally with the first thing that comes to mind when it comes to embarrasement. Laugh at yourself.",
		complete : false
	},
	embarr2 : {
		youtubeID : "9MW1OWcb39M",
		// quoteID : 
		challenge : "Go into today promising youself not to say sorry. If you catch yourself, be aware of it. Ask yourself whether you said it out of habit.",
		complete : false
	},
	embarr3 : {
		youtubeID : "9gIy8tShxTw",
		// quoteID : 
		challenge : "Go out into the world and wear something that makes you slightly uncomfortable. Have a shirt hiding in your closet that you don't want the world to see you in? Wear that.",
		complete : false
	},
	embarr4 : {
		youtubeID : "o268qbb_0BM",
		// quoteID : 
		challenge : "Sit or stand by yourself for several minutes today and make goofy movements with your arms. Get in the practice of letting out your inner child.",
		complete : false
	},
	embarr5 : {
		youtubeID : "IfHHetAn-Fo",
		// quoteID : 
		challenge : "Determine one thing that embarrases you and set out to do it. If it's dancing, so a little jig on the way to the mailbox. If it's being caught singing, sing your heart out. Be in the moment and smile at your bravery.",
		complete : false
	},
	fail1 : {
		youtubeID : "odcLP7gOGW8",
		// quoteID : 
		challenge : "Look back to a time in your life in which you felt like a failure. Write down the ways you thought you failer. Compare those fears to the fears you current have.",
		complete : false
	},
	fail2 : {
		youtubeID : "DeB-AkTH8YQ",
		// quoteID : 
		challenge : "Keep track of how many times you talk down to yourself today. When the day is done, write down just as many positive things about yourself.",
		complete : false
	},
	fail3 : {
		youtubeID : "oN8-Np8zLfw",
		// quoteID : 
		challenge : "Do something that you are nearly guaranteed to fail. Go in knowing and understanding that you will fail. Be comfortable in the failure.",
		complete : false
	},
	fail4 : {
		youtubeID : "bjzITnc7PCE",
		// quoteID : 
		challenge : "Talk to someone you admire about a failure you went through. Relate to them what you learned. If you don't know who to talk to, you can talk out loud to yourself.",
		complete : false
	},
	fail5 : {
		youtubeID : "zCv-ZBy6_yU",
		// quoteID : 
		challenge : "Go into the next week without a plan. Accept that things with happen that you have no control over. Write down all of the things that happen that you think will prevent you from achieving your longterm goals. Be okay with taking an alternative path to your future.",
		complete : false
	},
	reject1 : {
		youtubeID : "dsT5eV_m7BA",
		// quoteID : 
		challenge : "Use a payment method at a grocery store that you know will not be enough to cover the bill. Or simply tell the cashier that you cannot cover the bill, even if you can. Live in the moment and embrace the rejection.",
		complete : false
	},
	reject2 : {
		youtubeID : "5lE-tbb-R_A",
		// quoteID : 
		challenge : "Approach someone who seems intimidating to you. Strike up small talk and hold a conversation for as long as you want. Then move on and continue your day.",
		complete : false
	},
	reject3 : {
		youtubeID : "qjhf0lBHFHY",
		// quoteID : 
		challenge : "Ask for something at a restaurant or store that you know they don't carry or offer. Be in the moment and thank them when you get rejected or when they offer an alternative item.",
		complete : false
	},
	reject4 : {
		youtubeID : "mQMDrSxYXjo",
		// quoteID : 
		challenge : "Ask for a stranger's phone number, whether it's meant to form a friendship, business alliance, or romantic relationship. Feel good that you did something for yourself, regardless of the outcome.",
		complete : false
	},
	reject5 : {
		youtubeID : "w_W2LeWe-RU",
		// quoteID : 
		challenge : "Think of one of the most intimidating and plausible ways in which you can get rejected, whether it's applying to your dream job or asking someone out. Do it and live in the moment. Know that you are not in control of the outcome, but you control your reaction.",
		complete : false
	}
};



function displaySelectedTopic() {
	//sets the selected topic variable to the unique id we can use to grab data to populate the topic display page.
	//similar to your question objects having that unique question identifier.
	selectedTopic = this.id
	console.log(selectedTopic)

	var currentYTTopic = 'topicsObject.'+ selectedTopic +'.youtubeID';

	//hide other topic buttons
	$('#allTopics').hide()

	//shows selected topic data area
	$('#individualTopic').show()

	//YouTube API
	var youTubeQuery = "https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyBhzdPv4V5fpngnYlWdq4cYnLpj-gZV2Zo&part=player&id="

	$.ajax({
		url: youTubeQuery + currentYTTopic,
		method: 'GET'
	}).then(function(response) {
		console.log(response);

		$(".youtubeDIV").html("<iframe max-width='480' max-height='270' src='https://www.youtube.com/embed/" + response.items["0"].id + "' frameborder='0'></iframe>")
	});

	//This will the area that calls the quote API
	var queryURL = 'http://quotes.rest/qod.json?category=management'
	$.ajax({
		url: queryURL,
		method: 'GET',
	}).then(function (response) {
		console.log(response)

		//create variables that contain the data we want to add to the page.
		var quote = response.contents.quotes["0"].quote
		var author = response.contents.quotes["0"].author
		console.log(author)

		//Adds the quote to the page
		$('.quoteDIV').text(quote)
	});

	// "supposed" to show a task has been completed...falling asleep will fix in the AM`
	// $('.completeBtn').click( function () {
	// 	var selectedTopicDIV = $('#selectedTopic').attr('class', 'text-green').text('COMPLETE')
	// 	console.log(selectedTopicDIV)
	// })
	
};

//calls the function that changes the visibility of the topic buttons and displays the selected topic page.
$('body').on('click', '.topicButton', displaySelectedTopic)

//backbutton returns user to previus page hides individual topic div and shows all topic buttons
$('body').on('click', '.backBtn', function () {
	$('#individualTopic').hide()
	$('#allTopics').show()
})

//hides individual topic div when the page loads
$('#individualTopic').hide()


});