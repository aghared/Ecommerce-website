from django.urls import include, path
from . import views
from .views import CartViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'cart', CartViewSet)

urlpatterns = [
    path('', views.getProducts),
    path('add/', views.addData),
    path("product/", views.getProducts, name="product"),
    path('product/<str:pk>/', views.getProduct, name='product'),
    path('', include(router.urls)),
    path('api/', include(router.urls)),
]
