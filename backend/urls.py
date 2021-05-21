from django.conf.urls import url 
from . import views
 
urlpatterns = [
    url(r'^drinks/(?P<id>[0-9]+)$', views.drink_response),
    url(r'^drinks', views.drink_response_all),
    url(r'', views.test_response)
]