export async function getAllVotes() {
    const response = await fetch('/api/votes');
    return await response.json();
}

export async function resetAllVotes() {
    const response = await fetch('/api/resetvotes');
    return await response.json();
}

export async function createVote(data) {
    const response = await fetch(`/api/vote`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({vote: data})
      })
    return await response.json();
}