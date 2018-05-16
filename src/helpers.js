export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getToDo() {
    const actions = ['Build', 'Add', 'Work', 'Print', 'Get', 'Go', 'Read', 'Meet', 'Watch']
    
    const events = ['Fishing', 'Roads', 'BookStores', 'Books','Friends', 'Notes', 'Twitter Clone', 'Home']

    return `${rando(actions)}-${rando(events)}`;
}

