<script>
	export let open = false
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

<aside class="absolute w-full h-full bg-gray-200  shadow-lg" class:open>
	<nav class="p-12 text-xl backdrop-blur-md " class:open>
 
        <a href="#main" class="block" on:click|preventDefault={scrollIntoView}>Inicio</a>
  
    
        <a href="#about" class="block" on:click|preventDefault={scrollIntoView}>Sobre mí</a>
 
        <a href="#contact" class="block" on:click|preventDefault={scrollIntoView}>Contacto</a>
     
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		/* transition: left 0.3s ease-in-out; */

	}
    nav.open{
        height: 100%;
        position: fixed;
        width: 100%;
    }

	.open {
		left: 0;
	}
</style>