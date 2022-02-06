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

<p>● Instantly see the dutie(s) on app open. - For the Assignment I have assumed today's date to be 29/07/2021,When user once open the App he instantly see today's Duties without Scrolling throughout the app. </p> 
<p>● Browse the events in the event list. - User finds all the List filtered according to Data Sections. </p>
<p>● Tap an item and see all details  -User view all the details like FlightName,Destination ,Arrival Times and the places as well as Captain,FirstFlightOfficer names etc.</p>
<p>● Pull to refresh to reload the data  -The user can pull down the list to Refresh and reload the Data. </p>
<p>● Data is available offline. -Once the data is loaded if user goes offline they still can view the list of data  with details on the app </p>


<p> <b> Path for Executable file (APK) for Android:  Assignment_CAE/CrewAppfinal.apk </b></p>
<p> <b> Path for Executable file (AAB) for Android: </h4> Assignment_CAE/CrewAppFinal.aab </b> </p>

<h3> <b>Screenshots for iOS on iPhone </b> </h3>

![Iphone_1](https://user-images.githubusercontent.com/20993583/152672439-5af86a79-ce21-4aa8-a12f-97600b976541.PNG)
![iphone2](https://user-images.githubusercontent.com/20993583/152672444-6d32be92-4751-4c48-9f07-c74eeee43c13.PNG)
![phone3](https://user-images.githubusercontent.com/20993583/152672450-1be0df94-e918-48aa-a2b8-c788cee3d742.PNG)
![iphone4](https://user-images.githubusercontent.com/20993583/152672452-2403e0b9-0551-4bcd-b16a-7eb9afab63ce.PNG)
![iphone5](https://user-images.githubusercontent.com/20993583/152672455-640294ec-8ee0-4eb6-89bb-22643cf91bee.jpeg)



<h3> <b>Screenshots for Android </b></h3>

![load](https://user-images.githubusercontent.com/20993583/152653455-1f432fba-a038-4af4-8477-9110e9130d59.jpg)
![android2](https://user-images.githubusercontent.com/20993583/152672561-05bf25f8-5ea2-43a6-a68c-5fd52bd1d564.jpg)
![android3](https://user-images.githubusercontent.com/20993583/152672565-2b569734-90a9-48d2-80b5-cb1a3d54c471.jpg)
![andriod4](https://user-images.githubusercontent.com/20993583/152672569-77e1bd4d-0d72-40ba-87ce-660f5800703b.jpg)
![android5](https://user-images.githubusercontent.com/20993583/152672572-613d0da0-aea0-416c-832b-d2ca0128371f.jpg)
![android6](https://user-images.githubusercontent.com/20993583/152672601-f424afb0-7a53-47e0-85d1-3b12ce818747.jpg)



<h4> Code structure WalkThrough </h4>
	<p> App.js contains routers and Screen Names. </p>
	
<p> List.js inside src/screens/List  contains code for List Page.</p>
    <p> styles.ts inside src/screens/List contains code for styles related to List Page and used in List.js Page </p>
  
<p> Details.js inside src/screens/Details contains code for Details Page.</p>
     </p>Details.ts inside src/screens/Details contains code for styles related to Details Page and used inside .Details.js Page </p>
 

<h3> More Info to be Added </h3>
<p> We can also add details like No of Stops,no of Passengers in the JSON and show them in the Details Page.
	I have added data - No of Stops for reference.
	</p>



Thanks,
<p>Vithika</p>

For feedback contact me on vgvithikagupta1@gmail.com 








