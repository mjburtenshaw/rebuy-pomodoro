#!/bin/bash

# Prompt the user for confirmation
read -p "This will overwrite existing env files. Do you want to proceed? (y/n) " -n 1 -r
echo    # Move to a new line

if [[ $REPLY =~ ^[Yy]$ ]]
then
    # Copy the files if the user confirms
    cp ./.rebuy-pomodoro.db.sample.env ./.rebuy-pomodoro.db.env
    cp ./dao/config/config.sample.json ./dao/config/config.json
    cp ./api/.sample.env ./api/.env
    cp ./web-client/.sample.env ./web-client/.env
else
    echo "Operation cancelled."
fi
