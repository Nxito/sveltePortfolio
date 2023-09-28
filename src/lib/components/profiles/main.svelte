
<script lang="ts">
 
    import Banner from "./components/banner.svelte";
    import Avatar from "./components/avatar.svelte";
    import Info from "./components/info.svelte";
    import Details from "./components/details.svelte";
 
    export let username: string;
    export let banner: string;
 
    export let image: string; 
 
</script>
 


<div id="card" class="bg-primary-500  grayscale hover:grayscale-0">
    <Banner banner={banner}/>
    <Avatar imageURL={image}/>
    <Info  username={username}  >
        <slot/>
    </Info>
    
    <hr /> 
</div>

<style>
    #card {
        border-radius: 10px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
        /* background-color: white; */
        width: 400px;
        overflow: hidden;
    }
    hr {
        border-color: rgb(227, 227, 227);
        border-style: solid;
    }
    .vercel_stats{
        text-align: center;
    }
    @media all and (max-width: 1440px) {
        #card {
            width: 90%;
        }
    }
</style>
 
 
