from django.urls import path
from .views import *

urlpatterns = [
    path('', reader_manage, name='reader_manage'),
    path('toggle-active/<int:pk>/', toggle_active, name='toggle_active'),
    
]
