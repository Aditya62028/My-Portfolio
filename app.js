// Tab Switching Functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    // Remove active class from all tabs and tab links
    Array.from(tablinks).forEach(tablink => tablink.classList.remove("active-link"));
    Array.from(tabcontents).forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    // Add active class to the clicked tab link and corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function opentab(tabName) {
    // Hide all tab contents
    var contents = document.querySelectorAll('.tab-contents');
    contents.forEach(function(content) {
        content.classList.remove('active-tab');
    });

    // Remove active-link from all tabs
    var tabs = document.querySelectorAll('.tab-links');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-link');
    });

    // Show the selected tab's content and set the tab as active
    document.getElementById(tabName).classList.add('active-tab');
    var activeTab = document.querySelector(`[onclick="opentab('${tabName}')"]`);
    activeTab.classList.add('active-link');
}


// Sidebar Menu Functionality
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-250px";
}

// Resume Button Click Event Handlers

document.getElementById("resume-button-1").onclick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    // Open the direct download link for the resume
    window.open("https://drive.google.com/file/d/1B1xsIwZw6b6kNYehXKGTWCjzHAJnzJ2q/view?usp=sharing", "_blank");
};

document.getElementById("resume-button-2").onclick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    // Open the direct download link for the resume
    window.open("https://drive.google.com/file/d/1B1xsIwZw6b6kNYehXKGTWCjzHAJnzJ2q/view?usp=sharing", "_blank");
};



/*====== MESSAGE REQUEST ======*/

// Initialize EmailJS with your API (Public Key)
emailjs.init('aF2Jrjyhp5tuslQEK'); 

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Status message element
    const statusMessage = document.getElementById("statusMessage");

    // Check if all fields are filled
    if (name && email && message) {
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Use your Service ID, Template ID, and the provided template parameters
        emailjs.send('service_tk21hbg', 'template_v9vc9ve', templateParams)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                statusMessage.textContent = "Message sent successfully!";
                statusMessage.style.color = "green";
                document.getElementById("contactForm").reset();
            })
            .catch(error => {
                console.log('FAILED...', error);
                statusMessage.textContent = "Failed to send message. Please try again.";
                statusMessage.style.color = "red";
            });
    } else {
        statusMessage.textContent = "Please fill in all fields.";
        statusMessage.style.color = "red";
    }
}

// Attach the sendEmail function to form submission
document.getElementById("contactForm").addEventListener("submit", sendEmail);
