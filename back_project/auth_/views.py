# auth_/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_jwt.settings import api_settings
from rest_framework.exceptions import APIException
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, viewsets, generics
from .serializers import *

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class CustomUserTokenObtainView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class GetUserDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        user_data = {
            'id': user.id,
            'email': user.email,
            'username': user.username
        }
        return Response(user_data)