<?php get_header(); ?>

	<main role="main">

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<h3 class='inner-wrap page-title'><?php the_title(); ?></h3>
			<div class='video-container inner-wrap-oversized <?php echo !get_field("video_url") ? "no-video" : false; ?>'>
				<div class="video">
					<?php if (get_field('video_url')) { ?>
						<div class="play"><i class="fas fa-play"></i></div>
					<?php } ?>
					<div class="curtain" style="background-image:url('<?php echo get_the_post_thumbnail_url(); ?>');"></div>
						<?php if (get_field('video_url')) { ?><iframe data-src="<?php echo 'https://player.vimeo.com/video/' . get_field('video_url') . '?autoplay=1'; ?>" frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><?php } ?>
				</div>
			</div>

			<div class="content inner-wrap">
				<div class="left">
				<?php if (strlen(get_the_content())) { ?>
					<h3><?php the_title(); ?></h3>
					<?php the_content(); ?>
				<?php } ?>
				</div>
				<div class="right">
				<?php if (strlen(get_field('credits'))) { ?>
					<div class="credits">
						<h5>Credits</h5>
						<p><?php echo get_field('credits'); ?></p>
					</div>
				<?php } ?>
				</div>
			</div>

		</article>

		<div class="pagination inner-wrap">
			<div class="prev">
				<?php previous_post_link('%link','&laquo; %title'); ?>
			</div>
			<div class="next">
				<?php next_post_link('%link', '%title &raquo;'); ?>
			</div>
		</div>

	<?php endwhile; ?>

<?php endif; ?>

	</main>

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
