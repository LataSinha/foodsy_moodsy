from typing_extensions import Required
from django.db import models
from django.contrib.postgres.fields import ArrayField

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def email(self,email):
        return email

    def age(self, age):
        return age

    def gender(self,gender):
        return gender

#firstName, lastName,age, preference, gender, email, phoneNumber, password, re_password



# class MyModel(models.Model):
#     CUISINE_CHOICES = (
#         ('Continental', "Continental"),
#         ('Italian', "Italian"),
#         ('Indian',"Indian"),
#         ('Thai', "Thai"),
#         ('Spanish', "Thai"),
#         ('French', "French"),
#         ('Chinese', "Chinese"),
#     )
#     my_field = MultiSelectField(choices=MY_CHOICES, max_length=11)

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    firstName = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    age = models.CharField(max_length=255)
    # preference = ArrayField(models.CharField(max_length=10, blank=True),size=7)
    

    gender = models.CharField(max_length=6)
    phoneNumber = models.CharField(max_length=13)


    objects = UserAccountManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstName', 'lastName','age', 'gender', 'phoneNumber']

    def get_full_name(self):
        return self.firstName

    def get_short_name(self):
        return self.firstName
    
    def __str__(self):
        return self.email
