# Generated by Django 5.0.6 on 2024-07-28 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('author', models.CharField(max_length=100)),
                ('isbn', models.CharField(max_length=13)),
                ('publication_date', models.DateField()),
                ('genre', models.CharField(max_length=100)),
                ('copies_available', models.IntegerField()),
            ],
        ),
    ]
