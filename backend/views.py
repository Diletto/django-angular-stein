from django.shortcuts import render
from django.http import JsonResponse

def test_response(request):
    return JsonResponse({'message':"lab_1_test_message"})