// search section

document.getElementById('searchIcon').addEventListener('click', function() {
    document.getElementById('searchInput').style.display = 'block'; // Show the search input
    document.getElementById('closeIcon').style.display = 'block'; // Show the close icon
    this.style.display = 'none'; // Hide the search icon
    document.getElementById('searchInput').focus(); // Focus the input field
});

document.getElementById('closeIcon').addEventListener('click', function() {
    document.getElementById('searchInput').style.display = 'none'; // Hide the search input
    document.getElementById('searchIcon').style.display = 'block'; // Show the search icon
    this.style.display = 'none'; // Hide the close icon
});

// arrow dropdown rotate functionality
    document.addEventListener('DOMContentLoaded', function() {
        const dropdownToggleButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
        dropdownToggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const arrowIcon = button.querySelector('i.fas.fa-chevron-right');
                if (arrowIcon) {
                    arrowIcon.classList.toggle('rotate');
                }
            });
        });
    });

// show more option
function showMore(event) {
    event.preventDefault();
    var hiddenItems = document.querySelectorAll('.hidden');
    hiddenItems.forEach(function(item) {
        item.style.display = 'list-item';
    });
    var showMoreBtn = document.querySelector('.show-more');
    var showLessBtn = document.querySelector('.show-less');
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'list-item';
}

function showLess(event) {
    event.preventDefault();
    var allItems = document.querySelectorAll('.art-list li');
    allItems.forEach(function(item, index) {
        if (index >= 4 && !item.classList.contains('show-more')) {
            item.style.display = 'none';
        }
    });
    var showMoreBtn = document.querySelector('.show-more');
    var showLessBtn = document.querySelector('.show-less');
    showMoreBtn.style.display = 'list-item';
    showLessBtn.style.display = 'none';
}


document.getElementById('yesButton').addEventListener('click', function() {
    alert('Thank you for your feedback!');
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('We are sorry to hear that. We will improve our services!');
});


