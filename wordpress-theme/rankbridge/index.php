<?php
/**
 * Blog index — mirrors src/routes/blog.index.tsx.
 *
 * @package RankBridge
 */

get_header();
$rb_img   = rb_page_image( 'blog' );
$rb_posts = rb_posts_data();
$rb_feat  = $rb_posts[0];
$rb_rest  = array_slice( $rb_posts, 1 );

rb_page_hero(
	array(
		'eyebrow'   => 'Insights',
		'title'     => 'Notes from the <span class="text-gradient">outreach desk</span>',
		'subtitle'  => 'No recycled listicles. Everything here comes from campaigns our team is running right now, written for people who have to make the decisions.',
		'image'     => $rb_img['src'],
		'image_alt' => $rb_img['alt'],
	)
);
?>

<section class="px-4 pb-14">
	<div class="mx-auto max-w-6xl">
		<?php rb_reveal_open(); ?>
			<a href="<?php echo esc_url( rb_post_link( $rb_feat['slug'] ) ); ?>" class="group grid gap-8 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 md:grid-cols-2 md:p-10">
				<div>
					<span class="text-xs font-semibold uppercase tracking-widest text-primary">Featured · <?php echo esc_html( $rb_feat['category'] ); ?></span>
					<h2 class="mt-4 text-3xl font-bold leading-tight"><?php echo esc_html( $rb_feat['title'] ); ?></h2>
					<p class="mt-4 text-muted-foreground"><?php echo esc_html( $rb_feat['description'] ); ?></p>
					<span class="mt-6 inline-flex items-center gap-2 text-sm font-medium">
						Read article
						<span class="inline-flex transition-transform duration-300 group-hover:translate-x-1"><?php echo rb_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore ?></span>
					</span>
				</div>
				<?php $rb_fm = rb_post_media( $rb_feat['slug'] ); ?>
				<img src="<?php echo esc_url( $rb_fm['src'] ); ?>" alt="<?php echo esc_attr( $rb_fm['alt'] ); ?>" width="1280" height="720" loading="lazy" class="h-56 w-full rounded-2xl object-cover md:h-full" />
			</a>
		<?php rb_reveal_close(); ?>
	</div>
</section>

<section class="px-4 pb-20">
	<div class="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
		<?php foreach ( $rb_rest as $i => $post ) : ?>
			<?php $rb_m = rb_post_media( $post['slug'] ); ?>
			<?php rb_reveal_open( ( $i % 3 ) * 80 ); ?>
				<a href="<?php echo esc_url( rb_post_link( $post['slug'] ) ); ?>" class="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50">
					<img src="<?php echo esc_url( $rb_m['src'] ); ?>" alt="<?php echo esc_attr( $rb_m['alt'] ); ?>" width="1280" height="720" loading="lazy" class="mb-5 h-40 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
					<span class="text-xs font-semibold uppercase tracking-widest text-primary"><?php echo esc_html( $post['category'] ); ?></span>
					<h2 class="mt-3 text-lg font-semibold leading-snug"><?php echo esc_html( $post['title'] ); ?></h2>
					<p class="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $post['description'] ); ?></p>
					<div class="mt-5 flex items-center justify-between text-xs text-muted-foreground">
						<time datetime="<?php echo esc_attr( $post['date'] ); ?>"><?php echo esc_html( rb_format_date( $post['date'] ) ); ?></time>
						<span><?php echo esc_html( $post['readTime'] ); ?></span>
					</div>
				</a>
			<?php rb_reveal_close(); ?>
		<?php endforeach; ?>
	</div>
</section>

<?php
rb_cta_band( 'Want this thinking applied to your site?', 'We will look at your profile and tell you where the real bottleneck is — even if the answer is not link building.' );
get_footer();
