const show = (node: HTMLElement, show: boolean) => {
    setCustomProperties(node, show);
    
    return {
        update(show: boolean) {
            setCustomProperties(node, show);
        }
    }
}

const setCustomProperties = (node: HTMLElement, show: boolean) => {
    if(show) {
        node.style.removeProperty('display')
    } else {
        node.style.setProperty('display', 'none', 'important');
    }
}

export default show