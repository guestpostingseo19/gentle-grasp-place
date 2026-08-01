<?php
/**
 * Template Name: Services Overview
 * Mirrors src/routes/services.index.tsx.
 *
 * @package RankBridge
 */

get_header();
$rb_img = rb_page_image( 'services' );

rb_page_hero(
	array(
		'eyebrow'   => 'Services',
		'title'     => 'SEO link building services that earn <span class="text-gradient">durable authority</span>',
		'subtitle'  => 'Six disciplines, each delivered by a dedicated team with its own quality standard. Run one, or combine several into a single managed backlink strategy.',
		'image'     => $rb_img['src'],
		'image_alt' => $rb_img['alt'],
	)
);
?>

<section class="px-4 pb-20">
	<div class="mx-auto max-w-6xl space-y-5">
		<?php foreach ( rb_services_data() as $i => $service ) : ?>
			<?php $rb_m = rb_service_media( $service['slug'] ); ?>
			<?php rb_reveal_open( $i * 60 ); ?>
				<a href="<?php echo esc_url( rb_service_link( $service['slug'] ) ); ?>" class="group grid gap-6 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 md:grid-cols-[1fr_1.6fr] md:p-10">
					<div>
						<img src="<?php echo esc_url( $rb_m['src'] ); ?>" alt="<?php echo esc_attr( $rb_m['alt'] ); ?>" width="1280" height="720" loading="lazy" class="mb-5 h-36 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
						<span class="font-display text-xs font-semibold text-primary">Service 0<?php echo (int) ( $i + 1 ); ?></span>
						<h2 class="mt-2 text-2xl font-semibold"><?php echo esc_html( $service['name'] ); ?></h2>
						<p class="mt-1 text-sm text-primary/80"><?php echo esc_html( $service['tagline'] ); ?></p>
					</div>
					<div>
						<p class="text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $service['summary'] ); ?></p>
						<ul class="mt-5 grid gap-2 sm:grid-cols-2">
							<?php foreach ( array_slice( $service['whatYouGet'], 0, 4 ) as $item ) : ?>
								<li class="text-sm text-muted-foreground"><span class="mr-2 text-primary">—</span><?php echo esc_html( $item['title'] ); ?></li>
							<?php endforeach; ?>
						</ul>
						<span class="mt-6 inline-flex items-center gap-2 text-sm font-medium">
							Full service details
							<span class="inline-flex transition-transform duration-300 group-hover:translate-x-1"><?php echo rb_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore ?></span>
						</span>
					</div>
				</a>
			<?php rb_reveal_close(); ?>
		<?php endforeach; ?>
	</div>
</section>

<section class="border-t border-border px-4 py-24">
	<div class="mx-auto max-w-5xl">
		<?php rb_section_title( 'Why combine them', 'Individually useful, collectively difficult to copy', 'A profile built from a single tactic has a signature. A profile built from editorial placements, expert commentary, earned coverage and genuinely cited content looks like a company people talk about.' ); ?>
		<div class="mt-12 grid gap-5 sm:grid-cols-3">
			<?php
			$rb_cards = array(
				array( 'Diversity', 'Different link types, different publication categories, different anchors — the pattern stays natural at scale.' ),
				array( 'Velocity', 'Fast-indexing edits carry a page while slower editorial placements and PR compound behind them.' ),
				array( 'Destination quality', 'Content writing keeps the pages you point at worth ranking, so acquisition is never wasted.' ),
			);
			foreach ( $rb_cards as $i => $card ) :
				?>
				<?php rb_reveal_open( $i * 90 ); ?>
					<div class="h-full rounded-2xl border border-border bg-card p-7">
						<h3 class="text-lg font-semibold text-primary"><?php echo esc_html( $card[0] ); ?></h3>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $card[1] ); ?></p>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
rb_cta_band();
get_footer();
