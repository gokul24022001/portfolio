// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))




function openModal() {
      document.getElementById("modal-container").classList.add("active");
    }
    
    function closeModal() {
      document.getElementById("modal-container").classList.remove("active");
    }
    
// Select the contact form
const contactForm = document.querySelector('.contact_form');

// Add an event listener for form submission
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const formData = new FormData(contactForm);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    // Send form data to the Zapier webhook
    const response = await fetch('https://hooks.zapier.com/hooks/catch/21117824/28id8c6/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Handle the response
    if (response.ok) {
      alert('Your message has been sent successfully!');
      contactForm.reset(); // Clear the form fields
    } else {
      alert('There was an issue sending your message. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});
