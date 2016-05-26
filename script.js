var app = angular.module('realReddit', ['angularMoment']);

app.controller('mainController', function($scope)
{
  $scope.view = {showForm:false,
  							 orderPref:'votes',
  							 reverse: true};
  window.view = $scope.view;

  $scope.filterFunction = function(el){
		if($scope.view.searchTerm)
		{
		  var re = new RegExp($scope.view.searchTerm, 'i')
		  return (el.title.match(re) || el.author.match(re) || el.body.match(re))
		}
		return true;
	}

})

app.controller('navBar', function($rootScope, $scope){
  $rootScope.togglePostForm = function(){
  	$scope.view.showForm = !$scope.view.showForm;
  };

  $scope.orderPostsBy = function(str){
		$scope.view.orderPref = str;
		if(str === 'votes')
		{
			$scope.view.reverse = true;
		}
		else
		{
			$scope.view.reverse = false;
		}
  }

})

app.controller('postForm', function($rootScope, $scope){
	$scope.submit = function(el){
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
		$rootScope.togglePostForm();
		$scope.view.posts.push(newPost);
	
		$scope.newPost = {};
		
		$scope.postForm.$setPristine();
		$scope.view.postAttempted = false;
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
				votes: 3,
				showComments: false,
				showCommentForm: false
			},
			{
				title: "Hike through Zion",
				author: "Dunk",
				img: "http://lorempixel.com/200/200",
				body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt, nesciunt. Veritatis libero odit quia maiores, dignissimos assumenda exercitationem quae, quas consectetur earum est reprehenderit eveniet, quaerat eos eaque nostrum!",
				comments: [{author:"commenter",
									  body:"comment body"
								  }],
				date: new Date(1299941234123),
				votes: 0,
				showComments: false,
				showCommentForm: false
			},
			{
				title: "Casterly",
				author: "Tybolt Lannister",
				img: "http://lorempixel.com/200/200",
				body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, deserunt, nesciunt. Veritatis libero odit quia maiores, dignissimos assumenda exercitationem quae, quas consectetur earum est reprehenderit eveniet, quaerat eos eaque nostrum!",
				comments: [{author:"commenter",
									  body:"comment body"
								  }],
				date: new Date(1),
				votes: -1,
				showComments: false,
				showCommentForm: false
			}
		];
});

app.controller('commentForm', function($scope){
	$scope.comment = function(post){
		var newComment = {
			author:$scope.newComment.author,
			body:$scope.newComment.body
		}
		post.showCommentForm = false;
		$scope.newComment = {};
		post.comments.push(newComment);
	}

});
