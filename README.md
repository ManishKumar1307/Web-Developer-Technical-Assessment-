# Next.js / TypeScript Developer Assessment

A modern web application demonstrating React, TypeScript, API integration, and best development practices.

## Project Overview

This is a technical assessment project built to showcase proficiency in modern web development. The application consists of two main pages:

1. **Home Page**: Features a hero section and displays posts fetched from an external API
2. **Contact Form Page**: Interactive form with validation and API submission

## Technologies Used

- **Next.js 16.0.10**: React framework for server-side rendering, routing, and optimized   builds
- **React 19.2.1**: Frontend library for building user interfaces
- **TypeScript 5.x**: For type-safe code
- **Tailwind CSS 4.x**: Utility-first CSS framework
- **Lucide React 0.561.0**: Modern icon library
- **ESLint 9 + eslint-config-next**: Code linting and best practices enforcement


## 🔌 API Integration

This project uses the **JSONPlaceholder API** for demonstration purposes:

- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Endpoints Used**:
  - `GET /posts?_limit=5` - Fetch 5 posts for the home page
  - `POST /posts` - Submit form data

## ✨ Features

### Main Page (Home)
- Hero section with clear headline and call-to-action
- Displays 5 posts fetched from API
- Loading state with spinner animation
- Error handling with retry functionality
- Responsive card layout
- Navigation to contact form

### Form Page
- Full Name, Email, and Message fields
- Real-time form validation
- Email format validation using regex
- inimum length validations
- Form data logged to console
- POST request to API
- Success message after submission
- No page refresh on submit
- Form reset after successful submission

## UI/UX Features

- Clean and modern design
- Fully responsive layout
- Smooth transitions and animations
- Loading indicators
- Error states with retry options
- Success feedback messages
- Accessible form labels
- Focus states for better keyboard navigation

## 📦 Project Structure

```
/src
  /app
   page.tsx  # Home page

   /form
    page.tsx # contact form page

   /components

   types.ts                #TypeScript 
```

## How to Run Locally

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The application will be available at `http://localhost:3000` (or the port shown in terminal)

5. **View console logs**
   - Open browser DevTools (F12 or Cmd+Option+I)
   - Go to Console tab
   - Submit the form to see logged data

## 🧪 Testing the Application

### Home Page
1. Visit the home page
2. Observe the loading state
3. Verify 5 posts are displayed
4. Check responsive layout on different screen sizes
5. Click "Go to Contact Form" button

### Form Page
1. Navigate to `/form`
2. Try submitting empty form (validation should prevent it)
3. Enter invalid email (validation error should appear)
4. Enter valid data:
   - Full Name: Your Name
   - Email: test@example.com
   - Message: This is a test message with more than 10 characters
5. Click "Submit Message"
6. Check console for logged data
7. Verify success message appears
8. Confirm form is reset

## Code Quality

- TypeScript for type safety
- Semantic HTML5 elements
- Component-based architecture
- Reusable components
- Proper error handling
- Loading states
- Form validation
- Clean code organization
- Meaningful variable names
- Comments where needed

##  API Response Handling

The application properly handles:
- Loading states (spinner animation)
- Success states (data display)
- Error states (error message with retry)
- Network failures
- API response validation

## Assessment Criteria Met

React component architecture and state management
TypeScript usage and type safety
API consumption and data handling
Form handling and validation
Code organization and readability
Responsive design
Loading and error states
No page refresh on form submit
Console logging
Success feedback

## Bonus Features Implemented

- Form validation (email regex, minimum lengths)
- Reusable components
- Better error handling and UI feedback
- Loading spinners
- Success animations
- Responsive design
- Clean, modern UI

## License

This is a technical assessment project created for demonstration purposes.

---


