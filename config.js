// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Prajwal MG",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Weather
  weatherKey: "InsertYourAPIKeyHere123456",
  weatherIcons: "OneDark", // 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: "3",
      name: "Todoist",
      icon: "trello",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "4",
      name: "Calendar",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "bookmark",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "YouTube",
      icon: "youtube",
      link: "https://www.youtube.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: "video",
  secondListIcon: "coffee",

  // Links
  lists: {
    firstList: [
      {
        name: "Netflix",
        link: "https://www.netflix.com/browse",
      },
      {
        name: "Prime Video",
        link: "https://www.primevideo.com/",
      },
      {
        name: "Anime",
        link: "https://animixplay.to/",
      },
      {
        name: "All",
        link: "https://hdtoday.tv/",
      },
    ],
    secondList: [
      {
        name: "Scaler",
        link: "https://www.scaler.com/academy/mentee-dashboard/todos",
      },
      {
        name: "WhatsApp",
        link: "https://web.whatsapp.com",
      },
      {
        name: "Telegram",
        link: "https://web.telegram.org/k/",
      },
      {
        name: "Udemy",
        link: "https://www.udemy.com/home/my-courses/learning/",
      },
    ],
  },
};
