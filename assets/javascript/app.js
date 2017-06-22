
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
