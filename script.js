// Task 1: Personal Info Object
const userProfile = {
    name: "Avirup Roy",
    birthYear: 2004,
    isDeveloper: true,
    hobbies: ["Gym", "Reading"]
};

const currentYear = new Date().getFullYear();

// Task 2: Arithmetic Calculations and Display
function updateProfileDisplay() {
    const age = currentYear - userProfile.birthYear;
    const months = age * 12;

    document.getElementById("display-name").innerText = userProfile.name;
    document.getElementById("display-year").innerText = userProfile.birthYear;
    document.getElementById("display-age").innerText = age;
    document.getElementById("display-months").innerText = months;
    document.getElementById("display-hobby-count").innerText = userProfile.hobbies.length;
    document.getElementById("display-dev").innerText = userProfile.isDeveloper;

    console.log("Age:", age);
    console.log("Months Old:", months);
    console.log("Total Hobbies:", userProfile.hobbies.length);
}

updateProfileDisplay();

// Task 3 and 4: Form Input and Event Listener
const form = document.getElementById("profile-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("username").value;
    const yearInput = document.getElementById("birthyear").value;

    userProfile.name = nameInput;
    userProfile.birthYear = Number(yearInput);

    updateProfileDisplay();
    form.reset();
});

// Task 5: DOM List Manipulation
const hobbyList = document.getElementById("hobby-list");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const newHobbyInput = document.getElementById("new-hobby");

addBtn.addEventListener("click", function() {
    const hobbyText = newHobbyInput.value;

    if (hobbyText !== "") {
        const newLi = document.createElement("li");
        newLi.innerText = hobbyText;
        hobbyList.appendChild(newLi);

        userProfile.hobbies.push(hobbyText);
        updateProfileDisplay();

        newHobbyInput.value = "";
    }
});

removeBtn.addEventListener("click", function() {
    if (hobbyList.lastElementChild) {
        hobbyList.lastElementChild.remove();

        userProfile.hobbies.pop();
        updateProfileDisplay();
    }
});