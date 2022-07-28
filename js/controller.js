// Attributes.
const container = document.querySelector ("div.images-container");
const api_link = "https://cdcnt.herokuapp.com/api/app/1/status/";
let invert = false;

// Checks whether a variable is not undefined and null.
is_empty = attr => (attr === undefined || attr === null || String (attr).trim ().length === 0);

// Go the next screenshot.
function go_to_next_screenshot () {
    // Go to the next screenshot.
    container.scrollLeft += 250;
    // Locks scrollbar motion.
    if (container.scrollLeft >= container.scrollWidth) container.scrollLeft = 2250;
}

// Go to the preview screenshot.
function go_to_preview_screenshot () {
    // Go to the preview screenshot.
    container.scrollLeft -= 250;
    // Locks scrollbar motion.
    if (container.scrollLeft <= 0) container.scrollLeft = 0;
}

// Adjusts view.
function view_adjustement () {
    // Responsive screen.
    if (window.outerWidth <= 690) $ ("div.product-infos, div.app-body").removeClass ("disable-display").addClass ("disable-display");
    // Changes margins.
    else $ ("div.product-infos, div.app-body").removeClass ("disable-display");
}

// Automatic nextor.
function automatic_carrousel (delay, old_direction) {
    // Waiting for a few secondes.
    let pid = window.setTimeout (() => {
        // Normal carrousel.
        if (!old_direction) {
            // Go the next screenshot so possible.
            if (container.scrollLeft < 2250) go_to_next_screenshot ();
            // Changes carrousel animation direction.
            else invert = true;
            // Otherwise.
        } else {
            // Go the preview screenshot so possible.
            if (container.scrollLeft > 0) go_to_preview_screenshot ();
            // Changes carrousel animation direction.
            else invert = false;
        }
        // Clears the current timeout process id.
        window.clearTimeout (pid);
        // Creates another process of the current method.
        if (old_direction == invert) automatic_carrousel (5000, invert);
        // Otherwise.
        else automatic_carrousel (0, invert);
    // Waiting for the given pass delay.
    }, delay);
}

// Automatic image tutorial.
function automatic_img_tutorial (delay) {
    // Waiting for a few secondes.
    let aid = window.setTimeout (() => {
        console.log (container.scrollLeft);
        // Go the next screenshot so possible.
        if (container.scrollLeft < 2250) go_to_next_screenshot ();
        // Otherwise.
        else container.scrollLeft = 0;
        // Clears the current timeout process id.
        window.clearTimeout (aid);
        // Creates another process of the current method.
        automatic_img_tutorial (5000);
    // Waiting for the given pass delay.
    }, delay);
}

// Animates label text infos content.
function animate_text (parent, text, interval, delay = 0, dir = 1, invert = false, finished = null) {
    // The given text is not empty.
    if (!is_empty (parent) && !is_empty (String (text).trim ())) {
        // Clears parent text and html content.
        parent.innerHTML = '';
        parent.innerText = '';
        // Gets the current delay.
        let timeout = delay;
        // Draws each character from the text.
        for (let j = (dir > 0 ? 0 : (text.length - 1)); (dir > 0 ? j < text.length : j >= 0); j += dir) {
            // Generates a label tag for each given character.
            let lb = document.createElement ("label");
            // Gets the current character.
            lb.innerText = text [j];
            // Gets the current opacity value.
            lb.style.opacity = (!invert ? 0 : 1);
            // Loads fadeout css animation to animate the current text character.
            lb.style.animation = (interval + "ms fadeout " + timeout + "ms forwards");
            // Changes animation direction.
            lb.style.animationDirection = (!invert ? "normal" : "reverse");
            // Appends the current character to the given parent.
            (dir > 0 ? parent.appendChild (lb) : parent.prepend (lb));
            // Recalculates the current time interval.
            timeout += interval;
        }
        // Animation is over.
        if (!is_empty (finished)) setTimeout (() => finished (), (delay + (interval * text.length)));
    }
}

// When the page is fully loaded.
$ (() => {
    // Listens "Resize" event.
    window.addEventListener ("resize", () => view_adjustement ());
    // Launches automatic carrousel animation process.
    automatic_img_tutorial (5000);
    // Adjusts view.
    view_adjustement ();
    // Animates the top text.
    animate_text (document.querySelector ("div.entity-source > label"), "Développé par", 50, 1400, 1, false, () => {
        // Animates the next text.
        animate_text (document.querySelector ("div.entity-name > label > i"), "Console Art Cybernetic", 80);
    });
    // Fixing "click" event on left arrow icon.
    document.querySelector ("div.left-arrow").addEventListener ("click", () => {
        // Go the preview screenshot.
        go_to_preview_screenshot ();
        // Changes direction to invert.
        invert = true;
    });
    // Fixing "click" event on right arrow icon.
    document.querySelector ("div.right-arrow").addEventListener ("click", () => {
        // Go to the next screenshot.
        go_to_next_screenshot ();
        // Changes direction to normal.
        invert = false;
    });
    // Fetches configurations.
    const doptions = new Object ({
        headers: new Object ({"Content-Type": "application/json"}), body: JSON.stringify (new Object ({downloadc: 1})), method: "POST"
    });
    // Makes a POST request with fetch method.
    document.querySelector ("a#download-btn").addEventListener ("click", () => fetch (api_link, doptions).then (data => {
        // TODO something here...
        console.log (`DOWNLOAD SUCCESS: ${data}`);
    // When an error thrown.
    }).catch (error => console.error (error)));
    // Fetches configurations.
    const coptions = new Object ({
        headers: new Object ({"Content-Type": "application/json"}), body: JSON.stringify (new Object ({viewc: 1})), method: "POST"
    });
    // Makes a POST request with fetch method.
    fetch (api_link, coptions).then (data => console.log (`VIEW SUCCESS: ${data}`)).catch (error => console.error (error));
});
