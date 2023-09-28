<script lang="ts">
	import {  AppRail, AppRailTile, AppRailAnchor  } from '@skeletonlabs/skeleton'; 
    import '@fortawesome/fontawesome-free/css/all.min.css'
let currentTile: number = 0;
</script>

<AppRail slot="DrawerMenu">
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/" ><i class="fa-solid fa-bars text-xl"></i> </AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
    <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
        <svelte:fragment slot="lead">
             <i class="fa-solid fa-bars text-xl"></i> 
        
        </svelte:fragment>
        <span>Tile 1</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
        <svelte:fragment slot="lead">
            <i class="fa-solid fa-bars text-xl"></i> 
        </svelte:fragment>
        <span>Tile 2</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
        <svelte:fragment slot="lead">
            <i class="fa-solid fa-bars text-xl"></i> 
        </svelte:fragment>
        <span>Tile 3</span>
    </AppRailTile>
    <!-- --- -->
    <svelte:fragment slot="trail">
        <AppRailAnchor href="/" target="_blank" title="Account">
            <i class="fa-solid fa-bars text-xl"></i> 
        
        </AppRailAnchor>
    </svelte:fragment>
</AppRail>