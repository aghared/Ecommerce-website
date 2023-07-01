from django.urls import include, path
from . import views
#from .views import CartViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
#router.register(r'users', views.UserViewSet)
#outer.register(r'cart', CartViewSet)

urlpatterns = [
    path('', views.getProducts),
    path('product/add/<int:user_id>/<int:product_id>/', views.addCart),
    path('users/', views.UserViewSet, name ="users"),
    path('users/<str:pk>/', views.UserView, name ="users"),
    path('cart/', views.CartViewSet, name="cart"),
    path('cart/<str:pk>/', views.CartView, name="cart"),
    path('cart/add/', views.addCart, name='cart'),
    path('cart/<str:pk>/delete/', views.deleteCart, name="cart"),
    path("product/", views.getProducts, name="product"),
    path('product/<str:pk>/', views.getProduct, name='product'),
    path('', include(router.urls)),
    path('api/', include(router.urls)),
    



]
