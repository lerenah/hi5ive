# Project Milestone 4: Web Pages Design

#### Page Title 1: **User Profile**

#### Page Description:
This is the user profile page, displaying the user's interests, hobbies, and groups they are a part of. The page includes an About Me section, a list of Groups, Interests, and Hobbies. If the user is looking at their profile, they will see the Edit Profile and Settings buttons. If another user is viewing another user's profile, those buttons will be hidden. There will also be a search bar to find matches and a status icon indicating whether or not they are online. An activity feed might be a stretch goal.

---
![User Mockup](/images/userProfile.drawio.png)
---

#### Parameters Needed for the Page:
1. **User ID**: Identifier for the user whose profile is being viewed.
2. **Auth Token**: To verify the authenticity of the request and permissions.
3. **View Mode**: Determines if the page is being viewed by the user themselves or another user (edit mode vs. view mode).
4.  **Interests**: The stored interests the user has selected.
5.  **Hobbies**: The stored hobbies the user has selected.
6.  **Groups**: The stored groups the user has chosen.

#### Data Needed to Render the Page:
1. **User Data**:
   -Login Credentials
   - Profile picture
   - Username
   - Description
   - Location
   - Interests/Hobbies
2. **Match Data**:
   - Profile Picture
   - Username
   - Description
   - Interests/Hobbies
   - Location
   - Chat ID (if implemented)
   - Last_Online_Timestamp


#### Link Destinations for the Page:
`@app.route('/user/<int:user_id>')`


<hr>

#### Page Title 2: **Matching/Searching**

#### Page Description:
insert here

---
![User Mockup](/images/userProfile.drawio.png)
---

#### Parameters Needed for the Page:
Insert here

#### Data Needed to Render the Page:
1. **User Data**:
   - Login Credentials
   - Profile picture
   - Username
   - Location
   - Interests/Hobbies
   - Matches IDs (to filter already matched)
2. **Match Data**:
   - Profile Picture
   - Username
   - Description
   - Interests/Hobbies
   - Location
   - Last_Online_Timestamp

#### Link Destinations for the Page:
`@app.route('/matches/<int:user_id>')`

<hr>

#### Page Title 3: **Sign Up**

#### Page Description:
insert here

---
![Signup Mockup](/images/signup.drawio.png)
---

#### Parameters Needed for the Page:
Insert here

#### Data Needed to Render the Page:
N/A for data from database for rendering.

Will need to POST from user input:
1. **User Data**:
   - Login Credentials

#### Link Destinations for the Page:
`@app.route('/signup')`

<hr>

#### Page Title 4: **Login Page**

#### Page Description:
This is the user login page, which allows the user to enter their username or email, and password in order to gain access to the home page, as well as other pages within the app like the matching , user profile, chat. They will be able to reset their password using their email address if they forgot their password as well as sign up, if they do not yet have an account.


---
![Login Mockup](/images/hi5iveogin.drawio.png)
---

#### Parameters Needed for the Page:
1. **Username / Email** : The ID for the user, to be found in the DB.
2. **Password**: the users key to authenticate their ID.
3. **Submit button**: to trigger the login process.
4. **Form validation**: potentially using a regex or some other client side program to check for proper input format.
6. **Server-side Authentication**: Server interacts with the DB and authenticates the user.

#### Data Needed to Render the Page:
N/A for data from database for rendering.

Will need to GET from user input:
1. **User Data**:
   - Login Credentials

#### Link Destinations for the Page:
`@app.route('/login')`

<hr>

#### Page Title 5: **Home/Info Page**

#### Page Description:
This page serves as a home/landing page for those interested in our website. It will showcase our website and will detail the service we are offering in sections, explaining the purpose of our app. There will be a call to action for next steps like signing up or logging in.

---
![User Mockup](/images/userProfile.drawio.png)
---

#### Parameters Needed for the Page:
Insert here

#### Data Needed to Render the Page:
Static Page. N/A for data from database needed for rendering.

#### Link Destinations for the Page:
`@app.route('/')`

<hr>

#### List of Tests:

<hr>







- **User Profile**
  1. **Profile Information Test**:
     - Verify that the user's profile picture, username, and status are displayed correctly.
     - Check that all personal information fields are populated accurately.

  2. **Hobbies and Interests Test**:
     - Ensure hobbies and interests are listed correctly.

  3. **Groups Test**:
     - Confirm the list of groups the user is a part of is displayed correctly.
     - Ensure each group link redirects to the correct detailed view.

  4. **Link Functionality Test**:
     - Test the "Edit Profile" button redirects to the correct page or modal.
     - Ensure all links to detailed settings pages and group details are functioning.

  5. **Authorization Test**:
     - Verify that the page correctly handles different view modes (self-view vs. public view).
     - Ensure unauthorized users cannot access or edit profile information.

  6. **Responsiveness Test**:
     - Check that the page layout adapts correctly to various screen sizes and devices.
     - Ensure all interactive elements remain usable on mobile devices.

  7. **Data Loading Test**:
     - Confirm that all necessary data is fetched and displayed without delays or errors.
     - Test the page's behavior when data is missing or incomplete.
     - Test for improper inputs.


- **Matching/Searching**
   - **Data Loading Test**:
     - Confirm that all necessary data is fetched and displayed without delays or errors.
     - Test the page's behavior when data is missing or incomplete.

- **Sign Up**
   - **Data Loading Test**:
     - Ensure successful storing of created authorization credentials.
     - Test for improper input.

- **Login**
   - **Data Loading Test**:
     - Ensure successful getting of correct authorization credentials.
     - Test for improper input.
     - Ensure proper data formatting for credential comparison. 

- **Home/Info Page**
  
