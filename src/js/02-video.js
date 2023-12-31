import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function onPlayVideo ({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds)
}
player.on('timeupdate', throttle(onPlayVideo, 1000));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));