## Clearhead Homework

#### Problem
- Subtle cue in shopping cart displayed in the top right is the only indication that there are items in the cart
- Vitamix is having a high rate of cart abandonment

#### Solution
- When user returns, a modal should pop up after 3 seconds of landing on the page, which displays one random item in their current cart and have a CTA button to view the cart
- Modal takes over the page and forces user to engage. User can either read and take action, or close the window

#### Modal Requirements

- [X] It should read "Welcome Back! You left something in your cart. Check out today!"
- [X] Item from cart should be displayed with an image, name, and information about the Item
- [X] Item in cart can be found on Shopping Cart Page
- [X] Item's name and picture will link back to the item's PDP (Product Detail Page)
- [X] Item's name has a hover state, turning blue and underlined
- [X] If the cart has 2+ items, there should be a small line of text beneath item that displays "Showing 1 of X"
- [X] CTA in Modal should display "View Cart" with a blue hover state consistent with the other blue buttons
- [X] User can close modal by clicking anywhere outside or with the X on the top right

#### Hints
- How can I **get** and parse cart page HTML from the homepage?
- How do you **get** the items in cart when not on cart page?

#### Questions and Issues
- Noticed there is no HTML file listed.
- Downloaded files from their site, put this in a separate folder to look over
- Created index.html and main.css but reviewing jQuery. I'm sure everything can be done within variation.js
- How do I inject a local js file on a live site to test? Using the **Custom Javascript** extension for Chrome
- Review CSS in jQuery. Having issues applying css to the modal class.
  - Got it working by appending first and then applying styles
- Dev specs are requesting a font size that won't fit everything within the modal container
  - Tried dividing each font size by 2, too small
  - Divided by 1.5, seems to all fit so far
  - Using Pixel Perfect extension instead, took screenshot, kept 425x425 dimensions, edited the rest to fit with original image
- Modal overlay is overriding styles. This was a syntax issue, fixed.
- Added hovers though jquery but once it's hovered on, it stays that color.
  - Read through jQuery docs, `.hover()` accepts two arguments, one for `handlerIn`, other for `handlerOut`
- Sometimes when the Quantity loads, an input is displayed instead with the qty.
  - If Quantity is 2, it returns 2, if Quantity is 1, it returns the input box instead
  - Created helper function that returns number if equal/greater than 2, else, return 1
- Was using `font: ` for css selection and realized fonts were not being applied. Using `font-family:` instead. Noticing that some of the fonts don't match the image from dev specs but I'm going to follow the dev specs font choices instead.
- Had issue with applying hover state colors to Product Name. Used  `.children()` on class to overcome problem.
- Whenever there is 1 item in the cart, I get an "undefined" message.
  - Fixed by returning an empty span if there is 1 item
  - Also added a -20px to the margin bottom of this message to keep the CTA button 33px from the bottom


#### Steps
- [X] Do a Get Request on shopping cart page
- [X] Find shopping cart item
- [X] Create Modal
- [X] Create Overlay
- [X] Set timer, 3 seconds and run only if there's an item in the cart
- [X] Add styles to each element
- [X] Create close Modal functionality when clicked outside and on X
- [X] Add hovers to product title and CTA button
- [X] Plug in item data
- [X] Make sure [View Cart] takes user to shopping cart page
- [X] Add message for "if cart has 2+ items" requirement

#### Code Review, Feedback
- The anonymous functions, click handlers, could be wrapped up within one function instead
- CSS can be written as a string and then imported
- How do I make sure code doesn't interfere with someone else's?
  - By using a prefix for classes. `class="x-close"` should be `class="ch_x-close"`
  - Added prefix to all variables as well
228 lines so far



## Developer Candidate Homework

At Clearhead we create experiences for our clients and run those experiences as A/B experiments (against the control, i.e. current experience) to collect data on how each variation performed.
We use third-party JavaScript to accomplish this.
The goal of this assignment is to write the code to show a new experience on the page.
The idea is to spend no more than a few hours on this. It is okay if you don't finish.

## Instructions

1. Clone this repo (don't fork it!) and run `npm install`. You will need to have Gulp installed globally (`npm install -g gulp`). Just ask if you have questions about getting those tools installed.
2. Create a working branch of this repo called `working`.
3. Review the [design notes](https://docs.google.com/document/d/1bzc8tQQk-nkNn9Jx6UZ3bkDXcb0bISN32j2Yf4s0MmI/edit?usp=sharing) and [dev specs](https://drive.google.com/file/d/0Bw1mrXgtCwGFNk51ODFCTzI1N00/view).
4. Build the variation.
  - Write your code in `src/variation.js`.
  - You're welcome to use any libraries that exist on the site.
  - Feel free to use ES5 or ES6.
  - Only code for Chrome. If the code works when pasted into Chrome console, you should be good to go. Cross-browser support is important at Clearhead, but we also don't want this homework to take too long!
  - You can make your code modular by using CommonJS modules.
  - Run `gulp` in the command line to build the code in `src/variation.js` and output the result to `dist/variation.js`. This will do the following:
    - Transpile your code to ES5 if you have chosen to use ES6.
    - Browserify your code (files that you `require` or `import` in `variation.js` will be bundled together).
    - Browserify wraps your code in an immediately invoked function expression (so don't worry about starting your code with a semicolon and IIFE). The build tool takes care of all that ;-).
    - Output the variation code to `dist/variation.js`.
    - Note: There is no linting task. We don't expect you to know / conform to our linting standards. Feel free to add a linter if you wish (but it's not necessary for this assignment as long as your code is clean and readable).
5. Take notes along the way on your approach, problems, thoughts, etc., and add them to this README.
6. Feel free to ask any questions you need to as you work through the assignment. Just email case@clearhead.me.
7. Submit a pull request to the master branch of this repo and email case@clearhead.me.
