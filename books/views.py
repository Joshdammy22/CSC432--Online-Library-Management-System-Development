from django.shortcuts import render, redirect, get_object_or_404
from .models import Book
from users.models import Reader
from .forms import *
from django.views.decorators.http import require_POST

def books_list(request):
    query = request.GET.get('query')
    if query:
        books = Book.objects.filter(title__icontains=query)
    else:
        books = Book.objects.all()
    
    return render(request, 'books/books.html', {'books': books})

@require_POST
def add_to_bag(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    active_reader = get_object_or_404(Reader, is_active=True)
    Bag.objects.create(reader=active_reader, book_title=book.title, book_author=book.author)
    return redirect('books_list') 