from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.books_list, name='books'),
    path('books/add/<int:book_id>/', views.add_to_bag, name='add_to_bag'),
]
