# Socket-Grocery-Store
Hello, Welcome To The Official Documentation Of My Socket-Grocey-Store.
## Front-End
- **Language/Library Used:** CSS(SASS)/JavaScript/ReactJS 
- [Click To Visit](https://socket-sg3220.vercel.app/Home)

## Back-End
-  **Language/Framework Used:** Javascript, NodeJS, ExpressJS
- **Database Used:** MongoDB(NoSQL)
- [Click To Visit Backend Server](https://socketstorebackend.onrender.com)

## REST-API

### User Routes:

> **# Server Status:** <BR>
> **GET:** `/API/V1`

<BR>

> **# Create A New User:** <BR>
>**POST:** `API/V1/Users/SignUp` <BR>
>JSON To Be Send: <BR>
>`{` <BR>
	`"vName":"Siddharth Ghosh",` <BR>
	`"vEmail":"sg@gmail.com",` <BR>
	`"vPassword":"old-235-Password",` <BR>
	`"vPasswordConfirm":"old-235-Password;` <BR>
`}` <BR>

<BR>

> **# LogIn An Existing User:** <BR>
> **POST:** `API/V1/Users/LogIn` <BR>
>JSON To Be Send: <BR>
>`{` <BR>
	`"vEmail":"sg@gmail.com",` <BR>
	`"vPassword":"old-235-Password",` <BR>
`}` <BR>

<BR>

> **# LogOut A User:** <BR>
>**GET:** `API/V1/Users/LogOut` <BR>

<BR>

> **# Forgot Password:** <BR>
> **POST:** `API/V1/Users/ForgotPassword` <BR>
>JSON To Be Send: <BR>
>`{` <BR>
	`"vEmail":"sg@gmail.com",` <BR>
  `}` <BR>

<BR>

> **# Reset Password:** <BR>
> **PATCH:** `API/V1/Users/UpdatePassword/{resetPasswordToken}` <BR>
>JSON To Be Send: <BR>
>`{` <BR>
	`"vPassword":"new-235-Password",` <BR>
	`"vPasswordConfirm":"new-235-Password",` <BR>
  `}` <BR>

<BR>

> **# Update Password:** <BR>
> **PATCH:** `API/V1/Users/UpdatePassword` <BR>
>JSON To Be Send: <BR>
>`{` <BR>
	`"vCurrentPassword":"old-235-Password",` <BR>
	`"vNewPassword":"new-235-Password",` <BR>
	`"vNewPasswordConfirm":"new-235-Password",` <BR>
  `}` <BR>
  
<BR>

### Product Routes: <BR>

> **# See All Products:** <BR>
>**GET:** `API/V1/Products`<BR>

<BR>

> **# See One Product:** <BR>
> **GET:** `API/V1/Products/{productID}`<BR>

<BR>

> **# Delete One Product:** <BR>
> **DEL:** `API/V1/Products/{productID}` <BR>

<BR>

> **# Add One Product:** <BR>
> **POST:** `API/V1/Products/PostProduct` <BR>
>JSON To Be Send: <BR>
>	`{` <BR>
	`"vManufacturerName":"Amul",` <BR>
	`"vProductName":"Cheese",` <BR>
	`"vPrice":132,` <BR>
	`"vQunatity":200,` <BR>
	`"vUnit":"g",` <BR>
	`"vFrontImage":  	"https://res.cloudinary.com/djywrhroe/image/upload/v169370027	9/Amul-Pure-Milk-Cheese-Slices-01_ixonuk.avif",` <BR>
	`"vBackImage":  	"https://res.cloudinary.com/djywrhroe/image/upload/v169370028	2/Amul-Pure-Milk-Cheese-Slices-02_c50wi3.avif",` <BR>
	`"vSellerName":  "Ghosh Retails Private Limited",` <BR>
	`"vCountryOfOrigin":"India",` <BR>
	`"vShelfLife":180` <BR>
	`}` <BR>

<BR>

> **# Update Product:** <BR>
> **PATCH:** `API/V1/Users/Product/{productID}` <BR>
>JSON To Be Send: <BR>
>`{` <BR>
	`"vUnit":"mL",` <BR>
   `}` <BR>
