from django.conf.urls import url 
from . import views
 
urlpatterns = [
    url(r'^drinks/(?P<id>[0-9]+)$', views.drink_response),
    url(r'^drinks', views.drink_response_all),
    url(r'^pizza/(?P<item_id>[0-9]+)$', views.get_pizza_by_id),
    url(r'^pizza', views.get_all_pizzas),
    url(r'^salads/(?P<id>[0-9]+)$', views.salad_response),
    url(r'^salads', views.salad_response_all),
    url(r'', views.test_response)
]