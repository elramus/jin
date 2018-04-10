<?php get_header(); ?>

	<main role="main">

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<div class="inner-wrap content">
				<h3 class='page-title'>
					<?php if (get_field('top_headline')) {
						echo get_field('top_headline');
					} else {
						the_title();
					} ?>
				</h3>
				<div class="featured-image-container">
					<?php the_post_thumbnail(); ?>
				</div>
				<?php the_content(); ?>
				<div class="links">
					<?php if (get_field('resume')) { ?>
						<a href="<?php echo get_field('resume')['url']; ?>"><i class="fas fa-arrow-alt-to-bottom"></i>Resume</a>
					<?php } ?>
					<?php if (get_field('linkedin')) { ?>
						<a href="<?php echo get_field('linkedin'); ?>" target="_blank"><i class="fab fa-linkedin"></i></a>
					<?php } ?>
					<?php if (get_field('email')) { ?>
						<a href="mailto:<?php echo get_field('email'); ?>"><i class="fas fa-envelope"></i></a>
					<?php } ?>
				</div>
			</div>

		</article>

	<?php endwhile; endif; ?>

	</main>

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
