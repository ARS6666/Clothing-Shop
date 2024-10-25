import React, { useState } from 'react';
import "https://kit.fontawesome.com/6c2a0de8a3.js"
import './test.css';

const AddToCartButton = () => {
    const [added, setAdded] = useState(false);

    const handleClick = (event) => {
        setAdded(true);

        // Create a dot element
        const dot = document.createElement('div');
        dot.className = 'dot';
        document.body.appendChild(dot);

        // Get the button's position
        const buttonRect = event.target.getBoundingClientRect();

        // Set initial position of the dot
        dot.style.left = `${buttonRect.right}px`;
        dot.style.top = `${buttonRect.top + buttonRect.height / 2}px`;

        // Animate dot to top right corner
        setTimeout(() => {
            dot.style.transform = 'translate(-100vw , -40px)';
        }, 10);

        // Remove dot after animation
        setTimeout(() => {
            document.body.removeChild(dot);
            setAdded(false);
        }, 2200); // Duration of animation
    };

    return (
        <>
            <h1 class="typing text-dark">fellan bisan</h1>

        </>
    );
};

export default AddToCartButton;
