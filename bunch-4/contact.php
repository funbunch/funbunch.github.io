<!DOCTYPE html>

<html>
<head>
	<title>**bunchofiDeas - Contact</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<meta name="description" content="A developer portfolio"/>
	<meta name="author" content="Shannan Bunch">
	<meta name="keywords" content="HTML5, CSS3, JS, jQuery, developer, design, code"/>

	<!-- Optimized mobile viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">


    <!--[if !IE 7]>
	<style type="text/css">
		#wrap {display:table;height:100%}
	</style>
	<![endif]-->

	
	<!-- Place favicon.ico and apple-touch-icon.png in root directory -->
	<link rel="icon" type="image/x-icon" href="favicon.ico"/>
	<!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png">
	<!-- For first- and second-generation iPad: -->
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png">
	<!-- For iPhone with high-resolution Retina display: -->
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png">
	<!-- For third-generation iPad with high-resolution Retina display: -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144-precomposed.png">
	<link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' type='text/css'>
	<link href="style.css" rel="stylesheet" />

	<!-- HTML5 IE Enabling Script & CSS3 Media Queries -->
	<!--[if lt IE 9]>
	<script src="https://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<script src="js/respond.min.js"></script><![endif]-->

</head>

<body>
	<div class="contact" id="wrap">
	<header class="main_nav">
		<div id="logo">
			<h1><a href="index.html" title="BunchofiDeas">BunchofiDeas</a></h1>
		</div>
		<nav>
			<ul>
				<li><a href="work.html" id="nav1">Work</a></li>
				<li><a href="#" id="nav2">Contact</a></li>
				<li><a href="resources.html" id="nav3">Resources</a></li>
				<li><a href="playground.html" id="nav4">Playground</a></li>
			</ul>
		</nav>
	</header>

	<section class="contact_page">

		<?php
			if (!empty($_POST)) {
			$name = $_POST['name'];
			$email = $_POST['email'];
			$message = $_POST['message'];
			$from = 'From: BunchofiDeas';
			$to = 'me@bunchofideas.com';
			$subject = 'Hi There!';
			$body = "From: $name\n E-Mail: $email\n Message:\n $message";
		
			if ($name != '' && $email != '') {	
					if (mail ($to, $subject, $body, $from)) {
						echo '<p>Your message has been sent!</p>';
					} else {
						echo '<p>Something went wrong, go back and try again!</p>';
						}
				}
			}
		?> 




		<header class="contact_head">
			<h4>Get In Touch</h4>
			<ul class="contact_info">
				<li id="city">Los Angeles</li>
				<li id="phone"><a class="mobile" href="tel:310-422-7833">310.422.7833</a></li>
				<li id="email"><a href="mailto:bunchofideas.com@gmail.com">bunchofideas.com@gmail.com</a></li>
				<li id="resume"><a href="resume.pdf" target="_blank">Resume</a></li>
			</ul>
		</header>

		<form method="post" action="contact.php">
		<label>Name:</label>
		<input id="name" name="name" type="text" placeholder="Your Name" required autofocus>
		<label>Email:</label>
		<input id="guest_email" name="email" type="email" placeholder="bunch@yourdomain.com" required>
		<label>Leave a Message:</label>
		<textarea name="message" placeholder="Your message"></textarea>
		<input id="submit" name="submit" type="submit" value="Submit"> 
		</form>  
	

	</section>


	</div>
 	<footer class="cf">
 		<div class="social">
			<ul class="social-menu">
				<li id="facebook"><a href="https://www.facebook.com/pages/BunchofIdeas/569087643105101?fref=ts" target="_blank">Facebook</a></li>
				<li id="linkedin"><a href="https://www.linkedin.com/in/sbunch" target="_blank">LinkedIn</a></li>
				<li id="flickr"><a href="https://www.flickr.com/ideabunch/" target="_blank">Flickr</a></li>
			</ul>
		</div>
		
			<p>&copy; 2013 BunchofIdeas</p>
	</footer>
	<!-- JavaScript at the bottom for fast page loading -->

	<!-- Minimized jQuery from Google CDN -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>

	
	<!-- A fix for the iOS orientationchange zoom bug. -->
	<script src="js/ios-orientationchange-fix.js"></script>

</body>
</html>