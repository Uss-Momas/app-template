(function ($) {
    sessionStorage.clear();
    localStorage.clear();
    // Define the tour!
    var tour = {
        id: "my-intro",
        steps: [
            {
                target: "hopscotch-logo-tour",
                title: "Logo Here",
                content: "You can find here status of user who's currently online.",
                placement: 'bottom',
                yOffset: 10
            },
            {
                target: 'hopscotch-display-title-tour-2',
                title: "Display Text",
                content: "Click on the button and make sidebar navigation small.",
                placement: 'top',
                zindex: 99
            },
            {
                target: 'hopscotch-display-title-tour-3',
                title: "Display Text",
                content: "Click on the button and make sidebar navigation small.",
                placement: 'top',
                zindex: 99
            },
            {
                target: 'hopscotch-thankyou-tour',
                title: "Thank you !",
                content: "Here you can change theme skins and other features.",
                placement: 'top',
                zindex: 99
            }
        ],
        showPrevButton: true
    };

    // Start the tour!
    hopscotch.startTour(tour);
}(jQuery));
