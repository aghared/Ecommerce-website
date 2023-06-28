from django.urls import path
from . import views


urlpatterns = [
    path("ecomms/", views.ecomms, name="ecomms"),
]