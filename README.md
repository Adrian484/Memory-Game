# Memory-Game



Bugs and issues that occurred:

When creating the board/grid itself, there were issues where I would get grid stretching while trying to modify the size of the tiles. This would not affect functionality but would cause significant issues with making everything the right size.

The grid would centre itself comfortably from left to right up and down, attempts to get it to centre top to bottom had resulted in the grid conflicting with other CSS and going blank and then also, the grid would separate with 4 squares and grid box sized gaps in-between it.

To keep the game isolated from the rest of the 'body' CSS changes, the game needed to get wrapped in another div to give it, its own exclusive properties. I regularly kept my styling simple and used 'body' rules to keep things from getting complicated but as a result, this created complications.

