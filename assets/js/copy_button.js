// Clipboard
// This makes the button blink 250 miliseconds

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function buttonBlink(btn, style) {
    btn.classList.remove("btn-light");
    btn.classList.add(style);
    await sleep(250); //Blink ms
    btn.classList.remove(style);
    btn.classList.add("btn-light");
  }
  // End
  
  
// Select all pre codes
var codeChunk = document.querySelectorAll("pre");

// Loop to add buttons
for (var i = 0; i < codeChunk.length; i++) {

  var pre = codeChunk.item(i);
  var child = pre.firstElementChild;

  // Check if there is a child
  if (child !== null) {
    // Check if child is code 
    if (child.tagName == "CODE") {

      // Create a wrapper div
      var wrapper = document.createElement('div');
      wrapper.style.position = 'relative';

      // Replace pre with the wrapper
      pre.parentNode.replaceChild(wrapper, pre);

      // Append pre to the wrapper
      wrapper.appendChild(pre);

      var btn = document.createElement("button");
      // Prepare button
      btn.innerHTML = "<i class='far fa-copy'></i>"; // Icon to be displayed on the button
      btn.classList.add("btn", "btn--primary", "new-class");
      // Inline styling
      btn.style.position = "absolute";
      btn.style.right = "1em";
      btn.style.width = "30px";
      btn.style.height = "30px";
      btn.style.padding = "5px";
      btn.style.fontSize = "16px";
      btn.style.backgroundColor = null;

      // Button: CSS - Add new classes
      btn.classList.add("btn", "btn--primary");

      // Identifier for ClipboardJS
      btn.setAttribute("data-clipboard-copy", "");

      // Insert button
      wrapper.insertBefore(btn, wrapper.firstChild);
    }
  }
}

// Copy to clipboard
var clipboard = new ClipboardJS("[data-clipboard-copy]", {
  target: function (trigger) {
    return trigger.parentNode.querySelector('pre');
  }
});
  
  // Messages and make the button blink
  clipboard.on("success", function (e) {
    e.clearSelection();
    buttonBlink(e.trigger, "btn--success");
  });
  
  clipboard.on("error", function (e) {
    e.clearSelection();
    buttonBlink(e.trigger, "btn--danger");
  });
  // Finish