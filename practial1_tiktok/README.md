# Practical1_TikTok Clone

A TikTok-inspired web application built with Next.js, React, and Tailwind CSS featuring video feeds, user authentication, and responsive design.

## Features

- Modern web interface similar to TikTok's desktop version
- Sidebar navigation with multiple pages (For You, Following, Explore, Live)
- Video feed with placeholder content
- User authentication (Login/Signup forms)
- Profile and upload pages
- Responsive design with Tailwind CSS
- Form validation using React Hook Form

## Technologies Used

- **Next.js 14** - Makes React websites faster and easier
- **React** - JavaScript library for building websites
- **Tailwind CSS** - Makes styling websites much easier
- **React Hook Form** - Helps handle forms and check if inputs are correct
- **React Icons** - Gives us nice looking icons

## How to Set Up This Project

### What You Need First
- Node.js (version 14 or newer)
- npm (comes with Node.js)

### Step 1: Get the Code
```bash
git clone <your-repository-url>
cd <your-project-directory>
```

### Step 2: Make a New Next.js Project
```bash
npx create-next-app@latest
```

Configuration options:
- Do you want TypeScript? → No
- Do you want ESLint? → Yes
- Do you want Tailwind CSS? → Yes
- Do you want src/ folder? → Yes
- Do you want App Router? → Yes
- Do you want custom import alias? → No

### Step 3: Add More Packages
```bash
npm install react-icons react-hook-form
```

### Step 4: Project Structure
Create the following directory structure:
```
src/
├── app/
│   ├── explore/
│   ├── following/
│   ├── live/
│   ├── login/
│   ├── profile/
│   ├── signup/
│   └── upload/
├── components/
│   ├── layout/
│   └── ui/
└── lib/
```

### Step 5: Start the Website
```bash
npm run dev
```

Go to `http://localhost:3000` to see your website.

## How the Project is Organized

### Main Parts

#### MainLayout.jsx
- The main layout that shows on every page
- Has the side menu and top bar
- Works on phones and computers

#### VideoCard.jsx
- Shows one video with fake content
- Has buttons for like, comment, and share
- Shows who posted the video

#### VideoFeed.jsx
- Shows many video cards together
- Like TikTok's main page with lots of videos

### Different Pages

#### Home Page (/)
- Main page that shows videos
- Like TikTok's "For You" page

#### Login and Signup Pages
- **/login** - Where people log in
- **/signup** - Where new people make accounts

#### Other Pages
- **/following** - Videos from people you follow
- **/explore** - Find new videos and people
- **/live** - Live streaming videos
- **/profile** - Your profile page
- **/upload** - Upload new videos

## How Forms Work and Check for Mistakes

The login and signup forms check if you typed things correctly:

### Login Form Checks
- Makes sure email looks like a real email
- Password must be at least 8 letters long
- All boxes must be filled out

### Signup Form Checks
- Email must look real (like name@email.com)
- Password must be strong enough
- Both password boxes must match
- Must agree to terms and conditions
- Username cannot be empty

### What Happens When You Make Mistakes
- Shows red text under boxes with mistakes
- Shows loading spinner when submitting
- Shows success or error messages
- Stops you from clicking submit twice

## Important Features 

### Moving Around the Website
- Side menu that shows which page you are on
- Menu that works on phones
- Search box at the top

### Video Display
- Cards that show video information
- Buttons to like, comment, and share
- Follow and unfollow buttons
- Shows how many people watched

### Login System
- Forms that check your typing
- Shows errors if you make mistakes
- Shows loading while processing
- Works on phones and computers

## How We Made It Look Good

We used Tailwind CSS:
- Works on phones, tablets, and computers
- Can switch to dark mode
- Buttons change when you hover over them
- Mobile phones see it first, then bigger screens

## Important Programming Ideas

### How Forms Work
- **register**: Connects form boxes to checking system
- **handleSubmit**: Handles when you click submit
- **watch**: Watches what you type in real time
- **errors**: Keeps track of mistakes

### How We Check for Mistakes
- Email pattern: Makes sure email looks right
- Password rules: Must be 8 letters or more
- Custom checking: Makes sure passwords match

## Future Enhancements

- Connect to a real database
- Upload and play real videos
- Real login system with passwords
- Save user information
- Real comments and likes
- Push notifications to phones
- Video editing tools

## Resources

- [Learn React](https://legacy.reactjs.org/docs)
- [Learn Next.js](https://nextjs.org/docs)
- [Learn Tailwind CSS](https://tailwindcss.com/docs)
- [Learn React Hook Form](https://react-hook-form.com/)
- [Get Icons](https://react-icons.github.io/react-icons/)