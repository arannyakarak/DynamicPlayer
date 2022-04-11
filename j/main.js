/**
 * main.js
 * The init script for this HTML5 Video Application
 * This app is used as a demo for creating a video application utilizing the video API
 * built into HTML5. It is inspired by Bruce Lawson's example hack for creating video captions.
 * I added the ability to associate custom callbacks with moments in time of the video.
 *
 * 
 * @NOTE: Mozilla released Popcorn and Butter for doing the same thing right after I got this working.
 * @UPDATE: Popcorn and Butter are dead. This is now useful again. I've updated it to be vanilla JS 
 * with no dependencies. by Troy Bennett 7-2010 (updated 12-2021)
 */

import {
    cueTimer
} from "./modules/cuepoints.js";

// const vid = document.querySelector("#vid");
const vid = document.querySelector("#vido");
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
var videoContainer = document.getElementById('videoContainer');


document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [{
            seconds: 1,
            callback: intro
        },
        {
            seconds: 11,
            callback: history
        },
        {
            seconds: 27,
            callback: infovideo
        },
        {
            seconds: 35,
            callback: mythology
        },
        {
            seconds: 46,
            callback: wikipedia
        },
        {
            seconds: 69,
            callback: mudravideo
        },
        {
            seconds: 79,
            callback: mudra1
        },
        {
            seconds: 89,
            callback: mudra2
        },
        {
            seconds: 104,
            callback: story
        },
        {
            seconds: 112,
            callback: story2
        },
        {
            seconds: 120,
            callback: description
        },
        {
            seconds: 145,
            callback: quote
        }

    ];

    //this activates the cuepoints module.
    // Pass it the ID of the video to watch
    // and the array of cuepoint objects.
    // cueTimer.setup("vid", myCues);
    cueTimer.setup("vido", myCues);

    const selectVid = document.querySelector("#video_select");
    const display = document.getElementById("transcript");
    const transcript_en = document.getElementById("transcript-en");
    const transcript_es = document.getElementById("transcript-es");
    const transcript_fr = document.getElementById("transcript-fr");
    const showHide = document.getElementById("show-hide");


    selectVid.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });

    transcript_en.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("captions/aigiri.vtt", display);
        });

    transcript_es.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/english.vtt", display);
        });

    transcript_fr.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/hindi.vtt", display);
        });

    showHide.addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            webvttTranscript("subtitles/french.vtt", display);
            if (e.target.innerHTML == "Show Transcript") {
                e.target.innerHTML = "Hide Transcript";
                display.style.display = "block";
            } else {
                e.target.innerHTML = "Show Transcript";
                display.style.display = "none";
            }
        });

    function selectVideo(e, clip) {
        clip.src = e.target.value;
        clip.load();

        // var el = document.getElementById('str');
        // el.innerHTML = "";
        // document.querySelector("#web").src = "";
        // document.querySelector("#web").style.borderRadius = None;

        // clip.currentTime = 0;
        clip.play();
    }

});


//the custom callback functions to trigger when a cuepoint is hit.
//You can code up whatever behavior you need in your own callbacks
//feel free to rename the functions to be more descriptive of what they do.
function intro() {
    var string = "The dance forms know as Bharatanatyam origin from South India ";
    var str = string.split("");
    var el = document.getElementById('str');
    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() :
            clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();
    document.querySelector("#web").src = "images/india.png";
    document.querySelector("#web").style.borderRadius = "5px";

}

function history() {

    var el = document.getElementById('str');
    el.innerHTML = "";
    document.querySelector("#web").src = "";
    var string = "One of the oldest clssical dance forms in India, more than 2000 years";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();

    document.body.style.backgroundImage = "url('images/background2.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.color = "orange";

    setTimeout(() => {
        document.querySelector("#web").src = "images/info.jpg";
    }, 3000);

}

function infovideo() {
    var el = document.getElementById('str');
    el.innerHTML = "";

    var string = "More information About Bharatanatyam ";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();

    vid.pause();

    setTimeout(() => {
        vid.play();
        document.querySelector("#web").src = "";
        var el = document.getElementById('str');
        el.innerHTML = "";
    }, 36000);

    document.querySelector("#web").src = "assets/About Bharatanatyam.mp4";
    document.querySelector("#web").style.borderRadius = "5px";
    
}

function mythology() {
    var el = document.getElementById('str');
    el.innerHTML = "";

    var string = "Mythology";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();

    document.body.style.backgroundImage = "url('images/vishnu.jpg')";
    document.body.style.backgroundPosition = "center";
    document.body.style.color = "white";
    document.querySelector("#vido").style = "border: 10px solid white";
    setTimeout(() => {
        document.querySelector("#web").src = "images/dance.png";
    }, 4000);
}

function wikipedia() {
    var el = document.getElementById('str');
    el.innerHTML = "";
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Bharatanatyam";
    document.querySelector("body").style = "background-image: linear-gradient(orange, white, green);";
    document.querySelector("#web").style.borderRadius = "2px";
    document.querySelector("#vido").style = "border: 10px solid orange";


}

function mudravideo() {
    var el = document.getElementById('str');
    el.innerHTML = "";

    var string = "Mudras: Hand/Finger gestures";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();

    vid.pause();

    setTimeout(() => {
        vid.play();
        document.querySelector("#web").src = "";
        var el = document.getElementById('str');
        el.innerHTML = "";
    }, 104000);

    document.querySelector("#web").src = "assets/Mudras in bharatanatyam.mp4";
    document.querySelector("#web").style.borderRadius = "5px";
}

function mudra1() {
    var el = document.getElementById('str');
    el.innerHTML = "";

    var string = "Mayurakhyo = A peacock (Mudras)";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();
    document.querySelector("#web").src =
        "images/mayurakhyo.jpg";
    document.body.style.backgroundImage = "url('images/bc3.jpg')";
    // document.querySelector("body").style = "background-image: url('images/cover.jpg');"
    document.querySelector("#web").style.borderRadius = "2px";
    document.querySelector("#vido").style = "border: 10px solid black";
    document.body.style.color = "white";

}

function mudra2() {
    var el = document.getElementById('str');
    el.innerHTML = "";
    var string = "Arthachandra = Half moon (Mudras)";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();
    document.querySelector("#web").src =
        "images/arthachandra.jpg";

}


function story() {
    document.querySelector("#web").src = "";
    var el = document.getElementById('str');
    el.innerHTML = "";
    var string = "worshipped Goddess in Hindu mythology; Maa Durga";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();
    setTimeout(() => {
        document.querySelector("#web").src = "images/durga.png";
    }, 3000);
    document.body.style.backgroundImage = "url('images/bc4.jpg')";
    document.querySelector("#web").style.borderRadius = "2px";
    document.querySelector("#vido").style = "none";

}

function story2() {
    var el = document.getElementById('str');
    el.innerHTML = "";
    var string = "She is known to combat evil & demonic forces that threat peace";
    var str = string.split("");

    (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
        var running = setTimeout(animate, 70);
    })();
    // document.querySelector("#web").src =
    // "images/durga.png";
    // document.body.style.backgroundImage = "url('images/bc4.jpg')";
    // document.querySelector("#web").style.borderRadius = "2px";
    // document.querySelector("#vido").style = "none";

}

function description() {
    var el = document.getElementById('str');
    el.innerHTML = "";
    var string = "Song:Aigiri Nandini / Artist:Rajalakshmee Sanjay. Presenting Durga Stuti where she defeats the demon Mahishasura to  liberate oppressed & restore peace & prosperity.";
    var str = string.split("");
    // var el = document.getElementById('str');
    (function animate() {
        var running = setTimeout(animate, 70);
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
    })();
    document.querySelector("#web").src = "";
}

function quote() {

    var el = document.getElementById('str');
    el.innerHTML = "";
    document.querySelector("#web").src = "images/end.png";
    document.querySelector("#web").style.borderRadius = "20px";

}



// control on video
////////////////////////////////////////////////////

/* Get our elements */


// const player       =  document.querySelector('.player');

// const video        =  player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');

const current = player.querySelector('.current');
const duration = player.querySelector('.duration');
const fullscreen = player.querySelector('.fullscreen-btn');


/* Build out functions */


// toggle play/pause
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

// Detect press of spacebar, toggle play
function detectKeypress(e) {
    if (e.keyCode == 32) {
        togglePlay();
    } else {
        return;
    }
}

// Update button on play/pause
function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

// Allow for video skipping
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Handle the range of the video
function handleRangeUpdate() {
    video[this.name] = this.value;
}

// Track how far the video has progressed and create css
// variable so that we can visually represent it 
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// Allow for video scrubbing
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(currentTime);
}


// Get currnet time of video and append correct amount of 0s
function currentTime() {
    var curmins = Math.floor(video.currentTime / 60);
    var cursecs = Math.floor(video.currentTime - curmins * 60);
    var durmins = Math.floor(video.duration / 60);
    var dursecs = Math.floor(video.duration - durmins * 60);
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
        dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
        curmins = "0" + curmins;
    }
    if (durmins < 10) {
        durmins = "0" + durmins;
    }
    current.innerHTML = curmins + ":" + cursecs;
    duration.innerHTML = durmins + ":" + dursecs;
}

// Create fullscreen video button
function toggleFullscreen() {
    if (video.requestFullScreen) {
        video.requestFullScreen();
    } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    }
}


/* Hook up the event listeners */


// Click events
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
fullscreen.addEventListener('click', toggleFullscreen);

// Keypress (Play/Pause)
window.addEventListener('keydown', detectKeypress);

// Play/Pause events 
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// Do these on time update
video.addEventListener('timeupdate', currentTime);
video.addEventListener('timeupdate', handleProgress);

// Skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));

// Detect how far mouse has moved
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

// Track scrubbing 
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

// Track when mouse is up/down on scrub bar
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


/////////////////////////////////////////////////////

//cc menu
var subtitles = document.getElementById('subtitles');
for (var i = 0; i < video.textTracks.length; i++) {
    video.textTracks[i].mode = 'hidden';
}

var subtitlesMenu;
if (video.textTracks) {
    var df = document.createDocumentFragment();
    var subtitlesMenu = df.appendChild(document.createElement('ul'));
    subtitlesMenu.className = 'subtitles-menu';
    subtitlesMenu.appendChild(createMenuItem('subtitles-off', '', 'Off'));
    for (var i = 0; i < video.textTracks.length; i++) {
        subtitlesMenu.appendChild(createMenuItem('subtitles-' + video.textTracks[i].language, video.textTracks[i].language, video.textTracks[i].label));
    }
    videoContainer.appendChild(subtitlesMenu);
}


var subtitleMenuButtons = [];

function createMenuItem(id, lang, label) {
    var listItem = document.createElement('li');
    var button = listItem.appendChild(document.createElement('button'));
    button.setAttribute('id', id);
    button.className = 'subtitles-button';
    if (lang.length > 0) button.setAttribute('lang', lang);
    button.value = label;
    button.setAttribute('data-state', 'inactive');
    button.appendChild(document.createTextNode(label));
    button.addEventListener('click', function (e) {
        // Set all buttons to inactive
        subtitleMenuButtons.map(function (v, i, a) {
            subtitleMenuButtons[i].setAttribute('data-state', 'inactive');
        });
        // Find the language to activate
        var lang = this.getAttribute('lang');
        for (var i = 0; i < video.textTracks.length; i++) {
            // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
            if (video.textTracks[i].language == lang) {
                video.textTracks[i].mode = 'showing';
                this.setAttribute('data-state', 'active');
            } else {
                video.textTracks[i].mode = 'hidden';
            }
        }
        subtitlesMenu.style.display = 'none';
    });
    //    subtitleMenuButtons.push(button);
    return listItem;
}

subtitles.addEventListener('click', function (e) {
    if (subtitlesMenu) {
        subtitlesMenu.style.display = (subtitlesMenu.style.display == 'block' ? 'none' : 'block');
    }
});