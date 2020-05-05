export const createEl = (tag, message, attps = {}) => {
  const el = document.createElement(tag)
  el.textContent = message

  Object.keys(attps).forEach((key) => {
    el.setAttribute(key, attps[key])
  })
  return el
}

