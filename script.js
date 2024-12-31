document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const dropdownSpace = document.getElementById('dropdown-space');
    
    // Populate dropdown space with a search bar, buttons, and list items
    const searchBar = `
        <div class="search-bar">
            <input type="text" placeholder="Search here...">
            <button>Search</button>
        </div>
    `;

    const buttons = `
        <div class="buttons">
            <button type="button" class="sec2-btn">Most Popular</button>
            <button type="button" class="sec2-btn">Birthday</button>
            <button type="button" class="sec2-btn">Sympathy</button>
            <button type="button" class="sec2-btn">Occasions</button>
            <button type="button" class="sec2-btn">Flowers</button>
            <button type="button" class="sec2-btn">Plants</button>
            <button type="button" class="sec2-btn">Gifts</button>
            <button type="button" class="sec2-btn">Same Day Delivery</button>
        </div>
    `;

    const listItems = `
        <div class="list-items">
            <ul>
                <li>Help</li>
                <li>ProPerks</li>
                <li>Sign In</li>
            </ul>
        </div>
    `;

    dropdownSpace.innerHTML += `
        ${searchBar}${buttons}${listItems}
    `;

    // Toggle dropdown visibility on hamburger click
    hamburgerMenu.addEventListener('click', () => {
        dropdownSpace.classList.add('show'); // Show the dropdown
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownSpace.contains(e.target) && !hamburgerMenu.contains(e.target)) {
            dropdownSpace.classList.remove('show'); // Hide the dropdown if clicked outside
        }
    });

    // Adjust visibility of original elements on resize
    const handleResize = () => {
        const sec2List = document.getElementById('sec2-list');
        const sec2Flex2 = document.getElementById('sec2-flex2');

        if (window.innerWidth <= 1200) {
            sec2List.style.display = 'none';
            sec2Flex2.style.display = 'none';
            hamburgerMenu.style.display = 'flex';
        } else {
            sec2List.style.display = 'flex';
            sec2Flex2.style.display = 'flex';
            hamburgerMenu.style.display = 'none';
            dropdownSpace.classList.remove('show'); // Ensure dropdown is hidden on larger screens
        }
    };

    // Run on page load and window resize
    window.addEventListener('resize', handleResize);
    handleResize();
});
