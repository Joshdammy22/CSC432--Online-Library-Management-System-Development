from django.db import models
from users.models import Reader

class Bag(models.Model):
    reader = models.ForeignKey(Reader, on_delete=models.CASCADE, related_name='bags') 
    book_title = models.CharField(max_length=200)
    book_author = models.CharField(max_length=200)
    status = models.CharField(max_length=50, default='in_bag')

    def __str__(self):
        return f'{self.reader.name} - {self.book_title}'
