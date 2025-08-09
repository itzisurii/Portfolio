const video = document.getElementById('bg-video');
video.playbackRate = 0.75;  

const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();  


  const name = this.name.value;
  const email = this.email.value;
  const subject = this.subject.value;
  const message = this.message.value;


  console.log('Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  alert("Your message has been sent!"); 

  form.reset();
});

