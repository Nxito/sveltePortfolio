<script lang="ts">
	import { base } from '$app/paths';
	import { Avatar } from '@skeletonlabs/skeleton';

	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	const popupFeatured_discord: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured_discord',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
	const popupFeatured_linkedin: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured_linkedin',
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

<article
	class=" card-hover main container mx-auto min-w-[300px] w-[98%] relative grow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
>
	<Avatar
		class="  w-64 shadow-2xl grayscale  card-hover hover:grayscale-[40%] "
		src="{base}/assets/images/anxo-transparent.png"
	/>

	<div class=" myname absolute w-full flex flex-col flex-nowrap justify-end content-end">
		<!-- bg-gradient-to-r from-transparent  to-yellow-500  -->
		<h2
			class="h2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-br font-bold from-secondary-900 to-secondary-500 bg-clip-text text-transparent box-decoration-clone whitespace-nowrap"
		>
			Anxo Vilar Beiras
		</h2>

		<p
			class="rounded drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-primary-500 from-50% to-transparent opacity-70"
		>
			Desarrollador FullStack<br />Técnico de automatización
		</p>
	</div>
</article>
<article
	class="  card-hover rounded grow ease-in  w-full min-w-[380px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
>
	<img
		class="w-full"
		alt="stats"
		src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nxito&show_icons=true&count_private=true&theme=svelte&hide_border=true&bg_color=0D111700&locale=es&layout=compact"
	/>
	<p class=" text-xs text-white text-opacity-50 text-end pr-3">powered by github</p>
</article>

<article
	class="  card-hover rounded grow ease-in  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 grid grid-cols-4 gap-5 p-3"
>
	<h1 class="col-span-3">Algún proyecto en mente?</h1>
	<strong
		class=" h3 bg-gradient-to-br from-primary-300 to-tertiary-100 bg-clip-text text-transparent box-decoration-clone col-span-2"
	>
		Contáctame en mis redes sociales!
	</strong>
	<div class=" grid grid-cols-5 gap-2 col-span-3 max-h-[50px] self-end">
		<a class="chip bg-primary-500 mr-5" href="https://wa.me/644161447" target="_blank"
			><img
				src="{base}/icons/tabler/brand-whatsapp.svg"
				class="invert min-w-[40px] p-2"
				alt="whatsapp"
				title="whatsapp"
			/></a
		>
		<button class="chip bg-primary-500 mr-5" use:popup={popupFeatured_discord}
			><img
				src="{base}/icons/tabler/brand-discord.svg"
				class="invert min-w-[40px] p-2"
				alt="discord"
				title="discord"
			/></button
		>
		<a class="chip bg-primary-500 mr-5" href="https://www.instagram.com/anxovb" target="_blank"
			><img
				src="{base}/icons/tabler/brand-instagram.svg"
				class="invert min-w-[40px] p-2"
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
				class="invert min-w-[40px] p-2"
				alt="gmail"
				title="email"
			/></a
		>
		<!-- <a
			class="chip bg-primary-500 mr-5"
			href="https://www.linkedin.com/in/anxo-vilar-beiras-59327b183/"
			target="_blank"
			><img
				src="{base}/icons/tabler/brand-linkedin.svg"
				class="invert min-w-[40px] p-2"
				alt="gmail"
				title="linkedin"
			/></a
		> -->
		<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
		<button use:popup={popupFeatured_linkedin} class="chip bg-primary-500 mr-5"
			>
			<img
				src="{base}/icons/tabler/brand-linkedin.svg"
				class="invert min-w-[40px] min-h-[40px] p-2"
				alt="linkedin"
				title="linkedin"
			/></button
		>
	</div>
	<a href="#contact" class="opacity-70 text-xs self-end" on:click|preventDefault={scrollIntoView}
		>o déjame un mensaje abajo</a
	>
</article>
<div
	class=" border-primary-500 bg-surface-900 rounded-2xl w-100 shadow-xl z-40"
	data-popup="popupFeatured_discord"
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

 
	<div
		class="badge-base LI-profile-badge z-40 w-[335px] h-[260px]"
		data-locale="es_ES"
		data-size="large"
		data-theme="dark"
		data-type="HORIZONTAL"
		data-vanity="anxo-vilar-beiras-59327b183"
		data-version="v1"
		data-popup="popupFeatured_linkedin"
	>

	<div class="arrow bg-primary-500 z-50" />
	<a href="https://www.linkedin.com/in/anxo-vilar-beiras-59327b183/" class="absolute top-0 left-0 inline-block z-41 w-full h-full"  target="_blank" > </a>

	</div>
 

<style>
	.myname{
		height: -webkit-fill-available;
	}
</style>
