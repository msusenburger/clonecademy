# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-09-06 10:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('learning_base', '0011_auto_20170902_2027'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profile',
            options={'ordering': ('ranking',)},
        ),
        migrations.AddField(
            model_name='profile',
            name='ranking',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='try',
            name='quiz_question',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='learning_base.QuizQuestion'),
        ),
        migrations.AlterField(
            model_name='course',
            name='description',
            field=models.CharField(blank=True, default='', max_length=144, null=True),
        ),
    ]
