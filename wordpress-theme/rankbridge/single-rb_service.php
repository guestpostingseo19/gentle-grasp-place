<?php
/**
 * Single service — mirrors src/routes/services.$slug.tsx.
 *
 * @package RankBridge
 */

get_header();

while ( have_posts() ) :
	the_post();
	$rb_slug    = get_post_field( 'post_name', get_the_ID() );
	$rb_service = rb_get_service( $rb_slug );

	if ( ! $rb_service ) {
		echo '<div class="px-4 pb-24 pt-40 text-center"><h1 class="text-3xl font-bold">' . esc_html( get_the_title() ) . '</h1><div class="mx-auto mt-6 max-w-3xl text-muted-foreground">';
		the_content();
		echo '</div></div>';
		rb_cta_band();
		get_footer();
		return;
	}

	$rb_media = rb_service_media( $rb_slug );

	rb_page_hero(
		array(
			'eyebrow'   => $rb_service['name'],
			'title'     => esc_html( $rb_service['tagline'] ),
			'subtitle'  => $rb_service['summary'],
			'image'     => $rb_media['src'],
			'image_alt' => $rb_media['alt'],
		)
	);
	?>

	<section class="px-4 pb-16">
		<div class="mx-auto mb-12 max-w-5xl">
			<?php rb_reveal_open(); ?>
				<figure class="overflow-hidden rounded-3xl border border-border">
					<img src="<?php echo esc_url( $rb_media['src'] ); ?>" alt="<?php echo esc_attr( $rb_media['alt'] ); ?>" width="1280" height="720" loading="lazy" class="h-64 w-full object-cover sm:h-96" />
				</figure>
			<?php rb_reveal_close(); ?>
		</div>
		<div class="mx-auto max-w-3xl space-y-5">
			<?php foreach ( $rb_service['intro'] as $i => $paragraph ) : ?>
				<?php rb_reveal_open( $i * 70 ); ?>
					<p class="text-base leading-relaxed text-muted-foreground"><?php echo esc_html( $paragraph ); ?></p>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="border-y border-border bg-card/30 px-4 py-20">
		<div class="mx-auto max-w-6xl">
			<?php rb_reveal_open(); ?>
				<h2 class="text-center text-3xl font-bold sm:text-4xl">What is included</h2>
			<?php rb_reveal_close(); ?>
			<div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
				<?php foreach ( $rb_service['whatYouGet'] as $i => $item ) : ?>
					<?php rb_reveal_open( ( $i % 3 ) * 80 ); ?>
						<div class="h-full rounded-2xl border border-border bg-background p-7 transition-colors duration-500 hover:border-primary/40">
							<span class="inline-flex text-primary"><?php echo rb_icon( 'check', 'h-5 w-5' ); // phpcs:ignore ?></span>
							<h3 class="mt-4 text-lg font-semibold"><?php echo esc_html( $item['title'] ); ?></h3>
							<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $item['body'] ); ?></p>
						</div>
					<?php rb_reveal_close(); ?>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="px-4 py-20">
		<div class="mx-auto max-w-4xl">
			<?php rb_reveal_open(); ?>
				<h2 class="text-center text-3xl font-bold sm:text-4xl">How the work runs</h2>
			<?php rb_reveal_close(); ?>
			<div class="mt-12 space-y-4">
				<?php foreach ( $rb_service['process'] as $i => $step ) : ?>
					<?php rb_reveal_open( $i * 70 ); ?>
						<div class="group flex gap-6 rounded-2xl border border-border bg-card p-6 transition-colors duration-500 hover:border-primary/40 sm:p-8">
							<span class="font-display text-2xl font-bold text-primary/40 transition-colors duration-500 group-hover:text-primary"><?php echo esc_html( $step['step'] ); ?></span>
							<div>
								<h3 class="text-lg font-semibold"><?php echo esc_html( $step['title'] ); ?></h3>
								<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $step['body'] ); ?></p>
							</div>
						</div>
					<?php rb_reveal_close(); ?>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="border-y border-border bg-card/30 px-4 py-20">
		<div class="mx-auto max-w-4xl">
			<?php rb_reveal_open(); ?>
				<h2 class="text-3xl font-bold sm:text-4xl">Who this suits</h2>
			<?php rb_reveal_close(); ?>
			<ul class="mt-8 grid gap-3 sm:grid-cols-2">
				<?php foreach ( $rb_service['idealFor'] as $i => $item ) : ?>
					<?php rb_reveal_open( $i * 70, '', 'li' ); ?>
						<span class="flex items-start gap-3 rounded-xl border border-border bg-background p-5 text-sm text-muted-foreground">
							<span class="mt-0.5 text-primary"><?php echo rb_icon( 'check', 'h-4 w-4' ); // phpcs:ignore ?></span>
							<?php echo esc_html( $item ); ?>
						</span>
					<?php rb_reveal_close( 'li' ); ?>
				<?php endforeach; ?>
			</ul>
		</div>
	</section>

	<section class="px-4 py-20">
		<div class="mx-auto max-w-3xl">
			<?php rb_reveal_open(); ?>
				<h2 class="text-3xl font-bold sm:text-4xl">Frequently asked</h2>
			<?php rb_reveal_close(); ?>
			<div class="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
				<?php foreach ( $rb_service['faqs'] as $faq ) : ?>
					<details class="group px-6 py-5">
						<summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
							<?php echo esc_html( $faq['q'] ); ?>
							<span class="text-primary transition-transform duration-300 group-open:rotate-45">+</span>
						</summary>
						<p class="mt-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $faq['a'] ); ?></p>
					</details>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="border-t border-border px-4 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="text-2xl font-bold">Other services</h2>
			<div class="mt-8 grid gap-5 md:grid-cols-3">
				<?php
				$rb_others = array_slice(
					array_values(
						array_filter(
							rb_services_data(),
							function ( $s ) use ( $rb_slug ) {
								return $s['slug'] !== $rb_slug;
							}
						)
					),
					0,
					3
				);
				foreach ( $rb_others as $i => $other ) :
					?>
					<?php rb_reveal_open( $i * 80 ); ?>
						<a href="<?php echo esc_url( rb_service_link( $other['slug'] ) ); ?>" class="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50">
							<h3 class="text-lg font-semibold"><?php echo esc_html( $other['name'] ); ?></h3>
							<p class="mt-2 flex-1 text-sm text-muted-foreground"><?php echo esc_html( $other['summary'] ); ?></p>
							<span class="mt-5 inline-flex items-center gap-2 text-sm font-medium">
								Learn more
								<span class="inline-flex transition-transform duration-300 group-hover:translate-x-1"><?php echo rb_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore ?></span>
							</span>
						</a>
					<?php rb_reveal_close(); ?>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<?php
	rb_cta_band( 'Interested in ' . strtolower( $rb_service['name'] ) . '?' );
endwhile;

get_footer();
