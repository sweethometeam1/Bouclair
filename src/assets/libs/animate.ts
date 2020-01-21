export const start = (draw: (progress: number) => void, duration: number, timing: (timeFraction: number) => number) => {
  let start = performance.now()

  requestAnimationFrame(function animate (time) {
    // timeFraction changes from 0 to 1
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}

const makeOut = (timing: (timeFraction: number) => number) => {
  return function (timeFraction: number) {
    return 1 - timing(1 - timeFraction)
  }
}

const makeInOut = (timing: (timeFraction: number) => number) => {
  return function (timeFraction: number) {
    if (timeFraction < 0.5) { return timing(2 * timeFraction) / 2 } else { return (2 - timing(2 * (1 - timeFraction))) / 2 }
  }
}

const functions:{
  [f: string]: (timeFraction: number) => number
} = {}

functions.linear = (timeFraction) => timeFraction
functions.easeIn = (timeFraction) => 1 - Math.sin(Math.acos(timeFraction))
functions.easeOut = (timeFraction) => makeOut(f.easeIn)(timeFraction)
functions.easeInOut = (timeFraction) => makeInOut(f.easeIn)(timeFraction)

export const f = functions
