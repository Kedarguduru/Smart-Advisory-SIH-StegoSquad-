from django.contrib import admin
from .models import APIKey

@admin.register(APIKey)
class APIKeyAdmin(admin.ModelAdmin):
    list_display = ['name', 'key', 'created_at']
