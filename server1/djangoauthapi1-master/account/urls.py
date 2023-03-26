from django.urls import path
from account.views import SendPasswordResetEmailView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, OrganisationRegistrationView,UserPasswordResetView, MoodAPIView, dailyRecommendation, collaborativeFiltering, dishDetails
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('org/',  OrganisationRegistrationView.as_view(), name='org'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    path('recommendedFood/', MoodAPIView.as_view()),
    path('dailySuggestions/', dailyRecommendation.as_view()),
    path('collaborativeFiltering/',collaborativeFiltering.as_view()),
    path('dishDetails/', dishDetails.as_view()),
    path('dailySuggestions/', dailyRecommendation.as_view()),

]

#localhost:8000/api/user/