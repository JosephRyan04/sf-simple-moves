'use strict';

import getCurrentTime from './clock';
import getDay from './day';
import './app.css';



(function() {

    // Your code here
    
    var movelistArea = document.querySelector('#Movelist > div.movelist_movelistarea__apFXP');

    // Loop through all children
    var children = movelistArea.children;
    
    for (var i = 0; i < children.length; i++) {
        // Check if the current child is an h4
        if (children[i].tagName === 'H4') {
            // Assume the next sibling is the corresponding ul
            var nextElement = children[i + 1];
            
            // Check if the next element is a ul
            if (nextElement && nextElement.tagName === 'UL') {
                // Create a new button element
                var toggleButton = document.createElement('button');
                toggleButton.textContent = 'Toggle List';
    
                // Add a click event to toggle the visibility of the <ul>
                toggleButton.addEventListener('click', (function(ul) {
                    return function() {
                        if (ul.style.display === 'none' || ul.style.display === '') {
                            ul.style.display = 'block';
                        } else {
                            ul.style.display = 'none';
                        }
                    };
                })(nextElement)); // Pass the ul element to the event handler
    
                // Option 1: Append the button inside the h4
                children[i].appendChild(toggleButton);
    
                // Option 2: Insert the button before the ul (Uncomment if you prefer this option)
                // movelistArea.insertBefore(toggleButton, nextElement);
            }
        }
    }


  // Communicate with background file by sending a message
  chrome.runtime.sendMessage(
    {
      type: 'GREETINGS',
      payload: {
        message: 'Hello, my name is Ove. I am from Override app.',
      },
    },
    response => {
      console.log(response.message);
    }
  );
})();
