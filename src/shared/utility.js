import React, {lazy} from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

Date.prototype.getMonthName = function () {
    return this.monthNames[this.getMonth()];
};

export const dateFormat = (date = "1/1/1990") => {

    const dataArgs = date.split("-").join(",");
    const converted = new Date(dataArgs);
    return `${converted.getMonthName()} ${converted.getDate()}, ${converted.getFullYear()}`;
}

export const toCapitalize = (text) => {
    const words = [...text.split(" ")];

    const newText = words.map((val) => {
        return val.length > 2 ? val.charAt(0).toUpperCase() + val.substr(1) : val;
    })

    return newText.join(" ");
}

 export const refreshPosition = ( props, prevProps ) => {
     if (prevProps && prevProps.location.pathname === props.location.pathname && !prevProps.location.hash && props.location.hash && props.location.hash === prevProps.location.hash)
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

export const initPageRouting = ( links, subpageName, directory, limit = 99) => {
    let counter = 0;
    let routes = [];
    for (let section in links) {
        for (let name in links[section]) {
            if ( name !== "ordered" ){
                counter++;
                let importPath;
                if (counter > limit && !name.includes("All posts"))
                    importPath = () => import('../components/NotFoundPage/NotFoundPage');
                else if ( links[section][name].url )
                    importPath = () => import(`../containers/${directory}/Pages/${links[section][name].url.replace('.html', '.js')}`);
                else
                    importPath = () => import(`../containers/${directory}/Pages/${links[section][name].replace('.html', '.js')}`);

                let Page = lazy(importPath);
                let title = toCapitalize(name);

                routes.push(
                    <Route exact
                    key={name}
                    name={title}
                    path={"/" + subpageName + "/" + (links[section][name].url ? links[section][name].url : links[section][name] )}
                    render={() => <>
                            <Helmet title={title + " - React"} />
                            <Page title={title}
                            links={links}
                            date={ dateFormat(links[section][name].time) }
                            author={links[section][name].author}/>
                        </>}
                    />);
            }
        }
    }

    return routes;
}

export const getCurrentRoute = (links, pathname, counter = 0) => {
    for (let section in links) {
        for (let name in links[section]) {
            if ( links[section][name].value && pathname.includes(links[section][name].value.url) ) {
                return counter;
            }
            else if ( pathname.includes(links[section][name]) ){
                return counter;
            }
            counter++;
        }
    }
}