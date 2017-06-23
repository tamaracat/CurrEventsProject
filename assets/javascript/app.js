// Variables ////////////////////////////////////////////////////////////////////////

var allSources = ["abc-news-au", "al-jazeera-english","bbc-news", "bloomberg", "cnbc", "cnn", "google-news", "breitbart-news", "daily-mail", "reuters", "the-guardian-uk", "the-new-york-times", "the-wall-street-journal", "time", "the-washington-post"];
var randomSource = Math.floor(Math.random() * allSources.length);
var selectedSource = allSources[randomSource];


// Functions ////////////////////////////////////////////////////////////////////////

function displayNewsInfo() {

    console.log("in function");

  var topic = $(this).attr("data-name");

  console.log("topic");

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
		url += '?' + $.param({'api-key': "25e343624beb4f808ff678bfbcec222c",'q': "metalica",'begin_date': "20170501"
		});
      
    $.ajax({
  		url: url,
  		method: 'GET',
		}).done(function(result) {
  		console.log(result);
		}).fail(function(err) {
  		throw err;
		});
        console.log(url);
        // Creates AJAX call for the specific movie button being clicke
  }
$(document).on("click", ".add-topic", displayNewsInfo);

// Function to select random news source

// Function to generate 10 images to DOM

function displayTenArticles () {
  var article = $(this).attr("data-name");
  var queryURL = "https://newsapi.org/v1/articles?source=" + selectedSource + "&sortBy=top&apiKey=01aed6729dc84b87b67d8eca2e2a711b"

  $.ajax({
    url:queryURL,
    method: 'GET',
  }).done(function(response) {
    console.log(response);

  });
}

// Main Process ////////////////////////////////////////////////////////////////////////
displayTenArticles();
console.log(allSources);
console.log(randomSource);
console.log(selectedSource);

