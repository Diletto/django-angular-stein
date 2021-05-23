from ..submodels.salad_model import *
from ..serializers import SaladClassSerializer
from django.http import JsonResponse
import json


def salad_response_all(request):
    try:
        all_drinks_classes = SaladClass.objects.filter()
    except SaladClass.DoesNotExist:
        return JsonResponse({'message': 'No such salads item'})

    response = []

    for salad_class in all_drinks_classes:
        serialized_class_obj = SaladClassSerializer(salad_class).data
        serialized_class_obj['items'] = json.loads(serialized_class_obj['items'])
        response.append(serialized_class_obj)

    return JsonResponse({'items': response}, safe=False, json_dumps_params={'ensure_ascii': False})


def salad_response(request, id):
    try:
        data = SaladClass.objects.filter()
    except SaladClass.DoesNotExist:
        return JsonResponse({'message': 'No such salads item'})
    response = None

    for salad_class in data:
        serialized_class_obj = SaladClassSerializer(salad_class).data
        serialized_class_obj['items'] = json.dumps(json.loads(serialized_class_obj['items']), ensure_ascii=False)
        for salad in json.loads(serialized_class_obj['items']):
            if salad['id'] == id:
                response = salad

    if not response:
        response = "No such salads item"
        return JsonResponse({"message":response}, safe=False, json_dumps_params={'ensure_ascii': False})


    return JsonResponse(response, safe=False, json_dumps_params={'ensure_ascii': False})
