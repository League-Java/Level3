---
assignment: 04_Maze_Maker
dir: levels/Level3/Module4/src/_04_Maze_Maker
lesson: 04_Maze_Maker
level: Level3
module: Module4
oassignment: 04_Maze_Maker
opath: levels/Level3/Module4/src/_04_Maze_Maker
title: 04 Maze Maker
---
<html>

###

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


The end goal of this program is to use a depth first search algorithm to generate a random maze of any size.
<img height="300" src="https://github.com/League-level4/League-level4.github.io/blob/master/maze_complete.png?raw=true" width="300"/>

###

First, complete the Maze class.

####

The result of running the program now gives us only a grid.
<img height="300" src="https://github.com/League-level4/League-level4.github.io/blob/master/maze_incomplete.png?raw=true" width="300"/>

####

In the MazeMaker class, complete the generateMaze method, selectNextPath method, the removeWalls method, and the getUnvisitedNeighbors method to generate a random maze.

#####

getUnvisitedNeighbors takes in a cell. It returns all the neighbors of the cell who have NOT yet been visited as an ArrayList.
removeWalls takes in two cells. It then figures out the relationship between the two cells and sets their shared walls to false. For example, If cell1 is directly above cell2, the removeWalls will set cell1's south wall to false and set cell2's north wall to false.
selectNextPath is a recursive method that uses the depth first search alogorithm to determine which walls to remove.
generateMaze will create a maze with the given dimensions, select a cell at random, and call the selectNextPath method using that random cell.

####

When the maze maker is generating correct mazes, pick a random cell along the border and remove its exterior wall. This will be the starting point. Then select a random cell along the opposite wall and remove its exterior wall. This will be the finish line.
<img height="300" src="https://github.com/League-level4/League-level4.github.io/blob/master/maze_with_exit.png?raw=true" width="300"/>
</html>