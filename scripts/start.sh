#!/bin/bash

BUILD=$1

if [ "$BUILD" == "build" ]; then
    echo "Building... and starting..."
    docker-compose up --build -d
else
    echo "Starting..."
    docker-compose up -d
fi