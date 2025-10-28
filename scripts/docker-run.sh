#!/bin/bash
# Script de démarrage Docker pour Boris

echo "🚀 Starting Boris's portfolio with Docker Compose..."

# Arrêter les containers existants
docker compose down

# Démarrer tous les services
docker compose up -d

echo "✅ Services started!"
echo "🌐 Web app: http://localhost:3000"
echo "🔧 Nginx: http://localhost:80"
echo "🗄️  PostgreSQL: localhost:5433"
echo "🔴 Redis: localhost:6380"

# Afficher les logs
echo "📋 Logs:"
docker compose logs -f