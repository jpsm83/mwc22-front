### *** MWC Barcelona 22 - Hackathon ***


### Personal Notes

This is  a pre-work project for MWC Barcelona 22 Hackathon. It is a simple project but quite challenged because I decided to add some new features I just learned as Redux and TailwindCss. Supose to be a front end project but I did a full stack one by choice. That way I could pratice a full MEARN project. Both of codes (front & back) are linked with githug in the end of this readme.


### Description

This is an application where you can search for developers looking for new opportunitys.

As recruiter you can nav around the developers cards, filter by stack or search for an especific one in the search bar, also you can click at the card desired to see the full resume of the developer.

As developer you can signup to add your resume. Once signed up you must to update your profile to appear in our list of developers, only profiles with all fields completed will show on the main page.


### MVP
CRUD for users.
Signin, login, logout and delete with PassportJS.
Filter by stack.
Search by name.

### User Stories

- **home** - Navigate through the homepage and see the list of developer with full profile completed. 
- **signup** - Create client account with PassportJS.
- **login** - Be able to edit and delete your own profile.
- **logout** - Ensure that your personal account session been closed.
- **edit user** - Once logedin access a form to edit and complete your profile to appear in our list of developers.
- **developer detail** - See the detail of an especific developer.


### Backlog

- Implement cloudinary.
- Add Nodemailer functionalities.
- Add PrivateRoute & AnounRoute.


### Bugs (Working on it)

- I had worked with Cloudinary before in other projects and all works fine. I tryed to implement in this one but I am getting and error, I will sorte it out soon as possible.
- I cant setup properly the PrivateRoute & AnounRote, I did it before in projects with react-router-dom version 5 but in this project I am working with the version 6. This new version has few changes that been implement and I am studing its Docs to sort this issue as faster as possible.


### Client / Frontend

### React Routes (React App)
| Path | page | Permissions | Behavior |
| - | - | - | - |
| / | Home | public <Route> | Navigate through the homepage and see the list of developers |
| /edit-user/:id | EditUser | PrivateRoute <Route> | Once logedin access a form to edit or delete user |
| /login | Login | AnounRoute <Route> | Login into an existing user account |
| /signup | Signup | AnounRoute <Route> | Create user account with PassportJS |
| /developer/:id | Recipe | public <Route> | See the detail of an especific developer |


### Components

- Filter (Filter developers by Stack).

- Footer (Webpage copywrite and navigation details).

- Nav (Home, Login / Signup / Logout, Search Bar, Create Profile, Edit User).

- Search (Search developers by name).

- UserCard (Show a short description of a developer).

- UserDetail (Show details of an especific developer).

- UserForm (Form to create, edit or delete an user).

- Validators (Validators used in the forms).


### Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.isLoggedIn(user)
  - auth.edit(user)
  - auth.delete(user)
- User Service
  - user.get()
  - user.getOne(id)


### Data Structure FrontEnd
```
├── public
|   ├── img
|   |   ├── image-2.jpg
|   |   ├── image-20.jpg
|   |   ├── github.webp
|   |   └── mwc22-logo.png
|   └── index.html
├── src
|   ├── app
|   |   └── store.js
|   ├── components
|   |   ├── Filter
|   |   |   └── Filter.js
|   |   ├── Footer
|   |   |   └── Footer.js
|   |   ├── Nav
|   |   |   └── Nav.js
|   |   ├── Search
|   |   |   └── Search.js
|   |   ├── UserCard
|   |   |   └── UserCard.js
|   |   ├── UserDetails
|   |   |   └── UserDetails.js
|   |   ├── UserForm
|   |   |   └── UserForm.js
|   |   └── Validators
|   |       └── Validators.js
|   ├── context
|   |   └── auth.context.js
|   ├── features
|   |   └── userSlice.js
|   ├── pages
|   |   ├── EditUser
|   |   |   └── EditUser.js
|   |   ├── Home
|   |   |   └── Home.js
|   |   ├── Login
|   |   |   └── Login.js
|   |   ├── Signup
|   |   |   └── Signup.js
|   |   └── UserPage
|   |       └── UserPage.js
|   ├── services
|   |   ├── auth.service.js
|   |   └── user.service.js
|   ├── App.js
|   ├── index.css
|   └── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

### Server / Backend

### Models

- User model

```javascript
  {
    username: { type: String, maxlength: 50, required: true },
    firstname: { type: String, maxlength: 50 },
    lastname: { type: String, maxlength: 50 },
    password: { type: String, required: true, minlength: 5 },
    experience: { type: Number },
    fields: { type: String },
    skills: { type: String, maxlength: 3000 },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
      match: [
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      ],
    },
    photo: {
      type: String,
      default:
        "https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg",
    },
    description: { type: String, maxlength: 3000 },
    country: { type: String },
    city: { type: String },
  },
```


### API Endpoints (backend routes)

| HTTP Method | URL | Request Body | Description |
| - | - | - | - |
| POST | /auth/signup  | {username, email, password, photo} |  Checks if fields are not empty and user does not exists, then create user with encrypted password, and store user in session |
| POST | /auth/login | {username, password} | Checks if fields not empty, if user exists, and if password matches, then stores user in session |
| POST | /auth/logout| (empty)| Logs out the user |
| PUT | /auth/edit-user/:id| {username, email, password, photo} | find a user by its id and update with data from fields |
| GET | /auth/isLoggedin | (session) | Checks if there is a user in session |
| DELETE | /auth/delete/:id | (session) | Delete the user profile in session |
| GET | /users/ | (empty) | Show all developers with full complete profile|
| GET | /users/:id | {isd} | Show specific developer |


### Data Structure BackEnd
```
├── configs
|   ├── cors.config.js
|   ├── db.config.css
|   ├── middleware.config.js
|   ├── passport.config.js
|   └── session.config.js
├── models
|   └── User.model.js
├── public
|   └── ( Front End Build )
├── routes
|   ├── auth.routes.js
|   └── users.routes.js
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
└── README.md
```


### Git
* [GitHub] - FrontEnd - https://github.com/jpsm83/mwc22-client
* [GitHub] - BackEnd - https://github.com/jpsm83/mwc22-server


### Deployed URL
* [Heroku] https://mwc22.herokuapp.com/