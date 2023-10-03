<script>
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		var scrolledY = window.scrollY;
		console.log({ scrolledY });
		if (scrolledY) {
			window.scroll(0, scrolledY - yourHeight);
		}
	}
</script>

<nav class="list-nav" name="Navigator">
	<a href="#main" on:click|preventDefault={scrollIntoView}>Inicio</a>

	<div class=" h-[1em] w-px self-center bg-neutral-100 opacity-100 dark:opacity-50" />

	<a href="#about" on:click|preventDefault={scrollIntoView}>Sobre mí</a>

	<div class=" h-[1em] w-px self-center bg-neutral-100 opacity-100 dark:opacity-50" />

	<a href="#contact" on:click|preventDefault={scrollIntoView}>Contacto</a>

	<!-- <div class=" h-[1em] w-px self-center bg-neutral-100 opacity-100 dark:opacity-50"></div>

	<a  href="#projects" on:click|preventDefault={scrollIntoView}>Proyectos</a>
	 -->
</nav>

<style>
	nav {
		display: flex;
		align-items: flex-end;
		flex-direction: row;
		justify-content: center;
	}
	a{
		clip-path: ellipse(44% 30% at 50% 50%);
	}
</style>
