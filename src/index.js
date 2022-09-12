// import { Cloudinary, CloudinaryVideo } from '@cloudinary/url-gen'
// import { streamingProfile } from '@cloudinary/url-gen/actions/transcode'

// const cloudinaryConfig = {
//   cloudName: 'olicarter',
//   apiKey: '437257888636718',
//   apiSecret: 'm3c0vDvm_zTAV2EG6xreKU3cOBI',
// }

const player = cloudinary.videoPlayer('video', {
  bigPlayButton: false,
  cloud_name: 'olicarter',
  controls: false,
})
player
  .source('mnmlmxml/background', {
    sourceTypes: ['hls'],
    transformation: { resource_type: 'video', streaming_profile: 'full_hd' },
  })
  .play()
console.dir(player)

let amount = 1

// const video = document.querySelector('#video')
// const canvas = document.querySelector('#canvas')
// const ctx = canvas.getContext('2d')

// video.addEventListener('playing', draw)

// video.addEventListener('timeupdate', () => {
//   const percentPlayed = video.currentTime / video.duration
//   console.log(percentPlayed * 2)
// })

// function draw() {
//   const videoWidth = video.clientWidth
//   const videoHeight = video.clientHeight

//   ctx.canvas.width = videoWidth
//   ctx.canvas.height = videoHeight

//   if (amount === 1) {
//     ctx.drawImage(video, 0, 0, videoWidth, videoHeight)
//   } else {
//     ctx.webkitImageSmoothingEnabled = false
//     ctx.mozImageSmoothingEnabled = false
//     ctx.msImageSmoothingEnabled = false
//     ctx.imageSmoothingEnabled = false

//     const w = videoWidth * amount
//     const h = videoHeight * amount
//     // Render smaller image
//     ctx.drawImage(video, 0, 0, w, h)
//     // Stretch smaller image
//     ctx.drawImage(canvas, 0, 0, w, h, 0, 0, videoWidth, videoHeight)
//   }

//   requestAnimationFrame(draw)
// }
