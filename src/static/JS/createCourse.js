document.getElementById('createForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const feedback = document.getElementById('feedback-message');
    const dados = {
        title: document.getElementById('create-title').value,
        instructor: document.getElementById('create-instructor').value,
        price: parseFloat(document.getElementById('create-price').value),
        image: document.getElementById('create-image').value,
        description: document.getElementById('create-description').value || "No description provided",
        level: document.getElementById('create-level').value,
        duration: document.getElementById('create-duration').value || "Variable",
        availableSpots: parseInt(document.getElementById('create-spots').value) || 0
    };

    if (dados.price <= 0 || dados.title.length < 5) {
        feedback.style.color = 'red';
        feedback.innerText = "Error: Invalid price or title too short!";
        return;
    }

    try {
        const response = await fetch('/courses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });

        if (response.ok) {
            alert("Course created successfully!");
            window.location.href = '/private/home';
        } else {
            feedback.innerText = "Error saving course to database.";
        }
    } catch (error) {
        console.error("Fetch error:", error);
        feedback.innerText = "Connection failed.";
    }
});