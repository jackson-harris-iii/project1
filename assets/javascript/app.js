$(document).ready(function () {

	// YouTube API
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	var randomVideo = ["motivation", "inspiration", "success"];

	// //be able to add items from the random video array and query one of them
	// for (var i=0; i<randomVideo.length; i++) {
	// 	//grab video id based on this randomVideo name
	// 	var apiRequest = buildApiRequest('GET',
	//         '/youtube/v3/search',
	//         {'maxResults': '25',
	//          'part': 'snippet',
	//          'q': randomVideo,
	//          'type': ''});
	// };

	function onYouTubeIframeAPIReady() {

		player = new YT.Player('player', {
			height: '390',
			width: '640',
			listProperty: search,
			list: randomVideo,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}

	// They Said So API


	// Variables

	// Functions
	function displaySelectedTopic() {
		//sets the selected topic variable to the unique id we can use to grab data to populate the topic display page.
		//similar to your question objects having that unique question identifier.
		selectedTopic = this.id
		console.log(selectedTopic)

		//hide other topic buttons
		$('#allTopics').hide()

		//shows selected topic data area
		$('#individualTopic').show()



		//This will be the area that calls the youTube API (or invokes the function that does so)



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


	})

		
	
}

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