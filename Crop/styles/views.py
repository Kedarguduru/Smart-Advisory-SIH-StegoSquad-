from django.http import HttpResponse, HttpResponseForbidden
from .models import APIKey

def css_api(request):
    api_key = request.GET.get('api_key') or request.headers.get('X-API-KEY')

    if not api_key or not APIKey.objects.filter(key=api_key).exists():
        return HttpResponseForbidden("Invalid or missing API key")

    bg_color = request.GET.get('bg', '#f0f0f0')
    text_color = request.GET.get('color', '#333')

    css = f"""
    body {{
        background-color: {bg_color};
        color: {text_color};
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }}

    h1 {{
        color: {text_color};
    }}
    """

    return HttpResponse(css, content_type='text/css')
