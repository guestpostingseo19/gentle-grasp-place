<?php
/**
 * Presentation helpers — PHP equivalents of the original React components.
 *
 * @package RankBridge
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Inline Lucide icon.
 */
function rb_icon( $name, $class = 'h-5 w-5' ) {
	$paths = rb_icon_paths();
	if ( ! isset( $paths[ $name ] ) ) {
		return '';
	}

	return sprintf(
		'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="%s">%s</svg>',
		esc_attr( $class ),
		$paths[ $name ]
	);
}

/**
 * Opening tag of a scroll-reveal wrapper.
 */
function rb_reveal_open( $delay = 0, $class = '', $tag = 'div' ) {
	printf(
		'<%1$s class="reveal %2$s" data-visible="false" style="transition-delay:%3$dms">',
		esc_attr( $tag ),
		esc_attr( $class ),
		(int) $delay
	);
}

/**
 * Closing tag of a scroll-reveal wrapper.
 */
function rb_reveal_close( $tag = 'div' ) {
	printf( '</%s>', esc_attr( $tag ) );
}

/**
 * Service record by slug.
 */
function rb_get_service( $slug ) {
	foreach ( rb_services_data() as $service ) {
		if ( $service['slug'] === $slug ) {
			return $service;
		}
	}
	return null;
}

/**
 * Article record by slug.
 */
function rb_get_post_data( $slug ) {
	foreach ( rb_posts_data() as $post ) {
		if ( $post['slug'] === $slug ) {
			return $post;
		}
	}
	return null;
}

/**
 * Legal document by slug.
 */
function rb_get_legal( $slug ) {
	foreach ( rb_legal_data() as $doc ) {
		if ( $doc['slug'] === $slug ) {
			return $doc;
		}
	}
	return null;
}

/**
 * Permalink for a service, falling back to a pretty path.
 */
function rb_service_link( $slug ) {
	$post = get_page_by_path( $slug, OBJECT, 'rb_service' );
	return $post ? get_permalink( $post ) : home_url( '/services/' . $slug . '/' );
}

/**
 * Permalink for an article, falling back to a pretty path.
 */
function rb_post_link( $slug ) {
	$post = get_page_by_path( $slug, OBJECT, 'post' );
	return $post ? get_permalink( $post ) : home_url( '/' . $slug . '/' );
}

/**
 * Permalink for a static page by slug.
 */
function rb_page_link( $slug ) {
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page ) : home_url( '/' . $slug . '/' );
}

/**
 * Blog index permalink.
 */
function rb_blog_link() {
	$page_id = (int) get_option( 'page_for_posts' );
	return $page_id ? get_permalink( $page_id ) : home_url( '/blog/' );
}

/**
 * Page hero section (PageHero component).
 *
 * @param array $args eyebrow, title (html), subtitle, image, image_alt.
 */
function rb_page_hero( $args ) {
	$args = wp_parse_args(
		$args,
		array(
			'eyebrow'   => '',
			'title'     => '',
			'subtitle'  => '',
			'image'     => '',
			'image_alt' => '',
		)
	);
	?>
	<section class="relative overflow-hidden pb-16 pt-32 sm:pt-40">
		<?php if ( $args['image'] ) : ?>
			<div class="absolute inset-0 -z-10">
				<img src="<?php echo esc_url( $args['image'] ); ?>" alt="<?php echo esc_attr( $args['image_alt'] ); ?>" class="h-full w-full object-cover opacity-25" loading="lazy" width="1280" height="720" />
				<div class="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
			</div>
		<?php endif; ?>
		<div aria-hidden="true" class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"></div>
		<div class="mx-auto max-w-4xl px-4 text-center">
			<?php rb_reveal_open(); ?>
				<span class="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary"><?php echo esc_html( $args['eyebrow'] ); ?></span>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 80 ); ?>
				<h1 class="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl"><?php echo wp_kses_post( $args['title'] ); ?></h1>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 160 ); ?>
				<p class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"><?php echo esc_html( $args['subtitle'] ); ?></p>
			<?php rb_reveal_close(); ?>
		</div>
	</section>
	<?php
}

/**
 * Centred section heading (SectionTitle component).
 */
function rb_section_title( $eyebrow = '', $title = '', $body = '' ) {
	?>
	<div class="mx-auto max-w-3xl text-center">
		<?php if ( $eyebrow ) : ?>
			<?php rb_reveal_open(); ?>
				<span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary"><?php echo esc_html( $eyebrow ); ?></span>
			<?php rb_reveal_close(); ?>
		<?php endif; ?>
		<?php rb_reveal_open( 60 ); ?>
			<h2 class="mt-3 text-3xl font-bold sm:text-4xl"><?php echo esc_html( $title ); ?></h2>
		<?php rb_reveal_close(); ?>
		<?php if ( $body ) : ?>
			<?php rb_reveal_open( 120 ); ?>
				<p class="mt-4 text-muted-foreground"><?php echo esc_html( $body ); ?></p>
			<?php rb_reveal_close(); ?>
		<?php endif; ?>
	</div>
	<?php
}

/**
 * Closing call-to-action band (CtaBand component).
 */
function rb_cta_band( $title = '', $body = '' ) {
	$title = $title ? $title : 'Ready to build authority that holds?';
	$body  = $body ? $body : 'Tell us about your site, your competitors and the pages that matter. We will come back with an honest read on what it takes.';
	?>
	<section class="px-4 py-20">
		<?php rb_reveal_open(); ?>
			<div class="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
				<div aria-hidden="true" class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"></div>
				<h2 class="text-3xl font-bold sm:text-4xl"><?php echo esc_html( $title ); ?></h2>
				<p class="mx-auto mt-4 max-w-2xl text-muted-foreground"><?php echo esc_html( $body ); ?></p>
				<div class="mt-8 flex flex-wrap justify-center gap-3">
					<a href="<?php echo esc_url( rb_page_link( 'contact' ) ); ?>" class="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110">Get in touch</a>
					<a href="<?php echo esc_url( rb_page_link( 'services' ) ); ?>" class="rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary">Explore services</a>
				</div>
			</div>
		<?php rb_reveal_close(); ?>
	</section>
	<?php
}

/**
 * Renders the shared legal document layout (LegalPage component).
 */
function rb_render_legal( $doc ) {
	?>
	<div class="px-4 pb-24 pt-32 sm:pt-40">
		<div class="mx-auto max-w-3xl">
			<?php rb_reveal_open(); ?>
				<span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Legal</span>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 60 ); ?>
				<h1 class="mt-4 text-4xl font-bold sm:text-5xl"><?php echo esc_html( $doc['title'] ); ?></h1>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 120 ); ?>
				<p class="mt-3 text-sm text-muted-foreground">Last updated: <?php echo esc_html( $doc['updated'] ); ?></p>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 180 ); ?>
				<p class="mt-8 border-l-2 border-primary pl-5 leading-relaxed text-foreground/90"><?php echo esc_html( $doc['intro'] ); ?></p>
			<?php rb_reveal_close(); ?>

			<div class="mt-12 space-y-8">
				<?php foreach ( $doc['sections'] as $i => $section ) : ?>
					<?php rb_reveal_open( $i * 40 ); ?>
						<section>
							<h2 class="text-xl font-semibold"><?php echo esc_html( $section['h'] ); ?></h2>
							<?php if ( ! empty( $section['p'] ) ) : ?>
								<?php foreach ( $section['p'] as $paragraph ) : ?>
									<p class="mt-3 leading-relaxed text-muted-foreground"><?php echo esc_html( $paragraph ); ?></p>
								<?php endforeach; ?>
							<?php endif; ?>
							<?php if ( ! empty( $section['ul'] ) ) : ?>
								<ul class="mt-4 space-y-2">
									<?php foreach ( $section['ul'] as $li ) : ?>
										<li class="flex gap-3 text-muted-foreground">
											<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
											<span class="leading-relaxed"><?php echo esc_html( $li ); ?></span>
										</li>
									<?php endforeach; ?>
								</ul>
							<?php endif; ?>
						</section>
					<?php rb_reveal_close(); ?>
				<?php endforeach; ?>
			</div>

			<?php rb_reveal_open(); ?>
				<div class="mt-14 rounded-2xl border border-border bg-card p-7">
					<h2 class="text-lg font-semibold">Questions about this policy?</h2>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
						Write to <a href="mailto:legal@rankbridge.com" class="text-primary hover:underline">legal@rankbridge.com</a> and a member of the team will respond within five working days.
					</p>
				</div>
			<?php rb_reveal_close(); ?>
		</div>
	</div>
	<?php
}

/**
 * Formats an ISO date the way the original site did.
 */
function rb_format_date( $iso, $long = false ) {
	$ts = strtotime( $iso );
	if ( ! $ts ) {
		return $iso;
	}
	return $long ? gmdate( 'j F Y', $ts ) : gmdate( 'j M Y', $ts );
}
