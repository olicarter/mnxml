let amount = 1

const video = document.querySelector('#video')
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

video.addEventListener('playing', draw)

video.addEventListener('timeupdate', () => {
  const percentPlayed = video.currentTime / video.duration
  console.log(percentPlayed * 2)
})

function draw() {
  const videoWidth = video.clientWidth
  const videoHeight = video.clientHeight

  ctx.canvas.width = videoWidth
  ctx.canvas.height = videoHeight

  if (amount === 1) {
    ctx.drawImage(video, 0, 0, videoWidth, videoHeight)
  } else {
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSmoothingEnabled = false
    ctx.msImageSmoothingEnabled = false
    ctx.imageSmoothingEnabled = false

    const w = videoWidth * amount
    const h = videoHeight * amount
    // Render smaller image
    ctx.drawImage(video, 0, 0, w, h)
    // Stretch smaller image
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, videoWidth, videoHeight)
  }

  requestAnimationFrame(draw)
}
