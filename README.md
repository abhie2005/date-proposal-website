# 💕 Date Proposal Website

A beautiful, interactive romantic date proposal website with animated hearts, confetti effects, countdown timer, and background music. Perfect for asking someone special on a date!

![Date Proposal Website](https://img.shields.io/badge/Love-Romantic-pink?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 💖 **Animated Hearts**: Floating romantic emojis (❤️ 💕 💋 🌷) in the background
- 🎉 **Celebration Effects**: Confetti explosion and emoji blast when "Yes" is clicked
- ⏰ **Countdown Timer**: Live countdown to your special date
- 📅 **Calendar Integration**: Automatically downloads calendar event (.ics file)
- 🎵 **Background Music**: Soft romantic music with play/pause control
- 💌 **Interactive Popups**: "I love you" messages appear when clicking anywhere
- 📱 **Responsive Design**: Works perfectly on mobile and desktop
- 🎨 **Beautiful UI**: Modern, romantic design with smooth animations

## 🚀 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A text editor (optional, for customization)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/date-proposal-website.git
cd date-proposal-website
```

2. Add your photos:
   - Place your photo file in the project folder
   - Name it `HandsHolding.JPG` (or update the filename in `index.html`)

3. Add background music (optional):
   - Download "This is what falling in love feels like" by JVKE (or any romantic song)
   - Save it as `music.mp3` in the project folder
   - The music will automatically play when the user interacts with the page

4. Open `index.html` in your web browser:
   - Simply double-click the file, or
   - Right-click → Open with → Your preferred browser

## 📝 Customization

### Change the Date

Edit the date in `script.js` (around line 195):
```javascript
let targetDate = new Date(currentYear, 11, 18); // December is month 11 (0-indexed)
```

### Change the Photo

1. Replace `HandsHolding.JPG` with your photo filename in `index.html` (line 27)
2. Make sure the photo is in the same folder as `index.html`

### Change the Music

1. Download your preferred romantic song
2. Save it as `music.mp3` in the project folder
3. Or update the filename in `index.html` (line 12)

### Customize Colors

Edit the color scheme in `style.css`:
- Main pink: `#ff6b9d`
- Dark pink: `#c44569`
- Background gradient: Lines 9-10 in `style.css`

## 🎯 How to Use

1. **Before the Proposal**:
   - Customize the date, photo, and music
   - Test the website to make sure everything works
   - Deploy to GitHub Pages or any web hosting service

2. **Share the Website**:
   - Send the link to your special someone
   - They'll see the romantic proposal with your photo

3. **When They Click "Yes"**:
   - Confetti and emojis explode in celebration! 🎉
   - Countdown timer appears showing time until the date
   - Calendar event automatically downloads
   - Background music plays (if added)

## 📁 Project Structure

```
date-proposal-website/
│
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Interactive functionality
├── HandsHolding.JPG    # Your photo (add your own)
├── music.mp3          # Background music (optional)
└── README.md          # This file
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Select the main branch
4. Your site will be live at: `https://your-username.github.io/date-proposal-website/`

### Other Hosting Options

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **Any web hosting service**: Upload all files via FTP

## 💡 Features Explained

### Interactive Elements

- **"No" Button**: Moves away when hovered/clicked (up to 6 times), then disappears
- **"Yes" Button**: Triggers celebration with confetti, emojis, and countdown
- **Click Anywhere**: Shows "I love you ❤️" popup messages
- **Music Control**: Toggle button in top-right corner

### Countdown Timer

- Automatically calculates time until your specified date
- Updates in real-time (days, hours, minutes, seconds)
- Beautiful animated display

### Calendar Event

- Downloads automatically when "Yes" is clicked
- Compatible with Google Calendar, Apple Calendar, Outlook
- Includes reminder 15 minutes before the date

## 🎨 Color Palette

- **Primary Pink**: `#ff6b9d`
- **Dark Pink**: `#c44569`
- **Gold Accent**: `#f8b500`
- **White**: `rgba(255, 255, 255, 0.95)`

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal project, but feel free to fork it and create your own romantic proposal!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Made with Love

Created with ❤️ for someone special. Good luck with your proposal! 🎉

---

**Note**: Make sure to add your own photo and music file before deploying. The current files are placeholders.

## 🐛 Troubleshooting

### Music not playing?
- Make sure you've added `music.mp3` to the project folder
- Check browser console for errors
- Some browsers require user interaction before playing audio

### Photo not showing?
- Verify the filename matches exactly (case-sensitive)
- Check that the photo is in the same folder as `index.html`

### Countdown not working?
- Check the date format in `script.js`
- Make sure JavaScript is enabled in your browser

---

⭐ If you like this project, give it a star on GitHub!

