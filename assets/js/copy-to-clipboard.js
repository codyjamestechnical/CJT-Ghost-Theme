function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
             // Place in top-left corner of screen regardless of scroll position.
  target.style.position = 'fixed';
  target.style.top = 0;
  target.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  target.style.width = '2em';
  target.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  target.style.padding = 0;

  // Clean up any borders.
  target.style.border = 'none';
  target.style.outline = 'none';
  target.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  target.style.background = 'transparent';


            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(target);
    
    // // copy the selection
    // var succeed;
    // try {
    // 	  succeed = document.execCommand("copy");
        
    // } catch(e) {
    //     succeed = false;
    // }

    // if (succeed) {
    //   document.body.removeChild(textArea);
    // }
    // // restore original focus
    // if (currentFocus && typeof currentFocus.focus === "function") {
    //     currentFocus.focus();
    // }
    
    // if (isInput) {
    //     // restore prior selection
    //     elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    // } else {
    //     // clear temporary content
    //     target.textContent = "";
    // }
    return successful;
}