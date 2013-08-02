

var
  search = require('http://api.yummly.com/v1/api/recipes?_app_id=05be4456&_app_key=6c62bf081decd53a0904518503e507b7&callback=search'),

function search({ // calling search first to get a recipe id
  authentication: authentication,
  query: 'pasta'
}, function (error, response, json) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    recipe({
      authentication: authentication,
      id: json.matches[0].id // id of the first recipe returned by search
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else {
        console.log(json);
      }
    });
  }
});
	
	//<p><a href="http://api.yummly.com/v1/api/recipes?_app_id=05be4456&_app_key=6c62bf081decd53a0904518503e507b7&q=pecan pie"</a></p>
