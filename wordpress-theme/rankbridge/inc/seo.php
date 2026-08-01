<?php
/**
 * SEO output: titles, meta descriptions, Open Graph, Twitter and JSON-LD.
 *
 * @package RankBridge
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Resolves the title/description pair for the current view.
 */
function rb_current_seo() {
	$default = array(
		'title'       => 'Guest Posting & Link Building Services | RankBridge',
		'description' => 'Manual guest posting and link building services: hand-vetted publications, contextual editorial links, niche edits and digital PR. Transparent pricing and reporting.',
		'image'       => rb_img_url( 'hero-home.jpg' ),
		'type'        => 'website',
	);

	if ( is_front_page() ) {
		return $default;
	}

	if ( is_singular( 'rb_service' ) ) {
		$service = rb_get_service( get_post_field( 'post_name', get_queried_object_id() ) );
		if ( $service ) {
			return array(
				'title'       => $service['metaTitle'],
				'description' => $service['metaDescription'],
				'image'       => rb_service_media( $service['slug'] )['src'],
				'type'        => 'website',
			);
		}
	}

	if ( is_singular( 'post' ) ) {
		$slug = get_post_field( 'post_name', get_queried_object_id() );
		$data = rb_get_post_data( $slug );
		if ( $data ) {
			return array(
				'title'       => $data['title'] . ' | RankBridge',
				'description' => $data['description'],
				'image'       => rb_post_media( $slug )['src'],
				'type'        => 'article',
			);
		}
	}

	if ( is_home() ) {
		return array(
			'title'       => 'Link Building Blog | Guest Posting & Outreach Insights',
			'description' => 'Practical link building and guest posting articles: anchor text distribution, guest post outreach, niche edits vs guest posts, link building pricing and ROI.',
			'image'       => rb_img_url( 'blog.jpg' ),
			'type'        => 'website',
		);
	}

	if ( is_page() ) {
		$slug = get_post_field( 'post_name', get_queried_object_id() );
		$map  = array(
			'services'  => array(
				'Link Building & Guest Posting Services | RankBridge',
				'Six SEO link building services: guest posting, managed link building, niche edits, blogger outreach, digital PR and SEO content writing. Manual outreach, clear pricing.',
				'services.jpg',
			),
			'about'     => array(
				'About RankBridge | Outreach-Led Link Building Studio',
				'RankBridge is a small outreach-led studio building editorial authority for brands through vetted guest posts, niche edits and digital PR.',
				'about.jpg',
			),
			'advertise' => array(
				'Write for Us — SEO & Link Building | RankBridge',
				'Write for us: editorial guidelines for contributing an SEO, outreach or link building article to the RankBridge journal — accepted topics, format, review process and timelines.',
				'advertise.jpg',
			),
			'contact'   => array(
				'Contact RankBridge | Talk to the Outreach Team',
				'Get in touch with RankBridge by email for guest posting, link building and digital PR enquiries. Replies from a real person within one working day.',
				'contact.jpg',
			),
		);

		if ( isset( $map[ $slug ] ) ) {
			return array(
				'title'       => $map[ $slug ][0],
				'description' => $map[ $slug ][1],
				'image'       => rb_img_url( $map[ $slug ][2] ),
				'type'        => 'website',
			);
		}

		$legal = rb_get_legal( $slug );
		if ( $legal ) {
			return array(
				'title'       => $legal['metaTitle'],
				'description' => $legal['metaDescription'],
				'image'       => rb_img_url( 'hero-home.jpg' ),
				'type'        => 'website',
			);
		}
	}

	return $default;
}

/**
 * Use our titles verbatim.
 */
function rb_document_title( $title ) {
	$seo = rb_current_seo();
	return $seo['title'];
}
add_filter( 'pre_get_document_title', 'rb_document_title' );

/**
 * Meta description, Open Graph, Twitter card and JSON-LD.
 */
function rb_head_meta() {
	$seo = rb_current_seo();
	?>
<meta name="description" content="<?php echo esc_attr( $seo['description'] ); ?>" />
<meta name="author" content="RankBridge" />
<link rel="canonical" href="<?php echo esc_url( rb_canonical_url() ); ?>" />
<meta property="og:site_name" content="RankBridge" />
<meta property="og:type" content="<?php echo esc_attr( $seo['type'] ); ?>" />
<meta property="og:title" content="<?php echo esc_attr( $seo['title'] ); ?>" />
<meta property="og:description" content="<?php echo esc_attr( $seo['description'] ); ?>" />
<meta property="og:url" content="<?php echo esc_url( rb_canonical_url() ); ?>" />
<meta property="og:image" content="<?php echo esc_url( $seo['image'] ); ?>" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo esc_attr( $seo['title'] ); ?>" />
<meta name="twitter:description" content="<?php echo esc_attr( $seo['description'] ); ?>" />
<meta name="twitter:image" content="<?php echo esc_url( $seo['image'] ); ?>" />
	<?php
	rb_json_ld( $seo );
}
add_action( 'wp_head', 'rb_head_meta', 3 );

/**
 * Canonical URL for the current view.
 */
function rb_canonical_url() {
	if ( is_singular() || is_page() ) {
		return get_permalink( get_queried_object_id() );
	}
	if ( is_home() ) {
		$page_id = (int) get_option( 'page_for_posts' );
		return $page_id ? get_permalink( $page_id ) : home_url( '/' );
	}
	return home_url( add_query_arg( array() ) );
}

/**
 * Structured data.
 */
function rb_json_ld( $seo ) {
	$org = array(
		'@context' => 'https://schema.org',
		'@type'    => 'Organization',
		'name'     => 'RankBridge',
		'url'      => home_url( '/' ),
		'logo'     => rb_img_url( 'logo.png' ),
		'email'    => 'hello@rankbridge.com',
		'description' => 'Guest posting and link building studio placing editorial links on hand-vetted publications.',
	);

	$graph = array( $org );

	if ( is_singular( 'rb_service' ) ) {
		$service = rb_get_service( get_post_field( 'post_name', get_queried_object_id() ) );
		if ( $service ) {
			$graph[] = array(
				'@context'    => 'https://schema.org',
				'@type'       => 'Service',
				'name'        => $service['name'],
				'description' => $service['summary'],
				'provider'    => array( '@type' => 'Organization', 'name' => 'RankBridge' ),
				'url'         => rb_service_link( $service['slug'] ),
			);
			$faqs = array();
			foreach ( $service['faqs'] as $faq ) {
				$faqs[] = array(
					'@type'          => 'Question',
					'name'           => $faq['q'],
					'acceptedAnswer' => array( '@type' => 'Answer', 'text' => $faq['a'] ),
				);
			}
			$graph[] = array(
				'@context'   => 'https://schema.org',
				'@type'      => 'FAQPage',
				'mainEntity' => $faqs,
			);
		}
	}

	if ( is_singular( 'post' ) ) {
		$data = rb_get_post_data( get_post_field( 'post_name', get_queried_object_id() ) );
		if ( $data ) {
			$graph[] = array(
				'@context'      => 'https://schema.org',
				'@type'         => 'BlogPosting',
				'headline'      => $data['title'],
				'description'   => $data['description'],
				'datePublished' => $data['date'],
				'author'        => array( '@type' => 'Organization', 'name' => $data['author'] ),
				'publisher'     => array( '@type' => 'Organization', 'name' => 'RankBridge' ),
				'image'         => $seo['image'],
				'mainEntityOfPage' => rb_canonical_url(),
			);
		}
	}

	echo "\n" . '<script type="application/ld+json">' . wp_json_encode( $graph ) . '</script>' . "\n";
}
