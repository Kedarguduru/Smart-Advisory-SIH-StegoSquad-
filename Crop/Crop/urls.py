"""
URL configuration for Agri project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Agri import views as agriViews
from Agri.views import signup_view
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', agriViews.intro_view,name='intro'),
    path('forgot/', agriViews.Forgot_view,name='forgot'),
    path('login/', agriViews.login_view,name='login'),
    path('roles/', agriViews.rolepage_view,name='roles'),
    path('main/', agriViews.main_view,name='main'),
    path('separation/', agriViews.separation_view,name='separation'),
    path('signup/', agriViews.signup_view,name='signup'),
    #Backend Signup path
    path('Agri/Signup', signup_view, name='signup'),
    #path('agri/', include('Crop.urls'))

]
