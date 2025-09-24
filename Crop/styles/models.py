from django.db import models
import secrets

class APIKey(models.Model):
    key = models.CharField(max_length=40, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, help_text="Name/label for this API key")

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = secrets.token_hex(20)  # Generates a 40-char hex key
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} ({self.key})"
