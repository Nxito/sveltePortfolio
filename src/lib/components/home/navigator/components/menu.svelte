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
<nav class="hidden text-gray-500 uppercase text-bold sm:block" name="Navigator">
 
	<a href="#main" class="hover:text-gray-700 hover:no-underline" on:click|preventDefault={scrollIntoView}>Inicio</a>
    |   

	<a href="#about" class="hover:text-gray-700 hover:no-underline" on:click|preventDefault={scrollIntoView}>Sobre mí</a>
    |

	<a href="#contact" class="hover:text-gray-700 hover:no-underline" on:click|preventDefault={scrollIntoView}>Contacto</a>
 
</nav>
    <!-- <a href="/about" class="hover:text-gray-700 hover:no-underline">About</a>
      <a href="/contact" class="hover:text-gray-700 hover:no-underline">Contact</a>
  </nav> -->