# Practical4_Connecting_Tiktok_Frontend_To_Server

This practical is a complete integration guide for connecting the Next.js TikTok frontend with the Express.js backend, implementing authentication, video feeds, and social features.

## Project Overview

This practical connects the previously built TikTok frontend and backend applications, implementing:
- JWT-based user authentication
- Real-time video feed integration
- Social features (following, likes, comments)
- User discovery and profile management
- Video upload functionality

## Features Implemented

- User registration and login with JWT tokens
- Protected routes and authentication state management
- Real video data fetching from backend API
- Like/unlike video functionality
- Comment system integration
- Follow/unfollow user functionality
- Personalized "Following" feed
- User discovery page
- Dynamic user profiles
- Video upload with metadata

## Prerequisites

- Completed TikTok frontend (Next.js)
- Completed TikTok backend (Express.js)
- Node.js and npm installed
- Backend server running on port 8000

## Setup Instructions

### Step 1: Install Required Packages
Install additional dependencies for API integration:
```bash
npm install axios jwt-decode react-hot-toast
```

### Step 2: Environment Configuration
Create `.env.local` in the project root:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Step 3: API Client Setup
Create `src/lib/api-config.js` for centralized API communication:
- Configures Axios with base URL and interceptors
- Handles authentication token attachment
- Manages API error responses
- Provides consistent request/response handling

### Step 4: Authentication Context
Create `src/contexts/authContext.jsx` for state management:
- Manages user authentication state globally
- Provides login/logout functionality
- Handles token storage and retrieval
- Offers user data access throughout the app

Update `src/app/layout.js` to wrap the app with AuthProvider.

### Step 5: Authentication UI Components

#### Modal Component
Create `src/components/ui/Modal.jsx`:
- Reusable modal for authentication forms
- Handles backdrop clicks and escape key
- Provides clean popup interface

#### Authentication Forms
Create `src/components/auth/AuthForms.jsx`:
- Login and registration form components
- Form validation and error handling
- Integration with authentication context

#### Auth Modal
Create `src/components/auth/AuthModal.jsx`:
- Combines modal and forms
- Manages form switching (login/register)
- Handles authentication flow

### Step 6: Update Main Layout
Modify `src/components/layout/MainLayout.jsx`:
- Add conditional login/logout buttons
- Show user-specific navigation
- Handle authentication state changes
- Protect certain navigation items

## Service Layer Implementation

### Video Service
Create `src/services/videoService.js`:
- Fetch videos from backend API
- Handle video interactions (like/unlike)
- Manage comment operations
- Process video upload requests

### User Service
Create `src/services/userService.js`:
- User profile management
- Follow/unfollow functionality
- User discovery and search
- Profile data retrieval

## Component Updates

### VideoCard Component
Update `src/components/ui/VideoCard.jsx`:
- Display real user and video data
- Implement like/unlike functionality
- Add comment interaction
- Handle video playback controls

### VideoFeed Component
Update `src/components/ui/VideoFeed.jsx`:
- Fetch videos from backend
- Handle loading and error states
- Support different feed types (For You, Following)
- Implement infinite scroll or pagination

## Page Implementation

### Following Feed
Create `src/app/following/page.jsx`:
- Display videos from followed users only
- Handle empty state when not following anyone
- Provide seamless navigation between feeds

### User Discovery
Create `src/app/explore-users/page.jsx`:
- Show list of users to discover
- Implement follow/unfollow buttons
- Display user statistics and preview content

### Dynamic Profile Pages
Create `src/app/profile/[userId]/page.jsx`:
- Display user profile information
- Show user's uploaded videos
- Handle follow/unfollow actions
- Support both own profile and other users

### Video Upload
Update `src/app/upload/page.jsx`:
- Form for video upload with metadata
- File validation and preview
- Integration with backend upload API
- Success/error handling

## Authentication Flow

### Registration Process
1. User fills registration form
2. Frontend validates input data
3. API call to backend registration endpoint
4. JWT token received and stored
5. User redirected to main feed

### Login Process
1. User enters credentials
2. Frontend validates form
3. API call to backend login endpoint
4. JWT token stored in localStorage
5. Authentication context updated

### Protected Routes
- Upload page requires authentication
- Profile editing requires authentication
- Following feed requires authentication
- Automatic redirect to login for protected routes

## API Integration Points

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Video Endpoints
- `GET /api/videos` - Fetch video feed
- `GET /api/videos/following` - Get following feed
- `POST /api/videos/:id/like` - Like/unlike video
- `POST /api/videos` - Upload new video

### User Endpoints
- `GET /api/users` - Get all users for discovery
- `GET /api/users/:id` - Get specific user profile
- `POST /api/users/:id/follow` - Follow/unfollow user
- `GET /api/users/:id/videos` - Get user's videos

### Comment Endpoints
- `GET /api/videos/:id/comments` - Get video comments
- `POST /api/comments` - Add new comment

## Testing Guide

### Authentication Testing
1. Register new user accounts (2-3 different users)
2. Test login/logout functionality
3. Verify protected route access
4. Check token persistence across browser sessions

### Video Feed Testing
1. Upload videos with different accounts
2. Verify videos appear in main feed
3. Test video playback and controls
4. Check like/unlike functionality

### Social Features Testing
1. Follow/unfollow users from discovery page
2. Verify following feed shows correct content
3. Test user profile pages
4. Check comment functionality

### Upload Testing
1. Test video upload with metadata
2. Verify file validation works
3. Check upload progress and success states
4. Confirm uploaded videos appear in feed

## Error Handling

### API Errors
- Network connection failures
- Authentication token expiration
- Server validation errors
- File upload failures

### User Experience
- Loading states during API calls
- Error messages for failed operations
- Success notifications for completed actions
- Graceful fallbacks for missing data

## Security Considerations

### Token Management
- JWT tokens stored securely in localStorage
- Automatic token refresh on API calls
- Token removal on logout
- Protected route authentication checks

### Input Validation
- Client-side form validation
- Server-side validation backup
- File type and size restrictions
- XSS prevention in user content

## Performance Optimizations

### API Efficiency
- Request caching where appropriate
- Optimistic UI updates for likes
- Lazy loading for video content
- Pagination for large data sets

### User Experience
- Loading skeletons during data fetch
- Smooth transitions between states
- Responsive design for all devices
- Fast navigation between pages

## Troubleshooting Common Issues

### Connection Problems
- Verify backend server is running
- Check API URL in environment variables
- Confirm CORS settings on backend
- Test API endpoints directly

### Authentication Issues
- Clear localStorage and retry
- Check token format and expiration
- Verify backend authentication middleware
- Test with fresh user registration

### Video Playback Problems
- Check video file formats supported
- Verify video URLs are accessible
- Test with different video files
- Check browser compatibility

## Future Enhancements

### Advanced Features
- Real-time notifications
- Video recommendations algorithm
- Advanced search and filtering
- Video editing capabilities

### Performance Improvements
- CDN integration for video delivery
- Image optimization and lazy loading
- Service worker for offline functionality
- Database query optimization

### Social Features
- Direct messaging between users
- Video sharing to external platforms
- User verification system
- Content moderation tools