export function getPageFromURL() {
    const paramsString = window.location.href.split('?')[1];
    const pageNumber = parseInt(new URLSearchParams(paramsString).get("page"));
 
    return pageNumber ? pageNumber : 1;
};