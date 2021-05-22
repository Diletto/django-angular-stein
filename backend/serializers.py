from rest_framework import serializers
from .models import *


class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ('itemClass', 'items')

class PitsaClassSerializer(serializers.ModelSerializer):

    class Meta:
        model = PitsaClass
        fields = ('itemClass',
                'items')

class SaladClassSerializer(serializers.ModelSerializer):

    class Meta:
        model = SaladClass
        fields = ('itemClass',
                'items')