// add date now to the footer of the page
const DOM_dateFooter = document.querySelector('footer span');
DOM_dateFooter.innerHTML = new Date().toLocaleDateString();
