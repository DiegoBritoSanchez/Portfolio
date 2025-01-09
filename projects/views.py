from django.http import JsonResponse
from .models import Project

def project_list(request):
    projects = Project.objects.all().values()
    return JsonResponse(list(projects), safe=False)
