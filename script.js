// Define waste estimation and tips for each food type
const foodData = {
    vegetables: { factor: 0.3, tips: ["Store in a cool, dry place.", "Use scraps for composting.", "Cook large batches to avoid spoilage."] },
    fruits: { factor: 0.25, tips: ["Keep fruits in the fridge to prolong freshness.", "Use overripe fruits for smoothies or baking.", "Avoid washing until ready to eat."] },
    meat: { factor: 0.4, tips: ["Store meat in the freezer if not using immediately.", "Plan meals to minimize overbuying.", "Cook leftovers into new dishes."] },
    dairy: { factor: 0.35, tips: ["Store dairy in the coldest part of the fridge.", "Check expiry dates before buying.", "Use dairy in sauces or soups before it expires."] },
    grains: { factor: 0.2, tips: ["Store grains in airtight containers.", "Cook only what you need.", "Use leftovers in soups or casseroles."] }
};

// Add event listener for the calculate button
document.getElementById("calculate-btn").addEventListener("click", () => {
    const foodType = document.getElementById("food-type").value;
    const foodQuantity = parseFloat(document.getElementById("food-quantity").value);

    // Validate input
    if (isNaN(foodQuantity) || foodQuantity <= 0) {
        alert("Please enter a valid food quantity.");
        return;
    }

    // Calculate estimated waste and environmental impact
    const wasteFactor = foodData[foodType].factor;
    const estimatedWaste = (foodQuantity * wasteFactor).toFixed(2);
    const environmentalImpact = (estimatedWaste * 2.5).toFixed(2); // Assuming 2.5kg CO2 equivalent per kg wasted food
    const costOfWastage = (estimatedWaste * 3.5).toFixed(2); // Example cost (3.5 USD/kg)

    // Update textual results
    document.getElementById("waste-estimation").innerText = 
        `Estimated Waste: ${estimatedWaste} kg. 
        Environmental Impact: ${environmentalImpact} kg CO₂ equivalent.`;

    // Update progress bars
    const impactPercentage = Math.min((environmentalImpact / 10) * 100, 100); // Example scaling for impact
    const costPercentage = Math.min((costOfWastage / 50) * 100, 100); // Example scaling for cost

    document.getElementById("impact-bar").style.width = `${impactPercentage}%`;
    document.getElementById("impact-value").innerText = `${impactPercentage.toFixed(1)}% Impact`;

    document.getElementById("cost-bar").style.width = `${costPercentage}%`;
    document.getElementById("cost-value").innerText = `$${costOfWastage} USD`;

    // Display dynamic tips
    const tipsList = document.getElementById("tips");
    tipsList.innerHTML = ""; // Clear existing tips
    foodData[foodType].tips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Make the result section visible
    document.getElementById("result").style.display = "block";
});
