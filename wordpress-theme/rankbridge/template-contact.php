<?php
/**
 * Template Name: Contact
 * Mirrors src/routes/contact.tsx — deliberately no contact form.
 *
 * @package RankBridge
 */

get_header();
$rb_img = rb_page_image( 'contact' );

rb_page_hero(
	array(
		'eyebrow'   => 'Contact',
		'title'     => 'Talk to a <span class="text-gradient">person</span>, not a ticket queue',
		'subtitle'  => 'We deliberately do not run a contact form. Email reaches the team directly, keeps your context intact, and gets you a considered reply instead of an auto-response.',
		'image'     => $rb_img['src'],
		'image_alt' => $rb_img['alt'],
	)
);

$rb_channels = array(
	array( 'mail', 'New enquiries', 'hello@rankbridge.com', 'Campaign briefs, pricing questions and anything about starting work together.' ),
	array( 'message-square', 'Editorial & submissions', 'editorial@rankbridge.com', 'Contributor pitches and questions about our own publishing guidelines.' ),
	array( 'globe', 'Partnerships', 'partners@rankbridge.com', 'Agencies, publishers and white-label fulfilment conversations.' ),
);

$rb_before = array(
	array( 'Your domain', 'So we can look at your current profile before replying rather than guessing.' ),
	array( 'The pages you want to move', 'Two or three URLs and the queries you associate with them is plenty.' ),
	array( 'Two competitors', 'The sites currently outranking you tell us more than a keyword list does.' ),
	array( 'Timeline and rough budget', 'It saves both of us a round of email if the scope is not a fit.' ),
);
?>

<section class="px-4 pb-20">
	<div class="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
		<?php foreach ( $rb_channels as $i => $channel ) : ?>
			<?php rb_reveal_open( $i * 90 ); ?>
				<div class="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-colors duration-500 hover:border-primary/50">
					<span class="inline-flex text-primary"><?php echo rb_icon( $channel[0], 'h-6 w-6' ); // phpcs:ignore ?></span>
					<span class="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><?php echo esc_html( $channel[1] ); ?></span>
					<a href="mailto:<?php echo esc_attr( $channel[2] ); ?>" class="mt-2 break-all text-lg font-semibold transition-colors hover:text-primary"><?php echo esc_html( $channel[2] ); ?></a>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $channel[3] ); ?></p>
				</div>
			<?php rb_reveal_close(); ?>
		<?php endforeach; ?>
	</div>
</section>

<section class="border-y border-border bg-card/30 px-4 py-24">
	<div class="mx-auto max-w-4xl">
		<?php rb_section_title( 'Before you write', 'What to include for the fastest useful reply', 'You do not need a full brief. These four details let us answer with something specific rather than a generic rate card.' ); ?>
		<div class="mt-12 grid gap-4 sm:grid-cols-2">
			<?php foreach ( $rb_before as $i => $item ) : ?>
				<?php rb_reveal_open( ( $i % 2 ) * 90 ); ?>
					<div class="h-full rounded-2xl border border-border bg-background p-6">
						<h3 class="font-semibold text-primary"><?php echo esc_html( $item[0] ); ?></h3>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $item[1] ); ?></p>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="px-4 py-24">
	<div class="mx-auto max-w-4xl">
		<div class="grid gap-5 sm:grid-cols-2">
			<?php rb_reveal_open(); ?>
				<div class="h-full rounded-2xl border border-border bg-card p-8">
					<span class="inline-flex text-primary"><?php echo rb_icon( 'clock', 'h-6 w-6' ); // phpcs:ignore ?></span>
					<h2 class="mt-4 text-xl font-semibold">Response times</h2>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground">New enquiries are answered within one working day, Monday to Friday. Editorial and submission emails are reviewed in batches and typically answered within three working days.</p>
				</div>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 90 ); ?>
				<div class="h-full rounded-2xl border border-border bg-card p-8">
					<span class="inline-flex text-primary"><?php echo rb_icon( 'globe', 'h-6 w-6' ); // phpcs:ignore ?></span>
					<h2 class="mt-4 text-xl font-semibold">Where we work</h2>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground">The team operates remotely across UK and European time zones and works with clients worldwide. Calls are scheduled by email once we have exchanged the basics.</p>
				</div>
			<?php rb_reveal_close(); ?>
		</div>

		<?php rb_reveal_open( 140 ); ?>
			<div class="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
				<h2 class="text-xl font-semibold">Submitting an article instead?</h2>
				<p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">Contributor guidelines, accepted topics and the review process are set out on our Advertise With Us page. Reading it first saves a round of correspondence.</p>
				<a href="<?php echo esc_url( rb_page_link( 'advertise' ) ); ?>" class="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110">Read the guidelines</a>
			</div>
		<?php rb_reveal_close(); ?>
	</div>
</section>

<?php
get_footer();
