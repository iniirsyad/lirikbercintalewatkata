constructor(lrcContainerSelector, audioSrc, lyricsText, style = {
    fontSize: 40,
    ifBlur: true,
    ifTrainsion: true,
    scale: 1.2,
    interval: 10,
    ifInner: false,
    animateionOffsetTime: 5
}) 
{
    this.lrcContainer = document.querySelector(lrcContainerSelector);
    this.audio = new Audio(audioSrc);
    this.audio.loop = true; // Menambahkan fitur pengulangan
    this.lyricsText = lyricsText;
    this.lrcList = [];
    this.offsetH = 90;
    this.lastLrc = -1;
    this.style = style;
    this.init();
}
