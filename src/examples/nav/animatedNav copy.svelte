<script>
	import Navigator from '$lib/components/navigator/navigator.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';

	import { fly, slide,fade } from 'svelte/transition';
	export let animate = true;

	function transition(node, options) {
		if (animate) {
			return options.fn(node, options);
		}
	}

	let openedNavigator = false;
	function toogle_openedNavigator() {
		openedNavigator = !openedNavigator;
	}
</script>

<AppBar>
	<svelte:fragment slot="lead" >
		<button on:click={toogle_openedNavigator}>
			{#if !openedNavigator}
				<i class="nav_icon fa-solid fa-bars text-xl" />
			{:else}
				<i class="nav_icon fa-solid fa-times text-xl" />
			{/if}
		</button>
	</svelte:fragment>

	{#if !openedNavigator }
   
		<h1   in:transition={{ fn: fade, duration: 500  }} 
        out:transition={{ fn: fade, duration: 500 }}>(title)</h1>
	{:else}
		<div  in:transition={{ fn: fade, duration: 500  }} 
        out:transition={{ fn: fade, duration: 500 }} >
        <Navigator  /></div>
	{/if}
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

<style>
	.nav_icon {
		display: flex;
		align-items: flex-end;
		flex-direction: row;
		justify-content: center;
	}
</style>
