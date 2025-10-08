# Career Chute 3.0

A modern, flow-state job search application designed to streamline your career advancement with intelligent task management, real-time synchronization, and Gmail integration.

## 🚀 Features

### **Core Functionality**
- **Real-time Cross-Device Sync** - Access your job search data from any device with automatic synchronization
- **Intelligent Task Management** - Organize applications, networking, and events with smart categorization
- **Focus Mode & Time Blocking** - Deep work sessions with built-in time tracking and productivity tools
- **Gmail Integration** - Automatically scan emails for job opportunities and create tasks
- **Progress Tracking** - Visual progress indicators, streaks, and milestone celebrations
- **Mobile-Responsive Design** - Optimized for both desktop and mobile devices

### **Advanced Features**
- **Smart Duplicate Detection** - Prevents duplicate applications and tasks
- **Job Prioritization System** - Grade and filter jobs by fit (A, B, C, ungraded)
- **Bulk Selection Tools** - Select jobs by grade, color, or status
- **Google Sheets Integration** - Sync job data to spreadsheets automatically
- **Guardrails System** - Time limits and warnings to maintain healthy work habits
- **Offline Support** - Continue working even without internet connection
- **Data Export/Import** - Backup and restore your data across devices
- **Theme Support** - Dark and light modes for comfortable viewing

### **Gmail Integration**
- **OAuth 2.0 Security** - Secure connection to your Gmail account
- **Automatic Email Scanning** - Find job-related emails and create tasks
- **Smart Parsing** - Extract company names, job titles, locations, and salaries
- **Multi-Source Support** - LinkedIn, Indeed, Glassdoor, ZipRecruiter, and more
- **Duplicate Prevention** - Avoid processing the same email multiple times
- **Employer Blocking** - Block unwanted companies from future scans
- **Source Tracking** - See which job board each opportunity came from

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase Firestore for real-time data synchronization
- **Authentication**: Google OAuth 2.0 for Gmail integration
- **Deployment**: Netlify with automatic builds
- **Security**: Pre-commit hooks and comprehensive security scanning

## 🚀 Quick Start

### **Option 1: Deploy to Netlify (Recommended)**

1. **Fork this repository** to your GitHub account
2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy automatically
3. **Access your app** from the Netlify URL on any device

### **Option 2: Local Development**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jaredpeters/career-chute.git
   cd career-chute
   ```

2. **Open in browser:**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   
   # Or simply open index.html in your browser
   ```

3. **Access at:** `http://localhost:8000`

## 📧 Gmail Integration Setup

To enable Gmail integration for automatic job email scanning:

1. **Create Google Cloud Project:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Gmail API

2. **Create OAuth 2.0 Credentials:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Application type: "Web application"
   - Add authorized redirect URIs for your domain

3. **Configure in App:**
   - Open Career Chute
   - Go to Settings
   - Enter your Google Client ID
   - Click "Connect Gmail"

## 🎯 Usage

### **Getting Started**
1. **Set your targets** - Define how many applications, networking events, and activities you want to complete
2. **Add tasks** - Create job applications, networking outreach, and event planning tasks
3. **Use focus mode** - Block time for deep work on important tasks
4. **Track progress** - Monitor your daily and weekly progress with visual indicators

### **Gmail Integration**
1. **Connect Gmail** - Authorize access to your Gmail account
2. **Scan emails** - Click "Scan for Jobs Now" to find job-related emails
3. **Review jobs** - Check the job queue with source tracking and color coding
4. **Grade jobs** - Click role titles to cycle through A/B/C grades
5. **Block employers** - Use the × button to block unwanted companies
6. **Bulk select** - Use the dropdown to select jobs by grade or status
7. **Add to pipeline** - Move selected jobs to your applications pipeline

### **Job Prioritization System**
1. **Grade jobs** - Click role titles to cycle through A (green), B (orange), C (red), or ungraded (gray)
2. **Bulk selection** - Use the dropdown to select all jobs of a specific grade
3. **Filter by grade** - Red (C) jobs are automatically skipped in future scans
4. **Visual organization** - Color-coded job queue for quick identification
5. **Source tracking** - See which job board each opportunity came from

### **Cross-Device Sync**
1. **Use the same User ID** - Enter your User ID on all devices
2. **Automatic sync** - Changes appear instantly across all devices
3. **Offline support** - Work offline and sync when connection returns

## 🔧 Configuration

### **Environment Variables (Netlify)**
- `FIREBASE_API_KEY` - Your Firebase API key
- `FIREBASE_AUTH_DOMAIN` - Your Firebase auth domain
- `FIREBASE_PROJECT_ID` - Your Firebase project ID

### **Settings**
- **Targets** - Set daily/weekly goals for applications, networking, and events
- **Guardrails** - Configure time limits and warning thresholds
- **Gmail** - Enter your Google OAuth Client ID for email integration
- **Theme** - Switch between dark and light modes

## 🔒 Security

- **No hardcoded secrets** - All sensitive data uses environment variables or user input
- **OAuth 2.0** - Secure Gmail integration with proper token management
- **Pre-commit hooks** - Automatic security scanning before commits
- **Data privacy** - Your data stays in your Firebase project

## 📱 Mobile Support

Career Chute is fully responsive and works great on:
- **iPhone/iPad** - Safari, Chrome, Firefox
- **Android** - Chrome, Firefox, Samsung Internet
- **Desktop** - Chrome, Firefox, Safari, Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/jaredpeters/career-chute/issues)
- **Documentation**: Check the `PROJECT.md` file for detailed specifications
- **Security**: Report security issues privately

## 🎉 Acknowledgments

Built with modern web technologies and designed for productivity. Special thanks to the open source community for the amazing tools and libraries that make this possible.

---

**Career Chute 3.0** - Streamline your job search, maximize your productivity, and land your dream job. 🚀