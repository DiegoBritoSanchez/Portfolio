from django.http import JsonResponse
from .models import Project

def projects_list(request):
    projects = Project.objects.all()  # Obtenemos todos los proyectos
    data = [project.to_dict() for project in projects]  # Convertimos a dict usando el método del modelo
    return JsonResponse(data, safe=False)  # Retornamos la lista en formato JSON
