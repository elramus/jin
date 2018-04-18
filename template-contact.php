<?php /* Template Name: Contact Page Template */ get_header(); ?>

	<?php
		if ($_SERVER['REQUEST_METHOD'] === 'POST') {

			// if it's a post, then a message has been sent
			$submit = true;

			// send the message
			$to = get_option('admin_email');
			$subject = 'New message from bryanhaney.com';

			$contact_name = isset($_POST['contact_name']) ? strip_tags($_POST['contact_name']) : '';
			$contact_email = isset($_POST['contact_email']) ? strip_tags($_POST['contact_email']) : '';
			$contact_message = isset($_POST['contact_message']) ? strip_tags($_POST['contact_message']) : '';

			$msg = 'Name: ' . $contact_name . '<br>';
			$msg .= 'Email: ' . $contact_email . '<br>';
			$msg .= 'Message: ' . $contact_message;

			$headers[] = 'Content-type: text/html';
			$headers[] = 'From:' . $contact_name . ' <' . $contact_email . '>';

			$sent_message = wp_mail($to, $subject, $msg, $headers);

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
					<form id="contact-form" method="post" action="http://bryanhaney.com/contact">
						<h5>Name</h5>
						<input type='text' name="contact_name" required placeholder="Your Name...">
						<h5>Email</h5>
						<input type='email' name="contact_email" required placeholder="Your Email...">
						<h5>Message</h5>
						<textarea type='text' name="contact_message" max='2000' required placeholder='Your Message...' rows="1"></textarea>
						<button type="submit" class="send"><i class="fas fa-paper-plane"></i>Send</button>
					</form>
				<?php } ?>
			</div>

		</article>

	<?php endwhile; endif; ?>

	</main>

<?php // get_sidebar(); ?>

<?php get_footer(); ?>
