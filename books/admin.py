from django.contrib import admin
from .models import Book

class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'isbn', 'publication_date', 'genre', 'copies_available')
    search_fields = ('title', 'author', 'isbn')

admin.site.register(Book, BookAdmin)
