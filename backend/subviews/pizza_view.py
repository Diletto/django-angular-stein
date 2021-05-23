from ..serializers import PitsaClassSerializer
from ..models import PitsaClass
from django.http import JsonResponse
import json

def get_all_pizzas(request):

    try: 
        all_pizzas_classes = PitsaClass.objects.filter()
    except PitsaClass.DoesNotExist: 
        return JsonResponse({'message': 'No such pizza items'})

    response = []

    for pizza_class in all_pizzas_classes:
        serialized_class_obj = PitsaClassSerializer(pizza_class).data
        serialized_class_obj['items'] = json.loads(serialized_class_obj['items'])
        response.append(serialized_class_obj)

    return  JsonResponse({'items' : response}, safe=False, json_dumps_params={'ensure_ascii': False})


def get_pizza_by_id(request, item_id):

    try: 
        pizza_class = PitsaClass.objects.get(items={"id" : int(item_id)})
    except PitsaClass.DoesNotExist:
        return JsonResponse({'message': 'No such pizza items'})

    response = None

    serialized_pizza_class_obj = PitsaClassSerializer(pizza_class).data
    for pizza in json.loads(serialized_pizza_class_obj['items']):
        if pizza['id'] == item_id:
            response = pizza
            break

    return  JsonResponse(response, safe=False, json_dumps_params={'ensure_ascii': False})