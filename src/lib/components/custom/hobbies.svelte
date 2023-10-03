<script lang="ts">
	import { base } from '$app/paths';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import Icon from '$lib/components/custom/icon.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { Paginator } from '@skeletonlabs/skeleton';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
 	import Table_data from '$lib/components/custom/list_pageable.svelte';
	import Modal from '$lib/components/custom/Modal.svelte';
	import Gallery from '$lib/components/custom/gallery.svelte';

	let tabSet = 0;
	let showModal = false;
	let activeModal = "none";
	let music_visualizer_src = "https://nxito-site-dev.fl0.io/api/musicvisualizer";
// Apartado de musica
	const MusicData = [
		/*Rock y metal*/ 
		{ group: 'Bon Jovi', song: 'Story of my life' },
		{ group:  'Franz ferdinand', song: 'this fire' },
		{ group: 'R.E.M', song: 'Losing my religion' },
		{ group: 'Tenacius D', song: 'Tribute' },
		{ group: 'Iron maiden', song: 'The trooper' },
		{ group: 'Temperance', song: 'Pure life unfolds' },
		{ group: 'DragonForce', song: 'Through the fire and flames' },
		{ group: 'Amaranthe', song: 'Drop Dead Cynical' },
		{ group: 'Mago de Oz', song: 'fiesta pagana' },

		/*Clasicos*/
		{ group: 'Daryl hall', song: 'ManEater' },
		{ group: 'ACDC', song: 'Highway to hell' },

		/*Modernas*/
		{ group: 'Falling in reverse', song: 'Voices in my head' },
		{ group: 'Indected Mushroom', song: 'Black velvet' },

		/*Electronica */
		{ group: 'Alan walker', song: 'faded' },
		{ group: 'Pont Aeri', song: 'Flying Free' },
		{ group: 'David guetta', song: 'titanium' },
		{ group: 'Avicii', song: 'Hey Brother' },
		{ group: 'Daft punk', song: 'get lucky' }
	];



	let page = {
		page: 0,
		limit: 5,
		size: MusicData.length,
		amounts: [1, 2, 5, 10]
	};
	let tableHeaders = ['group', 'song'];

	$: paginatedSource = MusicData.slice(
	page.page * page.limit,             // start
	page.page * page.limit + page.limit // end
); 
// apartado de series
let moviesData={
	movies:[{
		imageUrl:"https://occ-0-5190-358.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbKsEVDBpuQ9l8vP6TxAyPhwH7zMzT4o47373rCyAqwwtxVMPh5XgcDzb5mTWdkFqkooUAhf9_UvCjT1GrpdMkI9yQoAXj0T3CTq.jpg",
		name:"Cortar por la línea de puntos",
		url:"https://www.netflix.com/es/title/81304528?source=35" 
	},
	{
		imageUrl:"https://occ-0-5190-358.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbFg8Rh5qt2kFbh1e_QAO5a-HhV1Pu7CzZ4u2dEtaDvoM1ldpzCg6GdS2XOGRcD6_vC1y4pQt_fAzj09PVc1Sa0Ho6b0yMsNeo9P.jpg",
		name:"Arcane ( league of legends)",
		url:"https://www.netflix.com/es/title/81435684?source=35" 
	},
	{
		imageUrl:"https://cdn-l-cyberpunk.cdprojektred.com/edgerunners/Cyberpunk-Edgerunners-S1-Poster-en.jpg",
		name:"CyberPunk Edgerunners",
		url:"https://www.netflix.com/watch/81054853?source=35" 
	},
	{
		imageUrl:"https://somoskudasai.com/wp-content/uploads/2021/09/portada_fullmetal-alchemist-9.jpg",
		name:"Full metal alchemist brotherhood",
		url:"https://www.crunchyroll.com/es/series/GRGGPG93R/fullmetal-alchemist-brotherhood" 
	},
	{
		imageUrl:"https://i.blogs.es/975f5e/the-last-of-us-hbo-max/1366_2000.jpeg",
		name:"The Last of Us",
		url:"https://play.hbomax.com/page/urn:hbo:page:GYyofRQHeuJ6fiQEAAAEy:type:series?source=googleHBOMAX&action=play" 
	}
]}
// apartado de Juegos
let gamesData = {
	movies:[
	{
		imageUrl:"https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_TloZTearsOfTheKingdom_Gamepage.jpg",
		name:"the legend of zelda : tears of the kingdom",
		url:"#" 
	},
	{
		imageUrl:"https://assets-prd.ignimgs.com/2022/01/26/golden-sun-lost-age-button-1643159374336.jpg",
		name:"Golden Sun: The lost age",
		url:"#" 
	},
	{
		imageUrl:"https://cdn1.epicgames.com/min/offer/1200x1600-1200x1600-e92fa6b99bb20c9edee19c361b8853b9.jpg",
		name:"Hades",
		url:"#" 
	},
	{
		imageUrl:"https://assetsio.reedpopcdn.com/-1412326629917.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
		name:"Tekken",
		url:"#" 
	},
	{
		imageUrl:"https://image.api.playstation.com/cdn/EP0700/CUSA08495_00/COYF3JBI46ftkG7tIdTjQg0v9aZ2378N.png",
		name:"Dark Souls",
		url:"#" 
	}
]}
</script>
			


<TabGroup
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	class="bg-surface-100-800-token w-full rounded-2xl"
>
	<Tab bind:group={tabSet} name="tab1" value={0}>
		<svelte:fragment slot="lead">
			<img
				src="{base}/icons/tabler/keyboard.svg"
				alt="Musica"
				class="inline-flex invert"
			/></svelte:fragment
		>
		<span>Musica</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>
		<svelte:fragment slot="lead">
			<img
				src="{base}/icons/tabler/3d-cube-sphere.svg"
				alt="Series"
				class="inline-flex invert"
			/></svelte:fragment
		>
		<span>Series</span>
	</Tab>

	<Tab bind:group={tabSet} name="tab3" value={2}>
		<svelte:fragment slot="lead">
			<img
				src="{base}/icons/tabler/pencil.svg"
				alt="Videojuegos"
				class="inline-flex invert"
			/></svelte:fragment
		>
		<span>Videojuegos</span>
	</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<section class=" flex flex-wrap p-3 w-full">
		<div> 
			Para mí, picar codigo y escuchar música van de la mano Escucho de todo, Rock, electronic,
			house, y mas...<br/> Mis playlist son bastante variadas, y a veces dejo que se mezcle de todo.
		<br/>
		<button class="btn bg-surface-500 mt-3 mb-3" on:click={() => {showModal = true; activeModal="table"}}>Héchale un vistazo a mi gusto musical 🎶</button>

		</div>
		<div>
			También he hecho un visualizador de musica!
			<br/>
		<button class="btn bg-surface-500 mt-3 mb-3" on:click={() => {showModal = true; activeModal="musicvisualizer"}}>Héchale un vistazo!</button>
	</div>	
 


			</section>
		{:else if tabSet === 1}
			<section> 
				<Gallery bind:moviesData/>
			</section>
		{:else if tabSet === 2}
			<section>
				<Gallery bind:moviesData={gamesData}/>

			</section>
		{/if}
	</svelte:fragment>
</TabGroup>



<Modal bind:showModal  bind:activeModal dialogId="table">
	<div slot="header"> Listado de algunas canciones que me gustan</div>
	<div class="w-300 border-1 border-slate-50 bg-red">
					
		<Table_data >
			<svelte:fragment slot="table"> 
				<div class="table-container">
				<Table source={{
					// A list of heading labels.
					head: tableHeaders,
					// The data visibly shown in your table body UI.
					body: tableMapperValues(paginatedSource, tableHeaders),
					// Optional: The data returned when interactive is enabled and a row is clicked.
					meta: tableMapperValues(paginatedSource, tableHeaders),
					// Optional: A list of footer labels.
					// foot: ['Total', '', '<code class="code">5</code>']
				}} />
				 </div>
				<hr  class="m-2"/>
				<Paginator
				bind:settings={page}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
			/> 
			</svelte:fragment>
		</Table_data>
	 
	</div>
</Modal>

<Modal bind:showModal  bind:activeModal dialogId="musicvisualizer">
	<div slot="header"><strong>Music Visualizer</strong></div>
	<div class="w-300 border-1 border-slate-50 bg-red self-center flex">
					
		<Table_data >
			<svelte:fragment slot="table">  
				<iframe
					id="music-iframe"
					class="min-w-[500px] min-h-[500px] w-full rounded-2xl "
					src={music_visualizer_src}
					title="musicVisualizer">No se ve el iframe</iframe
				>
				<div class="text-xs"> Click en el logo pausa e inicia el audio
					<br/>
					Click en los laterales avanza o retrocede
					<br/>
					Los audios seleccionados para mostrar no tienen copyright
					<br/>
					<button class="btn bg-surface-500 mt-3 mb-3 text-xs" on:click={() => {
						music_visualizer_src="https://nxito-site-dev.fl0.io/api/display_music"
						
					}}>Mira también la version 2.1!</button>

				</div> 

				<!-- /src="https://nxito-site-dev.fl0.io/api/display_music" -->
			</svelte:fragment>
		</Table_data>
	 
	</div>
</Modal>