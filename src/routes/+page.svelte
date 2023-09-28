<script>
	import { Avatar } from '@skeletonlabs/skeleton';
 
	import '../app.postcss';
	import Main from '$lib/components/home/navigator/main.svelte';
	import Projects from '$lib/components/home/navigator/projects.svelte';
	import About from '$lib/components/home/navigator/about.svelte';
	import Contact from '$lib/components/home/navigator/contact.svelte';
	
 </script>

 <main class="container place-content-center">
 	<section id="main" class="flex flex-wrap">
		<Main/>
		
	</section>
	<section id="contact" class="flex flex-wrap">
		<Contact/>
	</section>
	<section id="about" class="flex flex-wrap">
		<About/>
	</section>

	<section id="projects" class="flex flex-wrap">
		<Projects/>
	</section>

	
 
 
</main>
 
 
 