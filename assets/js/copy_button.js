let codes = document.querySelectorAll('.highlight > pre > code');
let countID = 0;
codes.forEach((code) => {

    var wrapper = document.createElement('div');
    wrapper.style.position = 'relative';

    code.parentNode.replaceChild(wrapper, code);

    // Append pre to the wrapper
    wrapper.appendChild(code);

    code.setAttribute("id", "code" + countID);

    let btn = document.createElement('button');
    btn.className = "btn-copy";
    btn.setAttribute("data-clipboard-action", "copy");
    btn.setAttribute("data-clipboard-target", "#code" + countID);
    // Button: CSS - Add new classes
    btn.innerHTML = "<i class='far fa-copy'></i>"; // Icon to be displayed on the button
    btn.classList.add("btn", "btn--primary");
    btn.style.width = "30px";
    btn.style.height = "30px";
    btn.style.position = "absolute";
    // btn.style.right = "1em";

    wrapper.appendChild(btn);
    countID++;
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let clipboard = new ClipboardJS('.btn-copy');

async function buttonBlink(btn, style) {
    btn.classList.remove("btn-light");
    btn.classList.add(style);

    await sleep(250); //Blink ms
    btn.classList.remove(style);
    btn.classList.add("btn-light");
}


// Messages and make the button blink
clipboard.on("success", function (e) {
    e.clearSelection();
    buttonBlink(e.trigger, "btn--success");
});

