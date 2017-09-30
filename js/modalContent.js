var dialogContent = '<dialog id="ys-dialog"><h4>ys-dialog</h4><br><p>press [esc] to close this dialog.</dialog>';

//Injecting the content
var content = document.createElement('div');
content.innerHTML = dialogContent;
document.body.appendChild(content);