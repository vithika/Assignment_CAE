  <h2> <b>  Assignment Context: Air Holland  </b> </h2>

One of the main features of RosterBuster is the ability to present the user’s roster which holds the monthly planning of duties. Since our product is in the aviation space, there are specific duties on this roster. 
Airline crew upload their raw roster data to our service (pdf, excel, txt, html or webcal files). We convert this to a general format and then it is displayed in the app. This is then being delivered by our backend to the frontend apps in json. 
The following duties can appear on a roster and need to be recognized by the app: 

   		●  Day Off - Not scheduled to work. 
  		●  Report Event - Start of a day of working. A day can have multiple flights. 
     	●  Flight Event - Flight from Departure Airport to Arrival Airport 
   		●  Debrief Event - End of a day of working. 
  		●  Layover Event - When you sleep at a Arrival Airport and fly out later. 
  		●  Simulator / Training Event - Training Course 
	  	●  Standby Event - On reserve duty. Can be called by the airline any time. 

● Important to know:

All information on the roster is important and relevant to the end-user. 

The data for this Assignment is taken from :https://rosterbuster.aero/wp-content/uploads/dummy-response.json


The app  is build using React Native Framework ,developed and tested on both Platforms Android and iOS.

<h3><b>Features:</b></h3>

<p>● Instantly see the dutie(s) on app open.</p>
<p>● Browse the events in the event list. </p>
<p>● Tap an item and see all details </p>
<p>● Pull to refresh to reload the data </p>
<p>● Data is available offline.</p>


<p> <b> Path for Executable file (APK) for Android:  Assignment_CAE/release/CrewApp.apk </b></p>
<p> <b> Path for Executable file (AAB) for Android: </h4> Assignment_CAE/CrewApp.aab </b> </p>

<h3> <b>Screenshots for iOS on iPhone </b> </h3>

![iphone_Loading](https://user-images.githubusercontent.com/20993583/152652961-5c4b1cf4-2324-4a0d-85a7-df1c9471fe38.PNG)
![iphonelist](https://user-images.githubusercontent.com/20993583/152652982-c69da99d-f983-4117-aaf3-6db399482c01.png)
![list_iphone](https://user-images.githubusercontent.com/20993583/152652977-1fa2edea-1aea-404f-8469-386df3f4df78.PNG)
![details_iphone](https://user-images.githubusercontent.com/20993583/152652984-64796f8b-4c6f-4024-a817-c317dfa240bd.PNG)


<h3> <b>Screenshots for Android </b></h3>

![load](https://user-images.githubusercontent.com/20993583/152653455-1f432fba-a038-4af4-8477-9110e9130d59.jpg)
![list](https://user-images.githubusercontent.com/20993583/152653468-61e22ac8-ad92-4b9a-ac4f-ffb5504847f6.jpg)
![list1](https://user-images.githubusercontent.com/20993583/152653474-9ae40a02-16dd-421b-a3cf-8503c0887ce4.jpg)
![det_and](https://user-images.githubusercontent.com/20993583/152653479-82e3f5e2-27da-44ea-baf4-b48e07ff51f1.jpg)

<h4> Code structure WalkThrough </h4>
	<p> App.js contains routers and Screen Names. </p>
	
<p> List.js inside src/screens/List  contains code for List Page.</p>
    <p> styles.ts inside src/screens/List contains code for styles related to List Page and used in List.js Page </p>
  
<p> Details.js inside src/screens/Details contains code for Details Page.</p>
     </p>Details.ts inside src/screens/Details contains code for styles related to Details Page and used inside .Details.js Page </p>
 


Thanks,
Vithika

For feedback contact me on vgvithikagupta1@gmail.com 








