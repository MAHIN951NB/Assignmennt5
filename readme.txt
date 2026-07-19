What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-getElementById will target an element that matches this id.

How do you create and insert a new element into the DOM?
-document.createElement() to create an element


What is Event Bubbling and how does it work?
-Event Bubbling is the process where an event starts from the target element and then propagates upward through its parent elements until it reaches the

What is Event Delegation in JavaScript? Why is it useful?
-Event Delegation is a technique where you attach one event listener to a parent element instead of attaching listeners to each child.

What is the difference between preventDefault() and stopPropagation() methods?
-preventDefault()	stopPropagation()
Prevents the browser's default action.	Stops the event from bubbling (or propagating further).
Does not stop other event listeners from running.	Does not prevent the browser's default behavior.