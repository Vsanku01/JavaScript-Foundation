const mentorBtn = document.getElementById("mentor-btn");
const studentBtn = document.getElementById("student-btn");
const mentorOptions = document.getElementById("mentor-options");
const viewMentorOptions = document.getElementById("view-mentors");
const studentOptions = document.getElementById("student-options");
const assignStudent = document.getElementById("assign-student");
const tbody = document.querySelector("tbody");

// Storage
const storage = JSON.parse(localStorage.getItem("studentOptions")) || [];

const fetchData = async () => {
  let getData = await fetch("http://localhost:3000/data");
  let parsedData = await getData.json();
  console.log(parsedData);
};
fetchData();

// Post Data
const postMentor = async () => {
  let mentorData = {
    name: document.getElementById("candidate").value,
  };
  await fetch("http://localhost:3000/add-mentor", {
    method: "POST",
    body: JSON.stringify(mentorData),
    headers: {
      "Content-type": "application/json",
    },
  });

  // Appending to the list of mentors
  let option = document.createElement("option");
  option.value = mentorData.name.toLocaleLowerCase();
  option.text = mentorData.name;
  mentorOptions.append(option);
  // View Mentors
  let option2 = document.createElement("option");
  option2.value = mentorData.name.toLocaleLowerCase();
  option2.text = mentorData.name;
  viewMentorOptions.append(option2);

  // Alert
  alert(`Added ${mentorData.name} as Mentor`);
};

const postStudent = async () => {
  let studentData = {
    name: document.getElementById("candidate").value,
  };
  await fetch("http://localhost:3000/add-student", {
    method: "POST",
    body: JSON.stringify(studentData),
    headers: {
      "Content-type": "application/json",
    },
  });

  // Alert
  alert(`Added ${studentData.name} as Student`);
  updateStudentsList();
};

const updateStudentsList = async () => {
  let getStudentOptions = await fetch("http://localhost:3000/update");
  let parsedData = await getStudentOptions.json();
  console.log("Parsed Data", parsedData.options);
  // Appending to the list of students

  console.log("storage", storage);

  parsedData.options.forEach((element) => {
    if (!storage.includes(element.name)) {
      let option = document.createElement("option");
      option.value = element.name;
      option.text = element.name;
      option.id = element.name;
      studentOptions.append(option);
      storage.push(element.name);
    }

    // storage
    localStorage.setItem("studentOptions", JSON.stringify(storage));
  });
};

const postAssignStudent = async () => {
  let updateData = {
    mentor: mentorOptions.value,
    student: studentOptions.value,
  };

  let deleteOption = document.getElementById(studentOptions.name);
  deleteOption.remove();

  await fetch("http://localhost:3000/assign", {
    method: "POST",
    body: JSON.stringify(updateData),
    headers: {
      "Content-type": "application/json",
    },
  });

  updateStudentsList();
};

const getStudentDetails = async (mentorName) => {
  let getStudentData = await fetch("http://localhost:3000/data/" + mentorName);
  let parsedData = await getStudentData.json();
  console.log("Details", parsedData.students);

  let html = "";
  parsedData.students.forEach((student, idx) => {
    html += `
      <tr>
      <th scope="row">${idx + 1}</th>
      <td>${student}</td>
    </tr>
    `;
  });

  tbody.innerHTML = html;
};

// Listeners
mentorBtn.addEventListener("click", (e) => {
  e.preventDefault();
  postMentor();
});

studentBtn.addEventListener("click", (e) => {
  e.preventDefault();
  postStudent();
});

assignStudent.addEventListener("click", async (e) => {
  e.preventDefault();
  postAssignStudent();
});

viewMentorOptions.addEventListener("change", (e) => {
  console.log(viewMentorOptions.value);
  getStudentDetails(viewMentorOptions.value);
});
