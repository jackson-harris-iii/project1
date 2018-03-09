$(document).ready(function () {

var topicsObject = {
	change1 : {
		youtubeID : "GBz-pwTyxtA",
		quoteID : 
		challenge : "Go to the grocery store and buy a food you've never eaten. Prepare and try it at home."
		complete : false
	},
	change2 : {
		youtubeID : "5iqqLLefHsc",
		quoteID : 
		challenge : "Choose a new town or area of your town to explore. Don't overplan it. Instead, go and walk around. Embrace being in an unfamiliar environment."
		complete : false
	},
	change3 : {
		youtubeID : "jpA41I_Jc_4",
		quoteID : 
		challenge : "Rearrange your living space. Get rid of clutter and open up the space to welcome new beginnings."
		complete : false
	},
	change4 : {
		youtubeID : "267cB6tNeUc",
		quoteID : 
		challenge : "Enroll in a local class to learn something completely new."
		complete : false
	},
	change5 : {
		youtubeID : "NK-WOZZ-PcI",
		quoteID : 
		challenge : "."
		complete : false
	},
	embarr1 : {
		youtubeID : "RFjN_SM7ijc",
		quoteID : 
		challenge : "."
		complete : false
	},
	embarr2 : {
		youtubeID : "9MW1OWcb39M",
		quoteID : 
		challenge : "."
		complete : false
	},
	embarr3 : {
		youtubeID : "9gIy8tShxTw",
		quoteID : 
		challenge : "."
		complete : false
	},
	embarr4 : {
		youtubeID : "o268qbb_0BM",
		quoteID : 
		challenge : "."
		complete : false
	},
	embarr5 : {
		youtubeID : "IfHHetAn-Fo",
		quoteID : 
		challenge : "."
		complete : false
	},
	fail1 : {
		youtubeID : "odcLP7gOGW8",
		quoteID : 
		challenge : "."
		complete : false
	},
	fail2 : {
		youtubeID : "DeB-AkTH8YQ",
		quoteID : 
		challenge : "."
		complete : false
	},
	fail3 : {
		youtubeID : "oN8-Np8zLfw",
		quoteID : 
		challenge : "."
		complete : false
	},
	fail4 : {
		youtubeID : "bjzITnc7PCE",
		quoteID : 
		challenge : "."
		complete : false
	},
	fail5 : {
		youtubeID : "zCv-ZBy6_yU",
		quoteID : 
		challenge : "."
		complete : false
	},
	reject1 : {
		youtubeID : "dsT5eV_m7BA",
		quoteID : 
		challenge : "."
		complete : false
	},
	reject2 : {
		youtubeID : "5lE-tbb-R_A",
		quoteID : 
		challenge : "."
		complete : false
	},
	reject3 : {
		youtubeID : "qjhf0lBHFHY",
		quoteID : 
		challenge : "."
		complete : false
	},
	reject4 : {
		youtubeID : "mQMDrSxYXjo",
		quoteID : 
		challenge : "."
		complete : false
	},
	reject5 : {
		youtubeID : "w_W2LeWe-RU",
		quoteID : 
		challenge : "."
		complete : false
	}
};
}


function displaySelectedTopic() {
	//sets the selected topic variable to the unique id we can use to grab data to populate the topic display page.
	//similar to your question objects having that unique question identifier.
	selectedTopic = this.id
	console.log(selectedTopic)

	//hide other topic buttons
	$('#allTopics').hide()

	//shows selected topic data area
	$('#individualTopic').show()

	//YouTube API
	//Nelly suggested making this a separate function and passing through an argument
	var youTubeQuery = "https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyBhzdPv4V5fpngnYlWdq4cYnLpj-gZV2Zo&part=player"
	// var randomVideo = ["motivation", "inspiration", "success"];

	$.ajax({
		url: youTubeQuery + "&id=hKoYeR0dvkU",
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