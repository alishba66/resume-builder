var _a;
// app.ts
(_a = document.getElementById('dynamic-cv')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var Fathername = document.getElementById('FatherName').value;
    var surname = document.getElementById('SurName').value;
    var birthdate = document.getElementById('birthdate').value;
    var phoneNo = document.getElementById('Phoneno').value;
    var email = document.getElementById('Email').value;
    var Qualification = document.getElementById('Qualification').value;
    var workExperience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    var resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(Fathername, "</p>\n        <p><strong>surname:</strong>").concat(surname, "</span></p>\n        <p><strong>birthdate:</strong> ").concat(birthdate, "</span></p>\n         <p><strong>Phone-No:</strong> ").concat(phoneNo, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n       \n     \n       <p><strong>QUALIFICATION:</strong>").concat(Qualification, "</span></p>\n     \n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
    }
});
