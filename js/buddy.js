const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies(); /// here we called the function so don't need any btn
const displayBuddies = (data) => {
    // console.log(data);
    // this data is little bit complex
    const buddies = data.results; /// if u see the data this data in an object name result in result this part is an array then the object 
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(buddy);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        email: ${buddy.email}
        `;
        buddiesDiv.appendChild(p);
    }
}