#!/bin/bash
# Script de build Docker pour Boris

echo "🚀 Building Docker image for Boris's portfolio..."

# Build de l'image Docker
docker build -t boris-portfolio:latest .

echo "✅ Docker image built successfully!"

# Optionnel: Tag pour différents environnements
docker tag boris-portfolio:latest boris-portfolio:prod
docker tag boris-portfolio:latest boris-portfolio:$(date +%Y%m%d)

echo "🏷️  Tagged images:"
docker images | grep boris-portfolio

echo "🎉 Ready to deploy!"