# Generated by Django 3.1.6 on 2021-02-23 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Sequnces',
            fields=[
                ('sequence_id', models.AutoField(primary_key=True, serialize=False)),
                ('sequence', models.CharField(blank=True, max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='createdDate')),
                ('result', models.CharField(blank=True, max_length=1000)),
            ],
        ),
    ]
