document.addEventListener("click", function(e) {
  if (event.target.tagName.toLowerCase() === 'a') {
    event.target.setAttribute("target", "_blank");
    console.log("Tabbr detected <a> HTML tag link & openend in a new tab")
  }
});
