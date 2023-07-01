from django.db import models

# Create your models here.
class Product(models.Model):
    productImages = models.CharField(max_length=255)
    productName = models.CharField(max_length=255)
    productPrice = models.IntegerField()
    productDescription = models.CharField(max_length=255)

class User(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    #class Meta:
    #    ordering = ['id'] #we made it ordering so that we can find where to delete when the button is pressed