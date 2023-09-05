# Socket-Grocery-Store
Hello, Welcome To The Official Documentation Of My Socket-Grocey-Store.
## Front-End
- **Language/Library Used:** CSS(SASS)/JavaScript/ReactJS 
- [Click To Visit](https://socket-sg3220.vercel.app/Home)

## Back-End
-  **Language/Environment/Library/Framework Used:** Javascript, NodeJS, ExpressJS
- **Database Used:** MongoDB(NoSQL)
- [Click To Visit Backend Server](https://socketstorebackend.onrender.com)

## REST-API

### User Routes:

> **# Server Status:** <br>
> **GET:** `/API/V1`

<BR>

> **# Create A New User:**
>**POST:** `API/V1/Users/SignUp`
>JSON To Be Send:
>`{`
	`"vName":"Siddharth Ghosh",`
	`"vEmail":"sg@gmail.com",`
	`"vPassword":"old-235-Password",`
	`"vPasswordConfirm":"old-235-Password;`
`}`

<BR>

> **# LogIn An Existing User:** 
> **POST:** `API/V1/Users/LogIn`
>JSON To Be Send:
>`{`
	`"vEmail":"sg@gmail.com",`
	`"vPassword":"old-235-Password",`
`}`

<BR>

> **# LogOut A User:** 
>**GET:** `API/V1/Users/LogOut`

<BR>

> **# Forgot Password:** 
> **POST:** `API/V1/Users/ForgotPassword`
>JSON To Be Send:
>`{`
	`"vEmail":"sg@gmail.com",`
  `}`

<BR>

> **# Reset Password:** 
> **PATCH:** `API/V1/Users/UpdatePassword/{resetPasswordToken}`
>JSON To Be Send:
>`{`
	`"vPassword":"new-235-Password",`
	`"vPasswordConfirm":"new-235-Password",`
  `}`

<BR>

> **# Update Password:** 
> **PATCH:** `API/V1/Users/UpdatePassword`
>JSON To Be Send:
>`{`
	`"vCurrentPassword":"old-235-Password",`
	`"vNewPassword":"new-235-Password",`
	`"vNewPasswordConfirm":"new-235-Password",`
  `}`
  
<BR>

### Product Routes:

> **# See All Products:**
>**GET:** `API/V1/Products`

<BR>

> **# See One Product:** 
> **GET:** `API/V1/Products/{productID}`

<BR>

> **# Delete One Product:** 
> **DEL:** `API/V1/Products/{productID}`

<BR>

> **# Add One Product:** 
> **POST:** `API/V1/Products/PostProduct`
>JSON To Be Send:
>	`{`
	`"vManufacturerName":"Amul",`
	`"vProductName":"Cheese",`
	`"vPrice":132,`
	`"vQunatity":200,`
	`"vUnit":"g",`
	`"vFrontImage":  	"https://res.cloudinary.com/djywrhroe/image/upload/v169370027	9/Amul-Pure-Milk-Cheese-Slices-01_ixonuk.avif",`
	`"vBackImage":  	"https://res.cloudinary.com/djywrhroe/image/upload/v169370028	2/Amul-Pure-Milk-Cheese-Slices-02_c50wi3.avif",`
	`"vSellerName":  "Ghosh Retails Private Limited",`
	`"vCountryOfOrigin":"India",`
	`"vShelfLife":180`
	`}`

<BR>

> **# Update Product:** 
> **PATCH:** `API/V1/Users/Product/{productID}`
>JSON To Be Send:
>`{`
	`"vUnit":"mL",`
   `}`
