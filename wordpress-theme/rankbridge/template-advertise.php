<?php
/**
 * Template Name: Advertise With Us
 * Mirrors src/routes/advertise.tsx.
 *
 * @package RankBridge
 */

get_header();
$rb_img = rb_page_image( 'advertise' );

rb_page_hero(
	array(
		'eyebrow'   => 'Advertise with us',
		'title'     => 'Write for us: contribute to the <span class="text-gradient">RankBridge</span> journal',
		'subtitle'  => 'We publish a small number of external SEO, outreach and content marketing articles each month. This page explains what we accept, how the review works, and what to prepare before sending anything.',
		'image'     => $rb_img['src'],
		'image_alt' => $rb_img['alt'],
	)
);

$rb_accepted = array(
	'Outreach, editorial partnerships and publisher relations',
	'Content strategy, briefing and editorial operations',
	'Search research, measurement and reporting practice',
	'Digital PR campaigns with documented outcomes',
	'Original studies, surveys and first-hand case studies',
	'Team, process and workflow lessons from real campaigns',
);

$rb_outside = array(
	'General introductions that restate widely available basics',
	'Product announcements or company news releases',
	'Articles written primarily around a single commercial link',
	'Topics unrelated to marketing, search or publishing',
	'Material published elsewhere, in full or in part',
	'Regulated financial, medical or legal advice',
);

$rb_requirements = array(
	array( 'Length', '1,200–2,000 words. Shorter is fine if the piece is complete.' ),
	array( 'Originality', 'Unpublished elsewhere, and written for our readers.' ),
	array( 'Structure', 'Clear H2 sections, short paragraphs, descriptive subheadings.' ),
	array( 'Evidence', 'At least one original data point, example or first-hand observation.' ),
	array( 'Sources', 'Cite primary sources where you reference research or figures.' ),
	array( 'Links', 'Up to two external references where they genuinely help the reader, plus one author link.' ),
	array( 'Author details', 'Full name, role, company and a two-sentence biography.' ),
	array( 'Images', 'Optional. Supply originals or clearly licensed files only.' ),
);

$rb_steps = array(
	array( '01', 'Send a short pitch', 'Two or three sentences on the angle, the audience it serves and the evidence behind it. A working title helps. Please do not send a finished draft first.' ),
	array( '02', 'Editorial review', 'We review pitches in weekly batches and reply within five working days, either with a yes, a suggested reframing, or a clear decline.' ),
	array( '03', 'Brief agreement', 'Approved pitches get a short brief covering scope, structure and deadline so expectations are shared from the start.' ),
	array( '04', 'Draft and edit', 'You submit the draft; our editor reviews for accuracy, structure and house style. Most pieces go through one revision round.' ),
	array( '05', 'Publication', 'You approve the final version, we schedule it, and you receive the live URL along with the publication date.' ),
);

$rb_faqs = array(
	array( 'Do you charge for contributions?', 'Editorial contributions are published on merit and are not paid placements. Where a collaboration involves any commercial arrangement, it is agreed in advance and disclosed on the published article.' ),
	array( 'How many pieces do you publish?', 'Two to four external articles a month. The limit is deliberate — it keeps the standard high and the editorial queue short.' ),
	array( 'Can I include a link to my company?', 'Yes. One author link is standard, plus up to two references inside the article where they genuinely support the point being made.' ),
	array( 'Will you edit my article?', 'Usually lightly, for structure, clarity and house style. Substantive changes are always discussed with you first, and you approve the final version.' ),
	array( 'What happens if my pitch is declined?', 'We tell you why. In many cases the topic works with a different angle, and you are welcome to pitch again.' ),
);
?>

<section class="px-4 pb-16">
	<div class="mx-auto max-w-3xl space-y-5 text-muted-foreground">
		<?php rb_reveal_open(); ?>
			<p class="leading-relaxed">Our readers are in-house marketers, agency strategists and founders who make decisions about search and content budgets. They read us for practical detail, so contributions are judged on one question: does this teach our audience something they can use on Monday morning?</p>
		<?php rb_reveal_close(); ?>
		<?php rb_reveal_open( 80 ); ?>
			<p class="leading-relaxed">Editorial control stays with us. We may edit for clarity, structure and house style, and we will always show you the final version before it goes live.</p>
		<?php rb_reveal_close(); ?>
	</div>
</section>

<section class="border-y border-border bg-card/30 px-4 py-20">
	<div class="mx-auto max-w-5xl">
		<?php rb_section_title( 'Topics', 'What we publish' ); ?>
		<div class="mt-12 grid gap-5 md:grid-cols-2">
			<?php rb_reveal_open(); ?>
				<div class="h-full rounded-2xl border border-border bg-background p-7">
					<h3 class="text-lg font-semibold text-primary">Accepted subjects</h3>
					<ul class="mt-4 space-y-2.5 text-sm text-muted-foreground">
						<?php foreach ( $rb_accepted as $item ) : ?>
							<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span><span class="leading-relaxed"><?php echo esc_html( $item ); ?></span></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php rb_reveal_close(); ?>
			<?php rb_reveal_open( 90 ); ?>
				<div class="h-full rounded-2xl border border-border bg-background p-7">
					<h3 class="text-lg font-semibold text-primary">Outside our scope</h3>
					<ul class="mt-4 space-y-2.5 text-sm text-muted-foreground">
						<?php foreach ( $rb_outside as $item ) : ?>
							<li class="flex gap-3"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground"></span><span class="leading-relaxed"><?php echo esc_html( $item ); ?></span></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php rb_reveal_close(); ?>
		</div>
	</div>
</section>

<section class="px-4 py-20">
	<div class="mx-auto max-w-4xl">
		<?php rb_section_title( 'Requirements', 'Format and standards' ); ?>
		<div class="mt-12 overflow-hidden rounded-2xl border border-border">
			<?php foreach ( $rb_requirements as $i => $row ) : ?>
				<?php rb_reveal_open( $i * 40 ); ?>
					<div class="grid gap-1 border-b border-border bg-card px-6 py-5 last:border-0 sm:grid-cols-[180px_1fr] sm:gap-6">
						<span class="text-sm font-semibold"><?php echo esc_html( $row[0] ); ?></span>
						<span class="text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $row[1] ); ?></span>
					</div>
				<?php rb_reveal_close(); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="border-y border-border bg-card/30 px-4 py-20">
	<div class="mx-auto max-w-4xl">
		<?php rb_section_title( 'Process', 'From pitch to publication' ); ?>
		<div class="mt-12 space-y-4">
			<?php foreach ( $rb_steps as $i => $step ) : ?>
				<?php rb_reveal_open( $i * 70 ); ?>
					<div class="flex gap-6 rounded-2xl border border-border bg-background p-6 sm:p-8">
						<span class="font-display text-2xl font-bold text-primary/50"><?php echo esc_html( $step[0] ); ?></span>
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

<section class="px-4 py-20">
	<div class="mx-auto max-w-3xl">
		<?php rb_section_title( 'Good to know', 'Questions we are asked most' ); ?>
		<div class="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
			<?php foreach ( $rb_faqs as $faq ) : ?>
				<details class="group px-6 py-5">
					<summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
						<?php echo esc_html( $faq[0] ); ?>
						<span class="text-primary transition-transform duration-300 group-open:rotate-45">+</span>
					</summary>
					<p class="mt-3 text-sm leading-relaxed text-muted-foreground"><?php echo esc_html( $faq[1] ); ?></p>
				</details>
			<?php endforeach; ?>
		</div>

		<?php rb_reveal_open(); ?>
			<div class="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
				<h2 class="text-xl font-semibold">Send your pitch</h2>
				<p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">Email the outline to our editorial desk with the subject line &ldquo;Contribution pitch — [your topic]&rdquo;.</p>
				<a href="mailto:editorial@rankbridge.com" class="mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110">editorial@rankbridge.com</a>
			</div>
		<?php rb_reveal_close(); ?>
	</div>
</section>

<?php
get_footer();
