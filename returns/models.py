from django.db import models
from django.contrib.auth.models import User
from books.models import Book

class Return(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    return_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.book.title} - {self.user.username}'
