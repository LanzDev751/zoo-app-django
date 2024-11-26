from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import get_all_habitats, habitat_details, create_new_habitat, get_all_especies, especie_details

# Configurar un router para las rutas automáticas
router = DefaultRouter()


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('habitats/', get_all_habitats),
    path('habitats/create/', create_new_habitat, name='create_new_habitat'),
    path('habitats/<int:habitat_id>/', habitat_details, name='habitat_details'),
    path('especies/', get_all_especies),
    path('especies/<int:especie_id>/', especie_details, name='especie_details')
]