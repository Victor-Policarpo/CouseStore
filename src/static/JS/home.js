const API_URL = '/courses'; 
async function listAllCourse() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch courses");
        
        const cursos = await response.json();
        const container = document.getElementById('courses-container');
        
        if (cursos.length === 0) {
            container.innerHTML = '<p>No courses found in the database.</p>';
            return;
        }

        container.innerHTML = '';

        cursos.forEach(curso => {
        container.innerHTML += `
            <div class="course-card">
                <a href="/private/course/${curso.id}" class="course-card-link" style="text-decoration: none; color: inherit;">
                    <img src="${curso.image}" alt="${curso.title}">
                    <div class="course-info">
                        <h3>${curso.title}</h3>
                        <p class="instructor">${curso.instructor}</p>
                        <p class="price">R$ ${curso.price.toFixed(2).replace('.', ',')}</p>
                    </div>
                </a>
            </div>`;
        });

    } catch (error) {
        document.getElementById('courses-container').innerHTML = '<p style="color: red;">Error connecting to server.</p>';
    }
}

window.onload = listAllCourse;