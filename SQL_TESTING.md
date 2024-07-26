# SQL Testing Documentation 
## Tables
### Users Table

    Description: Stores user information.
    Fields:
        id: Unique identifier for the user. PK.
        username: Unique username for the user.
        email: Unique email address for the user.
        password_hash: Hashed password for security.
        first_name: User's first name.
        last_name: User's last name.
        bio: Short biography of the user.
        profile_picture: URL to the user's profile picture.
        location: location of user.
        created_at: Timestamp when the user was created.
        updated_at: Timestamp when the user was last updated.

### Interests Table

    Description: Stores different interests that users can have.
    Fields:
        id: Unique identifier for the interest. PK
        name: Name of the interest.
        created_at: Timestamp when the interest was created.
        updated_at: Timestamp when the interest was last updated.

### User_Interests Table

    Description: Links users to their interests.
    Fields:
        id: Unique identifier for the user interest entry. PK
        user_id: Foreign key referencing the user.
        interest_id: Foreign key referencing the interest.
        created_at: Timestamp when the user interest was created.
        updated_at: Timestamp when the user interest was last updated.

### Matches Table

    Description: Stores matches between users.
    Fields:
        id: Unique identifier for the match. PK
        user1_id: Foreign key referencing the first user.
        user2_id: Foreign key referencing the second user.
        matched_at: Timestamp when the match was made.
        status: Status of the match (pending, accepted, rejected).

## Database Tests
#### Users Table

    Insert a new user: Verify user can be added.
    Unique username and email: Verify duplicate username or email cannot be added.
    Update user information: Verify user information can be updated.
    Delete user: Verify user can be deleted.

### Interests Table

    Insert a new interest: Verify interest can be added.
    Unique interest name: Verify duplicate interest name cannot be added.
    Update interest name: Verify interest name can be updated.
    Delete interest: Verify interest can be deleted.

### User_Interests Table

    Link user to interest: Verify user can be linked to an interest.
    Unique user-interest combination: Verify duplicate user-interest combination cannot be added.
    Delete user-interest link: Verify user-interest link can be deleted.

### Matches Table

    Create a match: Verify match can be created between two users.
    Update match status: Verify match status can be updated.
    Delete a match: Verify match can be deleted.


## Access Routines

### Users Table Access Methods

Method Name: getUserById

    Description: Retrieves a user by their unique identifier.
    Parameters:
        user_id (INTEGER): The unique identifier of the user.
    Return Values: A row containing the user's information.
    Tests:
        Retrieve a user that exists by their ID.
        Attempt to retrieve a user that does not exist by their ID.

Method Name: createUser

    Description: Inserts a new user into the Users table.
    Parameters:
        username (TEXT): The unique username of the user.
        email (TEXT): The unique email of the user.
        password_hash (TEXT): The hashed password of the user.
        first_name (TEXT): The first name of the user.
        last_name (TEXT): The last name of the user.
        bio (TEXT): The biography of the user.
        location (TEXT): The location of the user. 
        profile_picture (TEXT): The URL to the user's profile picture.
    Return Values: The unique identifier of the newly created user.
    Tests:
        Create a new user with all valid parameters.
        Attempt to create a user with a duplicate username.
        Attempt to create a user with a duplicate email.
        Attempt to create a user with missing required fields.

### Interests Table Access Methods

Method Name: getAllInterests

    Description: Retrieves all interests from the Interests table.
    Parameters: None
    Return Values: A list of all interests.
    Tests:
        Retrieve all interests when there are interests in the table.
        Retrieve all interests when the table is empty.

Method Name: createInterest

    Description: Inserts a new interest into the Interests table.
    Parameters:
        name (TEXT): The name of the interest.
    Return Values: The unique identifier of the newly created interest.
    Tests:
        Create a new interest with a valid name.
        Attempt to create an interest with a duplicate name.
        Attempt to create an interest with a missing name.

User_Interests Table Access Methods

Method Name: linkUserToInterest

    Description: Links a user to an interest in the User_Interests table.
    Parameters:
        user_id (INTEGER): The unique identifier of the user.
        interest_id (INTEGER): The unique identifier of the interest.
    Return Values: The unique identifier of the newly created user-interest link.
    Tests:
        Link a user to an interest with valid user and interest IDs.
        Attempt to link a user to an interest that is already linked.
        Attempt to link a user to a non-existent interest.

Method Name: getUserInterests

    Description: Retrieves all interests linked to a user.
    Parameters:
        user_id (INTEGER): The unique identifier of the user.
    Return Values: A list of interests linked to the user.
    Tests:
        Retrieve interests for a user with multiple linked interests.
        Retrieve interests for a user with no linked interests.
        Attempt to retrieve interests for a non-existent user.

### Matches Table Access Methods

Method Name: createMatch

    Description: Creates a match between two users.
    Parameters:
        user1_id (INTEGER): The unique identifier of the first user.
        user2_id (INTEGER): The unique identifier of the second user.
    Return Values: The unique identifier of the newly created match.
    Tests:
        Create a match with valid user IDs.
        Attempt to create a match between the same user (user1_id = user2_id).
        Attempt to create a match with one or both non-existent users.

Method Name: getMatchesForUser

    Description: Retrieves all matches for a given user.
    Parameters:
        user_id (INTEGER): The unique identifier of the user.
    Return Values: A list of matches involving the user.
    Tests:
        Retrieve matches for a user with multiple matches.
        Retrieve matches for a user with no matches.
        Attempt to retrieve matches for a non-existent user.


## Page Access

### Login Page
    Use case name:
        Verify login with valid user name and password
    Description:
        Test the login page
    Pre-conditions (what needs to be true about the system before the test can be applied):
        User has valid user name and password
    Test steps:
        1. Navigate to login page
        2. Provide valid user name
        3. Provide valid password
        4. Click login button
    Expected result:
        User should be able to login
    Actual result (when you are testing this, how can you tell it worked):
        User is navigated to hi5ive dashboard with successful login
    Status (Pass/Fail, when this test was performed)
        Pass
    Notes:
        N/A
    Post-conditions (what must be true about the system when the test has completed successfully):
        User is validated with database and successfully signed into their account.
        The account session details are logged in database. 

### Signup Page
    Use case name:
        Verify signup with valid user details
    Description:
        Test hi5ive sign up page
    Pre-conditions (what needs to be true about the system before the test can be applied):
        User does not have an existing account with the provided email
    Test steps:
        1.Navigate to signup page
        2.Provide valid user name
        3.Provide valid email
        4.Provide valid password
        5.Click signup button
    Expected result:
       User should be able to sign up and be navigated to the welcome page
    Actual result (when you are testing this, how can you tell it worked):
       User is navigated to the welcome page with successful signup
    Status (Pass/Fail, when this test was performed)
       Pass
    Notes:
        N/A
    Post-conditions (what must be true about the system when the test has completed successfully):
       User is registered in the database with the provided details. 
       The account details are stored in the database.

### User Profile Page
    Use case name:
        Verify correct user displays upon wakeup
    Description:
        Test hi5ive user profile page
    Pre-conditions (what needs to be true about the system before the test can be applied):
        User must have existing account with email and login credentials verified
    Test steps:
        1.Navigate to home page
        2.Provide valid user name
        3.Provide valid email
        4.Provide valid password
        5.Click login button
        6.Ensure user profile launches
    Expected result:
       User should be able to wake up directly on their profile page.
    Actual result (when you are testing this, how can you tell it worked):
       User is navigated to their respective profile pages with saved settings and groups showing
    Status (Pass/Fail, when this test was performed)
       Pass
    Notes:
        N/A
    Post-conditions (what must be true about the system when the test has completed successfully):
       User is has credentials stored in the database which include, name, email, and password. 
       Additionally, they will have stored their respective interests and hobbies for which to load onto their page.
    
    Use case name:
        Add hobbies/interests
    Description:
        Test the insertion of interest to user association
    Pre-conditions (what needs to be true about the system before the test can be applied):
       User must be looged in.
    Test steps:
        1.Navigate to user profile page
        2. Click on add button in interests section
        3. input for user appears on page
        4. User types in input
        5. interest gets added to interest section of user profile.
    Expected result:
       User should add and persist a chosen interest on their page.
    Actual result (when you are testing this, how can you tell it worked):
      User sees the interest added to their interest section and it persists across sessions. 
    Status (Pass/Fail, when this test was performed)
       Pass
    Notes:
        N/A
    Post-conditions (what must be true about the system when the test has completed successfully):
       User is has a persisting association with the added interest(s).

    Use case name:
        Delete hobbies/interests
    Description:
        Test the deletion of interest from user association
    Pre-conditions (what needs to be true about the system before the test can be applied):
       User must be looged in.
       User must have atleast one interest associated with their profile.
    Test steps:
        1. Navigate to user profile page
        2. Click on remove button in interests section
        3. All currents interests have an X button on them
        4. User presses the X button on the interests they wish to delete
        5. interest gets removed from the interest section of user profile.
    Expected result:
       User should delete and persist an interest on their page.
    Actual result (when you are testing this, how can you tell it worked):
      User no longer sees the interest in their interest section and it persists across sessions. 
    Status (Pass/Fail, when this test was performed)
       Pass
    Notes:
        N/A
    Post-conditions (what must be true about the system when the test has completed successfully):
       User no longer is associated with any removed interest.


### Matching Page
    Use case name:
        Verify matching page displays potential matches
    Description:
        Test the hi5ive matching page 
    Pre-conditions (what needs to be true about the system before the test can be applied):
        User needs to be logged in.
        User has completed their profile.
        User has other users who match their hobbies and preferences.
    Test steps:
        1. Navigate to matching page
        2. Check if potential matches are displayed
        3. Verify that the profiles display all user profile information correctly.
    Expected result:
        The matching page should display the potential matches with the correct info.
    Actual result (when you are testing this, how can you tell it worked):
        User should see the users profile picture , their name and interests, along with any other relevant info.
    Status (Pass/Fail, when this test was performed)
        Pass/Fail
    Notes:
        N/A
    Post-conditions (what must be true about the system when the test has completed successfully):
        The page retrieves the relevant user information from the database. 

    Use case name:
        Verify matching page successfully matches users. 
    Description:
        Test the hi5ive matching page.
    Pre-conditions (what needs to be true about the system before the test can be applied):
        User needs to be logged in.
        User has completed their profile.
        User has other users who match their hobbies and preferences.
        User clicks the "match" button on a compatible user
    Test steps:
        1. Navigate to matching page
        2. Check if potential matches are displayed
        3. Click match on a user that is displayed.
    Expected result:
        The users are successfully matched
    Actual result (when you are testing this, how can you tell it worked):
        The Matches table in the database should be successfully updated with the correct user    
        information
        A notification that the users have matched will be displayed
    Status (Pass/Fail, when this test was performed)
        Pass/Fail
    Notes:
        N/A
    Post-conditions (what must be true about the system when the test has completed successfully):
        The Matches table in the database should be successfully updated with the correct user information.
        The User that was selected to match is added to the matches list in the profile page.


 

### Matching Page

### Previous Matches Page

    Use case name
        Verify retrieval of a user's previous matchess for a user with previous matches.
    Description
        Test retrieving a profile's matches from the database.
    Pre-conditions
        User has a profile and is logged in with valid credentials at their profile page.
        User has previous matches.
    Test steps
        1. Navigate to the previous matches page
    Expected result
        User should see their previous matches
    Actual result
        User is navigated to their previous matches page where their previous matches are displayed.
    Status
        Pass
    Post-conditions
        User is on previous matches page and matches are displayed for the user.
-----
    Use case name
        Verify a user can delete a previous match.
    Description
        Test deletion of a previous match on the previous matches page.
    Pre-conditions
        User is logged in
        User has navigated to their previous matches page
        User has a previous match to delete
    Test steps
        1. Delete a previous match
        2. Reload page
    Expected result
        User should be able to delete their previous match.
    Actual result
        The intended previous match is deleted.
        The intended previous match is not present on reload.
    Status
        Pass
    Notes
        The reload status is necessary to verify that the database is updated 
        and not just the front end element removed when a deletion is attempted.
    Post-conditions
        User no longer sees the previous match on their previous matches page.
