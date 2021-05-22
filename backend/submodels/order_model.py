from djongo import models


class GoodsItem(models.Model):
    itemType = models.CharField(max_length=50)
    item_id = models.IntegerField()

    class Meta:
        abstract = True


class Order(models.Model):
    _id = models.ObjectIdField()
    goods = models.ArrayField(model_container=GoodsItem)
    totalPrice = models.IntegerField()
    user = models.CharField(max_length=50)
    user_id = models.IntegerField()

    class Meta:
        db_table = 'orders'
