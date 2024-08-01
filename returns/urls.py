from django.urls import path
from . import views

urlpatterns = [
    path('returns/', views.returns_view, name='returns'),
]
