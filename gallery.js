window.onload = async function() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    console.log(data);
    const gallery = document.getElementById('gallery');
    data.users.forEach(user => {
        const container = document.createElement('div');
        container.className = 'image-container';
        
        const img = document.createElement('img');
        img.src = user.image;
        container.appendChild(img);
        
        //name
        let name = document.createElement('p');
        name.textContent = user.firstName;
        name.textContent+= " " + user.lastName;
        container.appendChild(name);

        gallery.appendChild(container);
    });
}