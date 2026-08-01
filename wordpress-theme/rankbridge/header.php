<?php
/**
 * Theme header.
 *
 * @package RankBridge
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="flex min-h-screen flex-col">

	<header id="rb-header" class="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-500">
		<div class="mx-auto max-w-7xl px-4">
			<div id="rb-header-bar" class="flex items-center justify-between rounded-2xl border border-transparent px-4 py-2.5 transition-all duration-500">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="group flex items-center gap-2.5">
					<img src="<?php echo esc_url( rb_img_url( 'logo.png' ) ); ?>" alt="RankBridge logo" width="36" height="36" class="h-9 w-9 transition-transform duration-500 group-hover:rotate-6" />
					<span class="font-display text-lg font-semibold tracking-tight">Rank<span class="text-primary">Bridge</span></span>
				</a>

				<nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="rounded-lg px-3 py-2 text-sm <?php echo is_front_page() ? 'text-foreground' : 'text-muted-foreground'; ?> transition-colors hover:text-foreground">Home</a>

					<div id="rb-services-menu" class="relative">
						<a href="<?php echo esc_url( rb_page_link( 'services' ) ); ?>" class="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
							Services
							<span data-chevron class="transition-transform duration-300"><?php echo rb_icon( 'chevron-down', 'h-3.5 w-3.5' ); // phpcs:ignore ?></span>
						</a>
						<div data-flyout class="pointer-events-none absolute left-0 top-full w-72 -translate-y-1 pt-3 opacity-0 transition-all duration-300">
							<div class="glass-panel overflow-hidden rounded-xl p-2 shadow-2xl">
								<?php foreach ( rb_services_data() as $service ) : ?>
									<a href="<?php echo esc_url( rb_service_link( $service['slug'] ) ); ?>" class="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary">
										<span class="block text-sm font-medium"><?php echo esc_html( $service['name'] ); ?></span>
										<span class="block text-xs text-muted-foreground"><?php echo esc_html( $service['tagline'] ); ?></span>
									</a>
								<?php endforeach; ?>
							</div>
						</div>
					</div>

					<a href="<?php echo esc_url( rb_page_link( 'about' ) ); ?>" class="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">About</a>
					<a href="<?php echo esc_url( rb_blog_link() ); ?>" class="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</a>
					<a href="<?php echo esc_url( rb_page_link( 'advertise' ) ); ?>" class="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Advertise With Us</a>
					<a href="<?php echo esc_url( rb_page_link( 'contact' ) ); ?>" class="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</a>
				</nav>

				<div class="flex items-center gap-2">
					<a href="<?php echo esc_url( rb_page_link( 'contact' ) ); ?>" class="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow hover:brightness-110 sm:inline-flex">Start a conversation</a>
					<button id="rb-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="rb-mobile-panel" class="rounded-lg border border-border p-2 lg:hidden">
						<span data-icon="menu"><?php echo rb_icon( 'menu', 'h-5 w-5' ); // phpcs:ignore ?></span>
						<span data-icon="x" class="hidden"><?php echo rb_icon( 'x', 'h-5 w-5' ); // phpcs:ignore ?></span>
					</button>
				</div>
			</div>

			<div id="rb-mobile-panel" class="max-h-0 overflow-hidden transition-all duration-500 lg:hidden">
				<div class="glass-panel rounded-2xl p-3">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Home</a>
					<a href="<?php echo esc_url( rb_page_link( 'services' ) ); ?>" class="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Services</a>
					<a href="<?php echo esc_url( rb_page_link( 'about' ) ); ?>" class="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">About</a>
					<a href="<?php echo esc_url( rb_blog_link() ); ?>" class="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Blog</a>
					<a href="<?php echo esc_url( rb_page_link( 'advertise' ) ); ?>" class="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Advertise With Us</a>
					<a href="<?php echo esc_url( rb_page_link( 'contact' ) ); ?>" class="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">Contact</a>
					<div class="mt-2 border-t border-border pt-2">
						<?php foreach ( rb_services_data() as $service ) : ?>
							<a href="<?php echo esc_url( rb_service_link( $service['slug'] ) ); ?>" class="block rounded-lg px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"><?php echo esc_html( $service['name'] ); ?></a>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</div>
	</header>

	<main class="flex-1">
