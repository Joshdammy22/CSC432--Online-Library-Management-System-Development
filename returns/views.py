from django.shortcuts import render
from users.models import Reader

def returns_view(request):
    search_query = request.GET.get('search', '')
    if search_query:
        readers = Reader.objects.filter(name__icontains=search_query, bags__isnull=False).distinct()
    else:
        readers = Reader.objects.filter(bags__isnull=False).distinct()
    
    return render(request, 'returns/returns.html', {'readers': readers})
