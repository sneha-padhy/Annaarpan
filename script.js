const meals = {
  breakfast: [
    { name: "Poha", type: "veg", calories: 250, protein: "5g" },
    { name: "Oats Upma", type: "veg", calories: 300, protein: "7g" },
    {
      name: "Boiled Eggs & Toast",
      type: "non-veg",
      calories: 350,
      protein: "15g",
    },
    { name: "Idli Sambar", type: "veg", calories: 320, protein: "6g" },
  ],
  lunch: [
    { name: "Rajma Chawal", type: "veg", calories: 450, protein: "12g" },
    {
      name: "Paneer Bhurji & Roti",
      type: "veg",
      calories: 500,
      protein: "18g",
    },
    {
      name: "Chicken Curry & Rice",
      type: "non-veg",
      calories: 600,
      protein: "30g",
    },
    { name: "Palak Dal & Rice", type: "veg", calories: 400, protein: "11g" },
  ],
  dinner: [
    { name: "Khichdi", type: "veg", calories: 400, protein: "10g" },
    {
      name: "Grilled Fish & Veggies",
      type: "non-veg",
      calories: 480,
      protein: "28g",
    },
    { name: "Veg Pulao & Raita", type: "veg", calories: 450, protein: "9g" },
    { name: "Daliya & Salad", type: "veg", calories: 350, protein: "8g" },
  ],
};

function showMeals(type) {
  const display = document.getElementById("meal-display");
  display.innerHTML = "";
  let filtered = meals[type];

  if (document.getElementById("vegOnly").checked) {
    filtered = filtered.filter((m) => m.type === "veg");
  }
  if (document.getElementById("highProteinOnly").checked) {
    filtered = filtered.filter((m) => parseInt(m.protein) >= 10);
  }

  filtered.forEach((meal) => {
    display.innerHTML += `
      <div class="meal-card">
        <h3>${meal.name} ${meal.type === "veg" ? "🌱" : "🍗"}</h3>
        <p><strong>Calories:</strong> ${meal.calories} kcal</p>
        <p><strong>Protein:</strong> ${meal.protein}</p>
      </div>
    `;
  });

  updateTipsAndMyths();
}

function generateWeeklyPlan() {
  const display = document.getElementById("meal-display");
  display.innerHTML = "<h2>🍽️ Weekly Plan</h2>";
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  days.forEach((day) => {
    const b = getRandomMeal("breakfast");
    const l = getRandomMeal("lunch");
    const d = getRandomMeal("dinner");
    display.innerHTML += `
      <div class="meal-card">
        <h3>${day}</h3>
        <p><strong>Breakfast:</strong> ${b.name}</p>
        <p><strong>Lunch:</strong> ${l.name}</p>
        <p><strong>Dinner:</strong> ${d.name}</p>
      </div>
    `;
  });
  updateTipsAndMyths();
}

function getRandomMeal(type) {
  const options = meals[type];
  return options[Math.floor(Math.random() * options.length)];
}

function applyFilter() {
  const buttons = document.querySelectorAll(".btn-group button");
  buttons.forEach((btn) => {
    if (btn.classList.contains("active")) {
      const mealType = btn.textContent.trim().toLowerCase();
      showMeals(mealType);
    }
  });
}

function showHealthyWeight() {
  const age = document.getElementById("age-select").value;
  const output = document.getElementById("healthy-weight");
  let msg = "";
  switch (age) {
    case "child":
      msg = "Ideal weight: 16–30 kg";
      break;
    case "teen":
      msg = "Ideal weight: 45–60 kg";
      break;
    case "adult":
      msg = "Ideal weight: 55–75 kg";
      break;
    case "senior":
      msg = "Ideal weight: 50–70 kg";
      break;
    default:
      msg = "";
  }
  output.innerText = msg;
}
function updateTipsAndMyths() {
  document.getElementById("daily-tip").innerText =
    tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("food-myth").innerText =
    myths[Math.floor(Math.random() * myths.length)];
}
