from django.http import JsonResponse
from .subviews import *


def test_response(request):
    return JsonResponse({"status": "ok"}, safe=False, json_dumps_params={'ensure_ascii': False})
