	</main>

	<footer class="border-t border-border bg-card/40">
		<div class="mx-auto max-w-7xl px-4 py-16">
			<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
				<div>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2.5">
						<img src="<?php echo esc_url( rb_img_url( 'logo.png' ) ); ?>" alt="RankBridge logo" width="32" height="32" loading="lazy" class="h-8 w-8" />
						<span class="font-display text-lg font-semibold">Rank<span class="text-primary">Bridge</span></span>
					</a>
					<p class="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">A guest posting and link building studio for brands that want authority earned the slow, defensible way.</p>
				</div>

				<div>
					<h3 class="text-sm font-semibold">Services</h3>
					<ul class="mt-4 space-y-2.5">
						<?php foreach ( rb_services_data() as $service ) : ?>
							<li><a href="<?php echo esc_url( rb_service_link( $service['slug'] ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary"><?php echo esc_html( $service['name'] ); ?></a></li>
						<?php endforeach; ?>
					</ul>
				</div>

				<div>
					<h3 class="text-sm font-semibold">Company</h3>
					<ul class="mt-4 space-y-2.5">
						<li><a href="<?php echo esc_url( rb_page_link( 'about' ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">About RankBridge</a></li>
						<li><a href="<?php echo esc_url( rb_blog_link() ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Insights</a></li>
						<li><a href="<?php echo esc_url( rb_page_link( 'advertise' ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Advertise With Us</a></li>
						<li><a href="<?php echo esc_url( rb_page_link( 'contact' ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Contact</a></li>
					</ul>
				</div>

				<div>
					<h3 class="text-sm font-semibold">Legal</h3>
					<ul class="mt-4 space-y-2.5">
						<li><a href="<?php echo esc_url( rb_page_link( 'privacy-policy' ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Privacy Policy</a></li>
						<li><a href="<?php echo esc_url( rb_page_link( 'terms-and-conditions' ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Terms &amp; Conditions</a></li>
						<li><a href="<?php echo esc_url( rb_page_link( 'disclaimer' ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Disclaimer</a></li>
						<li><a href="<?php echo esc_url( rb_page_link( 'cookie-policy' ) ); ?>" class="text-sm text-muted-foreground transition-colors hover:text-primary">Cookie Policy</a></li>
					</ul>
				</div>
			</div>

			<div class="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
				<p class="text-xs text-muted-foreground">&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> RankBridge. All rights reserved.</p>
				<p class="text-xs text-muted-foreground">Built for brands that plan in quarters, not weeks.</p>
			</div>
		</div>
	</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
