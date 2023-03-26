from django.urls import path, include, re_path
from django.views.generic import TemplateView
from .views import UserActivationView
# from .views import GetCSRFToken
# from .Test import MoodAPIView, detailsAPIView, ratingAPIView

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
    # path('csrf_cookie', GetCSRFToken.as_view()),
    # path('user_mood', MoodAPIView),
    # path('re_details', detailsAPIView),
    # path('daily_sug', ratingAPIView),
    # path(r'^admin/', admin.site.urls),
    # path(r'^auth/users/activation/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$', UserActivationView.as_view()),

]


urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
