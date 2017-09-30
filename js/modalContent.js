var dialogHead = 'YS Survey';
var dialogSummary = 'Please spare some time for us to understand you better.';
var linksHref = ['https://www.qazqoz.esy.es'];
//Should contain the same number of items as there in 'linksHref'
var linksText2Display = ['Here'];
var escMessage = 'Press ESC key to Close.';

//The id='ya-dialog' and the var name 'dialogTemplate' should not be changed.
var dialogTemplate = '<dialog id="ys-dialog"><strong>'+dialogHead+
					 '</strong><br><p>'+dialogSummary+
					 '</p><br><p>'+escMessage+
					 '</p>';

//injecting the content into page
var div = document.createElement('div');
div.innerHTML = dialogTemplate;
document.body.appendChild(div);

console.log("Modal Content.... END");