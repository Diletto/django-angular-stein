from ..submodels.drink_model import *
from ..serializers import DrinkSerializer
from django.http import JsonResponse
import json


def drink_response_all(request):
    try:
        all_drinks_classes = Drink.objects.filter()
    except Drink.DoesNotExist:
        return JsonResponse({'message': 'The tutorial does not exist'})

    response = []

    for drink_class in all_drinks_classes:
        serialized_class_obj = DrinkSerializer(drink_class).data
        serialized_class_obj['items'] = json.dumps(json.loads(serialized_class_obj['items']), ensure_ascii=False)
        response.append(serialized_class_obj)

    return JsonResponse({'items': response}, safe=False, json_dumps_params={'ensure_ascii': False})


def drink_response(request, id):
    try:
        data = Drink.objects.filter()
    except Drink.DoesNotExist:
        return JsonResponse({'message': 'The tutorial does not exist'})
    response = None
    for drink_class in data:
        serialized_class_obj = DrinkSerializer(drink_class).data
        serialized_class_obj['items'] = json.dumps(json.loads(serialized_class_obj['items']), ensure_ascii=False)
        for drink in json.loads(serialized_class_obj['items']):
            if drink['id'] == id:
                response = drink
    return JsonResponse(response, safe=False, json_dumps_params={'ensure_ascii': False})
