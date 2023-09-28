<script>
	import '../app.postcss';
	import Header from './header.svelte';
	import DrawerMenu from './drawerMenu.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell } from '@skeletonlabs/skeleton';


</script>


<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
		<Header/>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft"> </svelte:fragment> -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
