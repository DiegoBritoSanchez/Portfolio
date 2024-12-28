from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.i18n import i18n_patterns

urlpatterns = i18n_patterns(
    path('admin/', admin.site.urls),
    path('', include('core.urls')),  # Incluimos las rutas de core
    path('projects/', include('projects.urls')),  # Incluimos las rutas de projects
    prefix_default_language=False
)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Añadimos la URL para cambiar idioma
urlpatterns += [
    path('i18n/', include('django.conf.urls.i18n')),
]