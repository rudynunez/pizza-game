class TextMessage {
    constructor({text, onComplete}) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
    }

    createElement() {
        // Create the element
        this.element = document.createElement("div");
        this.element.classList.add("Textmessage");

        this.element.innerHTML = (`
        <p class ="TextMessage_p">${this.text}</p>
        <button class="TextMessage_button">Next</button>
        `)

        this.element.querySelector("button").addEventListener("click", () => {
            // CLose the  text message
            this.done();
        });
    }

    done() {
        this.element.remove();
        this.onComplete();
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element)
    }

}