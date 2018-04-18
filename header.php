<?php header("Access-Control-Allow-Origin: *"); ?>

<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
		<link href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico" rel="icon">
		<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,700" rel="stylesheet">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<script defer src="https://pro.fontawesome.com/releases/v5.0.8/js/solid.js" integrity="sha384-jTxqWCb7UqRDQDd2Nkuh5BkHe9k+ElbFLa3NaJfid5kBK/+cVktzVRXrw0isFWxf" crossorigin="anonymous"></script>
		<!-- <script defer src="https://pro.fontawesome.com/releases/v5.0.8/js/light.js" integrity="sha384-mfSnp84URDGC1t+cg63LgVKwEs63ulRUpjNneyDZMGMAE9ZKUNZ85rMBMHucGLYP" crossorigin="anonymous"></script> -->
		<script defer src="https://pro.fontawesome.com/releases/v5.0.8/js/brands.js" integrity="sha384-gJijC/2qM/p3zm2wHECHX1OMLdzlu61sNp7YfmFQxo+OyT9hO1orX7MmnHhaoXQ4" crossorigin="anonymous"></script>
		<script defer src="https://pro.fontawesome.com/releases/v5.0.8/js/fontawesome.js" integrity="sha384-Ht3fAeBiX/rVmKVyMwONAIIt0aRoPzZgq1FzdRgR9zFo+Kcd8YDwUbFlTItfaYW4" crossorigin="anonymous"></script>

		<?php wp_head(); ?>

	</head>
	<body <?php body_class(); ?>>

		<div class="wrapper-for-sticky">

			<header class="site-header outer-wrap">

				<a href="<?php echo get_home_url(); ?>"><h1 class='site-title'>Bryan Michael Haney</h1></a>

				<a href='#' class='nav-control'>
					<div class='hamburger top-bun'></div>
					<div class='hamburger meat'></div>
					<div class='hamburger bottom-bun'></div>
				</a>

				<nav class="site-nav">
					<?php html5blank_nav(); ?>
					<a href="<?php echo home_url(); ?>/wp-admin" class="admin-login">Admin</a>
				</nav>

			</header>

			<div class="menu-shader"></div>