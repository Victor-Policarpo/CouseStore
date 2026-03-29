const pathArray = window.location.pathname.split('/');
const courseId = pathArray[pathArray.length - 1];

async function loadCurrentData() {
    try {
        const response = await fetch(`/courses/${courseId}`);
        const curso = await response.json();

        document.getElementById('edit-title').value = curso.title;
        document.getElementById('edit-instructor').value = curso.instructor;
        document.getElementById('edit-price').value = curso.price;
        document.getElementById('edit-image').value = curso.image;
        document.getElementById('edit-description').value = curso.description || "";
        document.getElementById('edit-level').value = curso.level || "Beginner";
        document.getElementById('edit-duration').value = curso.duration || "";
        document.getElementById('edit-spots').value = curso.availableSpots || 0;

    } catch (error) {
        console.error("Error loading course data:", error);
        alert("Failed to load course data.");
    }
}

async function updateCourse(event) {
    event.preventDefault();

    const dados = {
        title: document.getElementById('edit-title').value,
        instructor: document.getElementById('edit-instructor').value,
        price: parseFloat(document.getElementById('edit-price').value),
        image: document.getElementById('edit-image').value,
        description: document.getElementById('edit-description').value,
        level: document.getElementById('edit-level').value,
        duration: document.getElementById('edit-duration').value,
        availableSpots: parseInt(document.getElementById('edit-spots').value)
    };

    if (dados.price <= 0 || !dados.title) {
        alert("Please provide a valid title and price.");
        return;
    }

    const response = await fetch(`/courses/${courseId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    if (response.ok) {
        alert("Course updated successfully!");
        window.location.href = `/private/course/${courseId}`;
    }
}

async function deleteCourse() {
    if (confirm("Are you sure you want to delete this course forever?")) {
        const response = await fetch(`/courses/${courseId}`, { method: 'DELETE' });
        if (response.ok) {
            alert("Course deleted.");
            window.location.href = '/private/home'; 
        }
    }
}

window.onload = loadCurrentData;