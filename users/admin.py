from django.contrib import admin
from .models import Reader

@admin.register(Reader)
class ReaderAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'reference_id', 'address')
    search_fields = ('name', 'reference_id')
