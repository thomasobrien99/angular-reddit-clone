var app = angular.module('realReddit', []);
app.controller('mainController', function($scope)
{
  $scope.view = {showForm:false};
})
app.controller('navBar', function($scope){
  $scope.togglePostForm = function(){
  	$scope.view.showForm = !$scope.view.showForm;
  };
})
app.controller('postForm', function($scope){
	$scope.submit = function(el){
		debugger
		var newPost = {
			title: $scope.newPost.title,
			author: $scope.newPost.author,
			img: "http://lorempixel.com/200/200", //$scope.newPost.img,
			body: $scope.newPost.body,
			comments: [{author:"commenter",
									body:"comment body"
								}],
			date: Date.now(),
			votes: 0,
			showComments:false
		}
		
		$scope.view.posts.push(newPost);

	}
});
app.controller('posts', function($scope){
	$scope.view.posts = [
			{
				title: "Outside Aspen, CO",
				author: "Ned Stark",
				img: "http://lorempixel.com/200/200",
				body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt, nesciunt. Veritatis libero odit quia maiores, dignissimos assumenda exercitationem quae, quas consectetur earum est reprehenderit eveniet, quaerat eos eaque nostrum!",
				comments: [{author:"commenter",
									  body:"comment body"
								  }],
				date: Date.now(),
				votes: 0,
				showComments: false,
				showCommentForm: false
			}
		];

	$scope.vote = function(post, vote){
		post.votes += vote;
	}

	$scope.showComments = function(post){
    post.showComments = !post.showComments;
	}
	$scope.showCommentForm = function(post){
		post.showCommentForm = !post.showCommentForm;
	}
	$scope.comment = function(post){
		// window.scope = $scope;
		debugger
		// console.log("ttteeesssttt")
		var newComment = {
			author:$scope.newComment.author,
			body:$scope.newComment.body
		}
		post.comments.push(newComment);
	}
});