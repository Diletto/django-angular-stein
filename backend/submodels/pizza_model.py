from djongo import models


class PitsaItem(models.Model):

    id = models.ObjectIdField()
    name = models.CharField(max_length=50)
    ingridients = models.CharField(max_length=50)
    img = models.CharField(max_length=50)
    weight = models.IntegerField()
    measure = models.CharField(max_length=50)
    price = models.IntegerField()

    class Meta:
        abstract = True


class PitsaClass(models.Model):

    itemClass = models.CharField(max_length=50)
    
    items = models.ArrayField(
        model_container=PitsaItem
    )

    class Meta:
        db_table = 'pitsa'