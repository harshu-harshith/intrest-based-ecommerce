function clearLocalStorage() {
    localStorage.clear();
    console.log('Local storage cleared');
}
clearLocalStorage();

const users = [
    {
        id: 1,
        username: "john_doe",
        password: "123",
        fullName: "John Doe",
        bio: "Photography enthusiast | Travel lover",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    },
    {
        id: 2,
        username: "jane_smith",
        password: "456",
        fullName: "Jane Smith",
        bio: "Digital artist | Coffee addict",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    {
        id: 3,
        username: "alex_tech",
        password: "789",
        fullName: "Alex Johnson",
        bio: "Software engineer | Tech blogger",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
    },
    {
        id: 4,
        username: "sam_wilson",
        password: "1234",
        fullName: "Sam Wilson",
        bio: "Fitness trainer | Healthy lifestyle",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    {
        id: 5,
        username: "emma_white",
        password: "2023",
        fullName: "Emma White",
        bio: "Fashion designer | Travel enthusiast",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    }
];

// Post data
const posts = [
    {
        id: 1,
        username: "john_doe",
        imageUrl: "https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
        caption: "Just got my new setup ready for coding all night!",
        likes: 245,
        timestamp: "2 hours ago",
        hashtags: ["Laptop", "PC", "Computer"]
    },
    {
        id: 2,
        username: "jane_smith",
        imageUrl: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Morning adventures with these cutie Cats",
        likes: 531,
        timestamp: "5 hours ago",
        hashtags: ["pet", "petcare", "petlove"]
    },
    {
        id: 3,
        username: "alex_tech",
        imageUrl: "https://images.unsplash.com/photo-1701444749157-62cecf8a5c8a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "RIDING WITH DEATH",
        likes: 189,
        timestamp: "8 hours ago",
        hashtags: ["Bike", "GT650", "Riding"]
    },
    {
        id: 4,
        username: "sam_wilson",
        imageUrl: "https://images.unsplash.com/photo-1577514075821-4c152f2bd5e0?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Noon Drift",
        likes: 321,
        timestamp: "1 day ago",
        hashtags: ["Cars", "Drift","BMW"]
    },
    {
        id: 5,
        username: "emma_white",
        imageUrl: "https://images.unsplash.com/photo-1501554728187-ce583db33af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlraW5nfGVufDB8fDB8fHww",
        caption: "Lost in the beauty of these mountains",
        likes: 475,
        timestamp: "1 day ago",
        hashtags: ["travel", "mountains", "tent"]
    },
    {
        id: 6,
        username: "jane_smith",
        imageUrl: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "",
        likes: 412,
        timestamp: "Plants in the pot",
        hashtags: ["saplings", "pots", "tree"]
    },
    {
        id: 7,
        username: "john_doe",
        imageUrl: "https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
        caption: "An apple a day keeps a doctor away!",
        likes: 214,
        timestamp: "2 days ago",
        hashtags: ["fruits", "healthy", "tasty"]
    },
    {
        id: 8,
        username: "alex_tech",
        imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Gym Time",
        likes: 367,
        timestamp: "3 days ago",
        hashtags: ["fatloss", "gym", "workout"]
    },
    {
        id: 9,
        username: "sam_wilson",
        imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D",
        caption: "Football!!!",
        likes: 198,
        timestamp: "4 days ago",
        hashtags: ["sports", "outdoor", "football"]
    },
    {
        id: 10,
        username: "emma_white",
        imageUrl: "https://images.unsplash.com/photo-1604078893234-ff3a1a5d5292?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Yoga for health",
        likes: 286,
        timestamp: "4 days ago",
        hashtags: ["yoga", "fitness", "workout"]
    }
];

// Initialize after DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Set up login form submission
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', handleLogin);

    // Check if user is already logged in
    checkLoggedInUser();
});

// Handle login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Find user with matching credentials
    const user = users.find(user =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );

    if (user) {
        // Save logged in user to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        showApp(user);
    } else {
        alert('Invalid username or password');
    }
}

// Check if user is already logged in
function checkLoggedInUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        showApp(currentUser);
    }
}

// Show main app and hide login
function showApp(user) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';

    // Set user avatar
    const userAvatar = document.getElementById('user-avatar');
    userAvatar.style.backgroundImage = `url(${user.avatar})`;

    // Load and display posts
    loadPosts();
}

// Load posts into the feed
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';

    // Get liked posts from localStorage
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    const bookmarkedPosts = JSON.parse(localStorage.getItem('bookmarkedPosts')) || [];

    posts.forEach(post => {
        // Find user data for the post
        const postUser = users.find(user => user.username === post.username);
        const isLiked = likedPosts.includes(post.id);
        const isBookmarked = bookmarkedPosts.includes(post.id);

        // Create post HTML
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
          <div class="post-header">
            <div class="post-avatar" style="background-image: url(${postUser.avatar})"></div>
            <div class="post-user">${post.username}</div>
          </div>
          <img class="post-image" src="${post.imageUrl}" alt="${post.caption}">
          <div class="post-actions">
            <i data-lucide="heart" class="heart-icon ${isLiked ? 'liked' : ''}" data-post-id="${post.id}"></i>
            <i data-lucide="message-square"></i>
            <i data-lucide="bookmark" class="bookmark-icon ${isBookmarked ? 'bookmarked' : ''}" data-post-id="${post.id}"></i>
          </div>
          <div class="post-likes">${isLiked ? post.likes + 1 : post.likes} likes</div>
          <div class="post-caption">
            <span class="post-username">${post.username}</span> ${post.caption}
            <div class="post-hashtags">
              ${post.hashtags.map(tag => `#${tag}`).join(' ')}
            </div>
          </div>
          <div class="post-timestamp">${post.timestamp}</div>
        `;

        postsContainer.appendChild(postElement);
    });

    // Reinitialize Lucide icons for the newly created elements
    lucide.createIcons();

    // Add event listeners to heart and bookmark icons
    document.querySelectorAll('.heart-icon').forEach(icon => {
        icon.addEventListener('click', toggleLike);
    });

    document.querySelectorAll('.bookmark-icon').forEach(icon => {
        icon.addEventListener('click', toggleBookmark);
    });
}

// Toggle like on a post
function toggleLike(event) {
    const postId = parseInt(event.currentTarget.getAttribute('data-post-id'));
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];

    if (event.currentTarget.classList.contains('liked')) {
        // Unlike
        event.currentTarget.classList.remove('liked');
        const index = likedPosts.indexOf(postId);
        if (index !== -1) {
            likedPosts.splice(index, 1);
        }

        // Update likes count
        const likesElement = event.currentTarget.closest('.post').querySelector('.post-likes');
        const currentLikes = parseInt(likesElement.innerText);
        likesElement.innerText = `${currentLikes - 1} likes`;
    } else {
        // Like
        event.currentTarget.classList.add('liked');
        if (!likedPosts.includes(postId)) {
            likedPosts.push(postId);
        }

        // Update likes count
        const likesElement = event.currentTarget.closest('.post').querySelector('.post-likes');
        const currentLikes = parseInt(likesElement.innerText);
        likesElement.innerText = `${currentLikes + 1} likes`;
    }

    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
}

// Toggle bookmark on a post
function toggleBookmark(event) {
    const postId = parseInt(event.currentTarget.getAttribute('data-post-id'));
    const bookmarkedPosts = JSON.parse(localStorage.getItem('bookmarkedPosts')) || [];

    if (event.currentTarget.classList.contains('bookmarked')) {
        // Remove bookmark
        event.currentTarget.classList.remove('bookmarked');
        const index = bookmarkedPosts.indexOf(postId);
        if (index !== -1) {
            bookmarkedPosts.splice(index, 1);
        }
    } else {
        // Add bookmark
        event.currentTarget.classList.add('bookmarked');
        if (!bookmarkedPosts.includes(postId)) {
            bookmarkedPosts.push(postId);
        }
    }
    localStorage.setItem('bookmarkedPosts', JSON.stringify(bookmarkedPosts));
}

// Toggle like on a post
function toggleLike(event) {
    const postId = parseInt(event.currentTarget.getAttribute('data-post-id'));
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const post = posts.find(p => p.id === postId);

    if (!currentUser || !post) return;

    if (event.currentTarget.classList.contains('liked')) {
        // Unlike logic (unchanged)
        event.currentTarget.classList.remove('liked');
        const index = likedPosts.indexOf(postId);
        if (index !== -1) likedPosts.splice(index, 1);
        const likesElement = event.currentTarget.closest('.post').querySelector('.post-likes');
        const currentLikes = parseInt(likesElement.innerText);
        likesElement.innerText = `${currentLikes - 1} likes`;
    } else {
        // Like logic
        event.currentTarget.classList.add('liked');
        if (!likedPosts.includes(postId)) likedPosts.push(postId);
        const likesElement = event.currentTarget.closest('.post').querySelector('.post-likes');
        const currentLikes = parseInt(likesElement.innerText);
        likesElement.innerText = `${currentLikes + 1} likes`;

        // Send like data to server
        const likeData = {
            userid: currentUser.username,
            password: currentUser.password,
            hashtags: post.hashtags.join(','),
            timestamp: new Date().toISOString()
        };

        fetch('http://localhost:3000/like', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(likeData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('✅ Like successfully recorded!');
            } else {
                console.error('❌ Failed to record like:', data.error);
            }
        })
        .catch(error => {
            console.error('❌ Error sending like to server:', error);
        });
    }

    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
}
