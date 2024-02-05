import { createNoise3D } from 'simplex-noise'

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

const noise3D = createNoise3D()

const perf = 10
const speed = 0.001
const divisor = 10000 / perf

function resize() {
  canvas.width = window.innerWidth / perf
  canvas.height = window.innerHeight / perf
}

var timer = 0
var timeg = 1
var timeb = 2

function draw() {
  var imageData = ctx.createImageData(canvas.width, canvas.height)
  var data = imageData.data

  for (var y = 0; y < canvas.height; y++) {
    for (var x = 0; x < canvas.width; x++) {
      var valuer = noise3D(x / divisor, y / divisor, timer) // Increase divisor for less detail
      var valueg = noise3D(x / divisor, y / divisor, timeg) // Increase divisor for less detail
      var valueb = noise3D(x / divisor, y / divisor, timeb) // Increase divisor for less detail
      valuer = (valuer + 1) / 2
      valueg = (valueg + 1) / 2
      valueb = (valueb + 1) / 2

      var cell = (y * canvas.width + x) * 4
      data[cell] = valuer * 255 // red
      data[cell + 1] = valueg * 255 // green
      data[cell + 2] = valueb * 255 // blue
      data[cell + 3] = 255 // alpha
    }
  }

  ctx.putImageData(imageData, 0, 0)

  timer += speed
  timeg += speed + 0.001
  timeb += speed + 0.002

  requestAnimationFrame(draw)
}

window.addEventListener('resize', resize)
resize()
draw()
