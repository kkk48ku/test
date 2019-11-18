export function debounce(fn, delay) {
  let timer = null
  return function() {
    const context = this
    const args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(fn)
      fn.apply(context, args)
    }, delay)
  }
}
