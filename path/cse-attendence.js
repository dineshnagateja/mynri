document.getElementById("fetchButton").addEventListener("click", fetchStudentDetails);

function fetchStudentDetails() {
    const rollNumber = document.getElementById("rollNumber").value;
    const studentDetailsContainer = document.getElementById("studentDetailsContainer");

    fetch(`/fetch-data?rollNumber=${rollNumber}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                studentDetailsContainer.textContent = "An error occurred while fetching data.";
            } else {
                const studentName = data.name;
                const attendance = data.attendance;
                studentDetailsContainer.innerHTML = `
                    <p>Name: ${studentName}</p>
                    <p>Attendance: ${attendance}%</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            studentDetailsContainer.textContent = "An error occurred while fetching data.";
        });
}
