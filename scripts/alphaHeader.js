const template = document.createElement('template');

template.innerHTML = `

<style>

.user-card {
    background: #f4f4f4;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 10px;
    margin-bottom: 15px;
    border-bottom: darkorchid 5px solid;
    padding: 1em;
}
.user-card img {
    width: 100%;
}
.user-card button {
    cursor: pointer;
    background: darkorchid;
    color: white;
    border: 0;
    border-radius: 5px;
    padding: 5px 10px;
}

</style>

<div class='user-card'>
  <img />
  <div>
    <h3></h3> 
    <div class='info'>
    <p><slot name='email'/> </p>
    <p><slot name='phone'/> </p>
    </div>
    <button id='toggle-info'>Hide Info</button>
  </div>
</div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // Grab the h3 tag from the template and append it to the dom with 'name' set as the inner text 
        this.shadowRoot.querySelector("h3").innerText = this.getAttribute('name');
        // Grab the img tag from the template and append to the dom with the src of the avatar as its content 
        this.shadowRoot.querySelector("img").src = this.getAttribute('avatar');
    }
    // Button Toggle => Connected Callback
    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector(".info");
        const toggleBtn = this.shadowRoot.querySelector("#toggle-info");
        
        if (this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info'
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info'
        }
    };

    connectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").addEventListener('click', () => this.toggleInfo());
    }
    disconnectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").removeEventListener();
    }
};

window.customElements.define('user-card', UserCard);