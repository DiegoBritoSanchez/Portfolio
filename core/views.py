from .models import Profile
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')

def contact(request):
    return render(request, 'core/contact.html')
def about(request):
    profile = Profile.objects.first()  # Solo tomamos el primer perfil
    return render(request, 'core/about.html', {'profile': profile})