from djongo import models
from django import forms


class DrinkItem(models.Model):
    id = models.IntegerField()
    name = models.CharField(max_length=50)
    img = models.CharField(max_length=50)
    weight = models.FloatField()
    measure = models.CharField(max_length=50)
    price = models.IntegerField()

    class Meta:
        abstract = True


class DrinkItemForm(forms.ModelForm):
    class Meta:
        model = DrinkItem
        fields = (
            'id', 'name', 'img',
            'weight', 'measure', 'price'
        )
        abstract = True


class Drink(models.Model):
    _id = models.IntegerField()
    itemClass = models.CharField(max_length=50)
    items = models.ArrayField(model_container=DrinkItem, model_form_class=DrinkItemForm)

    class Meta:
        db_table = 'drinks'