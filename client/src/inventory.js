const initialStore = {
  "items": [
    {
      "id": 1,
      "title": "Miscellaneous Dishes",
      "description": "Eat off of real plates and bowls at your next dinner party. Adulting FTW.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/misc-dishes.jpg?alt=media&token=b08ed682-6b06-40f4-a683-c594801c5e25",
      "tags": [
        "Household Items"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-10-01 16:30:33.595884-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 2,
      "title": "Camp Stove",
      "description": "All you need to cook gourmet meals on your next trek into the wild.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/camp-stove.jpg?alt=media&token=1d59a38f-1e25-4b83-baea-a8b67c058273",
      "tags": [
        "Household Items",
        "Recreational Equipment"
      ],
      "itemowner": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "created": "2017-10-01 16:29:49.31706-07",
      "available": false,
      "borrower": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2"
    },
    {
      "id": 3,
      "title": "Flute",
      "description": "Like-new flute to lend. C'mon, you know you want to play it...",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/flute.jpg?alt=media&token=0bb01ab6-b37a-4829-b006-969136d2e033",
      "tags": [
        "Musical Instruments"
      ],
      "itemowner": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2",
      "created": "2017-09-30 16:28:43.506291-07",
      "available": false,
      "borrower": "k721A4pRNggCx7b6ryEE8vx1VIi1"
    },
    {
      "id": 4,
      "title": "Hatchet",
      "description": "Chop things down, show nature who's boss. But be safe—alcoholic beverage not included.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/hatchet.jpg?alt=media&token=b95665a1-72b4-4475-a796-66546c0fd3ae",
      "tags": [
        "Tools"
      ],
      "itemowner": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "created": "2017-09-29 16:28:24.616127-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 5,
      "title": "Mix Tape",
      "description": "What's on it? Who knows! Borrow it and find out. Tape deck not included.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/mix-tape.jpg?alt=media&token=3d3c9aed-5066-4afe-87b0-429aa7b0202a",
      "tags": [
        "Physical Media"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-09-28 16:27:45.620653-07",
      "available": false,
      "borrower": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2"
    },
    {
      "id": 6,
      "title": "Learn to Code Books",
      "description": "Learn HTML, CSS, JavaScript, and jQuery in 800 pages or less.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/code-books.jpg?alt=media&token=f10d4198-c283-43e1-8f51-5ea42b661652",
      "tags": [
        "Physical Media"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-09-27 16:27:13.965685-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 7,
      "title": "Keyboard",
      "description": "Teach your cat to tickle these elephant-friendly (plastic) ivories.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/keyboard.jpg?alt=media&token=a739da51-664e-416b-9887-cca37244af3a",
      "tags": [
        "Musical Instruments"
      ],
      "itemowner": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2",
      "created": "2017-09-26 16:26:31.884544-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 8,
      "title": "Baseball",
      "description": "Lightly-used baseball for you and your friend to enjoy at your next ball tournament.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/baseball.jpg?alt=media&token=513ec462-ab80-486e-81a3-d566419d761e",
      "tags": [
        "Recreational Equipment",
        "Sporting Goods"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-09-25 16:25:51.919316-07",
      "available": false,
      "borrower": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2"
    },
    {
      "id": 9,
      "title": "Skateboard",
      "description": "Relive your youth! And try not to seriously injure yourself while doing it!",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/skateboard.jpg?alt=media&token=e7862eaf-62c8-4b77-b2b6-8d68e9950d9e",
      "tags": [
        "Sporting Goods"
      ],
      "itemowner": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2",
      "created": "2017-09-24 16:25:13.995983-07",
      "available": false,
      "borrower": "k721A4pRNggCx7b6ryEE8vx1VIi1"
    },
    {
      "id": 10,
      "title": "Iron and Ironing Board",
      "description": "Dress for the job you want, not the one you have, with freshly pressed shirts and slacks.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/iron-and-board.jpg?alt=media&token=cc275d6c-2000-4fb7-bd7d-0316fa8b74fe",
      "tags": [
        "Household Items"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-09-23 16:24:21.397221-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 11,
      "title": "Record Player",
      "description": "Required equipment to pass the Hipster School entrance exam.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/record-player.jpg?alt=media&token=7bd5242b-ba34-4d4f-b3b2-2e758246d53c",
      "tags": [
        "Electronics"
      ],
      "itemowner": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "created": "2017-09-22 16:23:24.992259-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 12,
      "title": "Polaroid Camera",
      "description": "In perfect working condition—the original Instagram app.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/polaroid.jpg?alt=media&token=8e30939c-f52b-452c-8a0f-1a0c6feafd89",
      "tags": [
        "Electronics"
      ],
      "itemowner": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "created": "2017-09-22 16:22:46.097822-07",
      "available": false,
      "borrower": "k721A4pRNggCx7b6ryEE8vx1VIi1"
    },
    {
      "id": 13,
      "title": "Book Collection",
      "description": "Musty old volumes to enjoy. Includes Shakespeare, Dickens, Poe, and more.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/book-collection.jpg?alt=media&token=70e9b572-fc23-44eb-bc9d-9952f8ca568e",
      "tags": [
        "Physical Media"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-09-21 16:21:50.699373-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 14,
      "title": "Drone",
      "description": "Be that guy! Spy on your neighbour's from a bird's eye view instead through the drapes.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/drone.jpg?alt=media&token=9fed6bfa-e4de-4dab-b147-3f5619388520",
      "tags": [
        "Electronics"
      ],
      "itemowner": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2",
      "created": "2017-09-20 16:21:02.910345-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 15,
      "title": "Playstation",
      "description": "New Playstation to lend for those times when analog fun just won't do the trick.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/playstation.jpg?alt=media&token=852563f1-0e52-48f6-b3fb-3adf3ed211b3",
      "tags": [
        "Electronics"
      ],
      "itemowner": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "created": "2017-09-19 16:20:17.023582-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 16,
      "title": "Hammers",
      "description": "Every problem will definitely look like a nail with this set of well-worn hammers.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/hammers.jpg?alt=media&token=3e61df51-9a60-45ce-9561-59669ad8379b",
      "tags": [
        "Tools"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-09-18 16:19:29.381919-07",
      "available": false,
      "borrower": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2"
    },
    {
      "id": 17,
      "title": "Canoe",
      "description": "Row, row, your boat. Paddles included. Life is but a dream.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/canoe.jpg?alt=media&token=7dedc7be-1e2c-4d2b-8c81-71bdae93825f",
      "tags": [
        "Recreational Equipment"
      ],
      "itemowner": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2",
      "created": "2017-09-18 16:18:19.625575-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 18,
      "title": "Purple Racing Bike",
      "description": "Get exercise while having fun in the sun on this super-cool bike.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/purple-bike.jpg?alt=media&token=031002ac-b479-44af-a21a-881fc810f164",
      "tags": [
        "Recreational Equipment"
      ],
      "itemowner": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "created": "2017-09-18 16:14:03.597363-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 19,
      "title": "Leica Camera",
      "description": "Range-finding fun for the whole family.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/leica.jpg?alt=media&token=345dc2d9-bf67-414d-af37-4e44af534ccd",
      "tags": [
        "Electronics"
      ],
      "itemowner": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "created": "2017-09-17 16:12:11.174503-07",
      "available": true,
      "borrower": null
    },
    {
      "id": 20,
      "title": "Chain Saw",
      "description": "Great to have on hand because you never know when you'll need to show Mother Nature who's boss.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/drone.jpg?alt=media&token=9fed6bfa-e4de-4dab-b147-3f5619388520",
      "tags": [
        "Tools"
      ],
      "itemowner": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "created": "2017-09-16 16:11:18.583749-07",
      "available": false,
      "borrower": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2"
    },
    {
      "id": 21,
      "title": "Lawnmower",
      "description": "Working-condition lawnmower will fulfill all of your grass-cutting needs.",
      "imageurl": "https://firebasestorage.googleapis.com/v0/b/boomtown-demo.appspot.com/o/lawnmower.jpg?alt=media&token=36b785aa-cbb3-4488-a6c8-bc6988be51d0",
      "tags": [
        "Household Items"
      ],
      "itemowner": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2",
      "created": "2017-09-15 16:06:12.503874-07",
      "available": true,
      "borrower": null
    }
  ],
  "users": [
    {
      "id": "eEvh1WUF5nb5eeUksUQb3Ph0kOU2",
      "email": "mandi@redacademy.com",
      "fullname": "Mandi Wise",
      "bio": "Learn 'em good."
    },
    {
      "id": "k721A4pRNggCx7b6ryEE8vx1VIi1",
      "email": "mackenzie@redacademy.com",
      "fullname": "Mackenzie Kieran",
      "bio": "Thar she blows."
    },
    {
      "id": "Qdd5HoEin0OPxNUZcB5sDc7xGHD2",
      "email": "edivan@redacademy.com",
      "fullname": "Edivan Henrique",
      "bio": "I like dancing :)"
    }
  ]
}


export default initialStore;