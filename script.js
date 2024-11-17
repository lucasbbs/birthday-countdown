function christmasCountdown() {
    const christmasDate = new Date(new Date().getFullYear(), 11, 25);
    const now = new Date();
    const diff = christmasDate - now;

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
        merryChristmas();
    }

}

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    heading.classList.add("red");
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
    audioPlayer.play();

    audioPlayer.addEventListener('ended', () => {
        currentTrack++;
        if (currentTrack >= tracks.length) {
            currentTrack = 0
        }
        audioPlayer.src = tracks[currentTrack];
        audioPlayer.play();
    });
})



