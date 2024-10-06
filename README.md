# **FitJoy Fitness Tracker Web App**

### **Description**
**FitJoy** is a comprehensive fitness platform designed to help users manage and enhance their fitness journey. Users can create accounts, log their meals, track nutritional data, share recipes and workouts, set fasting timers, and connect with friends. With features like weight tracking, personalized goals, and real-time messaging, the app fosters a supportive community focused on health and wellness.

---

### **Features**
- **User Authentication**: Secure sign-up and log-in using Firebase Authentication.
- **Food Logging**: Users can log their meals, with CRUD functionality to add, edit, and delete entries.
- **Nutrition Tracking**: Integrated with the Nutritionix API to provide real-time nutritional data (calories, macronutrients).
- **Fasting Timer**: A built-in fasting timer to help users manage intermittent fasting, complete with reminders and motivational quotes.
- **Recipe Sharing**: Users can share and discover new recipes.
- **Weight Tracker**: Users can log and monitor their weight over time with visual progress charts.
- **Messaging**: Users can message friends directly within the app, encouraging community and support.
- **Profile Management**: Each user has a profile to track their fitness goals and view their progress.

---

### **Tech Stack**
- **Front-End**: React.js
- **Back-End**: Firebase (Firestore, Firebase Authentication)
- **UI Design**: Tailwind CSS
- **External API**: Nutritionix API (for retrieving nutritional data)
- **Data Visualization**: Chart.js (for weight and nutrition tracking charts)
- **Hosting**: Firebase Hosting

---

### **Installation and Setup**

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/MrJio/fitjoy.git
    cd fitjoy
    ```

2. **Install Dependencies**:
    ```bash
    yarn install
    ```

3. **Configure Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Set up **Authentication** (email/password) and **Firestore** for database.
   - Add your Firebase credentials to a `.env` file:
     ```bash
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     ```

4. **Run the App**:
    ```bash
    yarn start
    ```

5. **Access the App**:
   - The app should now be running locally at `http://localhost:3000`.

---

### **Usage**
- **Sign up** or **log in** to create a user profile.
- Start **logging meals** and see the nutrition breakdown via the Nutritionix API.
- Use the **fasting timer** to manage intermittent fasting, and track weight over time with the **weight tracker**.
- Share recipes, **message friends**, and set personalized fitness goals in your **profile**.

---

### **Contact**
If you have any questions, feel free to reach out:
- **Email**: ReppJio@gmail.com
- **GitHub**: [MrJio](https://github.com/MrJio)
