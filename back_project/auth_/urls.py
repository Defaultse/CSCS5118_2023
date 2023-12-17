from django.urls import path
from rest_framework import routers
from auth_ import views
from auth_.views import *
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'users', CustomUserViewSet, basename='users')

urlpatterns = [
    path('sign-in/', CustomUserTokenObtainView.as_view(), name='token_obtain_pair'),   
    path('user-details/', GetUserDetailsView.as_view(), name='user_details'),
]
