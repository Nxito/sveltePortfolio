<script lang="ts">
    export let imageURL: string; 
    </script>
<div id="avatar">
    <img src="{imageURL}" alt="Avatar" />
</div>

<style>
    #avatar {
        border: 5px solid white;
        border-radius: 50%;
        overflow: hidden;
        width: 120px;
        height: 120px;
        position: relative;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #avatar > img {
        width: 100%;
        height: auto;
    }
</style>