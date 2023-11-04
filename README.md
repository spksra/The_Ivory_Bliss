# The-Ivory-Bliss

Welcome to The Ivory Bliss Hotel Management Application. The Ivory Bliss is a user friendly, easy to handle and custom built application. This application is designed to manage hotel operations like user management, cabin management, booking management, sales statistics, and various customization options. It integrates authorized authentication, database storage, and dark mode feature. And so much more!

# Key Features 📝

### Authentication and Authorization

- Users of the app is Hotel Staff. They can log into the application to perform tasks.
- New users can only be signed up inside the applications (to guarantee that only actual hotel employees can access application).
- Users can upload an avatar, change their names and passwords.
<img width=“1778” alt="The_Ivory_Bliss_Login_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/a600ee5a-2f6b-408d-8501-08ca8183a3e6">

## Key Features from Header 📝

- As per covenience, users can opt for either Light or Dark Mode.
![The_Ivory_Bliss_Dashboard_Page_Last_7_Days](https://github.com/spksra/The_Ivory_Bliss/assets/69047778/ec2b2bed-43f6-4271-9e28-f531391931b1)

- Users can update their Avatars, Full Name and Passwords from the User Icon provided in the header:
<img width="1781" alt="The_Ivory_Bliss_UserName_Password_Updation_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/55f7ab0a-cfb9-4613-aca7-59fd2bd02def">

## Key Features from Navbar 📝

### Dashboard

- The initial app screen is a dashboard, to display important highlights from the last 7, 30, or 90 days:
- Statistics on recent Bookings, Sales, Check-Ins, and Occupancy rate.
- A list of guests checking in and out on the current day. Users can perform these tasks from here.
- A chart showing statistics on stay durations, as this is an important metric for the hotel.
- A chart showing all daily hotel sales, showing both "total" sales and "extras" sales (only breakfast at the moment).
- Application's Dashboard, with important highlights from last 7, 30 and 90 days:
![The_Ivory_Bliss_Dashboard_Page](https://github.com/spksra/The_Ivory_Bliss/assets/69047778/84cb7d2d-bc80-4ee4-ba70-8b12bde7334a)

### Cabins

- The app has a table view with all cabins, displaying the cabin photo, name, capacity, price, and current discount.
- Users can update, delete, duplicate and create new cabins (including uploading a photo).
- The table can be filtered (by "All, With discount, No-discount") and sorted (by "Name, Price and Capacity").
- Applications Cabin Page:
<img width="1782" alt="The_Ivory_Bliss_View_Cabin_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/565c17a3-b34c-41bb-a752-cdf4462f91e0">

- Applications Create New Cabin and Edit Cabin Popups:
![The_Ivory_Bliss_Create_New_Cabin_Popup](https://github.com/spksra/The_Ivory_Bliss/assets/69047778/1a05cbf3-958e-4780-9ee8-c16ef580bdda)

### Bookings

- The app has a table view with all bookings, showing arrival & departure dates, status, paid amount, as well as cabin and guest data.
- The booking status can be "Unconfirmed" (booked, but not yet checked in), "Checked In" & "Checked Out".
- The table can be filtered (by status of "All, Confirmed, Checked-in, Unconfirmedand"), sort (by "Date & Amount") with pagination.
- Applications Booking Page:
<img width="1780" alt="The_Ivory_Bliss_View_Bookings_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/ebe61140-79b1-4fda-9dd2-9f35b4b563a2">

- Applications View Booking details page, with detail of Number of Guests, Number of Nights, Guest Observations, whether they booked Breakfast & total breakfast price.
<img width="1780" alt="The_Ivory_Bliss_Booking_View_Details_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/41006545-5e5f-4b1d-96e9-eda3f68db3f1">

### Check In/Out

- Guests data contains Full Name, Email, National ID, Nationality, and a Country Flag for easy identification.
- Users can Delete, Check-In and Check Out a booking, as per the Guests request.
- During Check-in if not paid already, users need to accept payment (outside the app), and then confirm the payment received (inside the app).
- On check-in, the guest can add breakfast for the entire stay, if they hadn't already.
<img width="1782" alt="The_Ivory_Bliss_Booking_CheckIn_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/f447fe3e-dccc-4da1-bb76-2e8c15cda146">

- Check-out of a Guest can be done using the "Check-Out" option from the model:
<img width="1766" alt="The_Ivory_Bliss_Booking_CheckOut_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/8539524a-2729-41be-b9a6-d9a1cf6f956d">

### Users

- Existing Users can SignUp a new User into the Application using their Full Name, Email and Password (with Reenter Password).
<img width="1779" alt="The_Ivory_Bliss_Create_NewUser_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/f9b7f62d-d40d-41de-a98f-d5104a26747a">

### Settings

- Users can define an application settings like Breakfast Price, Min and Max Nights/Bookings, Max Guests/Bookings
<img width="1780" alt="The_Ivory_Bliss_Update_Hotel_Settings_Page" src="https://github.com/spksra/The_Ivory_Bliss/assets/69047778/37e2bb42-d477-4217-b91b-e9f576ace51a">

## 💻 Technology Used

The Ivory Bliss Hotel Management Application is built using the following technologies and libraries:

- **React**: JavaScript library for UI development.

- **styled-components**: CSS-in-JS library for styling React components.

- **react-hot-toast**: Customizable toast notification library for React.

- **react-router-dom**: Library for routing and navigation in React apps.

- **Supabase**: Cloud database service for real-time and secure data storage.

- **@tanstack/react-query**: Data-fetching and state management library for React.

- **date-fns**: JavaScript date utility library for parsing, formatting, and manipulating dates.

- **recharts**: Composable charting library for React.

- **react-icons**: Collection of customizable icons for React apps.

- **react-hook-form**: Library for form state management and validation in React.

## 🛠️ Installation Steps:

***
1. Clone the repository
git clone https://github.com/spksra/The_Ivory_Bliss.git<br>
***

***
2. Install the required dependencies</p>
npm install
***

***
3. Start the development server</p>
npm run dev

***
4. Access the application at</p>
http://localhost:5173" or Your Local URL
***
