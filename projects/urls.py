from django.urls import path
from . import views

urlpatterns = [
    path('api/projects/', views.projects_list, name='projects_list'),
]
