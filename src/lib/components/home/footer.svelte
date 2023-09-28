<script>
	import Icon from '$lib/components/custom/icon.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	import ThemeSelector from "$lib/components/selectors/theme.svelte"
	import Profile from '$lib/components/profiles/main.svelte';
	import TranslatePage from '$lib/components/selectors/google_translate.svelte'; 

</script>

<footer class ="bg-surface-800 grid grid-cols-3 gap-4 p-3">
	<div class="bg-secondary-100   m-10 p-3 shadow-lg">
		<TranslatePage/>
	</div>
	<div class="bg-secondary-700   m-10 p-3 shadow-lg">
		<ThemeSelector/>
	</div>
	<div class="inline-flex align-center  justify-end self-end  invert" >
		<Icon src="/icons/tabler/copyright.svg" bg="bg-transparent" w=5  />
		<span class="text-black">Anxo Vilar Beiras</span>
	</div>

</footer>
 
