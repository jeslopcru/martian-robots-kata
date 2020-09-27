.PHONY: help
help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


# DOCKER TASKS
# Build the container
build: ## Build the container
	@docker-compose build
run: ## run app
	@docker-compose run app
bash: ## open bash
	@docker-compose run app bash
test: ## run test
	@docker-compose run app npm test

