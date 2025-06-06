# Practical3_File_Upload_Implementation

A complete React application with advanced file upload functionality including drag and drop, progress tracking, and validation.

## Project Overview

This application demonstrates modern file upload techniques with:
- Multipart form data handling
- File type and size validation
- Real-time upload progress tracking
- Drag and drop interface
- React Hook Form integration

## Features

- Multiple file upload support
- Drag and drop file selection
- File type validation (images, documents, etc.)
- File size validation with customizable limits
- Upload progress bar with percentage
- Preview for uploaded images
- Error handling and user feedback
- Responsive design

## Technologies Used

- **Next.js** - React framework with API routes
- **React Hook Form** - Form handling and validation
- **React Dropzone** - Drag and drop file interface
- **Formidable** - Server-side file parsing
- **Axios** - HTTP client for upload requests

## Setup Instructions

### Step 1: Create Project
Initialize a new Next.js project:
```bash
npx create-next-app file-upload
cd file-upload
```

### Step 2: Install Dependencies
Install required packages:
```bash
npm install react-hook-form formidable axios react-dropzone
```

### Step 3: Project Structure
Create the following structure:
```
file-upload/
├── pages/
│   ├── api/
│   │   └── upload.js
│   └── index.js
├── components/
│   ├── FileUpload.js
│   └── ProgressBar.js
├── styles/
│   └── globals.css
└── public/
    └── uploads/
```

## Implementation Guide

### Basic File Upload Form

Create `pages/index.js` with React Hook Form integration:

Key features implemented:
- Form validation with React Hook Form
- File input handling
- Basic upload functionality
- Error message display

### API Route for File Handling

Create `pages/api/upload.js` for server-side processing:

Features included:
- Multipart form data parsing with Formidable
- File type validation
- File size limits
- Secure file storage
- Error handling

### File Validation Implementation

Validation rules applied:
- **File Types**: Images (jpg, png, gif), Documents (pdf, doc, docx)
- **File Size**: Maximum 5MB per file
- **File Count**: Maximum 5 files per upload
- **Required Fields**: At least one file must be selected

### Progress Tracking

Upload progress implementation:
- Real-time progress updates using Axios
- Progress bar component
- Percentage display
- Upload status indicators

### Drag and Drop Interface

React Dropzone integration:
- Drag and drop zone
- Visual feedback for drag states
- File preview functionality
- Multiple file selection

## Usage Instructions

### Basic File Upload
1. Click "Choose Files" or drag files to the drop zone
2. Select one or more files (up to 5 files, 5MB each)
3. Files will be validated automatically
4. Click "Upload Files" to start the upload process
5. Monitor progress with the progress bar

### Drag and Drop
1. Drag files from your computer
2. Drop them onto the designated drop zone
3. Files will be added to the upload queue
4. Review selected files before uploading

### File Validation
- Only allowed file types will be accepted
- Files exceeding size limits will be rejected
- Error messages will display for invalid files
- Valid files will show preview thumbnails

## File Validation Rules

### Accepted File Types
- **Images**: .jpg, .jpeg, .png, .gif, .webp
- **Documents**: .pdf, .doc, .docx, .txt
- **Archives**: .zip, .rar

### Size Limitations
- Maximum file size: 5MB per file
- Maximum total upload: 25MB
- Maximum number of files: 5 per upload

### Security Measures
- File type validation on both client and server
- Filename sanitization
- Upload directory restrictions
- File content verification

## Component Structure

### FileUpload Component
Main upload interface with:
- File selection area
- Drag and drop zone
- File list display
- Upload controls

### ProgressBar Component
Progress tracking with:
- Visual progress indicator
- Percentage display
- Upload status messages
- Cancel upload option

### FilePreview Component
File preview functionality:
- Image thumbnails
- File information display
- Remove file option
- File type icons

## API Endpoints

### POST /api/upload
Upload files to the server:
- **Request**: Multipart form data
- **Response**: Upload status and file information
- **Validation**: File type and size checking
- **Storage**: Files saved to public/uploads directory

## Error Handling

### Client-Side Errors
- File type validation errors
- File size limit errors
- Network connection errors
- Upload timeout errors

### Server-Side Errors
- File parsing errors
- Storage permission errors
- Disk space errors
- Security validation errors

## Testing the Application

### Test File Upload
1. Start the development server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Test with various file types and sizes
4. Verify validation messages appear correctly

### Test Drag and Drop
1. Drag files from file explorer
2. Drop onto the upload zone
3. Verify files are added to the queue
4. Test with multiple files simultaneously

### Test Progress Tracking
1. Upload larger files to see progress
2. Verify progress bar updates correctly
3. Test upload cancellation
4. Check final upload status

### Test Validation
1. Try uploading unsupported file types
2. Test files exceeding size limits
3. Upload more than the maximum allowed files
4. Verify appropriate error messages

## Common Issues and Solutions

### File Upload Fails
- Check file size and type restrictions
- Verify server has write permissions
- Ensure upload directory exists
- Check network connectivity

### Progress Not Updating
- Verify Axios configuration
- Check for JavaScript errors
- Ensure progress event handlers are attached
- Test with different file sizes

### Drag and Drop Not Working
- Check browser compatibility
- Verify React Dropzone configuration
- Test with different file types
- Check for CSS conflicts

## Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Security Considerations
- File type validation on server
- Filename sanitization
- Upload size limits
- Directory traversal prevention
- Virus scanning (recommended for production)

## Future Enhancements
- Cloud storage integration (AWS S3, Google Cloud)
- Image resizing and optimization
- Bulk file operations
- Upload resume functionality
- Real-time upload notifications
- File sharing capabilities