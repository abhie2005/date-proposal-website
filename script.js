// Array of romantic emojis
const romanticEmojis = ['❤️', '💕', '💋', '🌷', '💖', '💗', '💓', '💞', '💝', '🌹', '🌸', '💐'];

// Confetti effect function
function createConfetti() {
    const confettiCount = 150;
    const colors = ['#ff6b9d', '#c44569', '#ffb500', '#ff9ff3', '#f368e0', '#ff6b9d', '#c44569'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random color
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Random starting position
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.position = 'fixed';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '10001';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0%';
        
        // Random animation duration
        const duration = Math.random() * 3 + 2; // 2-5 seconds
        const delay = Math.random() * 0.5;
        const horizontalMovement = (Math.random() - 0.5) * 200;
        
        confetti.style.animation = `confettiFall ${duration}s ${delay}s linear forwards`;
        confetti.style.setProperty('--horizontal', horizontalMovement + 'px');
        confetti.style.setProperty('--rotation', Math.random() * 720 + 'deg');
        
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Celebration blast function - emojis explode outward
function createCelebrationBlast(x, y) {
    const blastCount = 80; // Number of emojis in the blast
    
    for (let i = 0; i < blastCount; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'celebration-emoji';
        emoji.innerHTML = romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
        
        // Random size (larger for celebration)
        const size = Math.random() * 30 + 25;
        emoji.style.fontSize = size + 'px';
        
        // Random angle for explosion (360 degrees)
        const angle = (Math.PI * 2 * i) / blastCount + (Math.random() - 0.5) * 0.5;
        const distance = Math.random() * 400 + 200; // Random distance
        
        // Calculate end position relative to start
        const deltaX = Math.cos(angle) * distance;
        const deltaY = Math.sin(angle) * distance;
        
        // Random rotation
        const rotation = Math.random() * 720 - 360; // -360 to 360 degrees
        
        // Set starting position (center the emoji)
        emoji.style.left = x + 'px';
        emoji.style.top = y + 'px';
        emoji.style.position = 'fixed';
        emoji.style.pointerEvents = 'none';
        emoji.style.zIndex = '9999';
        emoji.style.marginLeft = '-' + (size / 2) + 'px';
        emoji.style.marginTop = '-' + (size / 2) + 'px';
        emoji.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
        emoji.style.opacity = '1';
        
        // Random animation duration
        const duration = Math.random() * 0.8 + 1.2; // 1.2 to 2 seconds
        
        // Animate using transition
        emoji.style.transition = `transform ${duration}s ease-out, opacity ${duration * 0.8}s ease-out`;
        
        // Trigger animation after a tiny delay to ensure styles are applied
        setTimeout(() => {
            emoji.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg) scale(0.3)`;
            emoji.style.opacity = '0';
        }, 10);
        
        document.body.appendChild(emoji);
        
        // Remove after animation
        setTimeout(() => {
            emoji.remove();
        }, duration * 1000 + 100);
    }
}

// Create animated emojis in the background
function createHeart() {
    const emoji = document.createElement('div');
    emoji.className = 'heart';
    // Randomly select an emoji from the array
    emoji.innerHTML = romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
    
    // Random starting position
    emoji.style.left = Math.random() * 100 + '%';
    
    // Random animation duration (5-15 seconds)
    const duration = Math.random() * 10 + 5;
    emoji.style.animationDuration = duration + 's';
    
    // Random size
    const size = Math.random() * 15 + 15;
    emoji.style.fontSize = size + 'px';
    
    // Random delay
    emoji.style.animationDelay = Math.random() * 2 + 's';
    
    document.getElementById('heartsContainer').appendChild(emoji);
    
    // Remove emoji after animation completes
    setTimeout(() => {
        emoji.remove();
    }, (duration + 2) * 1000);
}

// Create hearts continuously
function startHeartAnimation() {
    // Create initial hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createHeart(), i * 200);
    }
    
    // Keep creating new hearts
    setInterval(() => {
        createHeart();
    }, 500);
}

// Button interactions
document.addEventListener('DOMContentLoaded', () => {
    startHeartAnimation();
    
    // Handle photo loading
    const couplePhoto = document.getElementById('couplePhoto');
    if (couplePhoto) {
        couplePhoto.addEventListener('error', () => {
            // If image fails to load, show a placeholder or hide it
            couplePhoto.style.display = 'none';
            console.log('Photo not found. Please add your photo as "HandsHolding.JPG" in the project folder.');
        });
        
        couplePhoto.addEventListener('load', () => {
            // Add a nice fade-in effect when image loads
            couplePhoto.style.opacity = '0';
            couplePhoto.style.transition = 'opacity 0.5s ease-in';
            setTimeout(() => {
                couplePhoto.style.opacity = '1';
            }, 100);
        });
    }
    
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    // Function to create and download calendar event
    function downloadCalendarEvent() {
        // Get the date: Thursday, December 18th
        const now = new Date();
        const currentYear = now.getFullYear();
        let targetDate = new Date(currentYear, 11, 18); // December is month 11 (0-indexed)
        
        // If December 18th has already passed this year, use next year
        if (targetDate < now) {
            targetDate = new Date(currentYear + 1, 11, 18);
        }
        
        // Set time to a reasonable time (e.g., 6:00 PM)
        targetDate.setHours(18, 0, 0, 0);
        
        // Format date for ICS (YYYYMMDDTHHMMSS)
        function formatICSDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${year}${month}${day}T${hours}${minutes}${seconds}`;
        }
        
        // Create end date (2 hours later)
        const endDate = new Date(targetDate);
        endDate.setHours(endDate.getHours() + 2);
        
        const startDateStr = formatICSDate(targetDate);
        const endDateStr = formatICSDate(endDate);
        const nowStr = formatICSDate(new Date());
        
        // Generate unique ID
        const uid = `date-event-${Date.now()}@dateproject.com`;
        
        // Create ICS file content
        const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Date Project//Date Event//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${nowStr}
DTSTART:${startDateStr}
DTEND:${endDateStr}
SUMMARY:Our Date ❤️
DESCRIPTION:It's a date! Can't wait to spend time together! 💕
LOCATION:To be decided
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Our date is starting in 15 minutes!
END:VALARM
END:VEVENT
END:VCALENDAR`;
        
        // Create blob and download
        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Our-Date.ics';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }
    
    // Countdown timer function
    function startCountdown() {
        // Get the date: Thursday, December 18th
        const now = new Date();
        const currentYear = now.getFullYear();
        let targetDate = new Date(currentYear, 11, 18); // December is month 11 (0-indexed)
        
        // If December 18th has already passed this year, use next year
        if (targetDate < now) {
            targetDate = new Date(currentYear + 1, 11, 18);
        }
        
        // Set time to start of day (00:00:00)
        targetDate.setHours(0, 0, 0, 0);
        
        function updateCountdown() {
            const now = new Date();
            const timeLeft = targetDate - now;
            
            if (timeLeft <= 0) {
                document.getElementById('countdown').innerHTML = '<div class="countdown-item"><span class="countdown-number">0</span><span class="countdown-label">Days</span></div><div class="countdown-item"><span class="countdown-number">0</span><span class="countdown-label">Hours</span></div><div class="countdown-item"><span class="countdown-number">0</span><span class="countdown-label">Minutes</span></div><div class="countdown-item"><span class="countdown-number">0</span><span class="countdown-label">Seconds</span></div>';
                return;
            }
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById('countdown').innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">Seconds</span>
                </div>
            `;
        }
        
        // Update immediately and then every second
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Yes button - celebration!
    yesBtn.addEventListener('click', (e) => {
        // Get button position for celebration blast
        const rect = yesBtn.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;
        
        // Create massive celebration blast!
        createCelebrationBlast(buttonX, buttonY);
        
        // Create confetti effect!
        createConfetti();
        
        // Also create continuous background hearts
        for (let i = 0; i < 30; i++) {
            setTimeout(() => createHeart(), i * 100);
        }
        
        // Change the question
        const h1 = document.querySelector('h1');
        h1.textContent = 'Yay! ❤️ Can\'t wait! 🎉';
        h1.style.color = '#ff6b9d';
        h1.style.animation = 'pulse 0.5s ease-in-out infinite';
        
        // Hide the No button
        noBtn.style.display = 'none';
        
        // Hide Yes button and show countdown
        yesBtn.style.display = 'none';
        
        // Create countdown container
        const buttonsContainer = document.querySelector('.buttons');
        buttonsContainer.style.width = '100%';
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.flexDirection = 'column';
        buttonsContainer.style.alignItems = 'center';
        buttonsContainer.innerHTML = `
            <p style="font-size: 1.5rem; color: #c44569; margin-bottom: 0.8rem; text-align: center; width: 100%;">It's a date! 💕</p>
            <button class="btn btn-calendar" id="calendarBtn" style="margin-bottom: 0.8rem;">
                📅 Add to Calendar
            </button>
            <div class="countdown-container">
                <p style="font-size: 1.1rem; color: #c44569; margin-bottom: 0.5rem; text-align: center; width: 100%;">Time until our date:</p>
                <div id="countdown" class="countdown"></div>
            </div>
        `;
        
        // Add calendar download button event
        const calendarBtn = document.getElementById('calendarBtn');
        calendarBtn.addEventListener('click', () => {
            downloadCalendarEvent();
            calendarBtn.textContent = '✅ Added to Calendar!';
            calendarBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
            setTimeout(() => {
                calendarBtn.style.opacity = '0.7';
                calendarBtn.style.cursor = 'default';
            }, 2000);
        });
        
        // Automatically trigger calendar download after a short delay
        setTimeout(() => {
            downloadCalendarEvent();
        }, 1000);
        
        // Start the countdown
        startCountdown();
    });
    
    // No button - make it harder to click (moves away)
    let noClickCount = 0;
    noBtn.addEventListener('click', () => {
        noClickCount++;
        
        if (noClickCount < 6) {
            // Move the button randomly
            const maxX = window.innerWidth - 200;
            const maxY = window.innerHeight - 100;
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            noBtn.style.transform = 'scale(0.9)';
            
            // Make Yes button bigger
            yesBtn.style.transform = 'scale(1.2)';
            yesBtn.style.fontSize = '1.5rem';
            
            // Create more hearts
            for (let i = 0; i < 10; i++) {
                setTimeout(() => createHeart(), i * 100);
            }
        } else {
            // After 6 clicks, make it disappear
            noBtn.style.opacity = '0';
            noBtn.style.transform = 'scale(0)';
            noBtn.style.transition = 'all 0.5s ease-out';
            setTimeout(() => {
                noBtn.style.display = 'none';
            }, 500);
        }
    });
    
    // Make No button harder to hover (slight movement)
    noBtn.addEventListener('mouseenter', () => {
        if (noClickCount < 6) {
            const randomX = (Math.random() - 0.5) * 50;
            const randomY = (Math.random() - 0.5) * 50;
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.95)`;
        }
    });
    
    noBtn.addEventListener('mouseleave', () => {
        if (noClickCount < 6) {
            noBtn.style.transform = 'translate(0, 0) scale(1)';
        }
    });
    
    // "I love you" popup on click anywhere
    function createLovePopup(x, y) {
        const popup = document.createElement('div');
        popup.className = 'love-popup';
        popup.textContent = 'I love you ❤️';
        
        // Position near click location (centered horizontally, slightly above)
        popup.style.left = x + 'px';
        popup.style.top = (y - 60) + 'px';
        popup.style.position = 'fixed';
        popup.style.pointerEvents = 'none';
        popup.style.zIndex = '10000';
        popup.style.transform = 'translateX(-50%) translateY(0) scale(0.8)';
        popup.style.opacity = '0';
        
        document.body.appendChild(popup);
        
        // Animate in
        requestAnimationFrame(() => {
            popup.style.opacity = '1';
            popup.style.transform = 'translateX(-50%) translateY(-20px) scale(1)';
        });
        
        // Remove after animation
        setTimeout(() => {
            popup.style.opacity = '0';
            popup.style.transform = 'translateX(-50%) translateY(-60px) scale(0.8)';
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.remove();
                }
            }, 500);
        }, 2000);
    }
    
    // Add click listener to document
    document.addEventListener('click', (e) => {
        // Don't show popup if clicking on buttons (they have their own actions)
        if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }
        createLovePopup(e.clientX, e.clientY);
    });
    
    // Background Music Control
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');
    let isPlaying = false;
    
    // Try to play music on user interaction (required by browsers)
    function initMusic() {
        if (backgroundMusic && musicControl) {
            // Set volume to 30% for soft background music
            backgroundMusic.volume = 0.3;
            
            // Handle music errors
            backgroundMusic.addEventListener('error', (e) => {
                console.log('Music file not found. Please download "This is what falling in love feels like" by JVKE and save it as "music.mp3" in the project folder.');
                musicControl.style.opacity = '0.5';
                musicControl.title = 'Music file not found - add music.mp3';
            });
            
            musicControl.addEventListener('click', () => {
                if (isPlaying) {
                    backgroundMusic.pause();
                    musicIcon.textContent = '🔇';
                    isPlaying = false;
                } else {
                    const playPromise = backgroundMusic.play();
                    if (playPromise !== undefined) {
                        playPromise.then(() => {
                            musicIcon.textContent = '🎵';
                            isPlaying = true;
                        }).catch(err => {
                            console.log('Music play failed:', err);
                            alert('Unable to play music. Please make sure you have downloaded the song and saved it as "music.mp3" in the project folder.');
                        });
                    }
                }
            });
            
            // Try to auto-play on first user interaction
            document.addEventListener('click', () => {
                if (!isPlaying && backgroundMusic.paused && backgroundMusic.readyState >= 2) {
                    backgroundMusic.play().then(() => {
                        musicIcon.textContent = '🎵';
                        isPlaying = true;
                    }).catch(() => {
                        // Auto-play blocked, user needs to click music button
                    });
                }
            }, { once: true });
        }
    }
    
    initMusic();
});

