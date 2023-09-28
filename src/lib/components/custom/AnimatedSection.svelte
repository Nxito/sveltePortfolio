<script lang="ts">
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	export let id;
	let isInView;
	const options: Options = {
		rootMargin: '-20px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);
</script>

<section {id} class="wrapper" use:inview={options} on:inview_change={handleChange}>
	{#if isInView}
		<div in:fade class="box">
			<slot />
		</div>
	{:else}
		<div class="placeholder" />
	{/if}
</section>

<style>
	.wrapper {
		margin-top: 30px;
	}

	.box {
		width: auto;
		border: 1px solid rgb(221, 221, 221);
		padding: 25px;
		border-radius: 10px;
	}
</style>
