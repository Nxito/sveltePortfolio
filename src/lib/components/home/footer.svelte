<script>
	import { base } from '$app/paths';
	import Icon from '$lib/components/custom/icon.svelte';
	import ThemeSelector from '$lib/components/selectors/theme.svelte';
	import TranslatePage from '$lib/components/selectors/google_translate.svelte';
</script>

<footer class=" bg-surface-800 flex flex-wrap justify-around p-3">
	<!-- <div class="rounded-xl bg-surface-200 m-10 p-3 shadow-lg">
		<TranslatePage />
	</div>
	<div class="card m-10 p-3 shadow-lg">
		<ThemeSelector />
	</div> -->
	<div class="inline-flex align-center justify-end self-end invert">
		<p class="text-black p-2">Para esta página se ha usado Sveltekit y Tailwind!</p>
	</div>
	<div class="inline-flex align-center justify-end self-end invert">
		<strong class="text-black p-2">Anxo Vilar Beiras </strong>
		<strong class="text-black p-2"> © All rights reserved </strong>
	</div>
</footer>
