from django import forms
from .models import Bag

class BagForm(forms.ModelForm):
    class Meta:
        model = Bag
        fields = ['book_title', 'book_author']


class CheckoutForm(forms.Form):
    name = forms.CharField(max_length=100)
    phone_number = forms.CharField(max_length=15)
    reference_id = forms.CharField(max_length=10)