from djongo import models


class SaladItem(models.Model):

    id = models.ObjectIdField()
    name = models.CharField(max_length=50)
    ingridients = models.CharField(max_length=50)
    img = models.CharField(max_length=50)
    weight = models.IntegerField()
    measure = models.CharField(max_length=50)
    price = models.IntegerField()

    class Meta:
        abstract = True


class SaladClass(models.Model):

    itemClass = models.CharField(max_length=50)
    
    items = models.ArrayField(
        model_container=SaladItem
    )

    class Meta:
        db_table = 'salads'