from django.shortcuts import render, redirect, get_object_or_404, redirect
from .models import Reader
from .forms import ReaderForm
from django.views.decorators.http import require_POST


def reader_manage(request):
    if request.method == 'POST':
        form = ReaderForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('reader_manage')  
    else:
        form = ReaderForm()
    
    readers = Reader.objects.all()  
    return render(request, 'users/reader_manage.html', {'form': form, 'readers': readers})

@require_POST
def toggle_active(request, pk):
    reader = get_object_or_404(Reader, pk=pk)
    reader.is_active = not reader.is_active
    reader.save()
    return redirect('reader_list')  # Adjust the redirect to your readers list view name
