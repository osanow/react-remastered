export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

 export const refreshPosition = ( props, prevProps ) => {
    if (prevProps && prevProps.location.pathname === props.location.pathname && !prevProps.location.hash && props.location.hash)
        return;
    else if ( props.location.hash ){

        const name = props.location.hash.replace('#' , '');
        const element = document.getElementById(name);

        if (element){

            window.scrollTo({
                top: element.offsetTop + 50, 
                behavior: "smooth",
            });
        }
    }
    else 
        window.scrollTo({
            top: 0, 
            behavior: prevProps && prevProps.location.pathname === props.location.pathname ? "smooth" : "auto",
        });
}