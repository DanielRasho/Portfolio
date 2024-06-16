function coolDownFn(func, timeout = 1) {
  let shouldWait = false

  return (...args) => {
    if (shouldWait) {
      return
    }
    func(...args)
    shouldWait = true

    setTimeout(() => {
      shouldWait = false
    }, timeout * 1000)
  }
}

export { coolDownFn }
