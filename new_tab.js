var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.tumblr.com/v2/blog/darwishism.tumblr.com/posts/photo?api_key=jsjlkvG5UxM1yFZoB1hzmgKsm5hAzuimqJGstkxlknvYyq3gfE');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
	if (xhr.status === 200) {
		var images = JSON.parse(xhr.responseText).response.posts.map(function(post){
			return post.photos[0].original_size.url
		});

		var imageIndex = Math.floor(Math.random() * images.length)
		document.getElementById("darwishism-post").src = images[imageIndex];
		console.log(images)
	}
};
xhr.send();