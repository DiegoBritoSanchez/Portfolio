from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    cv = models.FileField(upload_to='cv/')

    def __str__(self):
        return self.name
