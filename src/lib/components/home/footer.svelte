<script>
	import { AppBar } from '@skeletonlabs/skeleton';
	import ThemeSelector from "$lib/components/selectors/theme.svelte"
	import Profile from '$lib/components/profiles/main.svelte';
	import TranslatePage from '$lib/components/buttons/google_translate.svelte';

</script>

<footer class ="bg-surface-800">

	footer starts here
 	<div class="placeholder" />
	<div class="placeholder" />
	<div class="placeholder" />
  
	<div class="bg-secondary-800 max-w-sm rounded overflow-hidden shadow-lg">
		<div class="bg-secondary-700   m-10 p-3 shadow-lg">
			<TranslatePage/>
		</div>
		<div class="bg-secondary-700   m-10 p-3 shadow-lg">
			<ThemeSelector/>
		</div>
		
	</div>
</footer>

<style>

</style>
