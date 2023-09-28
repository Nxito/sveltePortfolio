<script>
    	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
        import Icon from '$lib/components/custom/icon.svelte';
        let tabSet = 0;
</script>


<TabGroup
justify="justify-center"
active="variant-filled-primary"
hover="hover:variant-soft-primary"
flex="flex-1 lg:flex-none"
class="bg-surface-100-800-token w-full rounded-2xl"
>
<Tab bind:group={tabSet} name="tab1" value={0}>
    <svelte:fragment slot="lead"
        ><img src="/icons/tabler/brand-whatsapp.svg" alt="asd" class="inline-flex invert" /></svelte:fragment
    >
    <span>Programación</span>
</Tab>
<Tab bind:group={tabSet} name="tab2" value={1}>3D</Tab>
<Tab bind:group={tabSet} name="tab3" value={2}>2D</Tab>
<!-- Tab Panels --->
<svelte:fragment slot="panel">
    {#if tabSet === 0}
        <section class="grid grid-cols-4 gap-4 p-3">
            <Icon src="/icons/tabler/brand-nodejs.svg"  />
            <Icon src="/icons/tabler/brand-javascript.svg"  />
            <Icon src="/icons/tabler/brand-svelte.svg"  />
            <Icon src="/icons/tabler/brand-docker.svg"  />
            <Icon src="/icons/tabler/brand-golang.svg"  />
            <Icon src="/icons/tabler/brand-tailwind.svg"  />
            <Icon src="/icons/tabler/sql.svg"  />
            <Icon src="/icons/tabler/brand-threejs.svg"  />
            <Icon src="/icons/tabler/brand-css3.svg"  />
            <Icon src="/icons/tabler/brand-html5.svg"  />
            <Icon src="/icons/tabler/json.svg"  />
            <Icon src="/icons/tabler/markdown.svg"  />
            <Icon src="/icons/tabler/api.svg"  />
            <Icon src="/icons/tabler/brand-vite.svg"/>
            <Icon src="/icons/tabler/brand-vscode.svg"/>
            <Icon src="/icons/tabler/brand-debian.svg"/>
            <Icon src="/icons/tabler/csv.svg"/>
            <Icon src="/icons/tabler/brand-github.svg"  />
            <Icon src="/icons/tabler/brand-git.svg"  />
            <Icon src="/icons/tabler/brand-gitlab.svg"  /> 
        </section>
    {:else if tabSet === 1}
        <section class="grid grid-cols-4 gap-4 p-3">
            <Icon src="/icons/tabler/brand-nodejs.svg"  />
        </section>
    {:else if tabSet === 2}
    <section  class="grid grid-cols-4 gap-4 p-3">
        <Icon src="/icons/tabler/brand-git.svg"  />
    </section>
    {/if}
</svelte:fragment>
</TabGroup>