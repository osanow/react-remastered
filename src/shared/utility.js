import React, {lazy} from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const toCapitalize = (text) => {
    const words = [...text.split(" ")];

    const newText = words.map((val) => {
        return val.length > 2 ? val.charAt(0).toUpperCase() + val.substr(1) : val;
    })

    return newText.join(" ");
}

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

export const initPageRouting = ( links, pathname, subpageName, directory ) => {
    let currentRoute = 0;
    let counter = 0;
    let routes = [];
    for (let section in links) {
        for (let name in links[section]) {
            counter++;

            if ( pathname.includes(links[section][name]) )
                    currentRoute = routes.length;

            let importPath = () => import(`../containers/${directory}/Pages/${links[section][name].replace('.html', '.js')}`);
            if (counter > 4)
                importPath = () => import('../components/NotFoundPage/NotFoundPage');

            let Page = lazy(importPath);
            let title = toCapitalize(name);

            if (!(name === "value" || name === "ordered"))
                routes.push(<Route exact key={name} name={title} path={"/" + subpageName + "/" + links[section][name]} render={() => <> <Helmet title={title + " - React"} /> <Page title={title} /> </>} />);
        }
    }

    return [ routes, currentRoute ];
}

export const getCurrentRoute = (links, pathname) => {
    let counter = 0;
    for (let section in links) {
        for (let name in links[section]) {
            if ( pathname.includes(links[section][name]) )
                return counter;
            counter++;
        }
    }
    return -1;
}