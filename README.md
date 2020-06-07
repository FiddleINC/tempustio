# Tempustio - Event Registration

## Introduction

Tempustio is an event registration and management web app where customers can register his/her events and the administrator can access the list of all registered events and visualize the data accordingly

## Installation

If you have found the repository on Github

1. Clone the repository
2. Install the Dependencies using ```yarn install``` ( You can use ```npm install``` but I prefer Yarn ) for both client and server individually
3. Run the Server and the Client simultaneously using ```yarn run dev``` or ```npm run dev```
4. The App will open up ```localhost:3000``` and the server runs on ```localhost:8000```

## Rundown

The UI is very basic as the application is targeted for new users in the event management. This application has very basic flow and doesn't require core computation knowledge to operate.

### Landing Page

![](/screenshots/Landing%20Page.PNG)

The Landing Page is kept simple for new users. The button for new registration is kept at the centre and the admin in the top left so as to distinguish them both. 

### Registration Form

![](/screenshots/Registration%20Form.PNG)

The Registration form has been kept as simple as possible and void of any excess clutter. A small alert shows the user what they have to do. Then a basic form. The form is quite self explanatory.

### View Data Page

![](/screenshots/View%20Data.PNG)

The View Data Modal is also basic. It promptly shows all the data : the ID Card, the name, email, phone number, registration type and no. of tickets. Once the user confirms all the data is correct, the user can submit the data. 

![](/screenshots/Sure%20Alert.PNG)

The ID is then generated after the form data is posted to the server

![](/screenshots/Generating%20Page.PNG)

### Reference ID Display

![](/screenshots/Reference%20ID.PNG)

The App then generates a reference ID for further information for the user. The app also sends a mail to the specified email with all the details

![](/screenshots/Email.PNG)

### Admin Login

![](/screenshots/Admin%20Login.PNG)

A basic login form for the admin. The current admin username and password is ```admin``` and ```password```. You can change the username and password in the .env config file.

### Admin Dashboard

![](/screenshots/Admin%20Dashboard.PNG)

The admin dashboard is also very basic with all the basic details on the front page for the admin to see.

#### Visualisation 

![](/screenshots/Visualisation.PNG)

A basic chart showing the count of all the type of registration involved. The admin can also export the chart to his PC for future use.

#### Peek Data

![](/screenshots/Peek%20Data.PNG)

On clicking the ID on the table, the admin can peek the user data as shown. He can further use the data for future use of event registration