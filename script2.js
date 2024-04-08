 // JavaScript to show only the clicked section
 document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const monthlyChartBtn = document.getElementById('monthly-chart-btn');
const monthlyActivityPage = document.getElementById('monthly-activity-page');

// Hide all sections except the home section initially
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    if (section.id !== 'home') {
        section.style.display = 'none';
    }
});

// Event listener for nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Show monthly activity page when Monthly Chart button is clicked
monthlyChartBtn.addEventListener('click', function() {
    // Hide all sections except the monthly activity page
    sections.forEach(section => {
        if (section.id === 'monthly-activity-page') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});
});

const monthlyActivities = {
Maths: "Maths activities for the month: - Solve 10 algebra problems - Complete chapter 5 exercises",
Science: "Science activities for the month: - Conduct an experiment on photosynthesis - Study chapter 3 on electricity",
English: "English activities for the month: - Write a short story - Practice grammar exercises",
Social: "Social activities for the month: - Write a short story - study history and Geography chapters ",
Hindi: "Hindi activities for the month: - Write a short story - Practice grammar exercises",
Computers: "Computer activities for the month: - Learn java,C,C++ and database coding problems",

// Add more subjects and their respective activities here
};

// Function to update the content of activity-list based on selected subject
function updateMonthlyActivity(subject) {
const activityList = document.getElementById('activity-list');
activityList.textContent = monthlyActivities[subject];
}

// Event listener to update activity content when subject is selected
const subjectDropdown = document.getElementById('subject-dropdown');
subjectDropdown.addEventListener('change', function() {
const selectedSubject = this.value;
updateMonthlyActivity(selectedSubject);
});