# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-02 20:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learning_base', '0009_auto_20170901_1515'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quizquestion',
            name='image',
            field=models.TextField(blank=True, default='', help_text='The image which is shown in this quiz'),
        ),
    ]