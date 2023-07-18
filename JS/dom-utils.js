function setElementText(el, text) {
  el.innerText = text;
}

function createLink(href, linkText) {
  const newLink = document.createElement("a");
  newLink.setAttribute("href", href);
  newLink.innerText = linkText;
  return newLink;
}

export { setElementText, createLink };
