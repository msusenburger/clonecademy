from .models import Question
from rest_framework import serializers

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Question
        fields = ('url', 'question_text')
