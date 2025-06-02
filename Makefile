# Top-level Makefile for full-stack project

# Config
project_id ?= "LMSphere"
db_container_name ?= "supabase_db_$(project_id)"

# --------------------------- SUPABASE BACKEND ---------------------------
start-stack:
	@echo "Starting Supabase local development stack..."
	yarn supabase start

stop-stack:
	@echo "Stopping Supabase local development stack..."
	yarn supabase stop

logs-stack:
	@echo "Tailing Supabase local development stack logs..."

ps-stack:
	@echo "Listing running containers..."
	docker ps

status:
	@echo "Checking Supabase local development stack status..."
	yarn supabase status

psql:
	@echo "Opening Postgres shell..."
	docker exec -it $(db_container_name) psql -U postgres -d postgres

migrate:
	@echo "Running database migrations..."
	# Placeholder for migration scripts

reset-db:
	@echo "Resetting the local database to a clean state..."
	yarn supabase db reset

studio:
	@echo "Opening Supabase Studio..."
	open http://localhost:54323



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
	@echo "  make start-stack     - Start Supabase local development stack"
	@echo "  make stop-stack      - Stop local development stack"
	@echo "  make status          - Check local development stack status"
	@echo "  make ps-stack        - List running containers"
	@echo "  make logs-stack      - Tail logs"
	@echo "  make psql            - Open Postgres shell"
	@echo "  make reset-db       - Reset the local database to a clean state"
	@echo "  make migrate         - Run database migrations"
	@echo "  make studio          - Open Supabase Studio"
	@echo ""
	@echo "Frontend:"
	@echo "  make start-frontend    - Start React dev server"
	@echo "  make install-frontend  - Install React deps"
	@echo "  make build-frontend    - Build frontend"
	@echo ""
