<!DOCTYPE html>
<html lang="en">

<html>

<head>
	<title>TrelloMello</title>
	<link href="/css/trellomello.css" rel="stylesheet">
</head>

<body>
	<nav id="navbar">
		<div id="siteheaderdiv"><h1 class="navbar-text"><a href="/">TrelloMello</a></h1></div>

		@if (Auth::check())
			<div id="userdisplaydiv"><h3 class="navbar-text">william</h3><div>
		@endif
	</nav>
	
	<div id="container">
		@yield ("content")
	</div>

</body>

</html>