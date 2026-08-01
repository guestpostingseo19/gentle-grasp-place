<?php
/**
 * RankBridge theme bootstrap.
 *
 * @package RankBridge
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'RB_VERSION', '1.0.0' );

require_once get_template_directory() . '/inc/data-services.php';
require_once get_template_directory() . '/inc/data-posts.php';
require_once get_template_directory() . '/inc/data-legal.php';
require_once get_template_directory() . '/inc/icons.php';
require_once get_template_directory() . '/inc/media.php';
require_once get_template_directory() . '/inc/helpers.php';
require_once get_template_directory() . '/inc/seo.php';
require_once get_template_directory() . '/inc/setup-content.php';

/**
 * Theme supports.
 */
function rb_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support(
		'html5',
		array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' )
	);
	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'rankbridge' ),
			'footer'  => __( 'Footer Menu', 'rankbridge' ),
		)
	);
	load_theme_textdomain( 'rankbridge', get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'rb_theme_setup' );

/**
 * Services custom post type (maps /services/{slug}).
 */
function rb_register_post_types() {
	register_post_type(
		'rb_service',
		array(
			'labels'       => array(
				'name'          => __( 'Services', 'rankbridge' ),
				'singular_name' => __( 'Service', 'rankbridge' ),
				'add_new_item'  => __( 'Add New Service', 'rankbridge' ),
				'edit_item'     => __( 'Edit Service', 'rankbridge' ),
			),
			'public'       => true,
			'has_archive'  => false,
			'menu_icon'    => 'dashicons-networking',
			'show_in_rest' => true,
			'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', 'page-attributes' ),
			'rewrite'      => array(
				'slug'       => 'services',
				'with_front' => false,
			),
		)
	);
}
add_action( 'init', 'rb_register_post_types' );

/**
 * Front-end assets. Two files only — the site stays deliberately light.
 */
function rb_enqueue_assets() {
	wp_enqueue_style(
		'rb-fonts',
		'https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Manrope:wght@400;500;600&display=swap',
		array(),
		null
	);
	wp_enqueue_style( 'rb-theme', get_template_directory_uri() . '/assets/css/theme.css', array(), RB_VERSION );
	wp_enqueue_style( 'rb-style', get_stylesheet_uri(), array( 'rb-theme' ), RB_VERSION );
	wp_enqueue_script( 'rb-theme', get_template_directory_uri() . '/assets/js/theme.js', array(), RB_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'rb_enqueue_assets' );

/**
 * Preconnect to the font host.
 */
function rb_resource_hints( $urls, $relation ) {
	if ( 'preconnect' === $relation ) {
		$urls[] = array(
			'href' => 'https://fonts.gstatic.com',
			'crossorigin',
		);
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'rb_resource_hints', 10, 2 );

/**
 * Site icon fallback.
 */
function rb_favicon() {
	if ( has_site_icon() ) {
		return;
	}
	echo '<link rel="icon" type="image/png" href="' . esc_url( rb_img_url( 'favicon.png' ) ) . '" />' . "\n";
}
add_action( 'wp_head', 'rb_favicon', 2 );

/**
 * Excerpt tweaks.
 */
add_filter( 'excerpt_more', function () { return '…'; } );
add_filter( 'excerpt_length', function () { return 30; } );

/**
 * Body classes used by the layout.
 */
function rb_body_class( $classes ) {
	$classes[] = 'bg-background';
	$classes[] = 'text-foreground';
	return $classes;
}
add_filter( 'body_class', 'rb_body_class' );

/**
 * Remove emoji cruft — the original build shipped no extra scripts.
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'wp_head', 'wp_generator' );
