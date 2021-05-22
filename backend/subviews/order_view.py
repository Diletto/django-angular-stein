from ..serializers import OrderSerializer
from ..models import Order
from . import drinks_view, pizza_view, salad_view
from django.http import JsonResponse
import json

def get_item_info_by_type(item_type, id):
    if item_type == 'pizza':
        result = json.loads(pizza_view.get_pizza_by_id(request=None, item_id=id).content)
    elif item_type == 'drink':
        result = json.loads(drinks_view.drink_response(request=None, id=id).content)
    elif item_type == 'salad':
        result = json.loads(salad_view.salad_response(request=None, id=id).content)

    return result


def get_all_orders():

    try: 
        orders_data = Order.objects.filter()
    except Order.DoesNotExist: 
        return JsonResponse({'message': 'No such orders'})

    response = []

    for order in orders_data:
        serialized_order = OrderSerializer(order).data
        serialized_goods_list = json.loads(serialized_order['goods'])

        goods_list = []

        for item in serialized_goods_list:
            goods_list.append(get_item_info_by_type(item_type=item['itemType'], id=item['item_id']))

        response_order = serialized_order
        response_order['goods'] = goods_list

        response.append(serialized_order)

    return JsonResponse({'items' : response}, safe=False, json_dumps_params={'ensure_ascii': False})


def get_order_by_id(request, id):
    try: 
        order_data = Order.objects.get(_id=int(id))
    except Order.DoesNotExist: 
        return JsonResponse({'message': 'No such order'})

    serialized_order = OrderSerializer(order_data).data
    serialized_goods_list = json.loads(serialized_order['goods'])

    goods_list = []

    for item in serialized_goods_list:
        goods_list.append(get_item_info_by_type(item_type=item['itemType'], id=item['item_id']))

    response_order = serialized_order
    response_order['goods'] = goods_list

    return JsonResponse(response_order, safe=False, json_dumps_params={'ensure_ascii': False})


def post_order(request):
    order = OrderSerializer(data=json.loads(request.body))
    if order.is_valid():
        order.save()
    else:
        return JsonResponse({'message':'saving error'})

    return JsonResponse({'message':'ok'})


def orders_request(request):

    if request.method == "GET":
        return get_all_orders()
    elif request.method == "POST":
        return post_order(request)