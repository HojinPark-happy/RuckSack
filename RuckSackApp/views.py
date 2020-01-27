from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


#
def view_home_page(request):
    return render(request, 'home_page.html')

