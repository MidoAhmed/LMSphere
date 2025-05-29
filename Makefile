# Top-level Makefile for full-stack project

# Config
COMPOSE=docker-compose
BACKEND_PATH=./supabase
DOCKER_FILE=-f $(BACKEND_PATH)/docker-compose.yml

# --------------------------- SUPABASE BACKEND ---------------------------
start-backend:
	@echo "Starting Supabase backend..."
	$(COMPOSE) $(DOCKER_FILE) up -d

stop-backend:
	@echo "Stopping Supabase backend..."
	$(COMPOSE) $(DOCKER_FILE) down

restart-backend:
	@echo "Restarting Supabase backend..."
	$(MAKE) stop-backend
	$(MAKE) start-backend

logs-backend:
	@echo "Tailing Supabase backend logs..."
	$(COMPOSE) $(DOCKER_FILE) logs -f

ps-backend:
	@echo "Listing running containers..."
	$(COMPOSE) $(DOCKER_FILE) ps

psql:
	@echo "Opening Postgres shell..."
	docker exec -it supabase-db psql -U postgres -d postgres

migrate:
	@echo "Running database migrations..."
	# Placeholder for migration scripts

clean:
	@echo "Stopping and removing containers and volumes..."
	$(COMPOSE) $(DOCKER_FILE) down -v --remove-orphans

studio:
	@echo "Opening Supabase Studio..."
	open http://localhost:8000



# --------------------------- FRONTEND ---------------------------

start-frontend:
	cd $(FRONTEND_PATH) && npm run dev

install-frontend:
	cd $(FRONTEND_PATH) && npm install

build-frontend:
	cd $(FRONTEND_PATH) && npm run build

lint-frontend:
	cd $(FRONTEND_PATH) && npm run lint


# --------------------------- Info ---------------------------
help:
	@echo "🛠 Available make commands:"
	@echo ""
	@echo "Backend:"
	@echo "  make start-backend     - Start Supabase backend"
	@echo "  make stop-backend      - Stop backend"
	@echo "  make restart-backend   - Restart backend"
	@echo "  make ps-backend        - List running containers"
	@echo "  make logs-backend      - Tail logs"
	@echo "  make psql              - Open Postgres shell"
	@echo "  make clean             - Stop + remove volumes"
	@echo "  make migrate           - Run database migrations"
	@echo "  make studio            - Open Supabase Studio"
	@echo ""
	@echo "Frontend:"
	@echo "  make start-frontend    - Start React dev server"
	@echo "  make install-frontend  - Install React deps"
	@echo "  make build-frontend    - Build frontend"
	@echo ""
