@echo off
pip install -r requirements.txt
cd core
python manage.py makemigrations
python manage.py migrate
 