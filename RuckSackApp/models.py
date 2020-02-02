from django.db import models

# specifying choices

CURRENCY_CHOICES = (
    ("$", "$"),
)


class Itinerary(models.Model):
    title = models.CharField(max_length=50)
    shortDescription = models.CharField(max_length=160)
    days = models.IntegerField()
    budget = models.IntegerField()
    currency = models.CharField(max_length=1, choices=CURRENCY_CHOICES, default="$")
    locationKeywords = models.CharField(max_length=500)

## End Itinerary Class



class LocationBlock(models.Model):

    lbCity = models.CharField(max_length=50)
    lbDays = models.IntegerField()
    lbCurrency = models.CharField(max_length=1, choices=CURRENCY_CHOICES, default="$")
    lbForeignKey = models.ForeignKey(Itinerary, default=None, on_delete=models.PROTECT)

## End LocationBlock Class
