let christmasDate;
let timerID;
let isPlaying = false;
const birthday = document.querySelector('#birthday')
birthday.addEventListener('change', () => {
    christmasDate = new Date(birthday.value)
    christmasCountdown()
    timerID = setInterval(christmasCountdown, 1000);
})

function christmasCountdown() {
    const now = new Date();
    const diff = (christmasDate || 0) - now;

    const msInSecond = 1000; //сколько миллисекунд в секунде - 1,000
    const msInMinute = 60 * 1000; // сколько миллисекунд в минуте - 60,000 
    const msInHour = 60 * 60 * 1000; // сколько миллисекунд в часе - 3 600 000
    const msInDay = 24 * 60 * 60 * 1000; // сколько миллисекунд в сутках - 86 400 000

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
    }
}

function handleIconPlayButton(isPlaying) {
    const playButton = document.querySelector('#icon-button')
    if (isPlaying) {
        playButton.classList.remove('fa-play')
        playButton.classList.add('fa-stop')
    } else {
        playButton.classList.remove('fa-stop')
        playButton.classList.add('fa-play')
    }
}


const button = document.querySelector("#myButton");
button.addEventListener("click", function () {
    const audioPlayer = document.querySelector("#myAudio");
    const tracks = [
        './happy-birthday-1.mp3',
        './happy-birthday-2.mp3'
    ];
    let currentTrack = 0;

    audioPlayer.src = tracks[currentTrack];

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false
    } else {
        audioPlayer.play();
        isPlaying = true
    }

    handleIconPlayButton(isPlaying)

    audioPlayer.addEventListener('ended', () => {
        currentTrack++;
        if (currentTrack >= tracks.length) {
            currentTrack = 0
        }
        audioPlayer.src = tracks[currentTrack];
        audioPlayer.play();
    });
})



