<?php
/**
 * Template Name: About
 * Mirrors src/routes/about.tsx.
 *
 * @package RankBridge
 */

get_header();
$rb_img = rb_page_image( 'about' );

rb_page_hero(
	array(
		'eyebrow'   => 'About us',
		'title'     => 'A small studio with an <span class="text-gradient">unfashionably slow</span> standard',
		'subtitle'  => 'RankBridge exists because most link building is sold by volume and delivered by template. We build the other kind — fewer placements, each one defensible.',
		'image'     => $rb_img['src'],
		'image_alt' => $rb_img['alt'],
	)
);

$rb_intro = array(
	'We are a team of outreach specialists, editors and writers who spend our days talking to publishers. That is the whole business. There is no proprietary tool, no private network of sites we quietly own, and no automated sequence pretending to be a person.',
	'What we do have is a vetting process refined over seven years, a roster of editors who answer our emails, and a stubborn refusal to place anything we would not be comfortable seeing in a client\'s audit two years from now.',
	'Clients come to us after a bad experience roughly half the time. The pattern is always the same: a large volume of links from sites with inflated metrics, no traffic, and an outbound profile that spans every vertical imaginable. Undoing that takes longer than doing it properly would have.',
);

$rb_values = array(
	array( 'Honesty over upsell', 'If link acquisition is not your bottleneck, we say so on the first call. We have turned down work more than once because the answer was a technical fix or better content.' ),
	array( 'Quality is a floor, not a tier', 'There is no cheaper package where the vetting relaxes. Every placement passes the same checks regardless of budget.' ),
	array( 'Documentation as standard', 'You own every record of the work: shortlists, briefs, live URLs, anchors and metrics. Nothing lives only in our systems.' ),
	array( 'Patience as a strategy', 'We plan in quarters. Results that arrive in three weeks tend to leave just as quickly.' ),
);

$rb_timeline = array(
	array( '2019', 'Started as two outreach specialists', 'Founded after years inside agencies where link quality was measured by spreadsheet volume. The original brief was simple: place articles we would be happy to sign.' ),
	array( '2021', 'Editorial team formed', 'In-house writers replaced freelancers so every draft met the same standard before an editor saw it.' ),
	array( '2023', 'Digital PR practice launched', 'Data-led campaigns joined the mix, opening publications that contributed content could never reach.' ),
	array( '2026', 'Six disciplines, one programme', 'Today RankBridge runs managed authority programmes across thirty-eight verticals, with the same vetting standard applied to every placement.' ),
);
?>

<section class="px-4 pb-20">
	<div class="mx-auto max-w-3xl space-y-5 text-muted-foreground">
		<?php foreach ( $rb_intro as $i => $paragraph ) : ?>
			<?php rb_reveal_open( $i * 80 ); ?>
				<p class="leading-relaxed"><?php echo esc_html( $paragraph ); ?></p>
			<?php rb_reveal_close(); ?>
		<?php endforeach; ?>
	</div>
</section>

<section class="border-y border-border bg-card/30 px-4 py-24">
	<div class="mx-auto max-w-5xl">
		<?php rb_section_title( 'What we believe', 'Four commitments we do not negotiate' ); ?>
		<div class="mt-12 grid gap-5 sm:grid-cols-2">
			<?php foreach ( $rb_values as $i => $value ) : ?>
				<?php rb_reveal_open( ( $i % 2 ) * 90 ); ?>
					<div class="h-full rounded-2xl border border-border bg-background p-7">
						<h3 class="text-lg font-semibold text-primary"><?php echo esc_html( $value[0] ); ?></h3>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $value[1] ); ?></p>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="px-4 py-24">
	<div class="mx-auto max-w-4xl">
		<?php rb_section_title( 'Our story', 'How RankBridge got here' ); ?>
		<div class="mt-12 space-y-4">
			<?php foreach ( $rb_timeline as $i => $item ) : ?>
				<?php rb_reveal_open( $i * 70 ); ?>
					<div class="flex gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
						<span class="font-display text-lg font-bold text-primary"><?php echo esc_html( $item[0] ); ?></span>
						<div>
							<h3 class="text-lg font-semibold"><?php echo esc_html( $item[1] ); ?></h3>
							<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $item[2] ); ?></p>
						</div>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
rb_cta_band( 'Prefer to talk before you read another page?', 'Send us your domain and the pages you want to move. You will get a considered reply from a person, usually within one working day.' );
get_footer();
