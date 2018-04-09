# Doctor Heart Rate Frontend

![alt text][example_pic]

## Description

This is the front end code for the heart rate monitor API built for the [previous assignment]. The front end contains
a singular text box. The email of the user must be put in and the search button pressed for the heart rate data in the
database to be displayed in a table. By default, a valid email to search for is included in the search box. An invalid
email (such as iamemail2@email.com) can be input, and the site returns that the user does not exist.

## Setup instructions
In order to properly deploy and test this front-end:
1) The [previous assignment] will have to be run locally

   The repository will have to be cloned using HTTPS. Once cloned, start a virtual environment and run
   `pip install -r requirements.txt` to install the needed packages. Then, run the following command:
   `FLASK_APP=heart_rate_api flask run` to deploy the API using flask locally on your computer. Ensure the port
   running is 127.0.0.1:5000

2) Then, clone this repository on your computer
3) Once cloned, run `npm install` in order to install the required files
4) Then run `npm run start` which will initialize the front-end on your localhost:3000 in your browser
5) Enjoy searching for heart rates!

[previous assignment]: https://github.com/JanIIISobieski/heart_rate_databases_introduction
[example_pic]: https://github.com/JanIIISobieski/doctor-hr-frontend/blob/master/HeartRateFrontendExample.png