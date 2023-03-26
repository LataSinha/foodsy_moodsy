from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser

#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, firstName, lastName, age, gender, phoneNumber, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          firstName=firstName,
          lastName=lastName,
          age=age,
          gender=gender,
          phoneNumber=phoneNumber,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

      

  def create_superuser(self, email, firstName, lastName,age,gender,phoneNumber, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          password=password,
          firstName=firstName,
          lastName=lastName,
          age=age,
          gender=gender,
          phoneNumber=phoneNumber,
      )
      user.is_admin = True
      user.save(using=self._db)
      return user

#  Custom User Model
class User(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  firstName = models.CharField(max_length=255)
  lastName = models.CharField(max_length=255)
  age = models.CharField(max_length=255)
  gender = models.CharField(max_length=6)
  phoneNumber = models.CharField(max_length=13)
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['firstName', 'lastName','age','gender', 'phoneNumber']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin

class OrganisationManager(BaseUserManager):
  def create_user(self, name, email, phoneNumber, address):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      

      org = self.model(
          name = name,
          phoneNumber = phoneNumber,
          address = address,
          email = email,
      )
      org.is_admin = True
      org.save(using=self._db)
      return org
  def create_superuser(self, email, name,address,phoneNumber, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          name=name,
          address=address,
          phoneNumber=phoneNumber,
      )
      user.is_admin = True
      user.save(using=self._db)
      return user


#  Custom User Model
class Org(AbstractBaseUser):
  name = models.CharField(max_length=255)
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  phoneNumber = models.CharField(max_length=13)
  address = models.CharField(max_length=255)
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
#   created_at = models.DateTimeField(auto_now_add=True)
#   updated_at = models.DateTimeField(auto_now=True)

  objects = OrganisationManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name','phoneNumber','address']

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin


  def __str__(self):
      return self.email




