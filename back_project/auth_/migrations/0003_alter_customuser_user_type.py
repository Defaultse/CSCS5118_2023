# Generated by Django 3.2.12 on 2023-12-17 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_', '0002_auto_20231217_1708'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(choices=[('customer', 'Customer'), ('seller', 'Seller')], default='', max_length=10, verbose_name='usertype'),
        ),
    ]