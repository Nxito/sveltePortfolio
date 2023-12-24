<script>
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/home/header.svelte';
	import Footers from '$lib/components/home/footer.svelte';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	
</script>

<style>
	#background{
				z-index : -9999;
				position: absolute;
				top : 0;
				left    : 0;
				width   : 100%;
				height  : 100%;
				margin  : 0;
				border  : 0;
				padding : 0;
			}
</style>

<iframe id="background" src="/background/"></iframe> 

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="pageFooter">
		<Footers />
	</svelte:fragment>
</AppShell>
