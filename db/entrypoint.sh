#!/bin/bash

echo "Starting PostgreSQL..."

exec docker-entrypoint.sh postgres
