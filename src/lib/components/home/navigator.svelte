<script>
	import Navbar from '$lib/components/home/navigator/components/Navbar.svelte'
	import Sidebar from '$lib/components/home/navigator/components/Sidebar.svelte'
 
	let open = false
</script>

<Sidebar bind:open/>
	<Navbar bind:sidebar={open}/>

