# Documentation for Pixello Server

<br>

## **Introduction**

As our application has been built using the MERN stack (MongoDB, Express, React.js and Node.js), our database is ofcourse, Mongo. We have deployed our database to Mongo Atlas, the cloud version of MongoDB

A cloud storage solution, Cloudinary has been employed to securely store the images a user uploads. The Cloudinary URL and Image ID is then passed to the database, Mongo Atlas to connect to a user profile or the post that is created.

The server-side of this application is deployed to Heroku. To connect with our database and our storage soluation, the environment variables are stored within the deployed application that exists in Heroku.

<br>
<br>

**HOSTING SERVICE ACCESS**

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

**Sign Up** 

HTTP Request: **POST**

URL: localhost:4000/auth/sign_up

Notes: With a Json Web Token (JWT) as authentication, a profile is created in the database and the image is stored in Cloudinary, the cloud storage solution. 

![Auth - Sign Up](/docs/images/auth_sign_up.jpg)

<br>
<br>

**Sign In**

HTTP Request: **POST**

URL: localhost:4000/auth/sign_up

Notes: Upon signing in a Json Web Token (JWT) is returned

JSON Format:

```json
{
    "username": "mickey2",
    "password": "abc12345"
}
```

![Auth - Sign In](/docs/images/auth_sign_in.jpg)

<br>
<br>

**Sign Out**

HTTP Request: **POST**

URL: localhost:4000/auth/sign_out

Notes: Upon signing out an empty array is returned to reflect the succesful sign out.

<br>
<br>
<br>

### **USERS**

**Read User Profile**

HTTP Request: **GET**

URL: localhost:4000/users/610deeb7af330020b19d6219

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a profile is retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Users - Get Profile](/docs/images/users_get_profile.jpg)

<br>
<br>

**Update User Profile**

HTTP Request: **PUT**

URL: localhost:4000/users/610deeb7af330020b19d6219

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a profile is update from the database and the image is updated from Cloudinary, the cloud storage solution. 

![Users - Update Profile](/docs/images/users_update_profile.jpg)

<br>
<br>

**Delete User Profile**

HTTP Request: **DELETE**

URL: localhost:4000/users/ 610e04e54cd8c527ae5a4b46

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a profile is deleted from the database and the image is deleted from Cloudinary, the cloud storage solution. 

![Users - Delete Profile](/docs/images/users_delete_profile.jpg)

<br>
<br>
<br>

### **POSTS**

**Create Post**

HTTP Request: **POST**

URL: localhost:4000/posts/new_post

Notes: With a Json Web Token (JWT) as authentication, a post is created in the database and the image is stored in Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_create_posts.jpg)

<br>
<br>

**Read All Posts**

HTTP Request: **GET**

URL: localhost:4000/posts/

Notes: With a Json Web Token (JWT) as authentication, all posts are retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_get_allposts.jpg)

<br>
<br>

**Read Posts By User**

HTTP Request: **GET**

URL: localhost:4000/posts/user_posts

Notes: With a Json Web Token (JWT) as authentication, posts of a user are retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_get_postsbyuser.jpg)

<br>
<br>

**Read Posts - Individually**

HTTP Request: **GET**

URL: localhost:4000/posts/610e03644cd8c527ae5a4b40

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a posts is retrieved from the database and the image is retrieved from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_get_postsbyid.jpg)

<br>
<br>

**Update Post**

HTTP Request: **PUT**

URL: localhost:4000/posts/610df8bd4cd8c527ae5a4b35

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a post is updated in the database and the image is updated from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_update_postbyid.jpg)

<br>
<br>

**Delete Post**

HTTP Request: **DELETE**

URL: localhost:4000/posts/610e03c44cd8c527ae5a4b42

*the ID used in the URL is the ID of the document within the database*

Notes: With a Json Web Token (JWT) as authentication, a post is deleted from the database and the image is deleted from Cloudinary, the cloud storage solution. 

![Post - Create Post](/docs/images/posts_delete_postbyid.jpg)







