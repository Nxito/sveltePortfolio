<script lang="ts">
    export let username: string;

     </script>

<div id="info">
    <div id="name" class="h3 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">
        <p>{username}</p> 
    </div>
    <div id="Bio">
        <slot/>
    </div>
</div>

<style>
    #info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        /* height: 60px; */
        margin-top: -65px;
        /* margin-bottom: 30px; */
    }
    #name {
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(43, 44, 56);
    }
    #name > p:first-child {
        font-weight: 700;
        font-size: 22px;
    }
    #name > p:last-child {
        font-size: 2em;
    }
    #Bio  {
        color: rgb(101, 102, 108);
    }
</style>