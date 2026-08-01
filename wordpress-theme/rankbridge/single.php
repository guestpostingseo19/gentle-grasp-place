<?php
/**
 * Single article — mirrors src/routes/blog.$slug.tsx.
 *
 * @package RankBridge
 */

get_header();

while ( have_posts() ) :
	the_post();
	$rb_slug = get_post_field( 'post_name', get_the_ID() );
	$rb_data = rb_get_post_data( $rb_slug );
	$rb_m    = rb_post_media( $rb_slug );
	?>

	<article class="px-4 pb-16 pt-32 sm:pt-40">
		<div class="mx-auto max-w-3xl">
			<?php rb_reveal_open(); ?>
				<a href="<?php echo esc_url( rb_blog_link() ); ?>" class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
					<?php echo rb_icon( 'arrow-left', 'h-4 w-4' ); // phpcs:ignore ?>
					All insights
				</a>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 60 ); ?>
				<span class="mt-8 block text-xs font-semibold uppercase tracking-[0.2em] text-primary"><?php echo esc_html( $rb_data ? $rb_data['category'] : 'Insights' ); ?></span>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 120 ); ?>
				<h1 class="mt-4 text-3xl font-bold leading-tight sm:text-5xl"><?php the_title(); ?></h1>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 180 ); ?>
				<div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
					<span><?php echo esc_html( $rb_data ? $rb_data['author'] : 'RankBridge Editorial' ); ?></span>
					<span aria-hidden="true">·</span>
					<time datetime="<?php echo esc_attr( $rb_data ? $rb_data['date'] : get_the_date( 'c' ) ); ?>"><?php echo esc_html( $rb_data ? rb_format_date( $rb_data['date'], true ) : get_the_date( 'j F Y' ) ); ?></time>
					<?php if ( $rb_data ) : ?>
						<span aria-hidden="true">·</span>
						<span><?php echo esc_html( $rb_data['readTime'] ); ?></span>
					<?php endif; ?>
				</div>
			<?php rb_reveal_close(); ?>
			<?php if ( $rb_data ) : ?>
				<?php rb_reveal_open( 240 ); ?>
					<p class="mt-8 border-l-2 border-primary pl-5 text-lg leading-relaxed text-foreground/90"><?php echo esc_html( $rb_data['description'] ); ?></p>
				<?php rb_reveal_close(); ?>
			<?php endif; ?>

			<?php rb_reveal_open( 300 ); ?>
				<figure class="mt-10 overflow-hidden rounded-3xl border border-border">
					<img src="<?php echo esc_url( $rb_m['src'] ); ?>" alt="<?php echo esc_attr( $rb_m['alt'] ); ?>" width="1280" height="720" loading="lazy" class="h-56 w-full object-cover sm:h-80" />
				</figure>
			<?php rb_reveal_close(); ?>

			<div class="mt-10 space-y-8">
				<?php if ( $rb_data ) : ?>
					<?php foreach ( $rb_data['body'] as $block ) : ?>
						<?php rb_reveal_open( 40 ); ?>
							<div>
								<?php if ( ! empty( $block['h'] ) ) : ?>
									<h2 class="text-2xl font-semibold"><?php echo esc_html( $block['h'] ); ?></h2>
								<?php endif; ?>
								<?php if ( ! empty( $block['ul'] ) ) : ?>
									<ul class="mt-4 space-y-2">
										<?php foreach ( $block['ul'] as $li ) : ?>
											<li class="flex gap-3 text-muted-foreground">
												<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
												<span class="leading-relaxed"><?php echo esc_html( $li ); ?></span>
											</li>
										<?php endforeach; ?>
									</ul>
								<?php endif; ?>
								<?php if ( ! empty( $block['p'] ) ) : ?>
									<?php foreach ( $block['p'] as $paragraph ) : ?>
										<p class="mt-4 leading-relaxed text-muted-foreground"><?php echo esc_html( $paragraph ); ?></p>
									<?php endforeach; ?>
								<?php endif; ?>
							</div>
						<?php rb_reveal_close(); ?>
					<?php endforeach; ?>
				<?php else : ?>
					<div class="space-y-4 leading-relaxed text-muted-foreground"><?php the_content(); ?></div>
				<?php endif; ?>
			</div>
		</div>
	</article>

	<section class="border-t border-border px-4 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="text-2xl font-bold">Keep reading</h2>
			<div class="mt-8 grid gap-5 md:grid-cols-3">
				<?php
				$rb_related = array_slice(
					array_values(
						array_filter(
							rb_posts_data(),
							function ( $p ) use ( $rb_slug ) {
								return $p['slug'] !== $rb_slug;
							}
						)
					),
					0,
					3
				);
				foreach ( $rb_related as $i => $p ) :
					?>
					<?php rb_reveal_open( $i * 80 ); ?>
						<a href="<?php echo esc_url( rb_post_link( $p['slug'] ) ); ?>" class="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50">
							<span class="text-xs font-semibold uppercase tracking-widest text-primary"><?php echo esc_html( $p['category'] ); ?></span>
							<h3 class="mt-3 text-base font-semibold leading-snug"><?php echo esc_html( $p['title'] ); ?></h3>
							<p class="mt-3 flex-1 text-sm text-muted-foreground"><?php echo esc_html( $p['description'] ); ?></p>
						</a>
					<?php rb_reveal_close(); ?>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<?php
	rb_cta_band();
endwhile;

get_footer();
