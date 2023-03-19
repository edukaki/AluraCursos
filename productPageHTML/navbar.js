const body = document.querySelector("body");
const header = document.createElement("header");

header.innerHTML = `

<nav>
<div class="navbar">
    <div class="logo"></div> 
    <ul class="link-list">
        <li class="link-item">home</li>
        <li>contact</li>
        <li>about us</li>
    </ul>
</div>
</nav>`;

body.prepend(header);
