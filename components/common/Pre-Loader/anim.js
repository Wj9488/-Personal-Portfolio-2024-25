export const slideUp = {
    initial: {
        y: "0"
    },
    exit: {
        y: "-100dvh",
        transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.2 }
    }
}

export const opacity = {
    initial: {
        opacity: 0,
        y: 5,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.25, delay: 0.8},
    }
}