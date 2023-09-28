<script>
	import '../app.postcss';
 
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/home/header.svelte';
    import Footers from '$lib/components/home/footer.svelte';

    import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
    import { storePopup } from '@skeletonlabs/skeleton';
    storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>



<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
        <Header/>
	</svelte:fragment>

	<slot />

 	<svelte:fragment slot="pageFooter">
        <Footers/>
    </svelte:fragment>
	 
</AppShell>
