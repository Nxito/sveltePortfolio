 
    <script type="text/javascript">
	import { onMount } from "svelte";

    
    let audioAnalyser, freqArray;
    var audio = {};
    var isPlayed = false
    var currentSongTimePaused = 0;
    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };
    // var rotation =0;

    function visualize(volumen=1,config) {
        if(!config){config={}}
        if (!isPlayed) {
            audio = new Audio();
            audio.src = config.src ;
            audio.currentTime = currentSongTimePaused
            currentSongTimePaused = 0
            audio.ontimeupdate=function(){
                // console.log(this.currentTime);
                // console.log(new Date(this.currentTime * 1000).toISOString().substr(11, 8))
                
                document.getElementById('tracktime').innerHTML = new Date(this.currentTime * 1000).toISOString().substr(11, 8)
            }
            audio.onended = function(){document.getElementById("nextSong").click()}
            document.getElementById('songName').innerHTML = config.src?config.src.split("/").pop():" - ";
            audio.volume = volumen || 0.50;
            isPlayed = true
            let audioContext = new (window.AudioContext || window.webkitAudioContext);
            audioAnalyser = audioContext.createAnalyser();
            let source = audioContext.createMediaElementSource(audio);
            source.connect(audioAnalyser);
            audioAnalyser.connect(audioContext.destination);
            freqArray = new Uint8Array(audioAnalyser.frequencyBinCount);
            audio.play();
            animate(config.bars,config.barWidthConst,config.barHeightConst,config.radius );
        }
        else {
            isPlayed = false
            currentSongTimePaused = audio.currentTime
            audio.pause();
            
    

        }
    };


    function animate(barNumber=250,bars = 200,barWidthConst=8,barHeightConst=0.5,radiusCircle = 200){
        //setup the canvas
        let canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let canvasContext = canvas.getContext("2d");
        // if(window.mobileAndTabletCheck() && barNumber>50){barNumber = 50}
        //center of the circle
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let radius = radiusCircle;
        //background styling
        // let gradient = canvasContext.createLinearGradient(0, 0, 0, canvas.height); //x1, y1, x2, y2
        // gradient.addColorStop(0, "rgba(26, 13, 21, 0)")  //offset, color
        // // gradient.addColorStop(1, "rgba(36, 45, 33, 0)")  //offset, color
        // canvasContext.fillStyle = gradient;
        // canvasContext.fillRect(0, 0, canvas.width, canvas.height);

        //Draw the circle
        canvasContext.beginPath();
        canvasContext.arc(centerX, centerY, radius, 0, 2*Math.PI);
        canvasContext.stroke();
        // canvasContext.translate(canvas.height, canvas.width);
        // canvasContext.rotate(rotation);
        // rotation += 0.04;
        // let bars=300;
        if(window.mobileAndTabletCheck() && bars>50){bars = 50}
        // if(barNumber){bars = bar}
        const theta = 2*Math.PI / bars; // vueltas de las barras al circulo
        audioAnalyser.getByteFrequencyData(freqArray);

        let logo = document.getElementById("image")
        for(let i = 0; i<bars; ++i){
            let barHeight = freqArray[i]*barHeightConst;
            //start point
            let startX = centerX + radius*Math.cos(theta*i);
            let startY = centerY + radius*Math.sin(theta*i);

            //endpoint
            let endX = centerX + (radius+barHeight)*Math.cos(theta*i);
            let endY = centerY + (radius+barHeight)*Math.sin(theta*i);

            //draw that bar
            drawBar(startX, startY, endX, endY, freqArray[i], canvasContext,barWidthConst );
        }

        window.requestAnimationFrame(animate);
    }

    function drawBar(startX, startY, endX, endY, freq, canvasContext,barWidthConst ){
        // let freq1 = freq
        // let freq2 = freq
        const mainColorVal = 150
        // if(freq1<5){freq1 = 5}
        // if(freq1>50){freq1 = 50}
        // if(freq2<0){freq2 = 5}
        // if(freq2>50){freq2 = 50}
        // let barColor = "rgba(" + mainColorVal + ", " + freq+ ", " + freq  + ")";
        // if(freq>200){barColor = "orange"}
        let barWidth = barWidthConst
        // canvasContext.strokeStyle = barColor;
        let opacity = freq/250
        let shadowColor = "grey"
        var gradient =canvasContext.createLinearGradient(endX, endY, startX, startY, endX, endY);
            
        gradient.addColorStop("0",   "rgba(" + 0 + ", " + 0+ ", " + 0  + ","+opacity/2+")");
        gradient.addColorStop("0.05",   "rgba(" + freq + ", " + freq+ ", " + freq  + ","+opacity+")");
        gradient.addColorStop("0.2" ,"rgba(" + freq + ", " + freq+ ", " + freq  + ","+opacity*2+")");
        gradient.addColorStop("0.9", "rgba(" + mainColorVal + ", " + freq+ ", " + freq  + ","+ "1" +")");
        gradient.addColorStop("1.0", "rgba(" + 0 + ", " + 0+ ", " + 0  + ","+ "1" +")");

        if(freq>90 && freq<200){
            freq = 50
        
        var gradient =canvasContext.createLinearGradient(endX, endY, startX, startY, endX, endY);
            
            gradient.addColorStop("0",   "rgba(" + 0 + ", " + 0+ ", " + 0  + ","+opacity/2+")");
            gradient.addColorStop("0.05",   "rgba(" + freq + ", " + freq+ ", " + freq  + ","+opacity+")");
            gradient.addColorStop("0.2" ,"rgba(" + freq + ", " + freq+ ", " + freq  + ","+opacity*2+")");
            gradient.addColorStop("0.9", "rgba(" + mainColorVal + ", " + freq+ ", " + freq  + ","+ "1" +")");
            gradient.addColorStop("1.0", "rgba(" + 0 + ", " + 0+ ", " + 0  + ","+ "1" +")");
        }
        if(freq>=200){
            var gradient =canvasContext.createLinearGradient(endX, endY, startX, startY, endX, endY);
        
            gradient.addColorStop("0",   "rgba(" + 155 + ", " + 10+ ", " + 6  + ","+opacity+")");
            gradient.addColorStop("0.5",   "rgba(" + 50 + ", " + 10 + ", " + 6  + ","+ opacity +")");

            gradient.addColorStop("1",   "rgba(" + 155 + ", " + 10 + ", " + 6  + ","+ "1" +")");
            barWidth+2
            shadowColor = "red"
        }

        canvasContext.strokeStyle  = gradient;
        canvasContext.lineWidth = barWidth;
        // canvasContext.lineCap = "round";
        canvasContext.shadowBlur = 5;
        canvasContext.shadowColor = shadowColor;
        canvasContext.beginPath();
        canvasContext.moveTo(startX, startY);
        canvasContext.lineTo(endX, endY);
        canvasContext.fill();
        // canvasContext.arc( endX, endY, 20, (Math.PI/20) * 100, (Math.PI/20) * (28 + 20) );
        // canvasContext.bezierCurveTo(endX, endY, startX, startY, endX, endY);
        // canvasContext.quadraticCurveTo(endX+50, endY, startX , startY);
        canvasContext.stroke();
        // var time = new Date();
        // canvasContext.rotate( ((2*Math.PI)/60) * time.getSeconds() + ((2*Math.PI)/60000) * time.getMilliseconds() );

    }
    onMount(()=>{
    
        // Al terminar una cancion, avanzar a la siguiente
        //click dercho para ver opcionesy listado de canciones
        //si el archivo de audio es mp4, el background cambia a video
        let counter = 0;
        var config = {};
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        const volumen = urlParams.get('volumen')
        console.log(volumen);
        //set background
        // var backgroundImage = "https://wallpaperaccess.com/full/1948568.jpg"
        // var backgroundImage = "/owls.jpg"
        // var backgroundImage = "/img/rimuru-tempest nxito.jpg"
        // let img = document.getElementById("background_img")
        // img.style.background = `url('${backgroundImage}') no-repeat`
        // img.style["background-size"] ="cover"
        //  img.src = backgroundImage
        async function checkvideo () {
            let vid =document.getElementById("background_vid")
            // let img = document.getElementById("background_img")

            if(config.src.split(".").pop().match(/mp4/i)){
                let wrapper=document.getElementById("wrapper")
                wrapper.style.opacity ="0.3"
                let vid =document.getElementById("background_vid")
                vid.muted = true; 
                vid.src = config.src
                vid.currentTime  = audio.currentTime 
                vid.style.display ="block"
                // img.style.display ="none"
                if(!isPlayed){try{vid.resume();}catch(err){vid.play();}}else{vid.pause();}

            }else{
                wrapper.style.opacity ="1"
                vid.src=""
                vid.style.display ="none"
                // img.style.display ="block"
            }

        }
 
                let  data = [ {
                    path:"/music/nocopys/Alan Walker - Dreamer [NCS Release].mp3"
                },
                {
                    path:"/music/nocopys/Alan Walker - Sing Me To Sleep (Marshmello Remix).mp3"
                },
                {
                    path:"/music/nocopys/Alan Walker - Faded.mp3"
                }]
                if(Array.isArray(data)){
                    let aux = []
                    for ( let i in data){
                        let item = data[i]
                           aux.push(item.path) 
                    }
                    data = aux
                }

                let currentSong = data[counter]
                config.src = currentSong;
                document.getElementById('songName').innerHTML = config.src ? config.src.split("/").pop() : " - ";
                var prevSong = document.getElementById("prevSong")
                prevSong.addEventListener("click", function () {
                    counter--
                    if (counter < 0) { counter = data.length - 1 }
                    currentSong = data[counter]
                    config.src = currentSong
                    currentSongTimePaused = 0;
                    audio.currentTime = 0
                    checkvideo ()
                    let vid =document.getElementById("background_vid")
                    vid.src=""  
                    visualize(volumen, config);
                    visualize(volumen, config);
                });
                var nextSong = document.getElementById("nextSong")
                nextSong.addEventListener("click", function () {
                    counter++
                    if (counter > data.length - 1) { counter = 0 }
                    currentSong = data[counter]
                    config.src = currentSong
                    currentSongTimePaused = 0;
                    audio.currentTime = 0
                    checkvideo ()
                    let vid =document.getElementById("background_vid")
                    vid.src=""                        
                    visualize(volumen, config);
                    visualize(volumen, config);
                });

                var play = document.getElementById("play")
                play.addEventListener("click", function () {
                    checkvideo ()
                    visualize(volumen, config);
                });

    })
    </script>
 
    <style>
        
        /* body {
            margin: 0;
            padding: 0;
         }

        html,
        body {
             width: -webkit-fill-available;
            height: -webkit-fill-available;
            overflow: hidden;
        } */

        .button {
            display: inline-block;
            border-radius: 90px;
            background-color: #ffffff00;
            border: none;
            color: #FFFFFF;
            /* font-size: 28px; */
            transition: all 0.5s;
            cursor: pointer;
            z-index: 2;
            width: 279px;
            margin: 60px;
            /* position: absolute; */
        }

        .button span {
            cursor: pointer;
            display: inline-block;
            position: relative;
            transition: 0.5s;
        }

        .button span:after {
            content: '\00bb';
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            transition: 0.5s;
        }

        .button:hover span {
            padding-right: 25px;
        }

        .button:hover span:after {
            opacity: 1;
            right: 0;
        }

        #wrapper {
            text-align: center;
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            position: fixed;
            /* margin: 50%; */
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            align-content: stretch;
            flex-direction: column;
            flex-wrap: nowrap;
            position: relative;
        }

        #canvas {
            position: absolute;
            z-index: 1;
            transform: scale(0.7);
        }

        #image {
            width: 400px;
            box-sizing: border-box;
            overflow: hidden;
            /* visibility: hidden; */
            transition: height 1s, width 1s, padding 1s, visibility 1s, opacity 0.5s ease-out;
            /* position: fixed; */
        }

        .container {
            background: none;
            border: none;
            /* Center the content */
            align-items: center;
            display: flex;
            justify-content: center;
            z-index: 2;
            position: absolute;
            /* Spacing */
            padding: 8px;
        }

        .container__triangle {
            border-style: solid;

            /* Size */
            height: 0px;
            width: 0px;
        }

        .container__triangle--up {
            border-color: transparent transparent rgba(0, 0, 0, 0.3);
            border-width: 0px 8px 8px;
        }

        .container__triangle--right {
            border-color: transparent transparent transparent rgba(0, 0, 0, 0.3);
            border-width: 8px 0px 8px 8px;
        }

        .container__triangle--down {
            border-color: rgba(0, 0, 0, 0.3) transparent transparent;
            border-width: 8px 8px 0px;
        }

        .container__triangle--left {
            border-color: transparent rgba(0, 0, 0, 0.3) transparent transparent;
            border-width: 8px 8px 8px 0px;
        }

        #prevSong {
            width: 20%;
            height: 100%;
            position: absolute;
            left: 0;

        }

        #nextSong {
            width: 20%;
            height: 100%;
            position: absolute;
            right: 0;
        }

        .dataSong {
            color: whitesmoke;
            font-size: 1.2em;
            font-family: cursive;
            display: flex;
            flex-direction: column;
            position: absolute;
            flex-wrap: nowrap;
            align-items: center;
            bottom: 30%;
            text-shadow: -1px -5px 2px black, -2px 1px black, 2px 0px black, 0 -1px black;
            z-index: 3;
        }

        #background {
            position: fixed;
            height: -webkit-fill-available;
        }

        #background_img {
            width: -webkit-fill-available;
            height: -webkit-fill-available;
            position: fixed;
            object-fit: cover;
        }
        #background_vid {
            display: none;
            height: initial;
            width: -webkit-fill-available;
            position: fixed;
        }
        @keyframes pulse {
        0% {
            transform: scale(1.5);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }

        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
    </style>
 
 <section>

    <div id="background">
        <!-- <img id="background_img" src="https://wallpaperaccess.com/full/495414.jpg" alt=""> -->
        <video id = "background_vid" ><track kind="captions"></video>
    </div>
    <div id="wrapper">
        <canvas id="canvas"></canvas>
        <button class="container " id="prevSong">
            <div class="container__triangle container__triangle--left"></div>
        </button>
        <button class="button" style="vertical-align:middle" id="play"> <img id="image" alt="logo"
                src="/assets/images/NXito%20Big.png">
        </button>
        <button class="container " id="nextSong">
            <div class="container__triangle container__triangle--right"></div>
        </button>
        <div class="dataSong">
            <div><span id="songName"> - </span></div>
            <div><span id="tracktime">00:00:00</span></div>
        </div>
    </div>
 
 </section>
   