<script>
	export let w = 16;
	export let bg = 'bg-primary-300';

	export let src;
	let title = src.split('/').pop().split('.').shift();
</script>

<img {src} {title} alt={title} class="w-{w} {bg} rounded-full" />
