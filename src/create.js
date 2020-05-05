export const createEl = (tag, message, attps = {}) => {
  const el = document.createElement(tag)
  el.textContent = message

  Object.keys(attps).forEach((key) => {
    el.setAttribute(key, attps[key])
  })
  return el
}































//export const createEl = (tag, text, attrs = {}) => {
//     const el = document.createElement(tag)
//     el.textContent = text
//     Object.keys(attrs).forEach((key) => {
//       el.setAttribute(key, attrs[key])
//     })
//     return el
//   }