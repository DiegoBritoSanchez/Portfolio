# Generated by Django 4.2.17 on 2024-12-27 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('technology', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='projects/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]