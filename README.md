# Memory-Game



Bugs and issues that occurred:

When creating the board/grid itself, there were issues where I would get grid stretching while trying to modify the size of the tiles. This would not affect functionality but would cause significant issues with making everything the right size.

The grid would centre itself comfortably from left to right up and down, attempts to get it to centre top to bottom had resulted in the grid conflicting with other CSS and going blank and then also, the grid would separate with 4 squares and grid box sized gaps in-between it.

To keep the game isolated from the rest of the 'body' CSS changes, the game needed to get wrapped in another div to give it, its own exclusive properties. I regularly kept my styling simple and used 'body' rules to keep things from getting complicated but as a result, this created complications.


Features to add:

I will sort features to add by what I think will be easier and what will be harder so if I do decide to add more, I can break down the process and focus on easier features first and harder features last.

Easier Features:
    - Restart game button (New game, keep all current counters)
    - Reset game button (Reset the game and any counters added)
    - Timer (Keep track of time spent in game/quickest game completed OR create a countdown timer that will fail the game if it reaches 0)
    - Scoring system/stats - Games won counter/pairs matched counter | Counter to keep track of incorrect matches per game and/or all-time incorrect guesses. Winning 5 games isn't impressive if there is no consequence for an incorrect guess or taking a while to match them all up, I could either limit time or incorrect guesses/matches allowed per game or have it so it just keeps count so if someone wins 5 games with only 20 wrong guesses in all of them combined, then they can brag over the person who made 40 incorrect matches before winning their 5 games


Intermediate Features:
    - Themes for card fronts and backs - Themes for card backs/fronts could include different colours, programming languages, AFL teams, genres of music, movies, bands,

Advanced Features:
    - Dynamic Interface - Make this game more UI friendly including phones/smaller screens
    - Proper Scaling - Make sure if this game was to be exported on a smaller window, everything would scale appropriate
