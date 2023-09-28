
<script lang="ts">
 
    import Banner from "./components/banner.svelte";
    import Avatar from "./components/avatar.svelte";
    import Info from "./components/info.svelte";
    import Details from "./components/details.svelte";
 
    export let username: string;
    export let banner: string;

     $: getGithubProfilePromise = (async function getGithubProfile(nick = '') {
        const res = await fetch(`https://api.github.com/users/${nick}`)
        const value = await res.json();
        console.log({value});
        
        return value;
	} )(username)
</script>
 
{#await getGithubProfilePromise}
	<p>...Cheking github profile</p>
{:then data}


<div id="card">
    <Banner banner={banner}/>
    <Avatar imageURL={data.avatar_url}/>
    <Info  username={data.name} bio={data.bio}/>
    <hr />
    <p class ="vercel_stats">
        <img  alt="readme-stats-vercel"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nxito&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117&layout=compact"/>
    </p>

</div>

<style>
    #card {
        border-radius: 10px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
        background-color: white;
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
 
{:catch error}
	<p style="color: red">Cannot check profile</p>
{/await}
