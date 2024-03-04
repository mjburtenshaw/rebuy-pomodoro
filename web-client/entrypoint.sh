#!/bin/sh

echo "Starting Web Client..."

cd ui

npm install

cd ../web-client

npm install

npm run dev
