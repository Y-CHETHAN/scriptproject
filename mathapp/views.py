from django.shortcuts import render

# Create your views here.

def operations(request):
    context = {}
    return render(request,'mathapp/operations.html',context)