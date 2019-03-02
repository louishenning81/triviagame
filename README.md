# triviagame

So, I got pretty close on this assignment.  In the end I just ran out of time.

The main issue I still have to debug are:

1. The interplay between the functions *run*, *nextQuestion*, and *decrement*.  The more I play with it, I'm not sure I need *nextQuestion* at all and should just be bouncing from *run* to *decrement* to *displayAnswer* and then looping back to *run*. 
2. I think the pass back and forth between these functions should allow me to avoid creating functions for each question. 
3. I'm still having some issues displaying the text that I want in the locations I've outlined in JQuery using setTimeout and *displayAnswer*.
4. I haven't added the containers or counter for the *correct* and *wrong* variables but that's pretty straight forward.