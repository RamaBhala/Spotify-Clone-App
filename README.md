# Spotify Clone App

This website is a clone of the previous version of Spotify website. It’s a clone but not a static one I have added many functionalities in it using Spotify API which is provided by Spotify Web Developers itself. I have used ReduxAPI (the reducer.js file) instead of passing elements as props.

To use the Spotify API you need to first login into Spotify for Developers (https://developer.spotify.com) and accept the terms and conditions. Then you have to go to the dashboard and make a new app. Fill in the app name and app description as per your choice and set the redirect URIs the one where the project will be running (generally it is https://localhost:3000). Check the Web API and Web Playback SDK options in API/SDKs planning to use. After this check on the agreement condition and then save this. After saving click on the app from the dashboard click on the settings option on top right and then copy the Client ID. We will be using this Client ID to link your account so do not share it with anyone. 

Now in the Spotify.js file you can see clientId variable so paste the ClientID that we copied from the app. Also in the place of redirect URI I have put the default one change it if you are using different host.

Now you are ready to run the app. Just download it and enjoy some basic API calls. Also I have made this website without routing that’s why I cannot add more features because then I will have to make many variables or flags and verify the conditions at every step but let me know if I can add more features or improve it.

You can start the website from command prompt using “npm start” in the folder (to go to the folder use the command “cd folder-name”) where all the files are saved, you will be directed to this page

![App Screenshot](https://github.com/RamaBhala/Spotify-Clone-App/blob/main/Screenshots/Screenshot%202024-04-03%20183135.png?raw=true)

Click on Login With Spotify and then this will take you to a different webpage just click on agree then we will again return to our project. The website it took you was the authorization step (you can read about authorization in Spotify for Developers website and the code is in the Spotify.js file). After clicking on agree we will come to our home page

P.S All these are my songs and playlists don’t judge me for that :)

![App Screenshot](https://github.com/RamaBhala/Spotify-Clone-App/blob/main/Screenshots/Screenshot%202024-04-03%20203802.png?raw=true)

These songs are not hard coded or static, they are called by api’s so the moment I like a new song and refresh the page and pass the authorization stage I will be able to see that song with the serial number, title, album, date added and time duration of the song. The code for this in DefBody.js file.

The playlist that you can see in the sidebar is also not static it’s dynamic but default limit is set to 5, you can change it though by reading the articles of api call and by analyzing the code.

Since the playlists are dynamic so we can click on them to view it and it will look like

![App Screenshot](https://github.com/RamaBhala/Spotify-Clone-App/blob/main/Screenshots/Screenshot%202024-04-03%20183401.png?raw=true)

There is spotify API to get all the songs in a playlist by passing playlist ID (every playlist has one) so I set the onClick function on that playlist and then after clicking it passes the ID to API call and gets me the tracks. After that I used DefBody layout and just mapped the tracks.

The Home button is active on the sidebar if you click on it it will take you to the home page i.e. the page where all liked songs were displayed.

The Search button is also active and if we click on it we will get to this page 

![App Screenshot](https://github.com/RamaBhala/Spotify-Clone-App/blob/main/Screenshots/Screenshot%202024-04-03%20183429.png?raw=true)

I got this by browse categories API and here I have set the limit to 30. These are also not static you can see the code for this in Search.js. I have defined the properties on only one category and passed all the categories to that file and got the result for all the categories. 

Since it’s not static we can click on the categories and see all the songs. So we will click on the Charts (2nd row 2nd column) and see the Global Trending Songs 

![App Screenshot](https://github.com/RamaBhala/Spotify-Clone-App/blob/main/Screenshots/Screenshot%202024-04-03%20183519.png?raw=true)

The code for displaying categories and playlist is in Display.js file. To understand the code better try console.log(data) (data – variable you need to display) and see the results in your browser console, this will give you a better overview of the project.

If you login this website while some song is playing your Spotify account so your homepage will look like 

![App Screenshot](https://github.com/RamaBhala/Spotify-Clone-App/blob/main/Screenshots/Screenshot%202024-04-03%20203712.png?raw=true)

At the bottom you can see the songs name, image and the singer. This is not dynamic exactly because if your using the website and play some other song so it will not change at that moment but when you refresh the website you will see the present playing song.

To start analyzing and understanding the code for this project directly go to App.js file then go in hierarchical order to the files imported or used and similarly go to those files and do the same. Instead of reading every file read it in this manner.

My initial goal for this project was just to display the Liked Songs or the homepage and that also static cause that’s what clone means but as I kept on studying the APIs I got more and more intrestred and made this and added as many features I could. Could have done better if started with routing initially but let’s leave that for other project.

I hope you like my work! :)
