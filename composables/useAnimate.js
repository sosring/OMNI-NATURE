import gsap from 'gsap'

export const useAnimate = (() => {

  const slide = (el) => {

      gsap.from( el, {
        scrollTrigger: {
          trigger: el,
          start: "20px 80%",
          end: "=+500",
          toggleAction: "restart pause resume none"
        }, 
        y: 20,
        opacity: 0,
        duration: .5,
        ease: 'in'
      })
  }

  return  { slide }
})
