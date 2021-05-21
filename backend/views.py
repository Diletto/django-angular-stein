from .models import Drink
from django.http import JsonResponse
from .serializers import DrinkSerializer
import json


def test_response(request):
    return JsonResponse({"status": "ok"}, safe=False, json_dumps_params={'ensure_ascii': False})


def drink_response_all(request):
    try:
        data = Drink.objects.filter()
    except Drink.DoesNotExist:
        return JsonResponse({'message': 'The tutorial does not exist'})
    result = []
    for item in data:
        a = DrinkSerializer(item).data
        a['items'] = json.dumps(json.loads(a['items']), ensure_ascii=False)
        result.append(a)
    return JsonResponse({'items': result}, safe=False, json_dumps_params={'ensure_ascii': False})


def drink_response(request, id):
    try:
        data = Drink.objects.filter()
    except Drink.DoesNotExist:
        return JsonResponse({'message': 'The tutorial does not exist'})
    result = None
    for item in data:
        a = DrinkSerializer(item).data
        a['items'] = json.dumps(json.loads(a['items']), ensure_ascii=False)
        for b in json.loads(a['items']):
            if b['id'] == id:
                result = b
    return JsonResponse(result, safe=False, json_dumps_params={'ensure_ascii': False})
