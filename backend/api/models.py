from django.db import models

# Create your models here.
class Product(models.Model):
    productImages = models.CharField(max_length=255)
    productName = models.CharField(max_length=255)
    productPrice = models.IntegerField()
    productDescription = models.CharField(max_length=255)


    