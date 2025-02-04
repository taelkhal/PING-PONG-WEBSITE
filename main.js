// document.addEventListener("DOMContentLoaded", () => {
//     const links = document.querySelectorAll(".test a"); // Navigation links
//     const content = document.getElementById("content"); // Middle section for dynamic content

//     // Define content for each section
//     const pages = {
//         home: `
//             <div class="play_local">
//                 <div class="btn">
//                     <button type="button" onclick="location.href='game.html';">Play Local Game</button>
//                 </div>
//                 <img class="f_img" src="dashboard img/full_button.png">
//             </div>
//             <div class="btn2">
//                 <button type="button" onclick="location.href='game.html';">Play Online Game</button>
//             </div>
//             <img class="f_img" src="dashboard img/full_buton_2.png">
//             <div>
//                 <button class="f_img_l" type="button" onclick="location.href='game.html';">Add Friends</button>
//                 <button class="f_img_l2" type="button" onclick="location.href='game.html';">Friends</button>
//                 <img class="f_img_last" src="dashboard img/FREINDLIST_041332.png">
//             </div>
//         `,
//         profile: `
//             <div class="profile">
//                 <h2>Your Profile</h2>
//                 <p>Manage your profile information here.</p>
//             </div>
//         `,
//         game: `
//             <div class="game">
//                 <h2>Game Page</h2>
//                 <p>Play exciting games here!</p>
//             </div>
//         `,
//         tournament: `
//             <div class="tournament">
//                 <h2>Tournaments</h2>
//                 <p>Join or create tournaments to compete!</p>
//             </div>
//         `,
//         chat: `
//             <div class="chat">
//                 <h2>Chat with Friends</h2>
//                 <p>Connect with friends here.</p>
//             </div>
//         `,
//         settings: `
//             <div class="settings">
//                 <h2>Settings</h2>
//                 <p>Adjust your preferences here.</p>
//             </div>
//         `,
//     };

//     // Add click event listeners to navigation links
//     links.forEach((link) => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault(); // Prevent default link behavior
//             const page = link.textContent.trim().toLowerCase(); // Convert link text to lowercase and trim whitespace
//             if (pages[page]) {
//                 content.innerHTML = pages[page]; // Load the corresponding content
//             } else {
//                 content.innerHTML = "<h2>Page Not Found</h2>"; // Handle undefined pages
//             }
//         });
//     });

//     // Load default (Home) content
//     content.innerHTML = pages.home;
// });



//////////////////////



// document.addEventListener("DOMContentLoaded", () => {
//     const links = document.querySelectorAll(".test a"); // Navigation links
//     const content = document.getElementById("content"); // Middle section for dynamic content

//     // Define content for each section
//     const pages = {
//         home: `
//             <div class="play_local">
//                 <div class="btn">
//                     <button type="button" onclick="location.href='game.html';">Play Local Game</button>
//                 </div>
//                 <img class="f_img" src="dashboard img/full_button.png">
//             </div>
//             <div class="btn2">
//                 <button type="button" onclick="location.href='game.html';">Play Online Game</button>
//             </div>
//             <img class="f_img" src="dashboard img/full_buton_2.png">
//             <div>
//                 <!-- Add Friends Button -->
//                 <button class="f_img_l" id="add-friends-btn" type="button">Add Friends</button>
//                 <!-- Search Bar (Initially Hidden) -->
//                 <div  id="search-bar-container" >
//                     <input class="search_bar" type="text" id="search-bar" placeholder="Search friends..." >
//                 </div>
                
//                 <!-- Friends Button -->
//                 <button class="f_img_l2" id="friends-btn" type="button">Friends</button>
//                 <img class="f_img_last" src="dashboard img/FREINDLIST_041332.png">

//             </div>
//         `,
//         profile: `
//             <div class="profile">
//                 <h2>Your Profile</h2>
//                 <p>Manage your profile information here.</p>
//             </div>
//         `,
//         game: `
//             <div class="game">
//                 <h2>Game Page</h2>
//                 <p>Play exciting games here!</p>
//             </div>
//         `,
//         tournament: `
//             <div class="tournament">
//                 <h2>Tournaments</h2>
//                 <p>Join or create tournaments to compete!</p>
//             </div>
//         `,
//         chat: `
//             <div class="chat">
//                 <h2>Chat with Friends</h2>
//                 <p>Connect with friends here.</p>
//             </div>
//         `,
//         settings: `
//             <div class="settings">
//                 <h2>Settings</h2>
//                 <p>Adjust your preferences here.</p>
//             </div>
//         `,
//     };


//     function setActiveLink(target) {
//         links.forEach(link => link.classList.remove("active")); // Remove active class from all links
//         target.classList.add("active"); // Add active class to the clicked link
//     }
//     // Add click event listeners to navigation links
//     links.forEach((link) => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault(); // Prevent default link behavior
//             // const page = link.textContent.trim().toLowerCase();
            
//             const page = link.getAttribute("data-page");
//             if (pages[page]) {
//                 content.innerHTML = pages[page];
//                 setActiveLink(link); // Load the corresponding content

//                 // Reinitialize home functionalities if on the home page
//                 if (page === "home") {
//                     initializeHomeFunctionality();
//                 }
//             } else {
//                 content.innerHTML = "<h2>Page Not Found</h2>"; // Handle undefined pages
//             }
//         });
//     });

//     // Load default (Home) content
//     content.innerHTML = pages.home;
//     initializeHomeFunctionality(); // Initialize Add Friends and Friends functionalities on load

//     // Function to initialize the "Add Friends" and "Friends" functionalities
//     function initializeHomeFunctionality() {
//         const addFriendsButton = document.getElementById("add-friends-btn");
//         const friendsButton = document.getElementById("friends-btn");
//         const searchBarContainer = document.getElementById("search-bar-container");

//         // Add Friends Button: Toggle search bar visibility
//         if (addFriendsButton && searchBarContainer) {
//             addFriendsButton.addEventListener("click", () => {
//                 if (searchBarContainer.style.display === "none") {
//                     searchBarContainer.style.display = "block";
//                 } else {
//                     searchBarContainer.style.display = "none";
//                 }
//             });
//         }

//         // Friends Button: Placeholder functionality
//         if (friendsButton) {
//             friendsButton.addEventListener("click", () => {
//                 alert("Fetching your friends from the backend...");
//             });
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".test a"); // Navigation links
    const content = document.getElementById("content"); // Middle section for dynamic content

    // Define content for each section
    const pages = {
        home: `
            <div class="play_local">
                <div class="btn">
                    <button type="button" onclick="location.href='game.html';">Play Local Game</button>
                </div>
                <img class="f_img" src="dashboard img/full_button.png">
            </div>
            <div class="btn2">
                <button type="button" onclick="location.href='game.html';">Play Online Game</button>
            </div>
            <img class="f_img" src="dashboard img/full_buton_2.png">
            <div>
                <!-- Add Friends Button -->
                <button class="f_img_l" id="add-friends-btn" type="button">Add Friends</button>
                <!-- Search Bar (Initially Hidden) -->
                <div id="search-bar-container" style="display: none;">
                    <input class="search_bar" type="text" id="search-bar" placeholder="Search friends...">
                </div>
                
                <!-- Friends Button -->
                <button class="f_img_l2" id="friends-btn" type="button">Friends</button>
                <img class="f_img_last" src="dashboard img/FREINDLIST_041332.png">
            </div>
        `,
        profile: `
            <div class="profile">
                <h2>Your Profile</h2>
                <p>Manage your profile information here.</p>
            </div>
        `,
        game: `
            <div class="game">
                <h2>Game Page</h2>
                <p>Play exciting games here!</p>
            </div>
        `,
        tournament: `
            <div class="tournament">
                <h2>Tournaments</h2>
                <p>Join or create tournaments to compete!</p>
            </div>
        `,
        chat: `
            <div class="chat">
                <h2>Chat with Friends</h2>
                <p>Connect with friends here.</p>
            </div>
        `,
        settings: `
            <div class="settings">
                <h2>Settings</h2>
                <p>Adjust your preferences here.</p>
            </div>
        `,
    };

    // Function to check if the user is authenticated
    function isAuthenticated() {
        const token = localStorage.getItem("authToken");
        return token && token.length > 0; // Check if token exists and is not empty
    }

    // Function to redirect unauthenticated users to the login page
    function checkAuthentication() 
    {
        if (!isAuthenticated()) 
        {
            window.location.href = "/sign-in-page.html"; // Redirect to login page
        }
    }

    // Run authentication check on page load
    checkAuthentication();

    function setActiveLink(target) {
        links.forEach(link => link.classList.remove("active")); // Remove active class from all links
        target.classList.add("active"); // Add active class to the clicked link
    }

    // Add click event listeners to navigation links
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            
            const page = link.getAttribute("data-page");
            if (pages[page]) {
                content.innerHTML = pages[page];
                setActiveLink(link); // Load the corresponding content

                // Reinitialize home functionalities if on the home page
                if (page === "home") {
                    initializeHomeFunctionality();
                }
            } else {
                content.innerHTML = "<h2>Page Not Found</h2>"; // Handle undefined pages
            }
        });
    });

    // Load default (Home) content
    content.innerHTML = pages.home;
    initializeHomeFunctionality(); // Initialize Add Friends and Friends functionalities on load

    // Function to initialize the "Add Friends" and "Friends" functionalities
    function initializeHomeFunctionality() {
        const addFriendsButton = document.getElementById("add-friends-btn");
        const friendsButton = document.getElementById("friends-btn");
        const searchBarContainer = document.getElementById("search-bar-container");

        // Add Friends Button: Toggle search bar visibility
        if (addFriendsButton && searchBarContainer) {
            addFriendsButton.addEventListener("click", () => {
                if (searchBarContainer.style.display === "none") {
                    searchBarContainer.style.display = "block";
                } else {
                    searchBarContainer.style.display = "none";
                }
            });
        }

        // Friends Button: Placeholder functionality
        if (friendsButton) {
            friendsButton.addEventListener("click", () => {
                alert("Fetching your friends from the backend...");
            });
        }
    }
});


