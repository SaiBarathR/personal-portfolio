export async function getGithubUserDetails(githubUser) {
    return fetch(`https://api.github.com/users/${githubUser}`, {
        username: githubUser,
        headers: { 'X-GitHub-Api-Version': '2022-11-28' }
    }).then((response) => response.json()).then((data) => data);
}

export async function getRepos(githubUser) {
    return fetch(`https://api.github.com/users/${githubUser}/repos`, {
        owner: 'OWNER',
        repo: 'REPO',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    }).then((response) => response.json()).then((data) => data);
}
