// Capture form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// Function to handle form submission and generate the resume
generateBtn.addEventListener('click', (event: Event) => {
  event.preventDefault();

  // Capture input data from the form
  const profilepicInput = document.getElementById('profilepic') as HTMLInputElement;
  const userName = (document.getElementById('username') as HTMLInputElement).value;
  const fullName = (document.getElementById('fullname') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const qualification = (document.getElementById('Qualification') as HTMLTextAreaElement).value;
  const professionalQualification = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;

  // Read the uploaded profile picture (if any)
  let profilePicDataUrl: string | null = null;

  if (profilepicInput.files && profilepicInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profilePicDataUrl = event.target?.result as string;

      // for the resume output,here we create HTML structure
      const resumeHTML = `
        <div class="resume-container">
          <h2><u>${fullName}</u></h2>
        
          <p><img  src="${profilePicDataUrl}" alt="Profile Picture" style="width: 180px; height: 180px; object-fit: cover; border-radius: 50% ;"></p>
          <hr>
          <p><strong>Username:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Residential Address:</strong><br>${address}</p>
          
          <h3>Skills:</h3> 
          <p>${skills}</p>
          
          <h3>Education:</h3>
          <p><strong>Academic Qualification:</strong><br>${qualification}</p>
          <p><strong>Professional Qualification:</strong><br>${professionalQualification}</p>
          
          <h3>Work Experience:</h3>
          <p>${experience}</p>
        </div>
      `;

      //the generated resume will be display here 
      resumeOutput.innerHTML = resumeHTML;
    };

    // Start reading the image file as a data URL
    reader.readAsDataURL(profilepicInput.files[0]);
  } else {
    
    // If resume user skipped his profile pic means no image is selected then we handle this case as follows:
    const resumeHTML = `
      <div class="resume-container">
        <h2>${fullName}'s Resume</h2>
        <p><strong>My Picture:</strong><br>No picture uploaded.</p>
        <p><strong>Username:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Residential Address:</strong><br>${address}</p><br>
        
        <Strong>Skills:</strong><br> 
        <p>${skills}</p><br>
        
        <b><u>Education:</u></b><br>
        <p><strong>Academic Qualification:</strong><br>${qualification}</p><br>
        <p><strong>Professional Qualification:</strong><br>${professionalQualification}</p>
        <br>
        <b>Work Experience:</b><br>
        <p>${experience}</p>
      </div>
    `;

    // Display generated resume without profile image
    resumeOutput.innerHTML = resumeHTML;
  }
});
