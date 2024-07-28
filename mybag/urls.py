from django.urls import path
from . import views

urlpatterns = [
    path('', views.mybag, name='mybag'),
    path('checkout_success/', views.checkout, name='checkout'),
]
