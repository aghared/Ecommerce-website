from rest_framework import serializers
from api.models import Product, User, Cart

class Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__' #includes all of the data for the products

class CartSerializer(serializers.ModelSerializer):
    product = Serializer(read_only=True) #accesses the product serializer, since we won't be editing the product hereits read_only=True
    class Meta:
        model = Cart
        fields = ['id', 'product', 'quantity']


class UserSerializer(serializers.ModelSerializer):
    cart = CartSerializer(source='cart_set',many=True)  #we use "cart_set" so that we access the cart when looking at user data
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'cart']