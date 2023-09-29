<script lang="ts">
	import { base } from '$app/paths';
	import { Avatar } from '@skeletonlabs/skeleton';

	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth',
			inline: 'nearest'
		});
	}
</script>
<style>
	.text-anxo{
		height: -webkit-fill-available;
	}
</style>
<article
	class="card card-hover main container mx-auto min-w-[300px] w-[98%] relative grow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
>
	<Avatar
		class="  w-64 shadow-2xl grayscale  card-hover hover:grayscale-[40%] "
		src="{base}/assets/images/anxo-transparent.png"
	/>

	<div class=" text-anxo absolute w-full  flex  flex-col flex-nowrap justify-end content-end">
		<!-- bg-gradient-to-r from-transparent  to-yellow-500  -->
		<h1
			class="h2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-br font-bold from-secondary-900 to-secondary-500 bg-clip-text text-transparent box-decoration-clone whitespace-nowrap"
		>
			Anxo Vilar Beiras
		</h1>

		<p
			class="rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-primary-500 from-50% to-transparent opacity-70"
		>
			Desarrollador FullStack<br/>Técnico de automatización
		</p>
	</div>
</article>
<article
	class="card card-hover rounded-2xl grow ease-in m-3 w-full min-w-[380px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
>
	<img
		class="w-full"
		alt="stats"
		src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nxito&show_icons=true&count_private=true&theme=svelte&hide_border=true&bg_color=0D111700&locale=es&layout=compact"
	/>
	<p class=" text-xs text-white text-opacity-50 text-end pr-3">powered by github</p>
</article>

<article
	class="card card-hover rounded-2xl grow ease-in m-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 grid grid-cols-4 gap-5 p-3"
>
	<h1 class="col-span-3">Algún proyecto en mente?</h1>
	<h2
		class="bg-gradient-to-br from-tertiary-600 to-tertiary-300 bg-clip-text text-transparent box-decoration-clone col-span-2"
	>
		Contáctame en mis redes sociales!
	</h2>
	<div class=" grid grid-cols-5 gap-2 col-span-3 max-h-[50px] self-end">
		<a class="chip bg-primary-500 mr-5" href="https://wa.me/644161447" target="_blank"
			><img
				src="{base}/icons/tabler/brand-whatsapp.svg"
				class="invert min-w-[30px]"
				alt="whatsapp"
				title="whatsapp"
			/></a
		>
		<button class="chip bg-primary-500 mr-5" use:popup={popupFeatured}
			><img
				src="{base}/icons/tabler/brand-discord.svg"
				class="invert min-w-[30px]"
				alt="discord"
				title="discord"
			/></button
		>
		<a class="chip bg-primary-500 mr-5" href="https://www.instagram.com/anxovb" target="_blank"
			><img
				src="{base}/icons/tabler/brand-instagram.svg"
				class="invert min-w-[30px]"
				alt="instagram"
				title="instagram"
			/></a
		>
		<a
			class="chip bg-primary-500 mr-5"
			href="mailto:anxo97vb@gmail.com?subject=He visto tu perfil de githubPages!"
			target="_blank"
			><img
				src="{base}/icons/tabler/mail.svg"
				class="invert min-w-[30px]"
				alt="gmail"
				title="email"
			/></a
		>
		<a
			class="chip bg-primary-500 mr-5"
			href="https://www.linkedin.com/in/anxo-vilar-beiras-59327b183/"
			target="_blank"
			><img
				src="{base}/icons/tabler/brand-linkedin.svg"
				class="invert min-w-[30px]"
				alt="gmail"
				title="linkedin"
			/></a
		>
	</div>
	<a href="#contact" class="opacity-70 text-xs self-end" on:click|preventDefault={scrollIntoView}
		>o déjame un mensaje abajo</a
	>
</article>
<div
	class=" border-2 border-primary-500 bg-secondary-500 rounded-2xl w-100 shadow-xl z-40"
	data-popup="popupFeatured"
>
	<a href="https://discord.com/users/384025209499549722" target="_blank">
		<img
			alt="discord"
			src="https://lanyard-profile-readme.vercel.app/api/384025209499549722?theme=dark&bg=00000000&animated=false&hideDiscrim=true&borderRadius=15px&idleMessage=Probably%20toggling%20between%20debugging%20code%20and%20watching%20anime"
		/>
	</a>
	<p class=" text-xs text-white text-opacity-50 text-end pr-3">powered by lanyard</p>
	<div class="arrow bg-primary-500 z-50" />
</div>

