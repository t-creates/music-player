1. Remove ALL unused code and unused files and folders (Travis & Abil)
2. Clean the App.js file (remove props drilling and use context) (Abil)
3. Use the folder for the Component.css and Component.js 
4. Utilize the first api call using Redux Toolkit (Travis)

Styling:
  1) Set up and initialized tailwindcss
  2) Can decide as a team if we want to also use Material UI, Chakra UI, plain vanilla CSS etc

Routing:
  1) Based off of the sample project "lyriks"
    a) Home Route (landing)
    b) Explore Route
      1) Clicking on a song will take you to a song details page
    c) CountryTracks Route
      1) Clicking on a song will take you to a song details page
    d) Artists Route
      1) Clicking on an artist will take you to the artist details page

Redux:

Set up redux store - See redux dev tools

We can decide as a team which state fields we will need to keep track of globally

Currently, We have 3 slices of state we are keeping track of

Theme: For Styling (darkmode etc)
Songs: An array of songs we can filter based on what kind of data we need to display
Artists: An array of the most popular artists

Component Data Needs:
  Ex: 1) Home component we need to display popular songs by genre
      2) Explore component we get songs by location, but can also filter songs by city and genre
        a) From this component we can navigate to our song details page view
      3) CountryTracks component we will display the most popular songs based on the users Country
        a) Can also navigate to a song details view from this component
      4) Artists component will display our artist data
        a) This is where we can navigate to an artists detail view
