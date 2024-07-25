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

    Name
    Description
    Parameters
    return values
    List of tests for verifying each access method



## Page Access
### Login Page
    Use case name:
        Verify login with valid user name and password
    Description:
        Test the Google login page
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
        User is navigated to dashboard with successful login
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


 
