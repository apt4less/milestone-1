# milestone1


# Table of Contents
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)
4. [Schema](#Schema)

 # Overview

## Description
Apartments4Less is a website that shows opportunities for undergraduates and graduates to have housing . We demonstrate a way for college students to easily find cheap apartments around Tallahassee, especially for students who wished to live off campus. This website also provides links for current scholarships for individuals who can’t afford to pay rent or deposit for an apartment. This is a great way for students to spend less time and effort looking for an apartment all while dealing with their school work and personal lives. 

## App Evaluation

- Category: Housing
- Story: Analyzes users housing request and display scholarship opportunities
- Market: Any student looking for housing and scholarships.
- Habit: This app could be used as-needed by the user depending on when they're looking for new housing or scholarship opportunities.
- Scope: First we would start with finding affordable housing that will accommodate student needs, then find scholarship opportunities. This has potential for use by colleges/ universities nearby and being posted on the institution website.

# Product Spec
## **1. User stories(Required and Optional)**

**Required**

- User has access to local affordably apartments and their contact information
- Profile pages for each user
- Access to “About Us” page 
- User can also find links to scholarships 

**Optional**
- User can favorite apartments of interest to save for
later looks
- Search filtering for a specific apartment type

## **2. Screens**

**Login**
**Sign up**
 - Gives users the ability to access previous apartments of interest and/or scholarships of interest (optional)

**Home** 
- Banner and words of encouragement to pursuade graduates and undergraduates located in tallahassee to sign up for the site. Give an overview of what APT4LESS is for. 
 
**Scholarships** 
- List of current scholarships to further assist the student with rent. 

**Offer**
- Users can set price, bed number, zip code, pets, roommates to filter the apartment of their choice located in tallahassee. 
- Given list of affordable apartments, contact information, and links to apartment site.
- Users are able to save the apartment of their choice. 

**About Us**
- Explain to users how APT4LESS started. Creators of APT4LESS are also display with a picture and short bio. 

**Profile**
- Allow user to change their personal information.
- Display their favorite apartments on the side to help users keep track of which apartment they are interested in. 

## **3. Navigation**
Tab Navigation (Without an account)
- Home 
- About Us
- Sign Up/Login (Optional)
Tab Navigation (After Signing up) 
- Home 
- About Us 
- Scholarships
- Offer
- Profile
## **Flow Navigation** 
- Home--->encourage users to sign up to get better benefit. 
- About us---->introducing users to creators and reasons behind APT4LESS. 
- Sign Up/Login-->force login or sign up to get better opportunities on the site (Scholarships & Offer)--->Profile
- Profile- Text field to be modified
- Scholarships--->scholarships links to encourage users to apply for scholarships to help with rent--->another tab to scholarships site.
- Offer--->Apartment search based on zip code, price, bedrooms, pets ------>filter apartment based on answers------>another tab to take users to apartments site.


# Wireframes

![img1](https://user-images.githubusercontent.com/60937532/155229259-3e5f386c-385f-4003-a81a-58cb44c20627.jpg)



### Digital Wireframes & Mockups

![img3](https://user-images.githubusercontent.com/60937532/155231683-7f18e8b7-74bb-42c7-a9f9-e83eda447566.png)
![img2](https://user-images.githubusercontent.com/60937532/155231698-ecd063f7-3517-4d36-a26e-57995ab87ab1.png)
![img4](https://user-images.githubusercontent.com/60937532/155231991-57d53e3e-848c-4c2f-9e55-8843689e2835.png)
![img5](https://user-images.githubusercontent.com/60937532/155231995-682b4cb9-8d01-4e26-94aa-da0a3d3fde84.png)
![img6](https://user-images.githubusercontent.com/60937532/155232008-1d82d1bc-16c1-4843-b737-1202c7aa6a8c.png)
![img7](https://user-images.githubusercontent.com/60937532/155232012-6ce62732-7f1c-4f8e-8c3a-e11dbb0a6f2d.png)
![img8](https://user-images.githubusercontent.com/60937532/155232018-57038df4-2e59-4dab-9616-89ba2f6b0b34.png)
![Interactive_Wireframe](https://user-images.githubusercontent.com/71302450/155245992-dfa04131-ce60-4bbc-86b4-600c44aa9380.gif)

# Schema

## Models

### Login

| Property    |  Type      |  Description   |
|-------------|------------|----------------|
| Username  |  Varchar  | Unique id for user login |
| Password  |  Hashed string |  User unique Password to login  |
| Reset User/Pass | Pointer to reset pass/user | Email entry for verification/reset pass/user |



### Sign-Up

| Property    |  Type      |  Description   |
|-------------|------------|----------------|
| Username  |  Varchar  | Unique id for user login |
| Password  |  Hashed string |  User unique Password to login  |
| name | string  |  Full name to be display on profile |
| email  | varchar  |  user choice of contact  |

### Offer

| Property    |  Type      |  Description   |
|-------------|------------|----------------|
| Zip code | int | Unique ID for Apartment in tallahassee |
| contact | string | Apartment phone number |
 | Property Name(URL) | varchar | Link to property website if available.
 | Email | varchar | Apartment email|
 | price | int | User input rent range |
 | Available beds | int | User input amount of bedrooms |
 | pets | bool | User input(yes/no) for pets |
 | roommates | bool | User input for sharing common area (yes/no) |
 | favoriteCount | number | Keep track of all user save appartments |
 | favoriteDelete | number | Keep track of all user unsave apartments |





## Networking

### List of network requests by screen

### Profile/ Login-
- (Read/GET) Query logged in user object
- (Post) user name, email, and phone from login/sign up
- (Update) Update user profile image/username, password, or contact info.
- (Post) retrieve saved apartment, if any,  from offer page and post on profile page
### SignUp-
- (Create) New user login
### Offers-
- (Read/ Get) Retrieve apartment listing in Tallahassee based on user choice of zip code, beds, roommates, pets.
- (Get) Retrieve Apartment phone number, email, and url.
- (Delete) Unsave favorite apartment. 



### Existing API Endpoints

**Housing anywhere API**

url: https://rapidapi.com/apimaker/api/zillow-com1/

| HTTP VERB | ENDPOINT  | DESCRIPTION |
|-----------|-----------|-------------|
 | Get  | /propertyExtendedSearch | Search property by params.|
 | Get | /property | Property details.|
 | Get | /propertyByCoordinates | Search the property by coordinates.|
 | Get | /similarProperty | Get similar properties for rent |
 | Get | /locationSuggestions | Search a region by name. |
 | Get | /rentEstimate | For more accuracy use beds and baths parameters. Rent estimates and comparable rentals.|



**Realty Mole Property API**

url: https://rapidapi.com/realtymole/api/realty-mole-property-api/
 | HTTP VERB |  ENDPOINT  | DESCRIPTION | 
 |----|----|-----|
 | Get | /SalePriceEstimate |  rent price estimate along with comparable properties. | 
 | Get | SaleListings |  Search for rent listings for specific properties or a list of properties based on your criteria| 
 | Get | /RandomAddresses | ist of random addresses and corresponding property data. | 
 | Get | /ZipCodeRental Data | Returns rental data for a specified zip code like the average rent by zip code, the number of rentals seen in that zip code | 







## Progess



![Progress](https://user-images.githubusercontent.com/77120192/157366398-8d910f15-2c5e-4580-9243-2d124540d9f1.gif)
