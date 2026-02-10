function greet(...people) {
    people.forEach(person => console.log(`Hello ${person}`))
}

greet("James", "Amy", "Sam", "Jude", "Karen")

function get(text, sender, ...objects) {
    return objects.map(object => `<div class="label-card">
            <p>Dear ${object.name}</p>
            <p>${text}</p>
            <p>best wishes</p>
            <p>${sender}</p>
    </div>`
    ).join('')
}