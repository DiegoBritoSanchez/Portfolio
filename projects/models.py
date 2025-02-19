from django.db import models
from django.conf import settings

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=50)
    image = models.ImageField(upload_to='projects/')
    github = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def image_url(self):
        if self.image:
            return f"{settings.MEDIA_URL}{self.image}"
        return ""

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "technology": self.technology,
            "image": self.image_url(),  # Aquí generamos la URL completa
            "github": self.github,
        }

    def __str__(self):
        return self.title
