<script lang="ts">
export let followers: string;
export let following: string; 
</script>

<div id="details">
    <div id="followers">
        <p>{followers}</p>
        <p>Followers</p>
    </div>
    <div id="followed">
        <p>{following}</p>
        <p>Following</p>
    </div>
</div>

<style>
    #details {
        /* padding: 30px; */
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    #details > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #details > div > p:first-child {
        font-weight: 700;
        font-size: 22px;
        color: rgb(43, 43, 58);
        margin-bottom: 5px;
    }
    #details > div > p:last-child {
        color: rgb(126, 128, 131);
        font-size: 14px;
        letter-spacing: 1px;
    }
</style>