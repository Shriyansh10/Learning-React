function customRender(element, parent){
    const newElement = document.createElement(element.type);
    for(let key in element.props){
        if((key !== "children"))
        newElement.setAttribute(`${key}`, `${element.props[key]}`) 
    }
    newElement.innerText = element.children;
    parent.appendChild(newElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById("root");
// console.log(`hello ${if(true) ? mainContainer : reactElement}`)
customRender(reactElement, mainContainer);