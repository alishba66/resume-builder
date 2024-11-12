// app.ts
document.getElementById('dynamic-cv')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const Fathername = (document.getElementById('FatherName') as HTMLInputElement).value;
    const surname = (document.getElementById('SurName') as HTMLInputElement).value;
    const  birthdate= (document.getElementById('birthdate') as HTMLInputElement).value;
     const phoneNo = (document.getElementById('Phoneno') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
   
   const Qualification = (document.getElementById('Qualification') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('Experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLTextAreaElement).value;
  
    const resumeOutput = document.getElementById('resume-output');
  
    if (resumeOutput) {
      resumeOutput.innerHTML = `
      <h2>Editable Resume</h2>
        <h2>${name}</h2>
        <p><strong>Fathername:</strong> ${Fathername}</p>
        <p><strong>surname:</strong> ${surname}</p>
        <p><strong>birthdate:</strong>${birthdate}</p>
         <p><strong>Phone-No:</strong>${phoneNo}</p>
        <p><strong>Email:</strong>${email}</p>
       
        <h3>Qualification:</h3>
        <p contenteditable="true">${Qualification}</p>
  
        <h3>Work Experience:</h3>
        <p contenteditable="true">${workExperience}</p>
  
        <h3>Skills:</h3>
        <p contenteditable="true">${skills}</p>
      `;
    }
  });
    