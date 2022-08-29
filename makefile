.PHONY: kill up build down

include .env
export DOCKER_PROJECT = ${PROJECT_NAME}

kill:
	docker compose kill

build:
	docker compose up -d --build

down:
	docker compose down