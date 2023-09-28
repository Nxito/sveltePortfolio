<script>
	import { base } from '$app/paths';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import Icon from '$lib/components/custom/icon.svelte';
	let tabSet = 0;
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
				alt="Programación"
				class="inline-flex invert"
			/></svelte:fragment
		>
		<span>Programación</span>
	</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>
		<svelte:fragment slot="lead">
			<img
				src="{base}/icons/tabler/3d-cube-sphere.svg"
				alt="3d"
				class="inline-flex invert"
			/></svelte:fragment
		>
		<span>3D</span>
	</Tab>

	<Tab bind:group={tabSet} name="tab3" value={2}>
		<svelte:fragment slot="lead">
			<img
				src="{base}/icons/tabler/pencil.svg"
				alt="2d"
				class="inline-flex invert"
			/></svelte:fragment
		>
		<span>2D</span>
	</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<section class="grid grid-cols-5 gap-4 p-3">
				<Icon src="{base}/icons/tabler/brand-nodejs.svg" />
				<Icon src="{base}/icons/tabler/brand-javascript.svg" />
				<Icon src="{base}/icons/tabler/brand-svelte.svg" />
				<Icon src="{base}/icons/tabler/brand-docker.svg" />
				<Icon src="{base}/icons/tabler/brand-golang.svg" />
				<Icon src="{base}/icons/tabler/brand-tailwind.svg" />
				<Icon src="{base}/icons/tabler/sql.svg" />
				<Icon src="{base}/icons/tabler/brand-threejs.svg" />
				<Icon src="{base}/icons/tabler/brand-css3.svg" />
				<Icon src="{base}/icons/tabler/brand-html5.svg" />
				<Icon src="{base}/icons/tabler/json.svg" />
				<Icon src="{base}/icons/tabler/markdown.svg" />
				<Icon src="{base}/icons/tabler/api.svg" />
				<Icon src="{base}/icons/tabler/brand-vite.svg" />
				<Icon src="{base}/icons/tabler/brand-vscode.svg" />
				<Icon src="{base}/icons/tabler/brand-debian.svg" />
				<Icon src="{base}/icons/tabler/csv.svg" />
				<Icon src="{base}/icons/tabler/brand-github.svg" />
				<Icon src="{base}/icons/tabler/brand-git.svg" />
				<Icon src="{base}/icons/tabler/brand-gitlab.svg" />
				<Icon src="{base}/icons/tabler/brand-notion.svg" />
			</section>
		{:else if tabSet === 1}
			<section>
				Blender lo adoro para edicion 3D, pero he tocado tambien maya y autocad en los FP que he ido
			</section>
		{:else if tabSet === 2}
			<section>
				ClipStudio paint me entanta para dibujar, pero tengo tocado photoshop y gimp<br />
				A mayores se edicion de video con Premiere, y he tocado avid (nota: no me pidas usar avid, no
				me gusta)<br />
				Tengo visto como usar IA localmente para crear imagenes (algun dia me tirare unas tardes mirando
				como crear alguna IA) <br />
				Tengo usado FFMPEG para configurar camaras IP para un cliente en Tecdesoft<br />
			</section>
		{/if}
	</svelte:fragment>
</TabGroup>
