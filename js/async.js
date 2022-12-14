
const loadUserFetch = () => {
    const url = `https://randomuser.me/api/?gender=female`
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data.results[0]))

        // jodi kono problem thake bole dibe r na thakle cholte thakbe
        .catch(error => console.log(error))
}

const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUsers(data.results[0]);
    }
    catch (error) {
        console.log(object);
    }
    
}

const displayUsers = user => {
    console.log(user);
}
loadUserFetch();