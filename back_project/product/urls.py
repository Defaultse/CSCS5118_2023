from django.urls import path, include
from rest_framework import routers
# from product.views.feedbacks_view import *
# from product.views.products_view import *
from .views import *

router = routers.SimpleRouter()

urlpatterns = [
    path('create/', ProductCreateView.as_view(), name='create'),   
    path('my-list/', SellerProductListView.as_view(), name='my-list'),  
    path('all/', AllProductsListView.as_view(), name='all'),
    path('<int:product_id>/', ProductDetailView.as_view(), name='product_detail'),
 
]

urlpatterns += router.urls