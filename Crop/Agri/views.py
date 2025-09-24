from django.shortcuts import render

# Create your views here.
def intro_view(request):
    return render(request, 'Agri/intro.html')
def Forgot_view(request):
    return render(request, 'Agri/ForgotPassword.html')
def rolepage_view(request):
    return render(request, 'Agri/roles.html')
def login_view(request):
    return render(request, 'Agri/login.html')
def separation_view(request):
    return render(request, 'Agri/separation.html')
def main_view(request):
    return render(request, 'Agri/Main.html')
def signup_view(request):
    return render(request, 'Agri/Signup.html')

#Backend For Signup
from django.shortcuts import render, redirect
from .forms import Signup

def signup(request):
    if request.method == 'POST':
        form = Signup(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')  # Redirect after successful form submission
    else:
        form = Signup()
    return render(request, 'Agri/Signup.html', {'form': form})





