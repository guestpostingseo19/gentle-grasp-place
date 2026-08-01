<?php
/**
 * Home page — mirrors src/routes/index.tsx.
 *
 * @package RankBridge
 */

get_header();

$rb_hero  = rb_page_image( 'home' );
$rb_stats = array(
	array( '1,400+', 'Editorial placements delivered' ),
	array( '38', 'Verticals covered' ),
	array( '12 mo', 'Placement assurance window' ),
	array( '100%', 'Manual, human outreach' ),
);

$rb_principles = array(
	array( 'file-search', 'Vetted before pitched', 'Relevance, organic traffic trend and outbound-link hygiene are checked by hand before a publication ever reaches your shortlist.' ),
	array( 'pen-line', 'Written to be read', 'Subject-matter writers produce original articles that editors want to publish, not filler built around a link.' ),
	array( 'handshake', 'Relationships, not databases', 'We pitch editors we know by name. That is why our acceptance rate holds while blast outreach collapses.' ),
	array( 'shield-check', 'Nothing placed without approval', 'You see and sign off on every site and every brief. There are no surprises in the monthly report.' ),
	array( 'chart-line', 'Measured against revenue pages', 'Authority is directed at the pages that earn, with internal linking guidance so the value flows onward.' ),
	array( 'badge-check', 'Documented and auditable', 'Live URLs, anchors, target pages and metrics, delivered every month in a format you can hand to anyone.' ),
);

$rb_marquee = array( 'SaaS', 'Fintech', 'E-commerce', 'Health', 'Travel', 'Legal', 'Education', 'Property', 'B2B Services', 'Marketplaces' );

$rb_process = array(
	array( '01', 'Discovery call and audit', 'We review your profile, competitors and priority pages, then tell you plainly whether link acquisition is your bottleneck — and what to fix first if it is not.' ),
	array( '02', 'Strategy document', 'Target pages, anchor distribution, publication categories, monthly volume and a realistic timeline, written down and agreed before work begins.' ),
	array( '03', 'Approval and outreach', 'You sign off the shortlist and briefs. Our team pitches editors individually and manages every conversation through to publication.' ),
	array( '04', 'Placement and verification', 'Articles go live, we confirm indexation and link attributes, and each placement is logged with its anchor and target page.' ),
	array( '05', 'Monthly review', 'A report you can forward without editing, plus a call to adjust next month\'s plan against what the data is telling us.' ),
);
?>

<section class="relative overflow-hidden pb-20 pt-32 sm:pt-44">
	<div class="absolute inset-0 -z-10">
		<img src="<?php echo esc_url( $rb_hero['src'] ); ?>" alt="<?php echo esc_attr( $rb_hero['alt'] ); ?>" width="1600" height="1008" class="h-full w-full object-cover opacity-40" />
		<div class="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
	</div>

	<div class="mx-auto max-w-6xl px-4">
		<div class="max-w-3xl">
			<?php rb_reveal_open(); ?>
				<span class="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">Guest posting &amp; link building</span>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 90 ); ?>
				<h1 class="mt-6 text-4xl font-bold leading-[1.06] sm:text-6xl md:text-7xl">Guest posting and link building that earns <span class="text-gradient">authority you can defend</span>.</h1>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 180 ); ?>
				<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">RankBridge is a manual outreach studio placing editorial guest posts and contextual links on publications with real readers — vetted by hand, pitched by people, and reported in full. No networks, no volume games, no surprises.</p>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 270 ); ?>
				<div class="mt-9 flex flex-wrap gap-3">
					<a href="<?php echo esc_url( rb_page_link( 'contact' ) ); ?>" class="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110">
						Start a conversation
						<span class="inline-flex transition-transform duration-300 group-hover:translate-x-1"><?php echo rb_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore ?></span>
					</a>
					<a href="<?php echo esc_url( rb_page_link( 'services' ) ); ?>" class="rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary">See how we work</a>
				</div>
			<?php rb_reveal_close(); ?>
		</div>

		<div class="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
			<?php foreach ( $rb_stats as $i => $stat ) : ?>
				<?php rb_reveal_open( $i * 80 ); ?>
					<div class="h-full bg-card p-6">
						<div class="font-display text-3xl font-bold text-primary"><?php echo esc_html( $stat[0] ); ?></div>
						<div class="mt-1 text-xs text-muted-foreground"><?php echo esc_html( $stat[1] ); ?></div>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="overflow-hidden border-y border-border py-6">
	<div class="flex w-max marquee-track gap-4">
		<?php foreach ( array_merge( $rb_marquee, $rb_marquee ) as $item ) : ?>
			<span class="whitespace-nowrap rounded-full border border-border px-5 py-2 text-sm text-muted-foreground"><?php echo esc_html( $item ); ?></span>
		<?php endforeach; ?>
	</div>
</section>

<section class="px-4 py-24">
	<div class="mx-auto max-w-6xl">
		<?php rb_section_title( 'What we do', 'Six disciplines, one authority programme', 'Every service below can run standalone, but they are designed to compound when combined around the pages that matter to your business.' ); ?>
		<div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			<?php foreach ( rb_services_data() as $i => $service ) : ?>
				<?php rb_reveal_open( ( $i % 3 ) * 90 ); ?>
					<a href="<?php echo esc_url( rb_service_link( $service['slug'] ) ); ?>" class="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50">
						<span class="font-display text-xs font-semibold text-primary">0<?php echo (int) ( $i + 1 ); ?></span>
						<h3 class="mt-3 text-xl font-semibold"><?php echo esc_html( $service['name'] ); ?></h3>
						<p class="mt-1 text-sm text-primary/80"><?php echo esc_html( $service['tagline'] ); ?></p>
						<p class="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $service['summary'] ); ?></p>
						<span class="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
							Read the full service
							<span class="inline-flex transition-transform duration-300 group-hover:translate-x-1"><?php echo rb_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore ?></span>
						</span>
					</a>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="border-y border-border bg-card/30 px-4 py-24">
	<div class="mx-auto max-w-6xl">
		<?php rb_section_title( 'How we operate', 'The standards behind every placement', 'Link building goes wrong in predictable ways. These six commitments exist to remove each of them from your campaign.' ); ?>
		<div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			<?php foreach ( $rb_principles as $i => $p ) : ?>
				<?php rb_reveal_open( ( $i % 3 ) * 90 ); ?>
					<div class="h-full rounded-2xl border border-border bg-background p-7 transition-colors duration-500 hover:border-primary/40">
						<span class="inline-flex text-primary"><?php echo rb_icon( $p[0], 'h-6 w-6' ); // phpcs:ignore ?></span>
						<h3 class="mt-4 text-lg font-semibold"><?php echo esc_html( $p[1] ); ?></h3>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $p[2] ); ?></p>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="px-4 py-24">
	<div class="mx-auto max-w-5xl">
		<?php rb_section_title( 'The engagement', 'A predictable rhythm from month one', 'You always know what is happening this week, what is coming next, and what it is meant to achieve.' ); ?>
		<div class="mt-14 space-y-4">
			<?php foreach ( $rb_process as $i => $step ) : ?>
				<?php rb_reveal_open( $i * 70 ); ?>
					<div class="group flex gap-6 rounded-2xl border border-border bg-card p-6 transition-colors duration-500 hover:border-primary/40 sm:p-8">
						<span class="font-display text-2xl font-bold text-primary/40 transition-colors duration-500 group-hover:text-primary"><?php echo esc_html( $step[0] ); ?></span>
						<div>
							<h3 class="text-lg font-semibold"><?php echo esc_html( $step[1] ); ?></h3>
							<p class="mt-2 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $step[2] ); ?></p>
						</div>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="border-t border-border px-4 py-24">
	<div class="mx-auto max-w-6xl">
		<?php rb_section_title( 'Insights', 'Notes from the outreach desk', 'Practical writing on what actually earns placements, drawn from campaigns we run every week.' ); ?>
		<div class="mt-14 grid gap-5 md:grid-cols-3">
			<?php foreach ( array_slice( rb_posts_data(), 0, 3 ) as $i => $post ) : ?>
				<?php rb_reveal_open( $i * 90 ); ?>
					<a href="<?php echo esc_url( rb_post_link( $post['slug'] ) ); ?>" class="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50">
						<span class="text-xs font-semibold uppercase tracking-widest text-primary"><?php echo esc_html( $post['category'] ); ?></span>
						<h3 class="mt-3 text-lg font-semibold leading-snug"><?php echo esc_html( $post['title'] ); ?></h3>
						<p class="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $post['description'] ); ?></p>
						<span class="mt-5 text-xs text-muted-foreground"><?php echo esc_html( $post['readTime'] ); ?></span>
					</a>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
		<div class="mt-10 text-center">
			<a href="<?php echo esc_url( rb_blog_link() ); ?>" class="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary">
				Read all insights
				<?php echo rb_icon( 'arrow-right', 'h-4 w-4' ); // phpcs:ignore ?>
			</a>
		</div>
	</div>
</section>

<?php
rb_cta_band();
get_footer();
