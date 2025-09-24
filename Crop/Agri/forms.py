from django import forms
from .models import Signup

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = Signup
        fields = ['username', 'email', 'phone', 'password']
        widgets = {
            'password': forms.PasswordInput(),
        }
