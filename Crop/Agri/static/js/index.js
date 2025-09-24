function showPage(page) {
    if (window.pages && window.pages[page]) {
        document.getElementById('content').innerHTML = window.pages[page];
    } else {
        document.getElementById('content').innerHTML = `<p style="color:red;">Page "${page}" not found.</p>`;
    }
}


