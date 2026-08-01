<?php
/**
 * Image registry — mirrors src/data/media.ts from the original build.
 *
 * @package RankBridge
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Absolute URL for a file inside assets/images.
 */
function rb_img_url( $file ) {
	return get_template_directory_uri() . '/assets/images/' . $file;
}

/**
 * Shared page imagery.
 */
function rb_page_image( $key ) {
	$map = array(
		'home'      => array( 'hero-home.jpg', 'Abstract network of glowing links forming a bridge' ),
		'services'  => array( 'services.jpg', 'Abstract glass panels linked by luminous threads' ),
		'about'     => array( 'about.jpg', 'A bridge silhouette lit by a mint line of light in fog' ),
		'advertise' => array( 'advertise.jpg', 'Stack of glowing glass article cards' ),
		'contact'   => array( 'contact.jpg', 'Beams of mint light converging to a single point' ),
		'blog'      => array( 'blog.jpg', 'Stacked editorial pages lit with mint light' ),
	);

	$item = isset( $map[ $key ] ) ? $map[ $key ] : $map['blog'];

	return array(
		'src' => rb_img_url( $item[0] ),
		'alt' => $item[1],
	);
}

/**
 * Service artwork by slug.
 */
function rb_service_media( $slug ) {
	$map = array(
		'guest-posting'       => array( 'svc-guest-posting.jpg', 'Glowing editorial pages floating above a dark surface, representing guest post placements' ),
		'link-building'       => array( 'svc-link-building.jpg', 'Network of illuminated nodes connected by links, representing a link building campaign' ),
		'niche-edits'         => array( 'svc-niche-edits.jpg', 'A glowing line highlighted inside a paragraph of text, representing a link insertion' ),
		'blogger-outreach'    => array( 'svc-blogger-outreach.jpg', 'Floating glass envelopes representing personalised blogger outreach emails' ),
		'digital-pr'          => array( 'svc-digital-pr.jpg', 'A luminous data wave radiating outward, representing digital PR reach' ),
		'seo-content-writing' => array( 'svc-seo-content-writing.jpg', 'An elegant light stroke across a sheet of paper, representing SEO content writing' ),
	);

	$item = isset( $map[ $slug ] ) ? $map[ $slug ] : array( 'blog.jpg', 'RankBridge editorial artwork' );

	return array(
		'src' => rb_img_url( $item[0] ),
		'alt' => $item[1],
	);
}

/**
 * Article artwork by slug.
 */
function rb_post_media( $slug ) {
	$map = array(
		'what-makes-a-guest-post-worth-publishing'    => array( 'blog-1.jpg', 'A glowing approval mark above folded paper shapes' ),
		'how-to-evaluate-a-link-opportunity'          => array( 'blog-2.jpg', 'A luminous lens inspecting a grid of link prospects' ),
		'anchor-text-distribution-explained'          => array( 'blog-3.jpg', 'Glowing bars showing an anchor text distribution curve' ),
		'niche-edits-vs-guest-posts'                  => array( 'blog-4.jpg', 'Two glowing paths diverging, comparing niche edits and guest posts' ),
		'measuring-link-building-roi'                 => array( 'blog-5.jpg', 'An upward glowing performance curve on a dark grid' ),
		'building-a-publisher-relationship'           => array( 'blog-6.jpg', 'Two glowing spheres joined by an arc of light, representing publisher relationships' ),
		'guest-post-outreach-emails-that-get-replies' => array( 'blog-7.jpg', 'A glowing envelope outline representing guest post outreach emails' ),
		'saas-link-building-strategy'                 => array( 'blog-8.jpg', 'Isometric glowing cubes representing a SaaS link building stack' ),
		'link-building-pricing-explained'             => array( 'blog-9.jpg', 'Three glowing columns of increasing height representing link building pricing tiers' ),
	);

	$item = isset( $map[ $slug ] ) ? $map[ $slug ] : array( 'blog.jpg', 'RankBridge editorial artwork' );

	return array(
		'src' => rb_img_url( $item[0] ),
		'alt' => $item[1],
	);
}
