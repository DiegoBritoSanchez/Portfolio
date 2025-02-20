from django.http import JsonResponse
from .models import Profile

def profile_view(request):
    """Devuelve la información del perfil en formato JSON."""
    profile = Profile.objects.first()  # Solo tomamos un único perfil
    if profile:
        data = {
            "id": profile.id,
            "name": profile.name,
            "bio": profile.bio,
            "cv": profile.cv.url if profile.cv else None
        }
        return JsonResponse(data)
    return JsonResponse({"error": "No profile found"}, status=404)
