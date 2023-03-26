from django.contrib import admin
from account.models import User
from account.models import OrganisationManager, Org
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserModelAdmin(BaseUserAdmin):
  # The fields to be used in displaying the User model.
  # These override the definitions on the base UserModelAdmin
  # that reference specific fields on auth.User.
  list_display = ('id', 'email', 'firstName', 'lastName','age','gender','phoneNumber', 'is_admin')
  list_filter = ('is_admin',)
  fieldsets = (
      ('User Credentials', {'fields': ('email', 'password')}),
      ('Personal info', {'fields': ('firstName', 'lastName', 'age', 'gender', 'phoneNumber')}),
      ('Permissions', {'fields': ('is_admin',)}),
  )
  # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
  # overrides get_fieldsets to use this attribute when creating a user.
  add_fieldsets = (
      (None, {
          'classes': ('wide',),
          'fields': ('email', 'firstName', 'lastName', 'age', 'gender','phoneNumber', 'password1', 'password2'),
      }),
  )
  search_fields = ('email',)
  ordering = ('email', 'id')
  filter_horizontal = ()

class OrganisationModelAdmin(BaseUserAdmin):
        # The fields to be used in displaying the User model.
        # These override the definitions on the base UserModelAdmin
        # that reference specific fields on auth.User.
    list_display = ('id', 'name', 'email', 'phoneNumber',
                        'address')
    
       # add_fieldsets is not a standard ModelAdmin attribute. UserModelAdmin
       # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name', 'email', 'phoneNumber', 'address',),
        }),
    )
    search_fields = ('email',)
    ordering = ('id', 'name')
    list_filter = ('email',)
    filter_horizontal = ()



# Now register the new UserModelAdmin...
admin.site.register(User, UserModelAdmin)
admin.site.register(Org, OrganisationModelAdmin)