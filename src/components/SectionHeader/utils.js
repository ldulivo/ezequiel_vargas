export const ScrollOff = (id) => {
  document.getElementById(id).showModal()
  ScrollDisable()
}

export const ScrollOn = (id) => {
  document.getElementById(id).close()
  ScrollEnable()
}

export const ScrollDisable = () => {
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.position = 'fixed'
}

export const ScrollEnable = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}