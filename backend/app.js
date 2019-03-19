const express = require("express");

const app = express();

app.use("/api/legs", (req, res, next) => {
  const legs = [
    {
      id: 100,
      start_address: {
        city: "Bellingham",
        state: "WA"
      },
      end_address: {
        city: "Bonner",
        state: "MT"
      },
      duration: {
        text: "8 hours 37 mins",
        value: 31036
      },
      distance: {
        text: "562 mi",
        value: 904719
      }
    },
    {
      id: 101,
      start_address: {
        city: "Bonner",
        state: "MT"
      },
      end_address: {
        city: "Hammond",
        state: "MT"
      },
      duration: {
        text: "7 hours 56 mins",
        value: 28565
      },
      distance: {
        text: "534 mi",
        value: 859636
      }
    },
    {
      id: 102,
      start_address: {
        city: "Hammond",
        state: "MT"
      },
      end_address: {
        city: "Sloan",
        state: "IA"
      },
      duration: {
        text: "7 hours 59 mins",
        value: 28720
      },
      distance: {
        text: "565 mi",
        value: 909654
      }
    },
    {
      id: 103,
      start_address: {
        city: "Sloan",
        state: "IA"
      },
      end_address: {
        city: "Nashville",
        state: "IL"
      },
      duration: {
        text: "8 hours 3 mins",
        value: 28986
      },
      distance: {
        text: "551 mi",
        value: 887233
      }
    },
    {
      id: 104,
      start_address: {
        city: "Nashville",
        state: "IL"
      },
      end_address: {
        city: "Locust Grove",
        state: "GA"
      },
      duration: {
        text: "7 hours 50 mins",
        value: 28175
      },
      distance: {
        text: "539 mi",
        value: 868098
      }
    },
    {
      id: 105,
      start_address: {
        city: "Locust Grove",
        state: "GA"
      },
      end_address: {
        city: "West Palm Beach",
        state: "FL"
      },
      duration: {
        text: "7 hours 45 mins",
        value: 27897
      },
      distance: {
        text: "560 mi",
        value: 900702
      }
    },
    {
      id: 106,
      start_address: {
        city: "West Palm Beach",
        state: "FL"
      },
      end_address: {
        city: "Hialeah",
        state: "FL"
      },
      duration: {
        text: "1 hour 7 mins",
        value: 3993
      },
      distance: {
        text: "63.7 mi",
        value: 102533
      }
    },
    {
      id: 107,
      start_address: {
        city: "Hialeah",
        state: "FL"
      },
      end_address: {
        city: "",
        state: ""
      },
      duration: {
        text: "",
        value: 0
      },
      distance: {
        text: "",
        value: 0
      }
    }
  ];

  res.status(200).json({
    message: "Legs fetched successfully",
    legs: legs
  });
});

module.exports = app;
