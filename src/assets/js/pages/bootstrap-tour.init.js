(function ($) {
    sessionStorage.clear();
    localStorage.clear();
    new Shepherd.Tour({
        defaultStepOptions: {
          cancelIcon: {
            enabled: true
          },
          classes: 'class-1 class-2',
          scrollTo: {
            behavior: 'smooth',
            block: 'center'
          }
        },
        // This should add the first tour step
        steps: [
          {
            text: '\n<h6>\nLogo</h6>\n\n<p>\nContent of my step</p>\n',
            attachTo: {
              element: '#logo-tour',
              on: 'bottom'
            },
            buttons: [
              {
                action() {
                  return this.cancel();
                },
                secondary: true,
                text: 'Exit'
              },
              {
                action() {
                  return this.next();
                },
                text: 'Next'
              }
            ],
            id: 'logo-tour'
          },
          {
            text: '\n<h6>\nTitle One</h6>\n\n<p>\nContent of my step</p>\n',
            attachTo: {
              element: '#display-title-tour',
              on: 'left'
            },
            buttons: [
              {
                action() {
                  return this.back();
                },
                secondary: true,
                text: 'Back'
              },
              {
                action() {
                  return this.next();
                },
                text: 'Next'
              }
            ],
            id: 'display-title-tour'
          },
          {
            text: '\n<h6>\nTitle Two</h6>\n\n<p>\nContent of my step</p>\n',
            attachTo: {
              element: '#display-title-tour-2',
              on: 'left'
            },
            buttons: [
              {
                action() {
                  return this.back();
                },
                secondary: true,
                text: 'Back'
              },
              {
                action() {
                  return this.next();
                },
                text: 'Next'
              }
            ],
            id: 'display-title-tour-2'
          },
          {
            text: '\n<h6>\nTitle Three</h6>\n\n<p>\nContent of my step</p>\n',
            attachTo: {
              element: '#display-title-tour-3',
              on: 'left'
            },
            buttons: [
              {
                action() {
                  return this.back();
                },
                secondary: true,
                text: 'Back'
              },
              {
                action() {
                  return this.next();
                },
                text: 'Next'
              }
            ],
            id: 'display-title-tour-3'
          },
          {
            text: '\n<h6>\nFinish</h6>\n\n<p>\nContent of my step</p>\n',
            attachTo: {
              element: '#thankyou-tour',
              on: 'top'
            },
            buttons: [
              {
                action() {
                  return this.cancel();
                },
                secondary: true,
                text: 'Exit'
              },
              {
                action() {
                  return this.next();
                },
                text: 'Next'
              }
            ],
            id: 'thankyou-tour'
          }
        ],
        useModalOverlay: true
      }).start();
    // Instance the tour
    // introJs().setOptions({
    //     steps: [
    //         {
    //             element: document.querySelector("#logo-tour"),
    //             title: "Logo",
    //             intro: "Content of my step",
    //             position: 'bottom'
    //         },
    //         {
    //             element: "#display-title-tour",
    //             title: "Title One",
    //             intro: "Content of my step",
    //             position: 'left'
    //         },
    //         {
    //             element: "#display-title-tour-2",
    //             title: "Title Two",
    //             intro: "Content of my step",
    //             position: 'left'
    //         },
    //         {
    //             element: "#display-title-tour-3",
    //             title: "Title Three",
    //             intro: "Content of my step",
    //             position: 'left'
    //         },
    //         {
    //             element: "#thankyou-tour",
    //             title: "Finish",
    //             intro: "Content of my step",
    //             position: 'top'
    //         }
    //     ]
    // }).start();

    // Initialize the tour
    // bootstrapTour.init();
    // introJs()
    // Start the tour
    // bootstrapTour.start();
}(jQuery));
