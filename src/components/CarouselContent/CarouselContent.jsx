export const CarouselContent = ({ children }) => {
  console.log('children', children.length)
  children.map((child, index) => {
    return console.log(`index ${index}`, children[index])
  })
  /* console.log('test', children.childNodes[0]) */
  /* console.log('test', children[0]) */
  return (
    <section>
      {children}
    </section>
  )
}