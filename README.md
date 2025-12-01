# 📚 CourseHive - Online Course Platform

A modern full-stack course-selling platform built with React, Node.js, Express, and MongoDB. CourseHive enables educators to create and manage courses while providing students with seamless course access, video/PDF lessons, and secure content delivery via AWS S3.

## 🌐 Live Link

🚀 **[CourseHive - Live Demo](https://npm-app.duckdns.org/)**

Experience the platform live with full functionality including course browsing, purchasing, and lesson management.

## 🔗 Important URLs

### Student Portal
- **Sign Up**: `https://npm-app.duckdns.org/signup`
- **Sign In**: `https://npm-app.duckdns.org/signin`
- **Dashboard**: `https://npm-app.duckdns.org/` (after login)

### Educator Portal
- **Sign Up**: `https://npm-app.duckdns.org/educatorsignup`
- **Sign In**: `https://npm-app.duckdns.org/educators`
- **Dashboard**: Access after login to create and manage courses

## 📋 Upcoming Features

- [ ] Enhanced analytics dashboard for educators (course views, revenue tracking)
- [ ] Course progress tracking for students (% completed, certificates)
- [ ] Course ratings and reviews system
- [x] Payment gateway integration (Razorpay)
- [ ] Email notifications for course updates and purchases

## ✨ Features

### For Students
- 🔐 **Secure Authentication** - JWT-based user authentication
- 🎓 **Course Browsing** - Explore available courses with detailed information
- 💳 **Secure Payment** - Razorpay integration with payment verification
- 📹 **Rich Content Access** - Watch video lessons and read PDF materials
- 🎯 **Personalized Dashboard** - Track purchased courses and progress

### For Educators
- 👨‍🏫 **Separate Educator Portal** - Dedicated sign-in and dashboard
- ➕ **Course Creation** - Create courses with metadata (name, price, level, duration, category)
- 🖼️ **Thumbnail Upload** - Upload course images via ImgBB integration
- 📊 **Course Management** - View and manage all created courses
- 📦 **Lesson Management** - Add, view, and delete video/PDF lessons
- 📤 **Direct S3 Upload** - Upload lessons directly to AWS S3 with presigned URLs
- ♻️ **Real-time Updates** - Lesson list updates instantly after add/delete operations
- 🗑️ **Smart Deletion** - Automatic cleanup of S3 files when lessons are deleted

### Technical Highlights
- ⚡ **Fast Development** - Vite + React with HMR
- 🎨 **Modern UI** - Material-UI (MUI) components with responsive design
- 🔒 **Secure Content** - Pre-signed S3 URLs with time-limited access (5 min expiry)
- 💰 **Payment Integration** - Razorpay with signature verification and webhook handling
- 🌐 **RESTful API** - Express backend with protected routes
- 🗄️ **MongoDB Atlas** - Cloud database with Mongoose ODM
- 🚀 **Cloud Storage** - AWS S3 for scalable video/PDF hosting
- 🐳 **Containerized** - Docker & Docker Compose for consistent deployments
- 🔐 **Security Best Practices** - Non-root containers, multi-stage builds, minimal attack surface

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite 7** - Lightning-fast build tool
- **Material-UI (MUI) 7** - Component library for polished UI
- **React Router Dom 7** - Client-side routing
- **ESLint** - Code linting and quality

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB + Mongoose** - Database and ODM
- **JWT** - Token-based authentication
- **AWS SDK v3** - S3 client for content delivery
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **Razorpay** - Payment gateway integration

### Cloud Services
- **AWS S3** - Video and PDF storage
- **MongoDB Atlas** - Managed MongoDB hosting
- **ImgBB** - Course thumbnail hosting

### DevOps & Containerization
- **Docker** - Container platform for consistent deployments
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and static file serving (in containers)

## 📁 Project Structure

```
Course-selling/
├── backend/
│   ├── controllers/
│   │   ├── auth.js           # JWT authentication middleware
│   │   ├── student.js        # Student auth & course operations
│   │   ├── educator.js       # Educator auth, course & lesson management
│   │   ├── addLesson.js      # Upload URL generation & lesson addition
│   │   ├── uploadUrl.js      # S3 presigned URL for uploads
│   │   ├── deleteFile.js     # S3 file deletion handler
│   │   ├── signedUrl.js      # S3 pre-signed URL generation for viewing
│   │   ├── imgUrl.js         # ImgBB image upload handler
│   │   └── payment.js        # Razorpay payment order creation & verification
│   ├── models/
│   │   └── model.js          # Mongoose schemas (User, Educator, Course, Lessons)
│   ├── routes/
│   │   └── routes.js         # Express route definitions
│   ├── util/
│   │   └── s3.js             # AWS S3 client configuration
│   ├── .env                  # Environment variables (not in Git)
│   ├── .dockerignore         # Docker ignore patterns
│   ├── .gitignore
│   ├── Dockerfile            # Backend container configuration
│   ├── example.env           # Environment template
│   ├── server.js             # Express app entry point
│   ├── package.json
│   └── LICENSE
├── src/
│   ├── components/
│   │   ├── Appbar/
│   │   │   ├── Appbar.jsx            # Public navigation bar
│   │   │   └── SigninnedAppbar.jsx   # Authenticated user nav bar
│   │   ├── CourseContent/
│   │   │   ├── CourseContent.jsx     # Main course viewer container
│   │   │   ├── SideBar.jsx           # Lesson list sidebar
│   │   │   ├── VideoPlayer.jsx       # Video lesson player
│   │   │   └── PdfViewer.jsx         # PDF lesson viewer
│   │   ├── EditContent/
│   │   │   ├── AddCourseContent.jsx  # Add lessons to courses
│   │   │   └── EduSideBar.jsx        # Educator lesson sidebar with delete
│   │   ├── Educator/
│   │   │   ├── EducatorsSignin.jsx   # Educator login
│   │   │   ├── EducatorSignup.jsx    # Educator registration
│   │   │   └── EduDashboard.jsx      # Educator course management
│   │   └── Student/
│   │       ├── Signin.jsx            # Student login
│   │       ├── Signup.jsx            # Student registration
│   │       ├── UserDashboard.jsx     # Student course dashboard
│   │       └── PurchaseCourse.jsx    # Course purchase page with Razorpay
│   ├── services/              # API service layer (empty)
│   ├── assets/                # Static assets (images, icons)
│   ├── App.jsx                # Main app with routing logic
│   ├── main.jsx               # React entry point
│   ├── App.css
│   └── index.css
├── public/
├── .env                       # Frontend environment variables (VITE_API_URL)
├── .dockerignore              # Docker ignore patterns
├── .gitignore
├── docker-compose.yml         # Multi-container orchestration
├── Dockerfile                 # Frontend container configuration
├── nginx.conf                 # Nginx reverse proxy configuration
├── vite.config.js
├── eslint.config.js
├── package.json
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (or local MongoDB)
- **AWS Account** with S3 bucket configured
- **ImgBB API Key** (for thumbnails)
- **Razorpay Account** (for payment integration)
- **Docker & Docker Compose** (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/a-y-a-n-das/coursehive.git
   cd Course-selling
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Configuration

#### Backend Environment Variables
Create `backend/.env`:
```env
PORT=5000
SECRET=your_jwt_secret_key_here
TOKEN=your_internal_api_token_here
BACKEND_URL=http://localhost:5000
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/Course-app
IMGBB_KEY=your_imgbb_api_key
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
S3_BUCKET_NAME=your_bucket_name
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

#### Frontend Environment Variables
Create `.env` in the root:
```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Running the Application

#### Development Mode (Traditional)

1. **Start the backend server** (from `backend/` folder):
   ```bash
   cd backend
   node server.js
   # or use nodemon for auto-restart:
   nodemon server.js
   ```

2. **Start the frontend dev server** (from root):
   ```bash
   npm run dev
   ```

3. **Access the app**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

#### Development Mode (Docker) 🐳

1. **Start all services with Docker Compose**:
   ```bash
   docker compose up -d
   ```

2. **Access the app**
   - Frontend: `http://localhost`
   - Backend API: `http://localhost:5000`

3. **View logs**:
   ```bash
   # All services
   docker compose logs -f
   
   # Specific service
   docker compose logs -f backend
   docker compose logs -f frontend
   ```

4. **Stop services**:
   ```bash
   docker compose down
   ```

#### Production Build

**Traditional:**
```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

**Docker:**
```bash
# Build images
docker compose build

# Run in production mode
docker compose up -d

# Or build and run together
docker compose up -d --build
```

## 🔑 API Endpoints

### Public Routes
- `POST /api/signup` - Student registration
- `POST /api/signin` - Student login
- `POST /api/educatorsignin` - Educator login
- `POST /api/educatorsignup` - Educator registration
- `POST /api/allCourses` - List all courses
- `POST /api/coursebyid` - Get course details by ID

### Protected Routes (Require JWT)
- `POST /api/courses` - Get user's purchased courses
- `POST /api/purchasecourse` - Purchase a course
- `POST /api/createcourse` - Create new course (Educators only)
- `GET /api/coursesbyeducator` - Get educator's courses
- `GET /api/coursecontent/:courseId` - Get course lessons (purchased users only)
- `GET /api/coursecontenteducator/:courseId` - Get educator's course lessons
- `GET /api/getvideourl/:courseId/:file` - Get pre-signed S3 URL for video/PDF
- `POST /api/uploadurl` - Get presigned URL for uploading lessons
- `POST /api/addlesson` - Add lesson to course
- `DELETE /api/deletelesson/:lessonId` - Delete lesson and S3 file

### Internal Routes (Backend-to-Backend)
- `POST /api/getuploadurl` - Generate S3 presigned URL (internal use)
- `DELETE /api/deletefile` - Delete file from S3 bucket (requires TOKEN)

## 🔐 Authentication Flow

1. User/Educator signs in → Backend generates JWT token
2. Token stored in `localStorage` (`token` for students, `edu-token` for educators)
3. Protected routes require `Authorization: Bearer <token>` header
4. Token verified via middleware before accessing resources
5. Session expires after 12 hours

## 🎥 Content Delivery

### Upload Flow
1. Educator creates a course
2. Navigates to "Add Lesson" page for that course
3. Fills in lesson title, selects type (video/PDF), and chooses file
4. Frontend requests presigned upload URL from backend (`/api/uploadurl`)
5. Backend generates presigned S3 URL and returns it along with filename
6. Frontend uploads file directly to S3 using presigned URL
7. After successful upload, frontend calls `/api/addlesson` to save lesson metadata
8. Lesson appears immediately in sidebar with real-time updates

### Viewing Flow
- Course videos and PDFs stored in AWS S3 under `content/{courseId}/{filename}`
- Pre-signed URLs generated with 5-minute expiry for security
- Only purchased course content accessible to users
- Students request signed URLs via `/api/getvideourl/:courseId/:file`

### Deletion Flow
1. Educator clicks delete on a lesson
2. Frontend calls `/api/deleteLesson/:lessonId` with courseId and filename
3. Backend deletes file from S3 using AWS SDK
4. Backend removes lesson from MongoDB using `$pull` operator
5. Frontend updates lesson list in real-time without page refresh

## 🧪 Development Tools

- **ESLint** - Code quality and style checking
  ```bash
  npm run lint
  ```

- **Vite HMR** - Instant hot module replacement during development

## 🐳 Docker Deployment

### Docker Architecture

CourseHive uses **multi-stage Docker builds** for optimized production images:

**Backend Container:**
- Multi-stage build (builder + runner)
- Installs build tools only in builder stage
- Final image includes only runtime dependencies
- Runs as non-root user for security
- Size: ~250MB (vs ~700MB without optimization)

**Frontend Container:**
- Multi-stage build (Node builder + Nginx runner)
- Builds React app in Node container
- Serves static files via lightweight Nginx
- Includes reverse proxy configuration for backend API
- Size: ~50MB

### Building Docker Images

**Build both services:**
```bash
docker compose build
```

**Build specific service:**
```bash
docker compose build backend
docker compose build frontend
```

**Build without cache (force rebuild):**
```bash
docker compose build --no-cache
```

### Running Containers Locally

**Start all services:**
```bash
docker compose up -d
```

**Stop all services:**
```bash
docker compose down
```

**Restart specific service:**
```bash
docker compose restart backend
```

**View running containers:**
```bash
docker compose ps
```

### Docker Compose Commands

**View logs:**
```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f backend
docker compose logs -f frontend

# Last 100 lines
docker compose logs --tail=100 backend
```

**Execute commands in container:**
```bash
# Access backend shell
docker compose exec backend sh

# Run npm commands
docker compose exec backend npm install new-package
```

**Clean up everything:**
```bash
# Stop and remove containers, networks
docker compose down

# Also remove volumes (⚠️ deletes data)
docker compose down -v

# Remove all images too
docker compose down --rmi all
```

### Pushing to Docker Registry

**Tag images with your Docker Hub username:**
```bash
# Backend
docker tag course-selling-backend:latest yourusername/coursehive-backend:latest
docker push yourusername/coursehive-backend:latest

# Frontend
docker tag course-selling-frontend:latest yourusername/coursehive-frontend:latest
docker push yourusername/coursehive-frontend:latest
```

**Or update [`docker-compose.yml`](docker-compose.yml) with image names:**
```yaml
services:
  backend:
    image: yourusername/coursehive-backend:latest
    build:
      context: ./backend
  frontend:
    image: yourusername/coursehive-frontend:latest
    build:
      context: .
```

**Then push with:**
```bash
docker compose build
docker compose push
```

### Production Deployment with Docker

**On your server (EC2, VPS, etc.):**

1. **Install Docker:**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install docker.io docker-compose -y
   sudo usermod -aG docker $USER
   ```

2. **Clone repository or pull images:**
   ```bash
   # Option A: Build from source
   git clone https://github.com/yourusername/coursehive.git
   cd coursehive
   docker compose build
   docker compose up -d
   
   # Option B: Pull pre-built images (faster)
   docker compose pull
   docker compose up -d
   ```

3. **Configure environment:**
   - Create `.env` files with production values
   - Update [`docker-compose.yml`](docker-compose.yml) ports if needed
   - Set up SSL/HTTPS with reverse proxy (Nginx/Caddy)

4. **Monitor and maintain:**
   ```bash
   # Check status
   docker compose ps
   
   # View logs
   docker compose logs -f
   
   # Update deployment
   docker compose pull
   docker compose up -d
   
   # Rollback to previous version
   docker compose down
   docker run yourusername/coursehive-backend:v1.0.0
   ```

### Docker Best Practices Implemented

- ✅ **Multi-stage builds** - Separate build and runtime stages
- ✅ **Layer caching** - Optimized Dockerfile instruction order
- ✅ **Minimal base images** - Using `node:24-slim` and `nginx:alpine`
- ✅ **Security** - Non-root user, no secrets in images
- ✅ [**`.dockerignore`**](.dockerignore) - Exclude unnecessary files
- ✅ **Health checks** - Container health monitoring
- ✅ **Restart policies** - Auto-restart on failure
- ✅ **Environment variables** - Externalized configuration

### Docker Image Sizes

| Service | Build Stage | Final Image | Savings |
|---------|-------------|-------------|---------|
| Backend | ~500MB | ~250MB | 50% |
| Frontend | ~800MB | ~50MB | 94% |

### Troubleshooting Docker

**Container exits immediately:**
```bash
# Check logs
docker compose logs backend

# Common issues:
# - Missing .env file
# - Wrong environment variable values
# - Port already in use
```

**Can't connect to backend from frontend:**
```bash
# Check if containers are on same network
docker network ls
docker network inspect course-selling_coursehive

# Verify nginx proxy configuration
docker compose exec frontend cat /etc/nginx/conf.d/nginx.conf
```

**Image size too large:**
```bash
# Check layer sizes
docker history yourusername/coursehive-backend:latest

# Common causes:
# - Not using .dockerignore
# - Copying node_modules from host
# - Not cleaning apt cache
```

**Permission errors:**
```bash
# Backend runs as non-root user
# If files need write access, adjust permissions:
docker compose exec backend chown -R appuser:appgroup /usr/src/app
```

## 📝 Usage

### For Students
1. **Sign up** at `/signup` or **sign in** at `/signin`
2. Browse courses on the dashboard
3. Click "Purchase" to enroll in a course
4. Access course content from your dashboard
5. Watch videos and read PDFs in the course viewer

### For Educators
1. **Sign up** at `/educatorsignup` or **sign in** at `/educators`
2. Create courses from the educator dashboard
3. Upload thumbnail, set price, level, duration, and category
4. View all your created courses
5. Click on a course to add lessons
6. Upload video (MP4/MKV) or PDF lessons with titles
7. View lessons in real-time sidebar
8. Delete lessons when needed (auto-removes from S3 and database)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayan Das**
- GitHub: [@a-y-a-n-das](https://github.com/a-y-a-n-das)

## 🙏 Acknowledgments

- Material-UI for the component library
- AWS for reliable cloud storage
- MongoDB Atlas for managed database hosting
- Vite team for the amazing build tool

---

Built with ❤️ by Ayan Das

## 💡 Development Credits

README documentation generated by **GitHub Copilot** powered by Claude Sonnet 4.5
