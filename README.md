# Documentation for Pixello Server

<br>

Welcome to Pixello! A full-stack photo sharing application created by Michael Dart and Emily Mills as a part of our final assignment at Coder Academy.

To connect with us, please see us on LinkedIn and Twitter where you will be kept up to date on our future projects.

[Michael Dart - LinkedIn](https://www.linkedin.com/in/michael-dart-537a3b57/)

[Michael Dart - Twitter](https://twitter.com/michaeldart12)

<br>

[Emily Mills - LinkedIn](https://www.linkedin.com/in/emilymills95/)

[Emily Mills - Twitter](https://twitter.com/emigraced)

<br>

## **CONTENTS** 

- [Introduction](#introduction)
- [Hosting Service Access](#hosting-service-access)
- [Application Login Details](#application-login-details)
- [POSTMAN - Testing Pixello](#postman---testing-pixello)
    - [AUTHORISATION](#authorisation)
        - [Sign Up](#sign-up)
        - [Sign In](#sign-in)
        - [Sign Out](#sign-out)
    - [USERS](#users)
        - [Read User Profile](#read-user-profile)
        - [  Read User Profile - Certain Items](#read-user-profile---certain-items)      
        - [Update User Profile](#update-user-profile)
        - [Delete User Profile](#delete-user-profile)
    - [POSTS](#posts)
        - [Create Post](#create-post)
        - [Read All Posts](#read-all-posts)
        - [Read Posts by User](#read-posts-by-user)
        - [Read a Single Post](#read-a-single-post)
        - [Update Post](#update-post)
        - [Update Post - Likes only](#update-post---likes-only)
        - [Delete Post](#delete-post)      
    - [COMMENTS](#comments)
        - [Create Comment](#create-comment)
        - [Get Comments](#get-comments)
        - [Delete Comment](#delete-comment)
- [Part A Documentation](#part-a-documentation)

<br>

## **INTRODUCTION**

As our application has been built using the MERN stack (MongoDB, Express, React.js and Node.js), our database is ofcourse, Mongo. We have deployed our database to Mongo Atlas, the cloud version of MongoDB

A cloud storage solution, Cloudinary has been employed to securely store the images a user uploads. The Cloudinary URL and Image ID is then passed to the database, Mongo Atlas to connect to a user profile or the post that is created.

The server-side of this application is deployed to Heroku. To connect with our database and our storage soluation, the environment variables are stored within the deployed application that exists in Heroku.

<br>
<br>

## **HOSTING SERVICE ACCESS**

<br>

**Host:** [Mongo Atlas](https://www.mongodb.com/cloud/atlas)

**Username:** mdart86@hotmail.com

**Password:** Emmd2021!

<br>

**Host:** [Cloudinary](https://cloudinary.com/)

**Username:** mdart86@hotmail.com

**Password:** Emmd2021!

<br>

**Host:** [Heroku](https://id.heroku.com/login)

**Username:** mdart86@hotmail.com

**Password:** Emmd2021!

<br>
<br>

## **APPLICATION LOGIN DETAILS**

<br>

**Username:** mickey0

**Password:** abc12345

**Role:** Admin

<br>

**Username:** mickey1

**Password:** abc12345

**Role:** Standard User

<br>
<br>

## **POSTMAN - Testing Pixello**

<br>

To test that information was pass to and from our database and our cloud storage solution successfully, the [Postman](https://www.postman.com/) application was used.

Any Json Web Token (JWT) that is retrieved in the application, was utilised as authentication as a Bearer Token via the Authorization tab.

<br>

### **AUTHORISATION**

#### **Sign Up** 

HTTP Request: **POST**

URL: localhost:4000/auth/sign_up

Notes: With a Json Web Token (JWT) as authentication, a profile is created in the database and the image is stored in Cloudinary, the cloud storage solution. As confirmation for a successful sign-up, a JWT is returned along with the Username and User ID.

![Auth - Sign Up](/docs/images/auth_sign_up.jpg)

<br>
<br>

#### **Sign In**

HTTP Request: **POST**

URL: localhost:4000/auth/sign_up

Notes: Upon signing in a Json Web Token (JWT) is returned along with the Username and User ID.

JSON Format:

```json
{
    "username": "mickey0",
    "password": "abc12345"
}
```

![Auth - Sign In](/docs/images/auth_sign_in.jpg)

<br>
<br>

#### **Sign Out**

HTTP Request: **GET**

URL: localhost:4000/auth/sign_out

Notes: Upon signing out an empty array is returned to reflect a destroyed user session for the succesful sign out.

![Auth - Sign Out](/docs/images/auth_sign_out.jpg)

<br>
<br>
<br>

### **USERS**

#### **Read User Profile**

HTTP Request: **GET**

URL: localhost:4000/users/610e07f14cd8c527ae5a4b50

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a profile is retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Users - Get Profile](/docs/images/users_get_profile.jpg)

<br>
<br>

#### **Read User Profile - Certain Items**

HTTP Request: **GET**

URL: localhost:4000/users/user_label/610e018e4cd8c527ae5a4b3b

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a profile is retrieved (based on certain criteria) from the database and the image is retrieved from Cloudinary, the cloud storage solution. This route was create as a way to show the username and their avatar image in select areas of the application. 

![Users - Get Profile](/docs/images/users_getprofile_sendcertainitems.jpg)

<br>
<br>

#### **Update User Profile**

HTTP Request: **PUT**

URL: localhost:4000/users/610deeb7af330020b19d6219

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a profile is update from the database and the image is updated from Cloudinary, the cloud storage solution. 

![Users - Update Profile](/docs/images/users_update_profile.jpg)

<br>
<br>

#### **Delete User Profile**

HTTP Request: **DELETE**

URL: localhost:4000/users/6114eb20d888927974a444f4

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a profile is deleted from the database and the image is deleted from Cloudinary, the cloud storage solution. The empty response in Postman reflects the successful deletion.

![Users - Delete Profile](/docs/images/users_delete_profile.jpg)

<br>
<br>
<br>

### **POSTS**

#### **Create Post**

HTTP Request: **POST**

URL: localhost:4000/posts/new_post/610e07f14cd8c527ae5a4b50

*the ID used in the URL is the ID of the User that exists in the User database*

Notes: With a Json Web Token (JWT) as authentication, a post is created in the database and the image is stored in Cloudinary, the cloud storage solution.

![Post - Create Post](/docs/images/posts_create_posts.jpg)

<br>
<br>

#### **Read All Posts**

HTTP Request: **GET**

URL: localhost:4000/posts/

Notes: With a Json Web Token (JWT) as authentication, all posts are retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_get_allposts.jpg)

<br>
<br>

#### **Read Posts By User**

HTTP Request: **GET**

URL: localhost:4000/posts/user_posts

Notes: With a Json Web Token (JWT) as authentication, posts of a user are retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_get_postsbyuser.jpg)

<br>
<br>

#### **Read a Single Post**

HTTP Request: **GET**

URL: localhost:4000/posts/610e03644cd8c527ae5a4b40

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a posts is retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_get_postsbyid.jpg)

<br>
<br>

#### **Update Post**

HTTP Request: **PUT**

URL: localhost:4000/posts/610df8bd4cd8c527ae5a4b35

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a post is updated in the database and the image is updated from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_update_postbyid.jpg)

<br>
<br>

#### **Update Post - Likes only**

HTTP Request: **PUT**

URL: localhost:4000/posts/update_likes/610e03184cd8c527ae5a4b3e

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a post is updated in the database and the image is updated from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_update_likesonpost.jpg)

<br>
<br>

#### **Delete Post**

HTTP Request: **DELETE**

URL: localhost:4000/posts/610e03c44cd8c527ae5a4b42

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a post is deleted from the database and the image is deleted from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_delete_postbyid.jpg)

<br>
<br>
<br>

### **COMMENTS**

#### **Create Comment**

HTTP Request: **POST**

URL: localhost:4000/comments/new_comment/61150b9df8b32a2c8dd59232

*the ID used in the URL is the ID of the Post that exists in the Post database*

Notes: With a Json Web Token (JWT) as authentication, a post is created in the database and the image is stored in Cloudinary, the cloud storage solution.

![Comment - Create Comment](/docs/images/comments_create_comment.jpg)

<br>
<br>

#### **Get Comments**

HTTP Request: **GET**

URL: localhost:4000/comments/get_comments

Notes: With a Json Web Token (JWT) as authentication, a post is created in the database and the image is stored in Cloudinary, the cloud storage solution.

![Comment - Get Comments](/docs/images/comments_get_comments.jpg)

<br>
<br>


#### **Delete Comment**

HTTP Request: **DELETE**

URL: localhost:4000/comments/61150d0d80d1f72d167021c1

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a post is created in the database and the image is stored in Cloudinary, the cloud storage solution. The empty response in Postman reflects the successful deletion.

![Comment - Delete Comment](/docs/images/comments_delete_comment.jpg)

<br>
<br>
<br>

## Part A Documentation

The Part A docmentation has been merged into this file for ease reference. Part A documentation covers all the planning of our application which was a crucial part of project to ensure we had structure during our build process

**Contents** 

- [Purpose](#r1-purpose)
- [Features](#r1-features)
- [Target Audience](#r1-target-audience)
- [Tech Stack](#r1-tech-stack)
- [Data Flow Diagram](#r2-data-flow-diagram)
- [Application Architecture Diagram](#r3-application-architecture-diagram)
- [User Personas](#r4-user-personas)
- [User Stories](#r4-user-stories)
- [Wireframes](#r5-wireframes)
- [Trello](#r6-trello)
- [Github](#github)


## R1 Purpose

Pixello exists to meet a gap in the social media space. Existing photo sharing apps (such as Instagram) have pivoted their strategy and are now amplifying video content, which puts their original consumers at a disadvantage in growing and communicating with their audience. Our app exists to give those creators (and any photography enthusiasts) a place to share and enjoy the art of photography without concern for competing mediums. 

## R1 Features

For the viability of our app, we divided the features into two categories - MVP features, and additional features. While the additional features will enhance the user experience, and we are planning to include them, the app could still function without them. Conversely, the MVP (minimum viable product) features are essential for our app to fulfil it's purpose, and so these are the features we will build first.

### MVP Features

**Authentication**

The application will have full authentication to protect users and their work. This will allow a new user to sign-up with an email and password, and any existing users will be able to sign-in with the same credentials and also have the ability to log-out at any time.

A user's information will be stored securely in the application's database complete with password encryption. As an extra level of security, each user session will be protected by an encrypted JSON Web Token (JWT).

<br>

**Authorisation**

Having authorisation gives the user comfort in knowing that their content is protected. This application will only allow the profile or post owner (or comment owner when the additional features have been implemented) to edit their content. However, as well as the owner having delete permissions for their own content, an administrator will also be able to delete profiles, posts, and comments in case of inappropriate content. Similarly, a post's owner will be able to delete comments on their posts if they feel the comment is not cohesive with a safe and friendly environment.

<br>

**CRUD Functionality**

The application's CRUD functionality is essential for a well-rounded user experience, as it allows users the freedom to either create, read, update or delete content. Access to certain elements of CRUD functionality will be dependent on if the the user is authorised (see the **Authorisation** section above).

The below features have been created to showcase CRUD functionality: 

<br>

***User profile*** 

Upon sign up, new users will create their profile. From there, users will be able to update or delete their own profile, as well as view any other user's profile.

<br>

***User posts*** 

Our users will be able to create a new post (which will include a photo, one or more categories, and a caption), update or delete their own posts, and view all other user's posts.

<br>

***Home Page***

All users will be able to view all posts in the feed page and have the ability to click on a post to access more information, such as viewing all comments (when the additional features are implemented) and seeing what categories the photo has been assigned to.

<br>

**Validation on posts**

Within our application, we want to maintain an excellent user experience. One way to achieve this is through validation, where:

- each post must have a photo (since this is a photo sharing app),
- each picture posted will automatically be resized to a uniform size (protecting the aesthetic experience),
- each post's caption has a character limit, which helps to keep text concise and the attention focused on the picture.

<br>

**Home Page**

The application's home page will be the page the user is redirected to upon a successful sign-up or log-in. The page will feature a navigation bar that will include links to the home page (when not on the home page) and for users to view their profile. The navigation options can be expanded if further features are added in future (such as a button to filter by photo category, view private messages, and view notifications).

The body of the feed page will display the posts in a scrollable single column format that will show the username the post belongs to, the photo, the caption, and a like button. 

<br>

**Personal Profile Page**

The profile page of the application provides the user with a central location to view their own profile which will include their:

- Username 
- Bio (about me)
- Avatar (profile picture)
- All posts (in a grid format)

<br>

**Ability to Like Posts**

All users will have the ability to like a post in the application. Instead of displaying a like count for each photo, we've made the intentional decision to hide this information. As an alternative, each user's profile will display their total like count (across all posts). This is discussed in further detail below (in the 'Like Counter' section of the additional features).

### Additional Features

**Comments** 

Users will be able to create a comment on any post, edit or delete their comments, and view comments by other users. Comments will appear under the post, and are likable by other users. As an intentional decision to improve the user's experience, no tally of likes will be displayed (though the post's owner will be notified of likes received).

**Private Messages** 

Users will be able to message other users privately. The messaging interface will be a separate page where users can view their message history with any user they've had a private conversation with. Users will not have access to other user's private messages.

**Photo Zoom** 

Users will be able to zoom in on photos to experience their detail. On mobile and tablet, this will be via pinch-zoom, and desktop users will be able to zoom on mouse hover. 

**Categories** 

When posting a photo, users will be able to assign their post to categories. Other users will be able to filter their home page (the collection of all user's posts) by category. 

**Notifications** 

Users will receive notifications when someone likes a post or comment that they created, when another user comments on their post, or if they receive a private message. Notifications will be set up as a private message from the app, but will be viewable in a separate page from other messages. 

**Like Counter** 

Visible in user profiles will be a like counter, which will be a tally of all the likes received across all of that user's posts. This will update with each like received or withdrawn.

**Post Counter** 

Visible in user profiles will be a post counter, which will display the number of posts that user has created. This will update with each post that the users creates or deletes. 

## R1 Target audience

There are two primary audiences that will be well served by this app: 

1) Photography enthusiasts who want to appreciate art without all of the clutter that normally comes in a social media app (advertisements, different media, lengthy captions, etc.)
2) Content creators (whose primary medium is photography) who are being edged out of other social media platforms that have shifted to favour video based content.

## R1 Tech stack

The techstack for this application is based on the MERN stack, a JavaScript code based stack that allows for a faster and simpler deployment of full stack web applications due to the same coding languauge used.

MERN Stands for:

**MongoDB**

A No-SQL, non-relational database known for it's easy set-up process. MongoDB will store data in documents that are very similar to JSON (JavaScript Object Notation) objects. Each document will have key/value pairs and are easily identifiable with a unique ID making data queries more efficient.

**Express**

A back-end (server-side) framework that will be used to implement our router for HTTP requests and responses.

**React.js**

This part of the stack allows our users to interact with our application. As a front-end (client-side) framework written in JavaScript, React.js connects to the server, gathering data to then render it to the user in HTML. 

React.js is efficient thanks to its component structure and the Virtual Document Object Model (Virtual DOM). Instead of an entire page being refreshed with every change, React.js will only re-render the components that require updating. 

**Node.js**

As a JavaScript runtime environment, Node.js is what executes the server-side code. 

<br>

In addition to the above, our application's tech stack will include CSS for styling, HTML (mainly rendered by React.js), and the following tech services: 

- MongoDB Atlas - a cloud database service that will be used to store data entered by users as MongoDB is only available during the development phase
- Cloudinary - the cloud storage solution implemented to store images uploaded by users
- Netlify - used to deploy the front-end part of the application
- Heroku - used to deploy the back-end part of the application

<br>

## R2 Data Flow Diagram

![Data Flow Diagram](/docs/images/T3A2-A_DFD.png)

| Annotation | Explanation |
|---|---|
| 1 | The app user. They may have different permissions depending on their account type (standard or administrator). |
| 2 | First time users will need to sign up in order to access the app. Signing up will create a new user in the user database, and then authenticate the user and log them in. |
| 3 | Existing users must log in to access the app. Their details will be sent to the user database for verification, and then they will be authenticated and logged in. |
| 4 | The user is directed to the home page, which displays all posts. From there, they can choose options 5, 6, 7, or 10 (and their sub selections, where applicable). Here, the post database is queried to return all posts. |
| 5 | The user can filter the home page by category. The chosen category will be sent as a query to the post database, which will return all posts in that category.  |
| 6 | The user can create a post. The image, caption, and user ID will be sent to the post database with the instruction to create a new post with this data. (The image will be saved in the image storage, and a reference to this image will be saved in the post database.) The newly created post will be returned.  |
| 7 | The user can click on a specific post in the home page and view more details about it, such as comments and a link to the owner's profile. A request with the post ID will be sent to the post database, and all the data relating to that post will be returned. |
| 8 | If the user is the post's owner (or an administrator), they have the option to delete the post. This will send the post's ID to the post database with the instruction to delete it, and the database will return a confirmation. |
| 9 | If the user is the post's owner, they can update the post. The new information will be sent to the post database with the instruction to update the post with the matching ID. The database will send back the updated post.  |
| 10 | A user can view their own profile, or another user's profile. The user ID will be sent to the user database, and the information relating to that user will be returned. |
| 11 | If the profile is owned by the user, they can update the details (like username, bio, and avatar). The new information will be sent to the user database with the instruction to update the profile with the matching ID. (The avatar will be stored in the image storage, and a reference to it will be stored in the user database.) The user database will then send back the updated profile. |
| 12 | If the profile is owned by the user (or if the user is an administrator), they can delete the profile. The user ID will be sent to the user database with the instruction to delete, and a confirmation will be sent back. |
| 13 | The user database stores all the information pertaining to users, such as username, email address, bio, and a reference to the avatar image which will be stored in the image storage. |
| 14 | The post database stores all the information pertaining to posts, such as the owning user, the caption, any comments, and a reference to the image which will be stored in the image storage. |
| 15 | The image storage will hold all the images used in the app, including post images and user avatars. |

## R3 Application Architecture Diagram

![application_architecture_diagram (2)](/docs/images/application_architecture_diagram.png)

| Annotation | Explanation |
|---|---|
|**1 - User**| A user can be either a general user or an administrator. The user will interact witht the application via a web browser, once they are authenticated via a login (after signing up) will be able to interact with the application more based on what logic has been implemeneted within the ***Client logic*** and ***Business Logic*** tiers. |
|**2 - Client Tier**| The ***Client tier*** is responsible for showing the user the pages of the application which includes the structure of the page (with the use of HTML and the framework, React.js), the functionality of the page (with the use of JavaScript and React.js), styling (with the use of CSS) and any data that has been requested from the database (see **6 - Database Tier** below). The ***Client tier*** will display pages to the user based on if they are authenticated and if the user is authorised to see certain sections. When the application is in production, the front-end side of the application will be deployed via the hosting service of Netlify |
|**3 - HTTP Request**| When the user performs a CRUD function (see ***4 - Business Logic*** below) they are sending a HTTP request. HTTP requests are handled by the middleware, Express. This is where a user will request getting the data (for reading), posting data (for creating), putting data into the request (for updating) or deleting data. |
|**4 - Business Logic**| The ***Business Logic tier***, also known as the controller is responsbile for sending the information to the ***Client tier*** for the user to view and for the actions performed when data is passed to and from the database as set out in the ***Database tier***. Such actions are performed using any of the four CRUD (create, read, update and delete) functions and will need to pass any authorisation logic implemented, which is written in JavaScript to interact with the client side and with the help of Node.js to run the code on the server side. When the app is released for production, the server side will be deployed using the services of Heroku. |
|**5 - Sending Data**| Once the user performs a CRUD function, the request is then sent to the ***Database tier*** also known as the model. |
|**6 - Database Tier**| The ***Database tier*** is responsible for talking to the database (MongoDB) and the cloud storage solution (Cloudinary) when the request has been received from the ***Client and Business logic tiers***. Whilst the database in use is a "schema-less" database, the application will have a schema to control how the data is structured when it is passed to and from the database. The ***Database tier*** will also handle any validation (so that data meets a certain format, ie. character limits on captions) and santising (ie, preventing malicious code injection attacks). The application's database once deployed, will use the service of Mongo Atlas. |
|**7 - Mongoose Query**| When the data sent from the user via the ***Client tier*** has passed the logic implemented in the ***Business Logic tier*** and the criteria implemented in the ***Database tier***, a query (handled by Mongoose) is initiated with the database (MongoDB), returned to the ***Database tier***, and then passed back to the user in the ***Client Tier*** via the ***Business Logic tier***. (More about this process in **11 - Return of Data** below.) |
|**8 - Database**| Information is stored within the MongoDB database as determined by the schema. As mentioned in ***6 - Database Tier***, a schema has been implemented to ensure data is structured. Each record is stored as an individual document, as the database is a NoSQL, non-relational database. |
|**9 - Cloud Storage**| The cloud storage solution of this application uses Cloudinary to handle the storage of images in a secure location complete with secret API keys for encryption. |
|**10 - Cloud Storage Query**| As a request to the database is made by the user, a cloud storage query is raised with Cloudinary at the same time using an API. The request will perform a CRUD function (based on the user's actions) on any image/s that exist within the cloud storage and return them to the user in the ***Client tier*** via the database and business logic tiers. |
|**11 - Return of Data**| Once the data retrieved from the database and cloud storage has passed the criteria set out in the ***Database tier***, the return of the data will need to pass any logic implemented in the ***Business Logic tier*** before passing it on to user in the ***Client tier***. |
|**12 - HTML Page**| Once data has passed from the ***Database tier*** to the ***Business logic tier*** via any criteria and logic that has been implemented in these tiers, it is handed back through the HTML page to display to the client based on logic that has been implemented in the ***Client tier***.|


## R4 User Personas

| Name | Goals & Needs | Motivated By | Frustrated By | Notable Quote |
|---|---|---|---|---|
| Daniel | To grow in his photography skills, share his work with others, and appreciate the craft with fellow photographers. | Photos that tell their own stories. | Social media clutter. He wants to appreciate photos and not get bogged down in wordy captions. | "A picture says a thousand words." |  

<br>  

| Name | Goals & Needs | Motivated By | Frustrated By | Notable Quote |
|---|---|---|---|---|
| Sarah | To produce high-quality content, and grow her online audience. | Inspiring others and teaching them to be creative. | Changing social media algorithms that no longer favour her content. | "I just want to share what I love, and to stop having my content hidden from those that want to see it." |

<br>  

| Name | Goals & Needs | Motivated By | Frustrated By | Notable Quote |
|---|---|---|---|---|
| Jim | To enjoy a simple lifestyle with his family, and only occasionally share parts of his life online. | The art of self-sufficiency. | The many online security risks he reads about. | "Keep your personal life personal." |

<br>

| Name | Goals & Needs | Motivated By | Frustrated By | Notable Quote |
|---|---|---|---|---|
| Amelia | A place to appreciate photography. | Learning from the work of others, which inspires her to evolve her own photography skills. | Media sharing applications that focus on videos more than photos. | "I want to showcase my photos without competing with video creators." |


## R4 User Stories

*We have made adjustments to the user stories as we have ironed out further details in the app features. We also modified some of the stories to include the above user personas. (Evidence of this can be found in the commit history.)*

**Authentication:**

As Jim (see user personas above), I want to be able to log out of websites, so that I can be assured of my security when using a shared computer. 

As a social media user, I want to know that my account is protected, so that it cannot be compromised by a malicious user.

As a new user, I want to be able to create an account, so that I can join the community. 

**Authorisation:**

As someone who posts on social media, I don't want other users to be able to edit my posts, because that could damage my reputation. 

As someone who posts on social media, I don't want other users to have permission to remove my posts, because I have a voice in this community. 

As a social media administrator, I want to be able to remove users and posts that are inappropriate, so that the community standards can be upheld. 

**CRUD**

As a photography enthusiast, I want to share my work with others, so that I can be involved in the community. 

As a social media user, I want to be able to update or remove my posts, so that I can be in control of my brand.

As Amelia, I want to see what other users are creating, so that I can appreciate their work. 

As a social media user, I want to create content, so that I can contribute to the community.

**Home page:**

As a social media user, I want to access everyone's content, so that I can find new users who share content I enjoy.

As a social media user, I want to see captions on a post, so that I can understand what the photo is about.

**Validation (char limit):**

As Daniel, I want photos to have short captions, because a photo says a thousand words.

**Validation (uniform picture size):**

As the user of a photo sharing app, I want the photos to appear uniform in size, so that it is aesthetically pleasing to scroll through. 

A someone who posts on social media, I want my photos to upload in the appropriate scale, so that they look the way I want them to. 

**Validation (photo required to post):**

As the user of a photo sharing app, I want everyone's content to include a photo, so that the app doesn't become cluttered with irrelevant content. 

**Profile page:**

As Sarah, I want to have a curatable profile, so that I can present my best self online. 

As as social media user, I want to see all the content belonging to one creator, so that I can appreciate the work of my favourite creators. 

**Ability to like posts:**

As someone who posts on social media, I want to know whether or not my posts are well received, so that I can adjust my content accordingly. 

As a photography enthusiast, I want to indicate my appreciation of someone else's photo, so that they can be encouraged. 

As a social media user, I want to tell another user that I enjoyed their post, so that they know to produce more content like this. 

**Comments:**

As a social media user, I want to be able to converse about another user's post, so that I can be involved with the community. 

As a user who posts on social media, I want other users to be able to comment on my posts, so that I can create community. 

**Private Messages:**

As a social media user, I want to be able to message content creators directly, because public communications might get missed. 

As a social media user, I want to be able converse with other users privately, so that our conversations are not under public scrutiny. 

**Zoom in on photos:**

As a mobile user, I want to be able to see photos in clearer detail, because I'm viewing on a small screen. 

As a photography enthusiast, I want to be able to zoom in on photos, so that I can appreciate the details. 

**Categories:**

As someone who posts on social media, I want to be able to categorise my posts, so that other users can see the topic. 

As a social media user, I want to be able to filter posts by category, so that I can view what I'm most interested in. 

**Notifications:**

As a social media user, I want to receive notifications of any activity involving me, so that there is no delay in me receiving the information. 

As someone who posts on social media, I want to be notified of any activity on my posts, so that I can engage with my community. 

**Like Counter:**

As a social media content creator, I want to keep track of the number of engagements from other users, so that I can see that my account is growing.

As a social media user, I want to know what type of content is popular, so that I can pay attention to the trends. 

**Post Counter:** 

As someone who posts on social media, I want to know how many posts I've made, so that I can see how far I've come. 

As a social media user, I want to see how many posts another user has made, so that I can assess how engaged they are with the app.

## R5 Wireframes

We created our wireframes in Figma, and utilised a mobile-first approach. Note that where content extends beyond the bottom of the page (such as the home page where all posts will be displayed), the site will scroll vertically.

**Mobile:**

![mobile wireframes, pages 1-4](/docs/images/Mobile_final_1-4.png)
![mobile wireframes, pages 5-8](/docs/images/Mobile_final_5-8.png)
![mobile wireframes, pages 9-12](/docs/images/Mobile_final_9-12.png)
![mobile wireframes, pages 13-15](/docs/images/Mobile_final_13-15.png)

**Tablet:**

![tablet wireframes, pages 1-4](/docs/images/Tablet_final_1-4.png)
![tablet wireframes, pages 5-7](/docs/images/Tablet_final_5-7.png)
![tablet wireframes, pages 8-10](/docs/images/Tablet_final_8-10.png)
![tablet wireframes, pages 11-13](/docs/images/Tablet_final_11-13.png)
![tablet wireframes, pages 14-15](/docs/images/Tablet_final_14-15.png)

**Desktop:**

![desktop wireframes, pages 1-2](/docs/images/Desktop_final_1-2.png)
![desktop wireframes, pages 3-4](/docs/images/Desktop_final_3-4.png)
![desktop wireframes, pages 5-6](/docs/images/Desktop_final_5-6.png)
![desktop wireframes, pages 7-8](/docs/images/Desktop_final_7-8.png)
![desktop wireframes, pages 9-10](/docs/images/Desktop_final_9-10.png)
![desktop wireframes, pages 11-12](/docs/images/Desktop_final_11-12.png)
![desktop wireframes, pages 13-14](/docs/images/Desktop_final_13-14.png)
![desktop wireframes, page 15](/docs/images/Desktop_final_15.png)

The above wireframes are the final versions, but we did iterate through a few versions of some pages before landing on the finals. Some examples are our 'about the creators' page and the desktop version of our design, which you can see below: 

**'About the Creators' Iterations:**

!['about the creators' iterations](/docs/images/iteration-about-the-creators.png)

**Sample of Desktop Version 1:**

![desktop version 1 sample](/docs/images/desktop-v1-sample.png)

## R6 Trello

Included below are some screenshots of our Trello board (which can be viewed [here](https://trello.com/invite/b/gogHBE75/c76367ac13fbf037eee7ffc5aa5434fc/final-assignment-part-a
) in its entirety).

**Board after initial creation:**

![first trello screenshot](/docs/images/trello-at-creation.png)

**Board after our first planning call:**

![second trello screenshot](/docs/images/trello-after-first-planning-call.png)

**Board at project midway point:**

![third trello screenshot](/docs/images/trello-midway-point.png)

**Board near project end point:** 

![fourth trello screenshot](/docs/images/trello-near-end-point.png)

**Board at project completion:** 

![fifth trello screenshot](/docs/images/final-trello-screenshot.png)

## Github

Our Github repository for this project (Part A) can be accessed [here](https://github.com/mdart86/T3A2_Fullstack_Application). *Please note that this repo is private, but the relevant educators have been added as collaborators.*

Below is a screenshot:

![github repo screenshot](/docs/images/github-screenshot.png)
