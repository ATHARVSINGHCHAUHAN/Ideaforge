// This function runs when user clicks a domain card
function goToIdeas(domain) {
    // Save the selected domain
    localStorage.setItem('selectedDomain', domain);
    
    // Go to the ideas page
    window.location.href = 'ideas.html';
}