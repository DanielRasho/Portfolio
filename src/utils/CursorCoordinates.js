function getCursorRelativeCoordinates(event, HTMLElement) {
  var clipTop = event.clientY
  var clipLeft = event.clientX

  let containerRect = HTMLElement.getBoundingClientRect()

  let relativeTop = clipTop - containerRect.top
  let relativeLeft = clipLeft - containerRect.left

  return { relativeTop, relativeLeft }
}

export { getCursorRelativeCoordinates }
