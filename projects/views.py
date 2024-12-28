from django.shortcuts import render
from .models import Project

def projects_list(request):
    projects = Project.objects.all()
    return render(request, 'projects/projects_list.html', {'projects': projects})
