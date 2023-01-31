

User sign in test case

# It should do login user:

## Before

1. Open https://demo.realworld.io/

## Open login form

2. Click **Sign In** link in app header
3. Url should be `/#/login`
4. Page title should be **Sign in**

## Fill login form

5. Page should have form
6. Type `{tim491@mail.ru}` into **Email** form field
7. Type `{tim491}` into **Password** form field

## Submit form

8. Click on **Sign in** button

## Check user has been login

9. Header should contains `{tim491}`

# Where:

* `{email}`
    * valid email
    * was registered before
* `{password}` — current user password
* `{user_name}` — registered user name for `{email}`

User logout test case

# It should do user logout:

## Before

1. Open https://demo.realworld.io/
2. Repeat 2-9 from [login user](login_user.md)

## Logout user

3. Click **Settings** item in app header menu
4. Page title should be **Your Settings**
5. Click **Logout** button in page bottom
6. Header should not contains `{user_name}`

# Where:

* `{user_name}` — name logged-in user


# Use able to creat new article

## Before
1.   Open   https://demo.realworld.io/
2. User has to log in
3. Click on the ***New Article*** link
4. Input title of article
5. Input **' What's this article about? '**
6. `" Write your article (in markdown) "`
7. Enter **tag**
8. Click on Publish article
