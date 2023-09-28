<script>
	import { Avatar } from '@skeletonlabs/skeleton';
 
	import '../app.postcss';
	import Main from '$lib/components/home/navigator/main.svelte';
	import Projects from '$lib/components/home/navigator/projects.svelte';
	import About from '$lib/components/home/navigator/about.svelte';
	import Contact from '$lib/components/home/navigator/contact.svelte';
	
 </script>

 <main class="container place-content-center scroll-smooth  ">
 	<section id="main" class="flex flex-wrap scroll-mt-8">
		<Main/>
		
	</section>

	<section id="about" class="flex flex-wrap scroll-smooth scroll-mt-8">
		<About/>
	</section>
	<section id="contact" class="flex flex-wrap scroll-mt-8">
		<Contact/>
	</section>
	<section id="projects" class="flex flex-wrap scroll-mt-8">
		<Projects/>
	</section>

	
 
 
</main>
 
 
 