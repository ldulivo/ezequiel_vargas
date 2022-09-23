import { useCallback, useEffect, useRef, useState } from 'react'
import { Left, Right } from '../Arrows'
const CarouselOfImages = ({ images, contentWidth = 500, contentHeight = 500 }) => {
  const content = useRef()
  const selected = useRef()
  const [currentImage, setCurrentImage] = useState(0)
  const amount = images?.length

  if (!Array.isArray(images) || amount === 0) return

  const nextImage = () => {
    setCurrentImage(currentImage === amount - 1 ? 0 : currentImage + 1)
  }

  const previousImage = () => {
    setCurrentImage(currentImage === 0 ? amount - 1 : currentImage - 1)
  }

  const selectedImage = (i) => {
    setCurrentImage(i)
  }

  const SelectedButton = () => {
    return (
      <div
        ref={selected}
        className="selected">
        {
          images.map((image, index) =>
            <button
              className={currentImage === index ? 'active' : ''}
              key={index}
              onClick={() => selectedImage(index)}>
            </button>
          )
        }
        </div>
      )
  }
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const HandleImages = useCallback(() => {
    return (
      <div
        ref={content}
        className="content">
          <main>
            {
              images.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    alt="" />
                )
              })
            }
          </main>
        <SelectedButton />
      </div>
    )
  }, [])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    content.current.style.width = `${contentWidth}px`
    content.current.style.height = `${contentHeight}px`
    content.current.childNodes[0].style.transform = `translateX(${(contentWidth * currentImage) * -1}px)`

    images.map((image, index) => 
      selected.current.childNodes[index].classList.remove('active')
    )
    selected.current.childNodes[currentImage].classList.add('active')
  }, [currentImage])
  
  return (
    <div className="Slider">
      <HandleImages />
      <button
        onClick={() => previousImage()}>
        <Left />
      </button>
      <button
        onClick={() => nextImage()}
        className='right'>
        <Right />
      </button>
    </div>
  )
}

export default CarouselOfImages