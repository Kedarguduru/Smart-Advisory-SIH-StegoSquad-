from django.db import models

class Signup(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username

