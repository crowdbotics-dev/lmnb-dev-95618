# Generated by Django 2.2.28 on 2023-06-28 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_bvgh'),
    ]

    operations = [
        migrations.AddField(
            model_name='bvgh',
            name='mnbvcd',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
