export const dissolveEffect01 = {
    initial : { 
        opacity: 0, 
        y: 100 
    },
    animate : { 
        opacity: 1,
        y: 0 , 
        transition: { duration: 0.5 } 
    }
}

export const navBarAnimation = {
    initial : {
        opacity: 0,
        y: "-100vh"
    },
    animate : {
        opacity: 1,
        y: "0"
    },
    exit : {
        opacity: 0,
        y: "100vh"
    }
}