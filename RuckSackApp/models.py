from django.db import models

# Create your models here.

class Itinerary(models.Model):

    title = models.CharField(max_length=50)
    shortDescription = models.CharField(max_length=160)
    days = models.IntegerField(max_length=3)
    budget = models.IntegerField(max_length=7)
    currency = models.CharField(max_length=1, choices=models.Currencies.choices, default=models.Currencies.US)
    locationKeywords = models.CharField(max_length=500)

## End Itinerary Class


class Currencies(models.TextChoices):
    US = '$'

## End Currencies Class


class LocationBlock(models.Model):

    class Currencies(models.TextChoices):
        US = '$'

    lbCity = models.CharField(max_length=50)
    lbDays = models.IntegerField(max_length=2)
    lbCurrency = models.CharField(max_length=1, choices=models.Currencies.choices, default=models.Currencies.US)
    lbForeignKey = models.ForeignKey(Itinerary)

## End LocationBlock Class
