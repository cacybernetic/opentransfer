// Contains all screenshots list.
const screenshots = [
    "./screenshots/screenshot_1.jpeg", "./screenshots/screenshot_2.jpeg", "./screenshots/screenshot_3.jpeg",
    "./screenshots/screenshot_4.jpeg", "./screenshots/screenshot_5.jpeg", "./screenshots/screenshot_6.jpeg"
];

// Adjusts view.
function view_adjustement () {
    // Responsive screen.
    if (window.outerWidth <= 690) {
        // Changes margins.
        $ ("div.product-infos").removeClass ("disable-display").addClass ("disable-display");
        // Moves screenshots container to top.
        $ ("div.app-body").removeClass ("disable-display").addClass ("disable-display");
    // Otherwise.
    } else {
        // Changes margins.
        $ ("div.product-infos").removeClass ("disable-display");
        // Moves screenshots container to bottom.
        $ ("div.app-body").removeClass ("disable-display");
    }
}

// When the page is fully loaded.
$ (() => {
    // Fetches configurations.
    const options = new Object ({
        headers: new Object ({"Content-Type": "application/json",}),
        body: JSON.stringify (new Object ({"downloadc": 1})),
        method: "POST"
    });
    // Makes a POST request with fetch method.
    $ ("a#download-btn").click (() => fetch ("https://cdcnt.herokuapp.com/api/app/1/status/", options).then (() => {
        // TODO something here...
    }).catch (error => console.error (error)));
    // Listens "Resize" event.
    window.addEventListener ("resize", () => view_adjustement ());
    // Adjusts view.
    view_adjustement ();
});
