var xhr = new XMLHttpRequest();
var offset = Math.floor(Math.random() * 285)
xhr.open('GET', 'https://api.tumblr.com/v2/blog/darwishism.tumblr.com/posts/photo?api_key=jsjlkvG5UxM1yFZoB1hzmgKsm5hAzuimqJGstkxlknvYyq3gfE&limit=1&offset=' + offset);
xhr.setRequestHeader('Content-Type', 'application/json');


xhr.onload = function() {
  if (xhr.status === 200) {
    var post = JSON.parse(xhr.responseText).response.posts[0]
    var photos = post.photos
    var photoIndex = Math.floor(Math.random() * photos.length)
    document.getElementById("darwishism-post").src = photos[photoIndex].original_size.url;
    document.getElementById("avatar").style = {display: ''};
    document.getElementById("avatar").href = post.post_url;

    var year2018 = (new Date('1/1/2018')).getTime() / 1000;
    var recentPost = post.timestamp > year2018;
    if(!recentPost) {
    	var translationBox = document.getElementById("translation-box")
    	translationBox.innerHTML = post.caption;
    	translationBox.style = {display: ''};
    }
  }
};
xhr.send();
