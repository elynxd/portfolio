#!/bin/bash

echo "🏗️  Building Docker image..."
docker build -t website_portfolio:test .

echo "🚀 Starting container..."
docker run -d --name website_portfolio_test -p 3000:3000 website_portfolio:test

echo "⏳ Waiting for container to start..."
sleep 5

echo "📋 Container status:"
docker ps -f name=website_portfolio_test

echo "📝 Container logs:"
docker logs website_portfolio_test

echo "🧪 Testing application..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Application is responding!"
else
    echo "❌ Application is not responding"
fi

echo "🧹 Cleaning up..."
docker stop website_portfolio_test
docker rm website_portfolio_test

echo "✨ Test complete!"
