# hotel-website
Website for hotels to try out using Bootstrap/Firebase/Google Maps/Stripe

Idea of a website for a single hotel brand with multiple hotels.

Layout created using Bootstrap 5 to get familiar with it.

Hotel Database created on Firebase. Hotel object data pulled from database and used to render list of hotels. Can be filtered using the tag information.

Hotel object also contains coordinates that are used to plot hotel on Google Maps in order to learn the Google Maps Api.
There is also version that uses OpenLayers with OpenStreetMaps, however this only ads fixed markers without interactivity. 

Final page has ability to add users and hotels.

Stripe payments were also added using the create link feature. Currently the relevant data is created in the Stripe web console and simply added to the hotel data rather than having the hotel data generate the Stripe payment data. Stripe user data can be created and accessed using the add-hotel page.
