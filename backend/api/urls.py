from django.urls import path
from . import views


urlpatterns = [
    path('', views.getProducts),
    path('add/', views.addData),
    path("product/", views.getProducts, name="product"),
    path('product/<str:pk>/', views.getProduct, name='product')
]