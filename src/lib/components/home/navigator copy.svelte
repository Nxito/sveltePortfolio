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

<button class="menu-toggle p-2 ">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
</button>
<style>
	nav {
		display: flex;
		align-items: flex-end;
		flex-direction: row;
		justify-content: center;
		clip-path: ellipse(30% 100% at 50% 0);
	
	}
	a{
		clip-path: ellipse(44% 30% at 50% 50%);
	}
	.menu-toggle {
    display: none; /* Oculta el botón en pantallas más grandes */
    background: none;
    border: none;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
}

 
@media screen and (max-width: 768px) {
    .menu-toggle {
        display: block; /* Muestra el botón en pantallas más pequeñas */
    }

    nav {
        display: none; /* Oculta el menú de navegación en pantallas pequeñas */
        /* Estilos adicionales para el menú en pantallas pequeñas si es necesario */
    }
}
</style>
