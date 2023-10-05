<script>
 
	import Logo from '$lib/components/home/navigator/components/logo.svelte'
	import Hamburger from '$lib/components/home/navigator/components/hamburguer.svelte'
	import Menu from '$lib/components/home/navigator/components/menu.svelte'
	export let sidebar = false
</script>

<header class="flex justify-between bg-surface-900 p-2 items-center text-gray-600 ">
	<nav class="flex">
		<Hamburger bind:open={sidebar}/>
		 
	</nav>
	
	<Menu/>
</header>