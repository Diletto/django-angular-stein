from django.conf.urls import url 
from backend import views 
 
urlpatterns = [ 
    url(r'^pizza$', views.test_response)
]