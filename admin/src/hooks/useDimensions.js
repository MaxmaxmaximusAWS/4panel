import ResizeObserver from 'resize-observer-polyfill';


export default function useDimensions() {
  const ref = useRef()

  const [dimensions, setDimensions] = useState(() => {
    return getDimensions(ref.current)
  })

  useEffect(() => {
    const element = ref.current

    function updateDimensions() {
      const newDimensions = getDimensions(element)

      if (isChanged(dimensions, newDimensions)) {
        setDimensions(newDimensions)
      }
    }

    updateDimensions()

    const observer = createObserver(element, updateDimensions)
    return () => observer.disconnect()

  })

  return [ref, dimensions]
}


function getDimensions(element) {

  if (element) {
    var dimensions = {
      height: element.clientHeight,
      width: element.clientWidth,
    }
  } else {
    var dimensions = {
      height: 0,
      width: 0,
    }
  }

  return dimensions
}


function createObserver(element, handler) {
  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      handler(entry.contentRect)
    }
  });

  observer.observe(element)
  return observer
}


function isChanged(dimensions, newDimensions) {
  for (let key in newDimensions) {
    if (newDimensions.hasOwnProperty(key)) {
      if (newDimensions[key] !== dimensions[key]) {
        return true
      }
    }
  }

  return false
}
