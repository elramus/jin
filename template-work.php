<?php /* Template Name: Work Page Template */ get_header(); ?>

	<main role="main">

		<!-- <h1><?php // the_title(); ?></h1> -->

		<ul class="portfolio-container">
			<?php
				$args = array( 'post_type' => 'work', 'posts_per_page' => -1 );
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post();
			?>

			<li style='background-image:url("<?php the_post_thumbnail_url(); ?>");'>
				<a href="<?php echo get_permalink(); ?>">
					<div class="title"><h2><?php the_title(); ?> <i class="fas fa-arrow-right"></i></h2></div>
				</a>
			</li>

			<?php
				endwhile;
			?>

		</ul>

	</main>

<?php // get_sidebar(); ?>

<?php // get_footer(); ?>
