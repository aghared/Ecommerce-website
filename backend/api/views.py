from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader 
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from api.models import Product, User, Cart
from .serializers import Serializer, UserSerializer, CartSerializer



# Create your views here.

def product(request):
    template = loader.get_template('myfirst.html')
    return HttpResponse(template.render())

@api_view(['GET'])
def getRoute(request):
    routes = [

    ]
    return Response(routes)
@api_view(['GET'])
def getProducts(request):
    data = Product.objects.all()
    serializer = Serializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    data = Product.objects.get(id=pk)
    serializer = Serializer(data, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def addData(request):
    serializer = Serializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET'])
def UserViewSet(request):
    data = User.objects.all()
    serializer_class = UserSerializer(data, many=True )
    return Response(serializer_class.data)
@api_view(['GET'])
def UserView(request, pk):
    data = User.objects.get(id=pk)
    serializer_class = UserSerializer(data, many=False )
    return Response(serializer_class.data)
@api_view(['GET'])
def CartViewSet(request):
    data = Cart.objects.all()
    serializer_class = CartSerializer(data, many=True )
    return Response(serializer_class.data)
@api_view(['GET'])
def CartView(request, pk):
    data = Cart.objects.get(id=pk)
    serializer_class = CartSerializer(data, many=False )
    return Response(serializer_class.data)
@api_view(['POST'])
def addCart(request,user_id, product_id):
    cart = Cart(user_id=user_id, product_id= product_id, quantity= 3)
    cart.save() 
    
@api_view(['DELETE'])
def deleteCart(request, pk):
    data = Cart.objects.get(id=pk)
    data.delete()
    return Response("cart deleted")

#class UserViewSet(viewsets.ModelViewSet):
#    queryset = User.objects.all()
#    serializer_class = UserSerializer

#class CartViewSet(viewsets.ModelViewSet):
#    queryset = Cart.objects.all()
#    serializer_class = CartSerializer

#    def destroy(self, request, *args, **kwargs):
#3        cart_item = self.get_object()
#        cart_item.delete()
#        return Response(status=status.HTTP_204_NO_CONTENT)