import time
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 3)  # Wait between 1-3 seconds between tasks

    @task
    def load_home(self):
        self.client.get("/")

    @task
    def load_10min(self):
        self.client.get("/10min/")

    @task
    def load_60min(self):
        self.client.get("/60min/")

    @task
    def load_features(self):
        self.client.get("/features/")

    @task
    def load_how_it_works(self):
        self.client.get("/how-it-works/")

    @task
    def load_contact(self):
        self.client.get("/contact/")

    @task
    def load_privacy(self):
        self.client.get("/privacy/")

    @task
    def load_terms(self):
        self.client.get("/terms/")

    @task
    def load_abuse(self):
        self.client.get("/abuse/")