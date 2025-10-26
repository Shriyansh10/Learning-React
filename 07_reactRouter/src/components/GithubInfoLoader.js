const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shriyansh10');
    return response.json()
}

export default githubInfoLoader;