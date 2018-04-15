<?php /* Template Name: Contact Page Template */ get_header(); ?>

	<?php
		if ($_SERVER['REQUEST_METHOD'] === 'POST') {

			// if it's a post, then a message has been sent
			$submit = true;

			// send the message
			$to = 'luke.ramus@gmail.com';
			$subject = 'test email subject';
			$message = 'test email message';
			$headers[] = 'From:no-reply@bryanhaney.com';
			$sent_message = wp_mail($to, $subject, $message, $headers);

		} else {
			// if not a POST, then it's a normal page load
			$submit = false;
		}
  ?>

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
				<?php the_content(); ?>
				<?php if ($submit === true) { ?>
					<div class="message-success">
						<h4><i class="fas fa-check-circle"></i>Message sent. Thanks!</h4>
					</div>
				<?php } else { ?>
					<?php // phpinfo(); ?>
					<form id="contact-form" method="post" action="<?php the_permalink(); ?>">
						<h5>Name</h5>
						<input type='text' required placeholder="Your Name...">
						<h5>Email</h5>
						<input type='text' required placeholder="Your Email...">
						<h5>Message</h5>
						<textarea type='text' max='2000' required placeholder='Your Message...' rows="1"></textarea>
						<button type="submit" class="send"><i class="fas fa-paper-plane"></i>Send</button>
					</form>
				<?php } ?>
			</div>

		</article>

	<?php endwhile; endif; ?>

	</main>

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
