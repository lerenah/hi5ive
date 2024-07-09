### User Profile Page Mockup

#### Page Title:
**User Profile**

#### Page Description:
This is the user profile page, displaying the user's interests, hobbies, and groups they are a part of. The page includes About Me sections for basic user information and goals. An activity feed.

---
![User Mockup](/images/userProfile.drawio.png)
---

#### Parameters Needed for the Page:
1. **User ID**: Identifier for the user whose profile is being viewed.
2. **Auth Token**: To verify the authenticity of the request and permissions.
3. **View Mode**: Determines if the page is being viewed by the user themselves or another user (edit mode vs. view mode).

#### Data Needed to Render the Page:
1. **Basic User Information**:
   - Profile picture URL
   - Username
   - Location
   - Age
   - Status message
2. **Hobbies**:
   - List of hobbies
3. **Interests**:
   - List of interests
4. **Groups**:
   - List of groups the user is a part of
5. **Additional Sections**:
   - User preferences
   - Privacy settings
   - Activity log

#### Link Destinations for the Page:
1. **Edit Profile**: Redirects to a page or modal for editing user information.
2. **Account Settings**: Directs to a detailed settings page.
3. **Group Details**: Links to detailed views of specific groups.
4. **Privacy Settings**: Redirects to the privacy settings page.
5. **Logout**: Logs the user out of the account.

#### List of Tests for Verifying the Rendering of the Page:
1. **Profile Information Test**:
   - Verify that the user's profile picture, username, location, age, and status message are displayed correctly.
   - Check that all personal information fields are populated accurately.

2. **Hobbies and Interests Test**:
   - Ensure hobbies and interests are listed correctly.
   - Validate the accuracy of the hobby and interest descriptions.

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

8. **UI/UX Test**:
   - Evaluate the overall look and feel of the page for user-friendliness.
   - Check for any visual inconsistencies or alignment issues.

