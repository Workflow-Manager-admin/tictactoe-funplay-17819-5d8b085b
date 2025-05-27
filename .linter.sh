#!/bin/bash
cd /home/kavia/workspace/code-generation/tictactoe-funplay-17819-5d8b085b/tic_tac_toe_game
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

