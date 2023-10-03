<script lang="ts">
let elemMovies: HTMLDivElement;

function multiColumnLeft(): void {
	let x = elemMovies.scrollWidth;
	if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}

function multiColumnRight(): void {
	let x = 0;
	// -1 is used because different browsers use different methods to round scrollWidth pixels.
	if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
	elemMovies.scroll(x, 0);
}

export let moviesData;
</script>
<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
		&#60
	</button>
	<!-- Carousel -->


	<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
		{#each moviesData.movies as movie}
			<a href={movie.url} target="_blank" class="shrink-0 w-[28%] snap-start">
				<img
					class="rounded-container-token hover:brightness-125 h-[85%] max-h-[300px] object-cover object-right "
					src={movie.imageUrl}
					alt={movie.name}
					title={movie.name}
					loading="lazy"
				/>
				<strong>
					{movie.name}
				</strong>
			</a>
		{/each}
	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
		&#62
	</button>
</div>