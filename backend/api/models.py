from django.db import models

# Create your models here.
class product(models.Model):
    id = models.TextField(null=True, blank=True)
    productName = models.TextField(null=True, blank=True)
    productPrice = models.TextField(null=True, blank=True)
    productDescriptio = models.TextField(null=True, blank=True)


    def __str__(self):
        return self.body[0:50]