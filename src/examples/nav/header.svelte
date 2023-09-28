<script>
	import Title from './title.svelte';
	import Navigator from '$lib/components/navigator/navigator.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';

	import { fly, fade } from 'svelte/transition';

	let openedNavigator = false;
	let hasBeenClicked = false;
	function toogle_openedNavigator() {
		//Uso esta variable para prevenir un bug de svelte al alternar elementos ( desaparece div del if/else )
		if (hasBeenClicked) return;
		hasBeenClicked = true;
        setTimeout(() => {
            hasBeenClicked = false;
        }, 500);
		openedNavigator = !openedNavigator;
	}


</script>
<style>
	.head_nav{
		height: 40px;
	}
</style>

<AppBar>
	<svelte:fragment slot="lead">
		<button on:click={toogle_openedNavigator}>
			{#if !openedNavigator}
				<i class="nav_icon fa-solid fa-bars text-xl" />
			{:else}
				<i class="nav_icon fa-solid fa-times text-xl" />
			{/if}
		</button>
	</svelte:fragment>

	{#if !openedNavigator}
		<div class="head_nav"
		in:fly={{ duration: 2000, x: -200}} out:fly
		on:outrostart={(e) => ( e.srcElement.style.display = "none" )}
		>
			<Title />
		</div>
 	{:else}
		<div class="head_nav"
		in:fly={{ duration: 2000, x: -200 }} out:fly
		on:outrostart={(e) => ( e.srcElement.style.display = "none" )}

		>
			<Navigator />
		</div>
 	{/if}

	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>

